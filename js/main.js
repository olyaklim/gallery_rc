$(document).ready(function() {

  $.getJSON( "https://jsonplaceholder.typicode.com/photos", function( data ) {
  var items = [];

  item=0;

  $.each( data, function( key, val ) {

     if (item<=5) {

      // $(".slider-for").append(
      //  "<div><img src=\"" + val['url'] + "\" draggable=\"false\" /></div>");

      // $(".slider-nav").append(
      //  "<div><img src=\"" + val['thumbnailUrl'] + "\"  draggable=\"false\" /></div>");

      $(".slider-for").append(
        "<div><img src=\"" + val['url'] + "\" draggable=\"false\" /></div>");

      $(".slider-nav").append(
        "<div><img src=\"" + val['thumbnailUrl'] + "\"  draggable=\"false\" /></div>");


      item++;
    }

    console.log("WWWWWWWWWWWWWWWWWWW");

  });
 
});



setInterval(function(){

console.log("SSSSSSSSSSSSSS");


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

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slider-nav').slick('slickGoTo', slideno - 1);
 });


}, 1000);



// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });
	
});

