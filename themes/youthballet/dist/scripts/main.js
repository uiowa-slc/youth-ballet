$(document).ready(function() {

	// add js class to body if javascript enabled
	$('html').removeClass('no-js');

	/* Photo Gallery */
	$('.photogallery-flickity').flickity({
		wrapAround: true,
		imagesLoaded: true,
		lazyLoad: true,
		lazyLoad: 2,
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
	$('.interior-flickity').flickity({
		selectedAttraction: 0.01,
		cellAlign: 'left',
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


	//open/close primary navigation
	$('.cd-primary-nav-trigger').on('click', function(){
		$('.cd-menu-icon').toggleClass('is-clicked');
		$('.cd-header').toggleClass('menu-is-open');

		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
			$('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});
		}
	});



});
