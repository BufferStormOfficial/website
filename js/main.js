!function(e){"use strict";var o=800,t=e(window);document.documentElement.setAttribute("data-useragent",navigator.userAgent),Modernizr.svg||e(".header-logo img").attr("src","images/logo.png");var n,i,a,s,l;e("html").addClass("ss-preload"),t.on("load",function(){e("html, body").animate({scrollTop:0},"normal"),e("#loader").fadeOut("slow",function(){e("#preloader").delay(300).fadeOut("slow")}),e("html").removeClass("ss-preload"),e("html").addClass("ss-loaded")}),n=e(".header-menu-toggle"),t.on("scroll",function(){t.scrollTop()>150?n.addClass("opaque"):n.removeClass("opaque")}),function(){var o=e(".header-menu-toggle"),t=e(".header-nav").find(".header-nav__close"),n=e("body");e("section, footer"),o.on("click",function(e){e.preventDefault(),n.toggleClass("menu-is-open")}),t.on("click",function(e){e.preventDefault(),o.trigger("click")}),n.on("click",function(o){e(o.target).is(".header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span")||n.removeClass("menu-is-open")})}(),(i=e(".masonry")).imagesLoaded(function(){i.masonry({itemSelector:".masonry__brick",resize:!0})}),a=[],s=e(".pswp")[0],(l=e(".item-folio")).each(function(o){var t=e(this),n=t.find(".thumb-link"),i=t.find(".item-folio__title"),s=t.find(".item-folio__caption"),l="<h4>"+e.trim(i.html())+"</h4>",r=e.trim(s.html()),c=n.attr("href"),d=n.data("size").split("x"),u={src:c,w:d[0],h:d[1]};s.length>0&&(u.title=e.trim(l+r)),a.push(u)}),l.each(function(o){e(this).on("click",function(e){e.preventDefault(),new PhotoSwipe(s,PhotoSwipeUI_Default,a,{index:o,showHideOpacity:!0}).init()})}),e(".testimonials__slider").slick({arrows:!1,dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,pauseOnFocus:!1,autoplaySpeed:1500}),e(".smoothscroll").on("click",function(t){var n=this.hash,i=e(n);t.preventDefault(),t.stopPropagation(),e("html, body").stop().animate({scrollTop:i.offset().top},o,"swing").promise().done(function(){e("body").hasClass("menu-is-open")&&e(".header-menu-toggle").trigger("click"),window.location.hash=n})}),e(".alert-box").on("click",".alert-box__close",function(){e(this).parent().fadeOut(500)}),AOS.init({offset:200,duration:600,easing:"ease-in-sine",delay:300,once:!0,disable:"mobile"})}(jQuery);