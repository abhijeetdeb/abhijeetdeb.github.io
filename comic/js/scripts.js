$(document).ready(function() {
  $('aside > .close').on({
    mouseenter: function() {
      $('aside.fun').css({opacity: '0.5'});
    },
    mouseleave: function() {
      $('aside.fun').css({opacity: '4'});
    },
    click: function() {
      $('aside.fun').hide();
    }
  })
});