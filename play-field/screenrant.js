// Screenrant custom jQuery

$(document).ajaxSuccess(screenrant);
$(screenrant);

function screenrant() {
  
  var $comments = $('ol.comment-list'),
      $comment = $comments.find('li.comment'),
      $buttonCSS = {
        border: '1px solid #ababab',
        color: '#ababab',
        padding: '4px 8px',
        position: 'absolute',
        top: '30%',
        right: '2%',
        cursor: 'pointer',
        textTransform: 'uppercase',
        lineHeight: '1.5'
      },
      $noReplyCSS = {
        border: '1px solid #777',
        color: '#777',
        cursor: 'text'
      };
  
  $.each($comment, function () {
    
    var $allReplies = $(this).find('.children > .comment').length,
        $replies = $(this).find('> .children > .comment').length,
        $reply;
    
    if ($replies > 1) {
      $reply = 'Direct Replies';
    } else if ($replies === 1) {
      $reply = 'Direct Reply';
    } else {
      $reply = 'No Replies';
    }
    
    if ($allReplies > 1) {
      
      $(this).find('.header:first').css({position: 'relative'}).append('<span class="button has-child"><span class="text">Collapse</span> ' + $replies + ' ' + $reply + ' / ' + $allReplies + ' Total</span>');
      
    } else if ($allReplies === 1) {
      
      $(this).find('.header:first').css({position: 'relative'}).append('<span class="button has-child"><span class="text">Collapse</span> ' + $replies + ' ' + $reply + '</span>');
      
    } else {
      
      $(this).find('.header:first').css({position: 'relative'}).append('<span class="button no-reply">' + $reply + '</span>');
      
    }
    
    $('.button').css($buttonCSS);
    $('.no-reply').css($noReplyCSS);
    
  });
    
  $('<span>L1</span>').appendTo('.button');
  
  $('.has-child').on({
    
    click: function (e) {
      
      if ($(this).find('span.text').text() === 'Collapse') {
        $(this).find('span.text').text('Expand');
      } else if ($(this).find('span.text').text() === 'Expand') {
        $(this).find('span.text').text('Collapse');
      }
      
      $(this).closest('.comment').find('ul.children').slideToggle();
      e.stopPropagation();
      
    }
    
  });
  
}