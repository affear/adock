var animatedScroll = function(){
  $(".nav-a-parent a").on('click',
    function(e){
      target = this.hash;
      // prevent default anchor click behavior
      e.preventDefault();

      // animate
      $('html, body').animate(
        {scrollTop: $(this.hash).offset().top},
        300,
        function(){
          // when done, add hash to url
          // (default click behaviour)
          window.location.hash = target;
        }
      );
    }
  );
};

$(document).ready(animatedScroll);