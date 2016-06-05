$(window).load(function(){

  if ( $('.album-cover-carousel').html() != undefined) {

    var carouselInteval = 6000;

    $('.album-cover-carousel').addClass('js-carousel-active');
    $('body').attr('class',$('.js-carousel-item-active').data('theme'));

    var slideNextItem = function(){
      var $currentElement = $('.js-carousel-item-active');
      var $nextElement = $('.js-carousel-item-active').next();
      if ( $nextElement.html() == undefined) {
        $nextElement = $('.carousel-items li').first();
      }
      $currentElement.removeClass('js-carousel-item-active');
      $nextElement.addClass('js-carousel-item-active');
      var $theme = $nextElement.data('theme');
      $('body').attr('class',$theme);
    }

    var slidePreviousItem = function(){
      var $currentElement = $('.js-carousel-item-active');
      var $prevElement = $('.js-carousel-item-active').prev();
      if ( $prevElement.html() == undefined) {
        $prevElement = $('.carousel-items li').last();
      }
      $currentElement.removeClass('js-carousel-item-active');
      $prevElement.addClass('js-carousel-item-active');
      var $theme = $prevElement.data('theme');
      $('body').attr('class',$theme);
    }

    $('.carousel-controls-next').on('click', function() {
      slideNextItem();
    });

    $('.carousel-controls-previous').on('click', function() {
      slidePreviousItem();
    });

    $('.album-cover-carousel').on("swiperight",function(){
      slideNextItem();
    });

    $('.album-cover-carousel').on("swipeleft",function(){
      slidePreviousItem();
    });

    $('html').on('keydown', function(e){
      if($('.album-cover-carousel').hasClass('js-carousel-active')) {
        if('39' == e.keyCode || '38' == e.keyCode) {
          e.preventDefault();
          slideNextItem();
        } else if('37' == e.keyCode || '40' == e.keyCode) {
          e.preventDefault();
          slidePreviousItem();
        }
      }
    });

    setInterval(function(){
      slideNextItem();
    }, carouselInteval);

  }

});
