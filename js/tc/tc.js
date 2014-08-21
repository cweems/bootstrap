'use strict';

var scrollLocked = false;

$(document).ready(function() {
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
	    if (scroll >= 3) {
	        $('.navbar').addClass('navbar-active');
	        scrollLocked = true;
	        console.log("scroll locked");
	    }
	    else {
	    	$('.navbar').removeClass('navbar-active');
	    	scrollLocked = false;
	    	console.log("scroll unlocked");
	    }
	});
	$('.navbar')
		.mouseover(function(){
			$('.navbar').addClass('navbar-active');
		})
		.mouseleave(function(){
			if (scrollLocked === false){
				$('.navbar').delay(800).removeClass('navbar-active');
			}
			else {
				return;
			}
		});
});