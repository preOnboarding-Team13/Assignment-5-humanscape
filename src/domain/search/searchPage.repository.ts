import { today } from "src/global/util/date";
import {
	afterDecode,
	afterEncode,
	beforeDecode,
	beforeEncode
} from "src/global/util/encryption";
import { EntityRepository, getConnection, Repository } from "typeorm";
import { UpdatedTrialBundles } from "../entities/updateBundles.entity";

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
			queryRunner.startTransaction();

			const count = (
				await this.query(`select count(value) as count
		from updatedTrialBundles, json_each(weekly)
		where DATE(createdAt) = date('now')`)
			)[0].count;

			let query = `select value
				from updatedTrialBundles, json_each(weekly)
				where DATE(createdAt) = date('now')`;

			if (cursor != undefined) {
				if (cursor.includes("after")) {
					query =
						query +
						`and json_extract(json_each.value, '$.trial_id') < '${afterDecode(
							cursor
						)}'`;
				}
			}

			query =
				query +
				`order by json_extract(json_each.value, '$.trial_id') desc limit ${pageSize}`;

			if (cursor != undefined) {
				if (cursor.includes("before")) {
					const subquery = `select value
				from updatedTrialBundles, json_each(weekly)
				where DATE(createdAt) = date('now')
                and json_extract(json_each.value, '$.trial_id') > '${beforeDecode(
					cursor
				)}'
                order by json_extract(json_each.value, '$.trial_id') asc limit ${pageSize}`;

					query = `select sub.value 
                from (${subquery}) as sub 
                order by json_extract(sub.value, '$.trial_id') desc`;
				}
			}

			const result = await this.query(query);
			const response = result.map((element) => JSON.parse(element.value));

			const afterDataYn = (
				await this.query(`select EXISTS (
		select value
		from updatedTrialBundles, json_each(weekly)
		where json_extract(json_each.value, '$.trial_id') <'${
			response[response.length - 1].trial_id
		}' and DATE(createdAt) = date('now')) as success`)
			)[0].success;

			const beforeDataYn = (
				await this.query(`select EXISTS (
		select value
		from updatedTrialBundles, json_each(weekly)
		where json_extract(json_each.value, '$.trial_id') >'${response[0].trial_id}'
		and DATE(createdAt) = date('now')) as success`)
			)[0].success;

			const cur = {
				afterCursor: null,
				beforeCursor: null
			};

			if (afterDataYn === 1) {
				cur.afterCursor = afterEncode(
					response[response.length - 1].trial_id
				);
			}
			if (beforeDataYn === 1) {
				cur.beforeCursor = beforeEncode(response[0].trial_id);
			}

			const pageingResult = {
				count: count,
				data: response,
				cursor: cur
			};
			return pageingResult;
		} catch (err) {
			queryRunner.rollbackTransaction();
		} finally {
			queryRunner.release();
		}
	}
}
