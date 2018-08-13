

$(document).ready(function() {

  //   // начать повторы loader
  // var timerId = setInterval(function() {
  $('.loader').addClass('is-active');
  // }, 1200);


  $.getJSON( "https://jsonplaceholder.typicode.com/photos", function( data ) {
    var items = [];

    item=0;

    $.each( data, function( key, val ) {

       if (item<=5) {

        $(".slider-for").append(
          "<div><a href=\"" + val['url'] + "\" class=\"with-caption image-link\"><img src=\"" + val['url'] + "\" alt=\""+ val['title'] +"\" draggable=\"false\" /></a></div>");

        $(".slider-nav").append(
          "<div><img src=\"" + val['thumbnailUrl'] + "\" alt=\""+ val['title'] +"\" draggable=\"false\" /></div>");

        item++;
      }
    });
  });





  // setTimeout(function() {
  //   $('.loader').fadeOut(500), setTimeout(function() {
  //     $('body').addClass('is-load');

  //     // остановить повторы loader
  //     clearInterval(timerId);
  //   }, 500);



setInterval(function(){

  

    // Slider
     $('.slider-for').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       fade: true,
       asNavFor: '.slider-nav'
     });
     $('.slider-nav').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       asNavFor: '.slider-for',
       dots: true,
       focusOnSelect: true
     });

    // Popup

    $('.with-caption').magnificPopup({
        type: 'image',
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
      
        image: {
          verticalFit: true,
          titleSrc: function(item) {
            var caption = item.el.attr('title');        
            return caption;
          }
        },

        gallery: {
          enabled: true 
        }
    
    });

    $('.loader').removeClass('is-active');

}, 1000);







	
});

