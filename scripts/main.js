$(function() {
  if(window.location.hash == '#thanks'){
    $('body').addClass('thanks-modal-active');
    var t;
    t = setTimeout(function(){
      window.history.pushState('', document.title, window.location.pathname);
      $('body').removeClass('thanks-modal-active');
    }, 3000)
  }
  if(window.location.hash == '#contact'){
      $('body').addClass('contact-modal-active');
  }
  $('.open-contact-form').click(function(e){
    e.preventDefault();
    window.history.pushState('#contact', document.title, window.location.pathname + '#contact');
    $('body').addClass('contact-modal-active');
  });

  $('.close-modal').click(function(e){
    e.preventDefault();
    window.history.back();
    $('body').removeClass('contact-modal-active');
  });
});
