$(document).ready(function(){$(".sld-spring2012").fancybox({padding:0,transitionIn:"fade",transitionOut:"fade",titlePosition:"inside",type:"image",changeFade:150}),$("a:has(img)").hover(function(){$("img",this).stop().animate({opacity:.5})},function(){$("img",this).stop().animate({opacity:1})}),screen.height<=768&&$("#social").hide(),$("ul.nav:nth-child(3)").removeClass("nav").addClass("menuLinks"),$("a.thumbs").click(function(i){i.preventDefault(),$("a[rel=slideshow]").eq($(this).data("index")).trigger("click")}),$("a[rel=slideshow]").fancybox({padding:0,transitionIn:"fade",transitionOut:"fade",titlePosition:"inside",type:"image",changeFade:150}),$(".mailchimpfire").fancybox({titlePosition:"inside",transitionIn:"fade",autoDimensions:!1,hideOnContentClick:!1,type:"inline",width:"330",height:"330",autoSize:!1}),$(".left").slick({dots:!1,arrows:!0,autoplay:!0,infinite:!0,speed:200,autoplaySpeed:5e3,fade:!0,cssEase:"linear",appendArrows:".left"}),$(".right").slick({dots:!1,arrows:!0,autoplay:!0,infinite:!0,speed:200,autoplaySpeed:7e3,fade:!0,cssEase:"linear",appendArrows:".right"})});
