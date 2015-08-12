$(function() {
  
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
  
  function links() {
    
    $('.link').on({
      
      mousedown: function() {
        $(this).addClass('active');
      },
      
      mouseup: function() {
        $(this).removeClass('active');
      },
      
      click: function(e) {
        e.preventDefault();
      }
      
    });
    
  }
  
  links();
  
  function quote() {
    var $quote = $('.thought');
    $quote.find('b, a, br, script').remove();    
    $quote.html('<span>' + $.trim($quote.text()) + '</span');    
  }
  
  quote();
  
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
  
  function portfolio() {
    
    var $portfolio = $('#portfolio'),
        $prev = $portfolio.find('.prev'),
        $next = $portfolio.find('.next'),
        $works = $portfolio.find('.works'),
        $wrapper = $works.find('.wrapper'),
        $work = $wrapper.find('.work');
    
    var $worksHeight = $works.height(),
        $totalWorks = $wrapper.find('.work').length,
        $totalWorksHeight = $totalWorks * $worksHeight;
    
    console.log('Works Height: ' + $worksHeight);
    console.log('Total Works Height: ' + $totalWorksHeight);
    
    $prev.on('click', function() {
      
      $wrapper.css({marginTop: $worksHeight});
      
    });
    
    $next.on('click', function() {
      
        console.log($worksHeight);
      if($worksHeight < $totalWorksHeight ) {
        $wrapper.css({marginTop: -$worksHeight});      
        $worksHeight = $worksHeight + $works.height();
      } else {
        $worksHeight = 0;
        $wrapper.css({marginTop: $worksHeight});
      }
      
    });
    
    $work.on({
      
      mouseenter: function() {
       $(this).find('img').css({transform: 'scale(1.1)'});
      },
      
      mouseleave: function() {
       $(this).find('img').css({transform: 'scale(1)'});
      }
      
    });
    
  }
  
  portfolio();
  
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