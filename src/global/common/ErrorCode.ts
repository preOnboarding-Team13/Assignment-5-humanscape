import { HttpStatus } from "@nestjs/common";

export class ErrorCode {
	static readonly BadRequest = new ErrorCode(
		HttpStatus.BAD_REQUEST,
		"잘못된 접근입니다."
	);
	static readonly NotFound = new ErrorCode(
		HttpStatus.NOT_FOUND,
		"요청받은 리소스를 찾을 수 없습니다."
	);
	static readonly NewError = new ErrorCode(
		HttpStatus.NOT_FOUND,
		"예상치 못한 에러입니다."
	);
	constructor(
		private readonly statusCode: number,
		public readonly message: string
	) {}

	get StatusCode(): number {
		return this.statusCode;
	}

	get Message(): string {
		return this.message;
	}
}
