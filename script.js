$(function() {

  var $height = $(window).height();
  var $contHeight = $('.container').height();
  var $marg = ($height - $contHeight) / 2;

  $('.container').css({
    'margin-top': $marg,
  });

});