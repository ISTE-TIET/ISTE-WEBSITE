if ($(window).width() < 991) {
    $("div").removeClass("frame");
    $("div").removeClass("hex-outer");
    $("div").removeClass("hex-inner");
    $("div").removeClass("h1");
    $("div").removeClass("h2");
    $("div").removeClass("h3");
    $("div").removeClass("label");
    $("div").removeClass("label-core");
    $(".position-desc").addClass("color-text");
    
}
else {
    $(".position-desc").addClass("margin-class");
}




(function($) {

    
  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);

  $(window).scroll(function(event) {
  
    $("#fa-advisor").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });
    
  });

  $(window).scroll(function(event) {
  
    $("#exec-board").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });
    
  });

  $(window).scroll(function(event) {
  
    $("#dept-heads").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });
    
  });

  $(window).scroll(function(event) {
  
    $("#core-team").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });
    
  });