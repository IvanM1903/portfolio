/* ====== ON LOAD EVENTS PAGE ====== */
setTimeout(function(){
  $(".loader-wrapper").fadeOut("slow");
  $('body').unbind('touchmove');
  $('body').removeClass('stop-scrolling');
}, 2500);
//Reset scroll top
history.scrollRestoration = "manual";
$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});

/* ====== SKILLSET ====== */
jQuery('.Count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 6000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});

jQuery(document).ready(function(){
  $('body').addClass('stop-scrolling');
  $('body').bind('touchmove', function(e){e.preventDefault()});

  /* ====== ABOUT ME PORTFOLIO ====== */

  var list = document.getElementsByClassName('card');
  //This has stored the number of cards from my html into a list
  var listOfHeight = [];
  var iterator = 0;
  var height = 0;
  //Store the height of each card into an array
  for(iterator = 0; iterator < list.length ; iterator++){
    //console.log($(list.item(iterator)).outerHeight());
    height = $(list.item(iterator)).outerHeight();
    listOfHeight.push(height);
    //console.log(listOfHeight[iterator]);
  }
  //Get the max height and set it to the rest of the cards
  listOfHeight.sort(function(a, b){return a-b});
  //console.log("La mayor altura es: "+listOfHeight[listOfHeight.length-1]);

  for(iterator = 0; iterator < list.length ; iterator++){
    $(list.item(iterator)).css("height",listOfHeight[listOfHeight.length - 1]);
  }

  /* ====== SCROLL NAVIGATION ====== */
   
    /* ====== NAV LINKS ACTIVE ====== */ 

  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll('.navbar-nav a');

  window.addEventListener('scroll', ()=>{
    let current = '';
    sections.forEach( section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if(pageYOffset >= (sectionTop - sectionHeight/3)){
        current = section.getAttribute('id');
      }
    });
    console.log(current);
    navLi.forEach(a => {
      a.classList.remove('active');
      if(a.classList.contains(current)){
        a.classList.add('active');
      }
    });
  });
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
  });
  $('.scrollTo').click(function() {
    var getElem = $(this).attr('href');
    var targetDistance = 120;
    if ($(getElem).length) {
      var getOffset = $(getElem).offset().top;
      $('html,body').animate({
        scrollTop: getOffset - targetDistance
      }, 50);
    }
    return false;
  });
  $('#skillset-section').waypoint(function() {
    jQuery('.skillbar').each(function(){
      jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
      },6000);
    });
  }, { offset: '75%' });
});
