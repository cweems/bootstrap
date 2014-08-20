'use strict';

jQuery(document).ready(function() {
	jQuery(window).scroll(function(){
		var scroll = $(window).scrollTop();
	    if (scroll >= 3) {
	        jQuery(".navbar").addClass("navbar-active");
	    }
	    else {
	    	jQuery(".navbar").removeClass("navbar-active");
	    }
	});
	jQuery('.navbar')
		.mouseover(function(){
			jQuery(".navbar").addClass("navbar-active");
		})
		.mouseleave(function(){
			jQuery(".navbar").removeClass("navbar-active");
		});
});