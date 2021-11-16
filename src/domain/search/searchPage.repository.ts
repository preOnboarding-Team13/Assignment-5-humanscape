import { today } from "src/global/util/date";
import {
	afterDecode,
	afterEncode,
	beforeDecode,
	beforeEncode
} from "src/global/util/encryption";
import { EntityRepository, getConnection, Repository } from "typeorm";
import { UpdatedTrialBundles } from "../entities/updatedTrialBundles.entity";

// interface PagingResult<Entity> {
// 	count: number;
// 	data: Entity[];
// 	cursor: Cursor;
// }
// interface Cursor {
// 	beforeCursor: string | null;
// 	afterCursor: string | null;
// }

@EntityRepository(UpdatedTrialBundles)
export class SearchPageRepository extends Repository<UpdatedTrialBundles> {
	async trialsList(cursor: string, pageSize: number) {
		const queryRunner = getConnection().createQueryRunner();

		try {
			await queryRunner.startTransaction();

			// 총 데이터 수 쿼리
			const count: number = (
				await this.query(`
                    SELECT count(value) as count
                    FROM updatedTrialBundles, json_each(weekly)
                    WHERE DATE(createdAt) = date('now')`)
			)[0].count;

			// 페이징 데이터 쿼리
			let query = `
                SELECT value           
                FROM updatedTrialBundles, json_each(weekly)
				WHERE DATE(createdAt) = date('now')`;

			if (cursor != undefined) {
				if (cursor.includes("after")) {
					query =
						query +
						`AND json_extract(json_each.value, '$.trial_id') < '${afterDecode(
							cursor
						)}'`;
				}
			}

			query =
				query +
				`ORDER BY json_extract(json_each.value, '$.trial_id') DESC 
                LIMIT ${pageSize}`;

			if (cursor != undefined) {
				if (cursor.includes("before")) {
					const subquery = `
                        SELECT value
				        FROM updatedTrialBundles, json_each(weekly)
				        WHERE DATE(createdAt) = date('now')
                        AND json_extract(json_each.value, '$.trial_id') > '${beforeDecode(
							cursor
						)}'
                        ORDER BY json_extract(json_each.value, '$.trial_id') ASC
                        LIMIT ${pageSize}`;

					query = `
                        SELECT sub.value
                        FROM (${subquery}) as sub 
                        ORDER BY json_extract(sub.value, '$.trial_id') DESC`;
				}
			}

			const queryResult = await this.query(query);
			const pageData = queryResult.map((element) =>
				JSON.parse(element.value)
			);

			// 해당 데이터 이후의 값이 존재하는가?
			const afterExists: number = (
				await this.query(`
                    SELECT EXISTS (
                        SELECT value
                        FROM updatedTrialBundles, json_each(weekly)
                        WHERE json_extract(json_each.value, '$.trial_id') <'${
							pageData[pageData.length - 1].trial_id
						}' 
                        AND DATE(createdAt) = date('now')) AS success`)
			)[0].success;

			// 해당 데이터 이전의 값이 존재하는가?
			const beforeExists: number = (
				await this.query(`
                    SELECT EXISTS (
                        SELECT value
                        FROM updatedTrialBundles, json_each(weekly)
                        WHERE json_extract(json_each.value, '$.trial_id') >'${pageData[0].trial_id}'
                        AND DATE(createdAt) = date('now')) AS success`)
			)[0].success;

			// 커서 해독
			const curorReturn = {
				afterCursor:
					afterExists === 1
						? afterEncode(pageData[pageData.length - 1].trial_id)
						: null,
				beforeCursor:
					beforeExists === 1
						? beforeEncode(pageData[0].trial_id)
						: null
			};

			await queryRunner.commitTransaction();

			const pageingResult = {
				count: count,
				data: pageData,
				cursor: curorReturn
			};

			return pageingResult;
		} catch (err) {
			queryRunner.rollbackTransaction();
		} finally {
			queryRunner.release();
		}
	}
}
