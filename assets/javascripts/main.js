  // Defer loading styles
  var loadDeferredStyles = function() {
    var addStylesNode = document.getElementById("deferred-styles");
    var replacement = document.createElement("div");
    replacement.innerHTML = addStylesNode.textContent;
    document.body.appendChild(replacement)
    addStylesNode.parentElement.removeChild(addStylesNode);
  };
  var raf = requestAnimationFrame || mozRequestAnimationFrame ||
      webkitRequestAnimationFrame || msRequestAnimationFrame;
  if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
  else window.addEventListener('load', loadDeferredStyles);

// Add active class on active link
$(function() {
  $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});
// Toggle sidebar on click
$(document).ready(function(){
  $(".sidebar").addClass("sidebar-hidden");
  $("#toggle").addClass("toggle-hidden");  
  $("#toggle").click(function(){
    if ($(".sidebar").hasClass("sidebar-hidden")) {
      $(".sidebar").removeClass("sidebar-hidden");
      $("#toggle").removeClass("toggle-hidden"); 
    } else {
      $(".sidebar").addClass("sidebar-hidden");
      $("#toggle").addClass("toggle-hidden"); 
    }
    
  });
});

// Rotate banner images
var images = ['image1-min.jpg', 'image2-min.jpg', 'image3-min.jpg', 'image4-min.jpg', 'image5-min.jpg', 'image6-min.jpg', 'image7-min.jpg', 'image8-min.jpg', 'image9-min.jpg', 'image10-min.jpg', 'image11-min.jpg', 'image12-min.jpg', 'image13-min.jpg', 'image14-min.jpg', 'image15-min.jpg', 'image16-min.jpg', 'image17-min.jpg', 'image18-min.jpg', 'image19-min.jpg', 'image20-min.jpg', 'image21-min.jpg', 'image22-min.jpg', 'image23-min.jpg', 'image24-min.jpg', 'image25-min.jpg', 'image26-min.jpg', 'image27-min.jpg', 'image28-min.jpg', 'image29-min.jpg', 'image30-min.jpg', 'image31-min.jpg']; 
      $('#banner_imgs').css({'background-image': 'url(/assets/bannerimages/' + images[Math.floor(Math.random() * images.length)] + ')'});  



// Google analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-66078527-1', 'auto');
ga('send', 'pageview');

// Resume page

jQuery(document).ready(function() {
  var offset = 220;
  var duration = 500;
  jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > offset) {
          jQuery('.back-to-top').fadeIn(duration);
      } else {
          jQuery('.back-to-top').fadeOut(duration);
      }
  });
  
  jQuery('.back-to-top').click(function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, duration);
      return false;
  })
});

  $(document).ready(function() {
    function scrollToAnchor(myClass){
    var aTag = $("."+myClass);
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    }
    $("a, button").click(function() {
      var myClass = $(this).attr('class').replace('button ', '');
      scrollToAnchor(myClass);
      $("."+myClass).addClass("intro")
        .delay(2000)
        .queue(function() {
          $(this).removeClass("intro");
          $(this).dequeue();

        });

    });
});