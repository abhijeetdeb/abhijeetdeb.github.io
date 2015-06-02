$(function() {
  
  var $sliderUl = $('.container ul'),
      $img = $sliderUl.find('img'),
      $imgLength = $img.length,
      $imgWidth = $img[0].width,
      $imgTotalWidth = $imgLength * $imgWidth,
      $current = 1;
  
  $('.buttons').find('span').on('click', function(){
    var $direction = $(this).data('dir');
    
    if ($direction === "next") {
      $current += 1
      $sliderUl.find('li:nth-child('+$current+')').css({marginLeft: -100+'px'})
    } else {
      $current -= 1
      $sliderUl.find('li:nth-child('+$current+')').css({marginLeft: 100+'px'})
    }
      
  })
  
  
  
});