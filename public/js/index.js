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
	//now = (now == 2) ? 0 : now + 1;
	if(now == 2) now = 0;
	else now++;
	$(".banner").hide();
	$(".banner").eq(now).show();
}

var now2 = 2;
setInterval(bannerFade, 3000);
function bannerFade() {
	now2 = (now2 == 2) ? 0 : now2 + 1;
	$(".banner2").stop().fadeOut(1000);
	$(".banner2").eq(now2).stop().fadeIn(1000);
}