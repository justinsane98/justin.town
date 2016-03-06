$(function() {

  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var d = new Date();
  $('.month .name').text(months[d.getMonth() + 1]);

  if(window.location.hash == '#thanks'){
    $('body').addClass('thanks-modal-active');
    var t;
    t = setTimeout(function(){
      window.history.pushState('', document.title, window.location.pathname);
      $('body').removeClass('thanks-modal-active');
    }, 3000)
    ga('send', 'event', 'Contact', 'Thanks!');
  }

  if(window.location.hash == '#contact'){
      $('body').addClass('contact-modal-active');
      ga('send', 'event', 'Contact', 'Open Contact Form');
  }

  $('.open-contact-form').click(function(e){
    e.preventDefault();
    window.history.pushState('#contact', document.title, window.location.pathname + '#contact');
    $('body').addClass('contact-modal-active');
    ga('send', 'event', 'Contact', 'Open Contact Form');
  });

  $('.close-modal').click(function(e){
    e.preventDefault();
    window.history.back();
    $('body').removeClass('contact-modal-active');
    ga('send', 'event', 'Contact', 'Close Contact Form');
  });

  $('.contact-form-button').click(function(e){
    e.preventDefault();
    $('.contact-form').submit();
    ga('send', 'event', 'Contact', 'Submit Contact Form');
  });

});
