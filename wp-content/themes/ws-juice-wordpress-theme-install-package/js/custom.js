jQuery(function($){
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 600) {
      $(".site-header").addClass("is-sticky");
      $(".site-header-menu").addClass("is-sticky");
      $(".menu-toggle").addClass("is-sticky");
    } else {
	  $(".site-header").removeClass("is-sticky");
      $(".site-header-menu").removeClass("is-sticky");
      $(".menu-toggle").removeClass("is-sticky");
    }
  })
})



// Lightbox video
jQuery(document).ready(function($){
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});



// No Sidebar Full Content Blog
jQuery(function ($) { 
	if ( $(".sidebar-right-blog").parents("#content").length == 0 && $(".sidebar-left-blog").parents("#content").length == 0)   { 
	   $("body").addClass("null-blog");
	} else {	 
	   $("body").removeClass("null-blog");
	}
});

// Sidebar Content Sidebar Blog
jQuery(function ($) { 
	if ( $(".sidebar-right-blog").parents("#content").length == 1 && $(".sidebar-left-blog").parents("#content").length == 1)    { 
	   $("body").addClass("sidebar-content-sidebar-blog");
	} else {	 
	   $("body").removeClass("sidebar-content-sidebar-blog");
	}
});

// Content Sidebar Blog
jQuery(function ($) { 
	if ( $(".sidebar-right-blog").parents("#content").length == 1 && $(".sidebar-left-blog").parents("#content").length == 0)   { 
	   $("body").addClass("content-sidebar-blog");
	} else {	 
	   $("body").removeClass("content-sidebar-blog");
	}
});

//  Sidebar Content Blog
jQuery(function ($) { 
	if ( $(".sidebar-right-blog").parents("#content").length == 0 && $(".sidebar-left-blog").parents("#content").length == 1)   { 
	   $("body").addClass("sidebar-content-blog");
	} else {	 
	   $("body").removeClass("sidebar-content-blog");
	}
});

// No Sidebar Full Content ws
jQuery(function ($) { 
	if ( $(".sidebar-right-ws").parents("#content").length == 0 && $(".sidebar-left-ws").parents("#content").length == 0)   { 
	   $("body.woocommerce").addClass("null-ws");
	} else {	 
	   $("body.woocommerce").removeClass("null-ws");
	}
});

// Sidebar Content Sidebar ws
jQuery(function ($) { 
	if ( $(".sidebar-right-ws").parents("#content").length == 1 && $(".sidebar-left-ws").parents("#content").length == 1)   { 
	   $("body").addClass("sidebar-content-sidebar-ws");
	} else {	 
	   $("body").removeClass("sidebar-content-sidebar-ws");
	}
});

// Content Sidebar ws
jQuery(function ($) { 
	if ( $(".sidebar-right-ws").parents("#content").length == 1 && $(".sidebar-left-ws").parents("#content").length == 0)   { 
	   $("body").addClass("content-sidebar-ws");
	} else {	 
	   $("body").removeClass("content-sidebar-ws");
	}
});

//  Sidebar Content ws
jQuery(function ($) { 
	if ( $(".sidebar-right-ws").parents("#content").length == 0 && $(".sidebar-left-ws").parents("#content").length == 1)   { 
	   $("body").addClass("sidebar-content-ws");
	} else {	 
	   $("body").removeClass("sidebar-content-ws");
	}
});


// No sidebar full content 
jQuery(function ($) { 
	if ( $(".sidebar-right-blog").parents("#content").length == 0 && $(".sidebar-left-blog").parents("#content").length == 0  && $(".sidebar-right-ws").parents("#content").length == 0 && $(".sidebar-left-ws").parents("#content").length == 0)   { 
	   $("body").addClass("full-content");
	} else {	 
	   $("body").removeClass("full-content");
	}
});


jQuery(function ($) { 

	 $("body.woocommerce").removeClass("sidebar-content-sidebar-blog");
	 $("body.woocommerce").removeClass("content-sidebar-blog");
	 $("body.woocommerce").removeClass("sidebar-content-blog");

	 $("body.category").removeClass("sidebar-content-sidebar-ws");
	 $("body.category").removeClass("content-sidebar-ws");
	 $("body.category").removeClass("sidebar-content-ws");
	 $("body.single-post").removeClass("sidebar-content-sidebar-ws");
	 $("body.single-post").removeClass("content-sidebar-blog");
	 $("body.single-post").removeClass("sidebar-content-blog");

});


//*** Sticky Menu

jQuery(function($){
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 1) { 
      $(".site-header").addClass("is-sticky");
    } else {
      $(".site-header").removeClass("is-sticky");
    }
  })
})


jQuery(function($){ 

  $( ".add_to_cart_button" ).wrap( "<div class='product-hover' />");


})

/*** Video ***/
jQuery(function($){
    $(".open-video-link").videoBox();
});

/* FUNCTION TO CREATE LIGHTBOX */
jQuery.fn.extend({
    videoBox : function() {
        var self, link, target, video, videoSrc, toggle;
        this.each(function() {
            self = this;
            target = $(self).attr("href");
            video = $(target).find(".popup-video iframe");
            videoSrc = $(video).attr("src");
          
            $(this).on("click", function(event) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                $(target).wrap( "<div class='lightbox'></div>" );
                $(".lightbox").fadeIn(300, function() {
                    $(target).fadeIn(0);
                    $("body").addClass("modal-open");
                    $(video).attr("src",videoSrc+'?autoplay=1');
                    resizeIfame(video);
                });

                $("body").on("click", function(event) {
                    if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                        $(".lightbox").fadeOut(300, function() {
                            $(target).hide(0);
                            $(target).unwrap();
                        });
                        $("body").removeClass("modal-open");
                        $(video).attr("src",videoSrc);
                    }
                });
            });
        });
    }
});

/* RESIZE IFRAME VIDEO FUNCTION */
function resizeIfame(frame) {

    var oldWidth = $(frame).width();
    var oldHeight = $(frame).height();
    var propotion = oldHeight / oldWidth;
    var newHeight;

    $(frame).width('100%');
    newHeight = $(frame).width() * propotion;
    $(frame).height(newHeight);

    $(window).resize(function() {
        $(frame).width('100%');
        newHeight = $(frame).width() * propotion;
        $(frame).height(newHeight);
    });
}


// Hide Footer then null
jQuery(function($){ 
    if( $( ".footer1" ).empty() &&  $( ".footer2" ).empty() && $( ".footer3" ).empty() &&  $( ".footer4" ).empty() )  { 
       $(".main-footer").hide();
       $("body").addClass("template-full");
    }
});