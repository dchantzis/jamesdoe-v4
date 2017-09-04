$(window).load(function(){

  if($('.social-media-share-btns').length > 0) {

    $('.enable-social-btns-overlay').on('click', function() {
      enableSocialBtnsOverlay();
    });

    $('.btn-close-social-btns').on('click', function(){
      disableSocialBtnsOverlay();
    });

    $(document).click(function (e) {
      if (!$(".social-btns-overlay").hasClass('js-social-btns-container-fade')) {
        return;
      }
      if ( !$('.enable-social-btns-overlay').is(e.target)
        && !$('.enable-social-btns-overlay .i-share-arrow').is(e.target)
        && !$('.social-btns-wrapper').is(e.target)
        && !$('.btn-close-social-btns').is(e.target)) {
        disableSocialBtnsOverlay();
      }
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
    $(".social-btns-overlay").addClass('js-social-btns-container-fade');
  }

  var disableSocialBtnsOverlay = function() {
    $('.social-btns-overlay').removeClass('js-social-btns-container-fade');
  }

});
