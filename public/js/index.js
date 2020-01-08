// window.setInterval(콜백함수, 인터벌시간);
/*
setInterval(timer, 3000);
function timer(){
	//console.log(new Date());
}

console.log(		$(".banner").eq(0)		);
console.log(		$(".banner").eq(1)		);
console.log(		$(".banner").eq(2)		);
*/

var now = 2;
setInterval(bannerToggle, 3000);
function bannerToggle() {
	if(now == 2) now = 0;
	else now++;
	$(".banner").hide();
	$(".banner").eq(now).show();
}