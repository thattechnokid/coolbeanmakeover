// $("#hamburger").on("click", function (){
//   $(".mob-div-nav").slideToggle(500);
//
//     function noscroll() {
//     window.scrollTo( 0, 0 );
//   }
//       // add listener to disable scroll
//       if ($(".mob-div-nav").css("display") == "block"){
//         window.addEventListener('scroll', noscroll);
//         $("#hamburger").css("filter":"invert(100)");
//       }else if ($(".mob-div-nav").css("display") == "none") {
//         window.removeEventListener('scroll', noscroll);
//         $("#hamburger").css("filter":"invert(0)");
//       }
// });

 // ============  NEW CODE  ===========
 $(document).ready(function(){
  // #hamburger click event
  $("#hamburger").on("click", function (event){
    $(".mob-div-nav").slideToggle(500);
  }); // End of #hamburger click event
  // window scroll event
  $(window).on('scroll' , noscroll);
});

// functions here
// noscroll function
function noscroll() {
  if ($(".mob-div-nav").is(':visible')){
    window.scrollTo( 0, 0 );
    $("#hamburger").addClass('.invertColors');
  } else{
    $("#hamburger").removeClass('.invertColors');
  }
}
