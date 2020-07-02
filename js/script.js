let ibg = document.getElementsByClassName('ibg');
// Ibg Function
(() => {
	for (const item of ibg) {
		if(item.querySelectorAll("img")[0].getAttribute("data-src").length > 0) {
			item.style.backgroundImage =
				'url("' + item.querySelectorAll("img")[0].getAttribute("data-src") + '")';
		} else if(item.querySelectorAll("picture")[0].length > 0) {
			item.style.backgroundImage =
				'url("' + item.querySelectorAll("source")[0].getAttribute("srcset") + '")';
		} else if(item.querySelectorAll("img")[0].length > 0) {
			item.style.backgroundImage =
				'url("' + item.querySelectorAll("img")[0].getAttribute("src") + '")';
		}
	}
})();

$(".burger-menu").click(function () {
	$(".burger-menu").toggleClass("active");
	$(".nav__menu").toggleClass("active");
	$("body").toggleClass("lock");
});

$("#logIn").click(function () {
	$(".modal-register").fadeIn("300").css("display", "flex");
	$(".form-login").delay("200").addClass("showed");
	$("body").addClass("lock");
});

$("#signUp").click(function () {
	$(".modal-register").fadeIn("300").css("display", "flex");
	$(".form-sign-up").delay("200").addClass("showed");
	$("body").addClass("lock");
});

$(".modal-close").click(function () {
	$(".form-login, .form-sign-up").removeClass("showed");
	$(".modal-register").fadeOut("300");
	if (window.matchMedia('(min-width: 1024px)').matches) {
		$("body").removeClass("lock");
	}
});

$(document).ready(function () {
	$(".blog__list").slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		arrows: false,
		draggable: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
});