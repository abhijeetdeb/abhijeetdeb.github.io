$(window).load(function() {
  
  var $cover = $('#cover'),
      $loading = $cover.find('.loading');
  
  setInterval(function(){
    $loading.toggleClass('blinkOff');
  }, 3000);
  
  $cover.animate({opacity: 0, top: '-100%'}, {complete: function() {
    $cover.addClass('s');
  }});
  
});

$(function() {  
  
  $('#container').show();
  
  // scroll reveal
  new scrollReveal({
    reset: true,
    vFactor: 0.25,
    mobile: false,
    delay: 'once'
  });
  
  function scrollBar() {    
    var $html = $('html');  
    $html.niceScroll({
      scrollspeed: 80,
      cursorborder: "0px solid #fff",
      cursorborderradius: "0px",
      cursorcolor: "#fff",
      cursorwidth: 8,
    });    
  }
  
  scrollBar();
  
  
  // scroll to top  
  function toTop() {
    
    var $toTop = $('.toTop'),
        $icon = $toTop.find('img');
    
    $(window).on('scroll', function() {
      
      if ($(window).scrollTop() > 200) {
        $toTop.fadeIn();
      }
      else {
        $toTop.fadeOut();
      }
      
    })
    
  }
  
  toTop();
  
  
  // link handling  
  function links() {
    
    $('.link').on({
      
      mousedown: function() {
        $(this).addClass('active');
      },
      
      mouseup: function() {
        $(this).removeClass('active');
      },
      
      click: function() {
        
        var $link = $(this).data('link');
        
        if($(this).data('newtab') == "blank") {
          
          window.open($link);
          
        } else if($link) {
          
          $('html, body').animate({
            
            scrollTop: $($link).offset().top + -44
            
          });
          
        }
        
      }
      
    });
    
  }
  
  links();
  
  
  // quote handling  
  function quote() {
    var $quote = $('.thought'),
        $author = $quote.find('a').text();
    $quote.find('a, b, br, script').remove();
    $quote.html('<span>' + $.trim($quote.text()) + '</span> <span class="quoteAuthor">- As said by ' + $author +'</span>');
  }
  
  quote();
  
  
  // how site was created  
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
  
  
  // portfolio
  function portfolio() {
    
    var $portfolio = $('#portfolio'),
        $prev = $portfolio.find('.prev'),
        $next = $portfolio.find('.next'),
        $works = $portfolio.find('.works'),
        $wrapper = $works.find('.wrapper'),
        $work = $wrapper.find('.work');
    
    var $worksHeight = $works.height(),
        $totalWorks = $wrapper.find('.work').length,
        $totalWorksHeight = $totalWorks * $worksHeight,
        $workCount = 1;
    
    // on previous button click
    $prev.on('click', function() {
      
      $wrapper.animate({marginTop: '+='+$worksHeight}, 0, function() {
        
        $workCount--;
        
        if ($workCount < 1) {
          $workCount = $totalWorks;
          $wrapper.css({marginTop: -($totalWorksHeight - $worksHeight)});
        }
        
      });
      
    });
    
    // on next button click
    $next.on('click', function() {
      
      $wrapper.animate({marginTop: '-='+$worksHeight}, 0, function() {
        
        $workCount++;
        
        if ($workCount > $totalWorks) {
          $workCount = 1;
          $wrapper.css({marginTop: 0});
        }
        
      });
      
    });
    
    
    // project events
    $work.on({
      
      mouseenter: function() {
        $(this).find('img').css({transition: '10s linear top', top: '-150px'});
      },
      
      mouseleave: function() {
        $(this).find('img').css({transition: '0.25s ease top',top: '0'});
      },
      
      click: function() {
        var $link = $(this).find('.project').data('link');        
        window.open($link);
      }
      
    });
    
  }
  
  portfolio();
  
  
  // skills handling
  function skills() {
    var $skills = $('#skills');
    $skills.find('.skill').each(function(){
      var $val = $(this).data('skill')*10 + '%';
      $(this).css({width: $val, background: '#d35400', opacity: '0.8'});
    });    
  }
  skills();
  
  
});