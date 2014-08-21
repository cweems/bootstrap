'use strict';

var scrollLocked = false;

$(document).ready(function() {
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
	    if (scroll >= 3) {
	        $('.navbar').addClass('navbar-active');
	        scrollLocked = true;
	    }
	    else {
	    	$('.navbar').removeClass('navbar-active');
	    	scrollLocked = false;
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

		var items = ["nurses", "disaster responders", "zookepeers", "superheroes", "tollboth operators", "rainbow counters",  "economists", "M&E specialists", "volunteers", "project managers"],
        $text = $( '#tagline-span' ),
        delay = 3; //seconds
    
	    function loop ( delay ) {
	        $.each( items, function ( i, elm ){
	            $text.delay( delay*1E3 ).fadeOut();
	            $text.queue(function(){
	                $text.html( items[i] );
	                $text.dequeue();
	            });
	            $text.fadeIn();
	            $text.queue(function(){
	                if ( i == items.length -1 ) {
	                    loop(delay);   
	                }
	                $text.dequeue();
	            });
	        });
	    }

	    loop( delay );

});