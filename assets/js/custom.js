(function ($, Drupal, drupalSettings) {
  $(window).on('load', function() {
    /* Navigation */
    $('#main-menu > nav > ul').superfish({
      delay:       500,                // 0.1 second delay on mouseout
      animation:   { opacity:'show',height:'show'},  // fade-in and slide-down animation
      dropShadows: true                // disable drop shadows
    });
    $('#navigation ul.sf-js-enabled').slicknav({
      duration: 1000,
      prependTo:'#masthead > .row'
    });
  });
  Drupal.behaviors.stickyHeader = {
    attach: function (context, settings) {
      // Using once() to apply the myCustomBehaviour effect when you want to run just one function.
      if(drupalSettings.stickyHeader == 1) {
        elementHeight = $(".site-header").outerHeight();
        $(".site-header").addClass("sticky");
        $(".content-wrapper").attr("style", "padding-top:" + elementHeight + "px");
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
(function() {
  var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
      is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
      is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

  if ( ( is_webkit || is_opera || is_ie ) && 'undefined' !== typeof( document.getElementById ) ) {
    var eventMethod = ( window.addEventListener ) ? 'addEventListener' : 'attachEvent';
    window[ eventMethod ]( 'hashchange', function() {
      var element = document.getElementById( location.hash.substring( 1 ) );

      if ( element ) {
        if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) )
          element.tabIndex = -1;

        element.focus();
      }
    }, false );
  }
})();
