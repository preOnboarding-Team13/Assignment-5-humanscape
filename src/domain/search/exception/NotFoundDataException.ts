import { HttpCode, HttpException, HttpStatus } from "@nestjs/common";
import { ErrorCode } from "src/global/common/ErrorCode";

export class NotFoundDataException extends HttpException {
	constructor() {
		super("해당 데이터가 존재하지 않습니다.", HttpStatus.NOT_FOUND);
	}
}
