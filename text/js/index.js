$( document ).ready( function() {
  // scrollTo('.mainMenu-links')		;
  scrollTo();
  scrollToTop();
});

function scrollTo () {
  $('.mainMenu a').click(function(e) {
      e.preventDefault();
      $('.mainMenu a').removeClass('active');
      $(this).addClass('active');
    
     var distanceTopToSection = $( '#' +  $(this).data('target')).offset().top;
    
    		 $( 'body, html' ).animate({scrollTop:distanceTopToSection }, 'slow');
  });
}

/*function scrollTo (classLink) {
   $('a', classLink).on('click', function(e) {
     e.preventDefault();
     var distanceTopToSection = $( '#' +  $(this).data('target')).offset().top;
     $( 'body, html' ).animate({scrollTop:distanceTopToSection }, 'slow');
  });
}*/

function scrollToTop () {
  var backToTop = $('.backToTop');
  var showBackTotop = $(window).height();
  backToTop.hide();
  
  var children = $(".mainMenu li").children(); 
  var tab = []; 
  for (var i=0; i < children.length; i++) {
    console.log(children[i]);
    var child = children[i];
    var ahref = $(child).attr('href'); 
    console.log(ahref);
    tab.push(ahref);
  }
  

  $(window).scroll( function() {
    var windowScrollTop = $(window).scrollTop();
    if( windowScrollTop > showBackTotop  ) {
      backToTop.fadeIn('slow');
    } else {
      backToTop.fadeOut('slow');
    }
    
    var windowHeight = $(window).height(); 
    var docHeight = $(document).height();

    for (var i=0; i < tab.length; i++) {
        var link = tab[i];
        var divPos = $(link).offset().top; 
        var divHeight = $(link).height(); 
        if (windowScrollTop >= divPos && windowScrollTop < (divPos + divHeight)) {
            $(".mainMenu a[href='" + link + "']").addClass("active");
        } else {
            $(".mainMenu a[href='" + link + "']").removeClass("active");
        }
    }

    if(windowScrollTop + windowHeight == docHeight) {
        if (!$(".mainMenu li:last-child a").hasClass("active")) {
            var navActive = $(".active").attr("href");
            $(".mainMenu a[href='" + navActive + "']").removeClass("active");
            $(".mainMenu li:last-child a").addClass("active");
        }
    }
  });

  backToTop.click( function(e) {
    e.preventDefault();
    $(' .mainMenu li a ').removeClass( 'active' );
    $(' .mainMenu li a:first ').addClass( 'active' );
    $(' body, html ').animate( {scrollTop : 0}, 'slow' );
  });
}