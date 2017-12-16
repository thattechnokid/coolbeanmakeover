$("#hamburger").on("click", function (event){
  $(".mob-div-nav").slideToggle(500);

    function noscroll() {
    window.scrollTo( 0, 0 );
  }
      // add listener to disable scroll
      if ($(".mob-div-nav").css("display") == "block"){
        window.addEventListener('scroll', noscroll);

      }else if ($(".mob-div-nav").css("display") == "none") {
        window.removeEventListener('scroll', noscroll);

      }
});
