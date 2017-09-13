$(document).ready(function (){
  
  /* Navigation */
  $('#page-content section').waypoint(function(direction) {
    if(direction=='down') {
      var sectionName = '#'+$(this).attr('id');
      var menuLink = $('.me-nav li').children('a').attr('href');
      var activeLink = $('.me-nav li.active');
      var newLink = $('li.menu-item a[href="'+sectionName+'"]');
      $(activeLink).removeClass('active');
      $(newLink).parent('li').addClass('active');
    }
  },{ offset: 1 });
  
  $('#page-content section').waypoint(function(direction) {
    if(direction=='up') {
      var sectionName = '#'+$(this).attr('id');
      var menuLink = $('.me-nav li').children('a').attr('href');
      var activeLink = $('.me-nav li.active');
      var newLink = $('li.menu-item a[href="'+sectionName+'"]');
      $(activeLink).removeClass('active');
      $(newLink).parent('li').addClass('active');
    }
  },{ offset: function() { return -$(this).height()+1; }});

  /* Smooth Scrolling */
  $.localScroll({ });
  
  /* Animations */
  jQuery('.animated').appear();
  $('.fade-in').appear(function() { jQuery(this).each(function(){ jQuery(this).addClass('fade-in-animation') }); });
  $('.fade-in-left').appear(function() { jQuery(this).each(function(){ jQuery(this).addClass('fade-in-left-animation') }); });
  $('.fade-in-right').appear(function() { jQuery(this).each(function(){ jQuery(this).addClass('fade-in-right-animation') }); });
  $('.slide-in-left').appear(function() { jQuery(this).each(function(){ jQuery(this).addClass('slide-in-left-animation') }); });
  $('.slide-in-right').appear(function() { jQuery(this).each(function(){ jQuery(this).addClass('slide-in-right-animation') }); });
  $('.slide-in-top').appear(function() { jQuery(this).each(function(){ jQuery(this).addClass('slide-in-top-animation') }); });
  $('.slide-in-bottom').appear(function() { jQuery(this).each(function(){ jQuery(this).addClass('slide-in-bottom-animation') }); });
  $('.zoom-in').appear(function() { jQuery(this).each(function(){ jQuery(this).addClass('zoom-in-animation') }); });
  $('.zoom-out').appear(function() { jQuery(this).each(function(){ jQuery(this).addClass('zoom-out-animation') }); });
  $('.bounce-in').appear(function() { jQuery(this).each(function(){ jQuery(this).addClass('bounce-in-animation') }); });  
  $('.flip-in').appear(function() { jQuery(this).each(function(){ jQuery(this).addClass('flip-in-animation') }); });
});
