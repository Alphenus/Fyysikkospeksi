// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();



$(document).foundation({
"magellan-expedition": {
  active_class: 'active', // specify the class used for active sections
  threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
  destination_threshold: 100, // pixels from the top of destination for it to be considered active
  throttle_delay: 50, // calculation throttling to increase framerate
  fixed_top: 0, // top distance in pixels assigend to the fixed element on scroll
  offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
}
});

jQuery(document).ready(function($){
     $('a[href^="#"]').on('click',function (e) {
         e.preventDefault();

         var target = this.hash,
         $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top-80 //TÄMÄ lukuarvo top:n jälkeen on offset!
         }, 900, 'swing', function () {
             window.location.hash = target;
         });
     });
});