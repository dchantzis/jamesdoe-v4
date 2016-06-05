$(window).load(function(){

  if($('.active-slideshow').length > 0) {

    $('.active-slideshow').on('click', function() {

      $(".slideshow-container").addClass('js-slideshow-container-fade');

      var pointer = $(this).data('image');
      $(".slideshow-images li").removeClass('js-slideshow-image-selected');
      $(".slideshow-images li[data-image='" + pointer + "']").addClass('js-slideshow-image-selected');

      $(".slideshow-navigation li").removeClass('js-slideshow-navigation-selected');
      $(".slideshow-navigation li[data-image='" + pointer + "']").addClass('js-slideshow-navigation-selected');
    });

  }

  if($('.slideshow').length > 0) {

    $(".slideshow-images img").each(function(){
      var imgClass = detectImageDimensions($(this));
      $(this).addClass(imgClass);
    });


    function detectImageDimensions(imgObj) {

      var width = imgObj.width();
      var height = imgObj.height();
      var dimensionsRatio = +(width/height).toFixed(2);
      var imageType = '';

      if(width == height) {
        imageType = 'square';
      } else if (width > height) {
        imageType = 'horizontal';
      } else if (width < height) {
        imageType = 'vertical';
      }

      if(dimensionsRatio <= 0.68 ) {
        imageType = 'vertical-custom';
      }

      if( (0.70 <= dimensionsRatio)
          && (dimensionsRatio <= 0.72) ) {
        imageType = 'vertical-Ax';
      }

      if( (1.40 <= dimensionsRatio)
          && (dimensionsRatio <= 1.42) ) {
        imageType = 'horizontal-Ax';
      }

      if( (0.95 <= dimensionsRatio)
          && (dimensionsRatio <= 1) ) {
        imageType = 'square';
      }

      return imageType;
    }

    var closeSlideshow = function() {
      $(".slideshow-images li").removeClass('js-slideshow-image-selected');
      $('.slideshow-container').removeClass('js-slideshow-container-fade');
    }

    var openNextImage = function() {
      var $currentElement = $('.js-slideshow-image-selected');
      var $nextElement = $('.js-slideshow-image-selected').next();
      if ( $nextElement.html() == undefined) {
        $nextElement = $('.slideshow-images li').first();
      }
      $currentElement.removeClass('js-slideshow-image-selected');
      $nextElement.addClass('js-slideshow-image-selected');
      var pointer = $nextElement.data('image');
      $(".slideshow-navigation li").removeClass('js-slideshow-navigation-selected');
      $(".slideshow-navigation li[data-image='" + pointer + "']").addClass('js-slideshow-navigation-selected');
    }

    var openPreviousImage = function() {
      var $currentElement = $('.js-slideshow-image-selected');
      var $prevElement = $('.js-slideshow-image-selected').prev();
      if ( $prevElement.html() == undefined) {
        $prevElement = $('.slideshow-images li').last();
      }
      $currentElement.removeClass('js-slideshow-image-selected');
      $prevElement.addClass('js-slideshow-image-selected');
      var pointer = $prevElement.data('image');
      $(".slideshow-navigation li").removeClass('js-slideshow-navigation-selected');
      $(".slideshow-navigation li[data-image='" + pointer + "']").addClass('js-slideshow-navigation-selected');
    }

    $('.slideshow-controls-next').on('click', function() {
      openNextImage();
    });

    $('.slideshow-controls-previous').on('click', function() {
      openPreviousImage();
    });

    $('.slideshow-navigation li').on('click', function() {
      var $currentElement = $('.js-slideshow-image-selected');
      var pointer = $(this).data('image');
      var $nextElement = $(".slideshow-images li[data-image='" + pointer + "']");

      $('.slideshow-navigation li').removeClass('js-slideshow-navigation-selected');
      $(this).addClass('js-slideshow-navigation-selected');
      $currentElement.removeClass('js-slideshow-image-selected');
      $nextElement.addClass('js-slideshow-image-selected');
    });

    $('html').on('keydown', function(e){
      if($('.slideshow-container').hasClass('js-slideshow-container-fade')) {
        if('39' == e.keyCode || '38' == e.keyCode) {
          e.preventDefault();
          openNextImage();
        } else if('37' == e.keyCode || '40' == e.keyCode) {
          e.preventDefault();
          openPreviousImage();
        } else if('13' == e.keyCode || '27' == e.keyCode) {
          e.preventDefault();
          closeSlideshow();
        }
      }
    });

    $('html').on("swiperight",function(){
      openNextImage();
    });

    $('html').on("swipeleft",function(){
      openNextImage();
    });

    $('.btn-close-slideshow').on('click', function(){
      closeSlideshow();
    });

  }

});
