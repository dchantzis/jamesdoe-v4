$(window).load(function(){

  if($('.social-media-share-btns').length > 0) {

    $('.enable-social-btns-overlay').on('click', function() {
      console.log('asda');
      $(".social-btns-overlay").addClass('js-social-btns-container-fade');
    });

  }

  if($('.social-btns').length > 0) {
      $('.social-btn').on('click', function(e){
          e.preventDefault();
          socialURL = $(this).attr('href');
          //encodeURIComponent(social_url)
          window.open(
            socialURL,
            '',
            'status=1, width=550,height=420');

          return false;
      });
  }

  if($('input.share-page-url').length > 0) {
    $('input.share-page-url').on("click", function () {
       $(this).select();
    });
  }

  var enableSocialBtnsOverlay = function() {
    $('.social-btns-overlay').removeClass('js-social-btns-container-fade');
  }

  $('.btn-close-social-btns').on('click', function(){
    enableSocialBtnsOverlay();
  });

});
