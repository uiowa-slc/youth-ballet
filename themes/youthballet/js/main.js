$(document).ready(function() {

	// add js class to body if javascript enabled
	$('html').removeClass('no-js');

	// $('.main-nav').setup_navigation();

	// Shifter
	$.shifter({
		maxWidth: "768px"
	});

	// Naver
	// $(".naver").naver();
	$(".sec-nav").navigation({
		maxWidth: "979px"
	});

	/* Photo Gallery */
	$('.photo-gallery').flickity({
		wrapAround: true,
		imagesLoaded: true,
		lazyLoad: true,
		lazyLoad: 2,
		initialIndex: 1,
		selectedAttraction: 0.01,
		friction: 0.15,
		pageDots: false,
		arrowShape: {
			x0: 30,
			x1: 60, y1: 30,
			x2: 65, y2: 30,
			x3: 50
		}
	});

	/* Events List */
	$('.interior-events').flickity({
		selectedAttraction: 0.01,
		friction: 0.15,
		pageDots: false,
		contain: true,
		arrowShape: {
			x0: 30,
			x1: 65, y1: 25,
			x2: 65, y2: 25,
			x3: 65
		}
	});

	/* Testimonials */
	// $('.testimonials').flickity({
	// 	wrapAround: true,
	// 	pageDots: false,
	// 	prevNextButtons: false,
	// 	autoPlay: true,
	// 	autoPlay: 8000
	// });



});
