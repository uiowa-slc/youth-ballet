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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG5cdC8vIGFkZCBqcyBjbGFzcyB0byBib2R5IGlmIGphdmFzY3JpcHQgZW5hYmxlZFxuXHQkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ25vLWpzJyk7XG5cblx0LyogUGhvdG8gR2FsbGVyeSAqL1xuXHQkKCcucGhvdG9nYWxsZXJ5LWZsaWNraXR5JykuZmxpY2tpdHkoe1xuXHRcdHdyYXBBcm91bmQ6IHRydWUsXG5cdFx0aW1hZ2VzTG9hZGVkOiB0cnVlLFxuXHRcdGxhenlMb2FkOiB0cnVlLFxuXHRcdGxhenlMb2FkOiAyLFxuXHRcdHNlbGVjdGVkQXR0cmFjdGlvbjogMC4wMSxcblx0XHRmcmljdGlvbjogMC4xNSxcblx0XHRwYWdlRG90czogZmFsc2UsXG5cdFx0YXJyb3dTaGFwZToge1xuXHRcdFx0eDA6IDMwLFxuXHRcdFx0eDE6IDYwLCB5MTogMzAsXG5cdFx0XHR4MjogNjUsIHkyOiAzMCxcblx0XHRcdHgzOiA1MFxuXHRcdH1cblx0fSk7XG5cblx0LyogRXZlbnRzIExpc3QgKi9cblx0JCgnLmludGVyaW9yLWZsaWNraXR5JykuZmxpY2tpdHkoe1xuXHRcdHNlbGVjdGVkQXR0cmFjdGlvbjogMC4wMSxcblx0XHRjZWxsQWxpZ246ICdsZWZ0Jyxcblx0XHRmcmljdGlvbjogMC4xNSxcblx0XHRwYWdlRG90czogZmFsc2UsXG5cdFx0Y29udGFpbjogdHJ1ZSxcblx0XHRhcnJvd1NoYXBlOiB7XG5cdFx0XHR4MDogMzAsXG5cdFx0XHR4MTogNjUsIHkxOiAyNSxcblx0XHRcdHgyOiA2NSwgeTI6IDI1LFxuXHRcdFx0eDM6IDY1XG5cdFx0fVxuXHR9KTtcblxuXG5cdC8vb3Blbi9jbG9zZSBwcmltYXJ5IG5hdmlnYXRpb25cblx0JCgnLmNkLXByaW1hcnktbmF2LXRyaWdnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdCQoJy5jZC1tZW51LWljb24nKS50b2dnbGVDbGFzcygnaXMtY2xpY2tlZCcpO1xuXHRcdCQoJy5jZC1oZWFkZXInKS50b2dnbGVDbGFzcygnbWVudS1pcy1vcGVuJyk7XG5cblx0XHQvL2luIGZpcmVmb3ggdHJhbnNpdGlvbnMgYnJlYWsgd2hlbiBwYXJlbnQgb3ZlcmZsb3cgaXMgY2hhbmdlZCwgc28gd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgZW5kIG9mIHRoZSB0cmFzaXRpb24gdG8gZ2l2ZSB0aGUgYm9keSBhbiBvdmVyZmxvdyBoaWRkZW5cblx0XHRpZiggJCgnLmNkLXByaW1hcnktbmF2JykuaGFzQ2xhc3MoJ2lzLXZpc2libGUnKSApIHtcblx0XHRcdCQoJy5jZC1wcmltYXJ5LW5hdicpLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJykub25lKCd3ZWJraXRUcmFuc2l0aW9uRW5kIG90cmFuc2l0aW9uZW5kIG9UcmFuc2l0aW9uRW5kIG1zVHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kJyxmdW5jdGlvbigpe1xuXHRcdFx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93LWhpZGRlbicpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoJy5jZC1wcmltYXJ5LW5hdicpLmFkZENsYXNzKCdpcy12aXNpYmxlJykub25lKCd3ZWJraXRUcmFuc2l0aW9uRW5kIG90cmFuc2l0aW9uZW5kIG9UcmFuc2l0aW9uRW5kIG1zVHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kJyxmdW5jdGlvbigpe1xuXHRcdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ292ZXJmbG93LWhpZGRlbicpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcblxuXG5cbn0pO1xuIl0sImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
