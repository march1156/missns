// header_main_textのアニメーション
var scrollAnimationElm1 = document.getElementsByClassName('header_main');
window.onload = function() {
		scrollAnimationElm1[0].classList.add('show');
}

var scrollAnimationElm1 = document.getElementsByClassName('header_main');
window.onload = function() {
		scrollAnimationElm1[0].classList.add('show');
}

//mainタグでのアニメーション
var scrollAnimationElm2 = document.querySelectorAll('.main_contents');
var scrollAnimationFunc = function() {
	for(var i = 0; i < scrollAnimationElm2.length; i++) {
		var triggerMargin = 350;
		if (window.innerHeight > scrollAnimationElm2[i].getBoundingClientRect().top + triggerMargin) {
			scrollAnimationElm2[i].classList.add('show');
		}
	}
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);