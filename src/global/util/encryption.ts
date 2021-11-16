// cursor 암호화
export function cursorEncode(cursor: string) {
	const encode = Buffer.from(cursor, "utf-8").toString("base64");
	console.log(encode);
	return encode;
}

// cursor 복호화
export function cursorDecode(cursor: string) {
	const decode = Buffer.from(cursor, "base64").toString("utf-8");
	console.log(decode);
	return decode;
}
