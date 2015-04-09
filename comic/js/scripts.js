$(document).ready(function() {
  
  function scroll() {    
    var $html = $('html');  
    $html.niceScroll({
      scrollspeed: 80,
      cursorborder: "0px solid #fff",
      cursorborderradius: "0px",
      cursorcolor: "#fff",
      cursorwidth: 8,
    });    
  }  
  scroll();
  
  function how() {
    $('.tod .i').on('click', function() {
      $('.tod').fadeOut();
      $('.how').fadeIn();
      $('.thought').slideUp(function() {
        $('.info-block').slideDown();        
      });
    });
    $('.how .x').on('click', function() {
      $('.how').fadeOut();
      $('.tod').fadeIn();
      $('.info-block').slideUp(function() {
        $('.thought').slideDown();
      });
    })
  }
  how();
  
  function skills() {
    var $skills = $('#skills');
    $skills.find('.skill').each(function(){
      var $val = $(this).data('skill')*10 + '%';
      $(this).css({width: $val, background: '#d35400', opacity: '0.8'});
    });    
  }
  skills();
  
  function contactForm() {
    var $contactMe = $('#contactMe');
    $contactMe.find('input, textarea').not('input.submit').on({
      focus: function() {
        $(this).parent().css({boxShadow: '-8px -24px 0px 8px #f39c12'});
      },
      focusout: function() {
        $(this).parent().css({boxShadow: '-8px -24px 0px 8px #f1c40f'});
      }
    })
  }
  contactForm();
  
});