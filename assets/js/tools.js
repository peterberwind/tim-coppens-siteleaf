 var hasChildLink;

 $(document).ready(function() {

     /****/
    //  if ($('.level_1').hasClass('current')) {
    //      $('.level_1.current').parent().parent().addClass('current');
    //  }
     //
    //  hasChildLink = $('.nav').find('ul').prev();
     //
     //
    //  hasChildLink.on('click', function() {
    //      if ($(window).innerWidth() < 1200) {
     //
    //          hasChildLink.parent().toggleClass('opened');
    //          return false;
    //      }
    //  })
     //
    //  $('.site').on('click', function() {
    //      hasChildLink.parent().removeClass('opened');
    //  })

     /******** slideshow springsummer2012 ***********/

    //  $(".sld-spring2012").fancybox({
    //      'padding': 0,
    //      'transitionIn': 'fade',
    //      'transitionOut': 'fade',
    //      'titlePosition': 'inside',
    //      'type': 'image',
    //      'changeFade': 150
    //  });


     /********  overlay voor de beelden  ***********/

     $('.thumbs').hover(function() {
         $('img', this).stop().animate({
             "opacity": 0.5
         });
     }, function() {
         $('img', this).stop().animate({
             "opacity": 1
         });
     });


     // verberg het icoon indien bekeken met mobile device
    //  if (screen.height <= 768) {
    //      $('#social').hide();
    //  }


     // wijzig de klasse van het tweede menu
    //  $('ul.nav:nth-child(3)').removeClass('nav').addClass('menuLinks');


     // Slideshow beelden collectie
    //  $("a.thumbs").click(function(e) {
    //      e.preventDefault();
    //      $("a[rel=slideshow]").eq($(this).data('index')).trigger('click');
    //  });


    //  $("a[rel=slideshow]").fancybox({
    //      'padding': 0,
    //      'transitionIn': 'fade',
    //      'transitionOut': 'fade',
    //      'titlePosition': 'inside',
    //      'type': 'image',
    //      'changeFade': 150
    //  });

    //  $(".mailchimpfire").fancybox({
    //      'titlePosition': 'inside',
    //      'transitionIn': 'fade',
    //      'autoDimensions': false,
    //      'hideOnContentClick': false,
    //      'type': 'inline',
    //      'width': '330',
    //      'height': '330',
    //      'autoSize': false
    //  });


     // change campaign img on click

     $('.slider').slick({
         dots: false,
         arrows: true,
         autoplay: true,
         infinite: true,
         speed: 200,
         autoplaySpeed: 5000,
         fade: true,
         cssEase: 'linear',
         appendArrows: '.slider'
     });


     // Stores Selector

     $('div.locator-column a').click(function() {

         /*
          * 1. Extract the region name
          */

         var linkId = this.id;
         var region = linkId.match(/^show\-([a-zA-Z0-9\-]+)$/)[1];
         // E.g. region = 'europe'

         /*
          * 2. Show the content element
          */

         // Select the content element to display
         if (region != 'online') {
             var contentId = '#content-' + region;
             var contentElement = $(contentId);

             // Hide all elements in the content element's column,
             // and all elements in the columns to the right of it
             contentElement.parent().children().hide();
             contentElement.parent().nextAll().children().hide();


             // Only show the last colum
         } else {
             $('#country>ul, #city>ul, #shop>:not(:last-child)').hide();
             var contentElement = $('#content-online');
         }


         // Now show the content element (with fade-in effect)
         contentElement.fadeIn('slow');

         // Make sure the links in the content element are
         // deactivated.
         contentElement.find('a').removeClass('active');

         /*
          * 3. Activate the clicked link element
          */

         // Deactivate all links in the column
         $(this)
             .parentsUntil('div.locator-column')
             .find('a')
             .removeClass('active');

         // Activate the current one
         $(this).addClass('active');



         // Cancel default behaviour
         return false;
     });


 });
