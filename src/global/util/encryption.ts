// cursor 암호화
export function afterEncode(cursor: string) {
	const encode = "after" + Buffer.from(cursor, "utf-8").toString("base64");
	return encode;
}

export function beforeEncode(cursor: string) {
	const encode = "before" + Buffer.from(cursor, "utf-8").toString("base64");
	return encode;
}

// cursor 복호화
export function afterDecode(cursor: string) {
	const decode = Buffer.from(cursor.replace("after", ""), "base64").toString(
		"utf-8"
	);
	return decode;
}

export function beforeDecode(cursor: string) {
	const decode = Buffer.from(cursor.replace("before", ""), "base64").toString(
		"utf-8"
	);
	return decode;
}
