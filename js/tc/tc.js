'use strict';

jQuery(document).ready(function() {
	jQuery(window).scroll(function(){
		var scroll = $(window).scrollTop();
	    if (scroll >= 30) {
	        jQuery(".navbar").addClass("navbar-active");
	    } else {
	    	jQuery(".navbar").removeClass("navbar-active");
	    }
	});
});