$(document).ready(function() {
  
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
  
});