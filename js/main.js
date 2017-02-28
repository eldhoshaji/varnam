function menuToggle()
{
	var windowWidth = $(window).width();

	if(windowWidth > 767 ){
		$(window).on('scroll', function(){
			if( $(window).scrollTop()>405 ){
				$('.main-nav').addClass('fixed-menu animated slideInDown');
			} else {
				$('.main-nav').removeClass('fixed-menu animated slideInDown');
			}
		});
	}else{

		$('.main-nav').addClass('fixed-menu animated slideInDown');

	}
}
jQuery(function($)
{
	'use strict',
	menuToggle();
	// Carousel Auto Slide Off
	$('#event-carousel, #twitter-feed, #sponsor-carousel ').carousel({
		interval: false
	});
	// Contact form validation
	var form = $('.contact-form');
	$( window ).resize(function() {
		menuToggle();
	});

	$('.main-nav ul').onePageNav({
		currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 900,
	    scrollOffset: 0,
	    scrollThreshold: 0.3,
	    filter: ':not(.no-scroll)'
	});

});
