// 날짜 객체 받아서 문자열로 리턴하는 함수
function getDateStr(myDate) {
	return (
		myDate.getFullYear() +
		"-" +
		(myDate.getMonth() + 1) +
		"-" +
		myDate.getDate()
	);
}

// 오늘 날짜를 문자열로 반환
export function today() {
	const d = new Date();
	return getDateStr(d);
}

// 오늘로부터 1주일전 날짜 반환
export function lastWeek() {
	const d = new Date();
	const dayOfMonth = d.getDate();
	d.setDate(dayOfMonth - 7);
	return getDateStr(d);
}
