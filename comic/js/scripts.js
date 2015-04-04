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
  
  function funFact() {
    var $asideFun = $('aside.fun');
    $('aside > .close').on({
      mouseenter: function() {
        $asideFun.css({opacity: '0.5'});
      },
      mouseleave: function() {
        $asideFun.css({opacity: '1'});
      },
      click: function() {
        $asideFun.hide();
      }
    });
  }  
  funFact();
  
  function contactForm() {
    var $contactMe = $('#contactMe');
    $contactMe.find('input, textarea').on({
      focus: function() {
        $(this).parent().css({boxShadow: '-8px -20px 0px 8px #f39c12'});
      },
      focusout: function() {
        $(this).parent().css({boxShadow: '-8px -20px 0px 8px #f1c40f'});
      }
    })
  }
  contactForm();
  
});