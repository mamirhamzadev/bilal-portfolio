(function ($) {
	"use strict";

	// Parallax scroll effect js
	document.querySelectorAll(".move-with-cursor").forEach(a => {
		document.addEventListener("mousemove", function (e) {
			var t = e.clientX,
				e = e.clientY;
			a.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)", a.style.transform = `translate(${.01 * t}px, ${.01 * e}px) rotate(${.01 * (t + e)}deg)`
		})
	}),

		// Magnific popup js
		$(".parent-container").magnificPopup({
			delegate: ".gallery-popup",
			type: "image",
			gallery: {
				enabled: true,
			},
		});

	// Article publications slider js
	$(".article-publications-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},]
	});

})(jQuery);
