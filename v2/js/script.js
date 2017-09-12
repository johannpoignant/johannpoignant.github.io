$(document).ready(function (){
  
	"use strict";
	
	/* Setting Sizes 
	-----------------------------------------------------*/
	
	function setSizes() {
		
		/* General */
		$('.logo-content').css({'margin-top': '-'+($('.logo-content').height()/2)+'px'});
		
		/* Profile */
		$('#profile').css({'height': ($(window).height()) + 'px'});
		$('.profile-content').css({'margin-top': '-'+($('.profile-content').height()/2)+'px'});
		
		/* Portfolio */
		$('.project-info').css({'margin-top': '-'+($('.project-info').height()/2)+'px'});
		
		/* Contact */
		$('#contact, .contact-content').css({'min-height': ($(window).height()) + 'px'});
		
	}
	
	setSizes();
	$(window).resize(function() {
	  setSizes();
	});
	
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
		  
		  console.log('SN: '+sectionName+' M: '+newLink);
	  }
	},{ offset: function() {
		  return -$(this).height()+1;
		}
	  });
	
	/* Resume
	-----------------------------------------------------*/
	
	$('.resume-box').mouseenter(function(){
		$('.resume-box').not(this).each(function() {
            $(this).addClass('disable');
        });
	});
	
	$('.resume-box').mouseleave(function(){
		$('.resume-box').each(function() {
            $(this).removeClass('disable');
        });
	});
	
	/* Blog 
	-----------------------------------------------------*/
	
	// Post Carousel
	
	$(".post-carousel").owlCarousel({
		
		// Most important owl features
		items : false,
		itemsCustom : [[1600,3],[991,2],[0,1]],
		itemsDesktop : false,
		itemsDesktopSmall : false,
		itemsTabletSmall: false,
		itemsMobile : false,
		singleItem : false,
		itemsScaleUp : false,
		slideSpeed : 600,
		paginationSpeed : 800,
		rewindSpeed : 1000,
		navigation : false,
		scrollPerPage : true,
		pagination : true,
		theme : "carousel-theme"
		
	});
	
	var owl = $(".owl-carousel").data('owlCarousel');
	
	$('.post-carousel-next').click(function() {
		owl.next();
		return false;
	});
	
	$('.post-carousel-prev').click(function() {
		owl.prev();
		return false;
	});

	// Post Carousel

	$(".blog-slider").owlCarousel({
		
		// Most important owl features
		items : false,
		itemsCustom : false,
		itemsDesktop : false,
		itemsDesktopSmall : false,
		itemsTabletSmall: false,
		itemsMobile : false,
		singleItem : true,
		itemsScaleUp : false,
		slideSpeed : 600,
		paginationSpeed : 800,
		rewindSpeed : 1000,
		navigation : false,
		scrollPerPage : true,
		pagination : true,
		autoPlay: true,
		theme : "slider-theme"
		
	});
	
	/* Portfolio 
	-----------------------------------------------------*/
	
	// Ajax Project Details
	
	var toLoad;
	
    function loadContent() {　
	     $('.project-content').load(toLoad,showNewContent());
　 }　

	function showNewContent() {
	    $('.project-content').slideUp(700, function () { $('.project-content').slideDown(700, function () { $.waypoints('refresh') }); });
	}
	
	function closeContent() {
		$('.project-content').delay(100).slideUp(1000,'easeOutQuart',function() { $('.project-loader').show(0); $('.project-loader .logo-loader').show(0); $.waypoints('refresh') });
		$('html, body').animate({scrollTop:$('#portfolio').position().top },600); 
	}
	
	$('.ajax-portfolio-link').click(function() {
		toLoad = $(this).attr('href');　
		loadContent();
		$('html, body').animate({scrollTop:$('.project-content').position().top}, 700);
		return false;
	});
	
	$('.ajax-project-close').click(function() {
		closeContent();
	});
	
	/* Smooth Scrolling
	-----------------------------------------------------*/
	
	$.localScroll({
	});
	
	/* Contact
	-----------------------------------------------------*/
	
	$('#contact-form-holder').addClass('form-hidden');
	$('.contact-form-trigger').click(function() {
		if($('#contact-form-holder').hasClass('form-hidden')) {
			$('#contact-form-holder').removeClass('form-hidden').addClass('form-visible');
			$('.contact-form-trigger').addClass('active');
		} else
		if($('#contact-form-holder').hasClass('form-visible')) {
			$('#contact-form-holder').removeClass('form-visible').addClass('form-hidden');
			$('.contact-form-trigger').removeClass('active');
		};
	});
	
	/* Animations
	-----------------------------------------------------*/
	
	jQuery('.animated').appear();

	$('.fade-in').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('fade-in-animation') });
	});
	
	$('.fade-in-left').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('fade-in-left-animation') });
	});
	
	$('.fade-in-right').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('fade-in-right-animation') });
	});
	
	$('.slide-in-left').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('slide-in-left-animation') });
	});
	
	$('.slide-in-right').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('slide-in-right-animation') });
	});
	
	$('.slide-in-top').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('slide-in-top-animation') });
	});
	
	$('.slide-in-bottom').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('slide-in-bottom-animation') });
	});
	
	$('.zoom-in').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('zoom-in-animation') });
	});
	
	$('.zoom-out').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('zoom-out-animation') });
	});
	
	$('.bounce-in').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('bounce-in-animation') });
	});
	 
	$('.flip-in').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('flip-in-animation') });
	});
	
});
