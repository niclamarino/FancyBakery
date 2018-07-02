		// Menu

		$(document).ready(function(){
			$(".menu-icon").click(function(){
				$(".menu-nav").toggleClass("show");
				$(".menu-icon").toggleClass("hover");
			});
		});

		// Main on load

				$(function() {
			$('.main h2, .main p').addClass('main-load');
		});

		// Parallax Chi siamo

		$(window).load(function(){
	var currentX = '';
	var currentY = '';
	var movementConstant = .015;
	$(document).mousemove(function(e) {
		if(currentX == '') currentX = e.pageX;
		var xdiff = e.pageX - currentX;
		currentX = e.pageX;
		if(currentY == '') currentY = e.pageY;
		var ydiff = e.pageY - currentY;
		currentY = e.pageY; 
		$('.chi-siamo-container div').each(function(i, el) {
			var movement = (i + 1) * (xdiff * movementConstant);
			var movementy = (i + 1) * (ydiff * movementConstant);
			var newX = $(el).position().left + movement;
			var newY = $(el).position().top + movementy;
			$(el).css('left', newX + 'px');
			$(el).css('top', newY + 'px');
		});
	});
});

		// Cards

			;(function ( $ ) {
  //Make your content a heroe
  $.fn.transformHeroes = function() {
      //Variables
      var perspective = '500px',
      delta = 250,
      width = this.width(),
      height = this.height(),
      midWidth = width / 2,
      midHeight = height / 2;
      //Events
      this.on({
      	mousemove: function(e) {
      		var pos = $(this).offset(),
      		cursPosX = e.pageX - pos.left,
      		cursPosY = e.pageY - pos.top,
      		cursCenterX = midWidth - cursPosX,
      		cursCenterY = midHeight - cursPosY;

      		$(this).css('transform','perspective(' + perspective + ') rotateX('+ (cursCenterY / delta) +'deg) rotateY('+ -(cursCenterX / delta) +'deg)');
      		$(this).removeClass('is-out');
      	},
      	mouseleave: function() {
      		$(this).addClass('is-out');
      	}
      });
      //Return
      return this;
  };
}( jQuery ));

//Set plugin on cards
$('.card').transformHeroes();
//# sourceURL=pen.js

            // Contatti

            var $layer_0 = $('.layer-0'),
	$layer_1 = $('.layer-1'),
	$layer_2 = $('.layer-2'),
	$container = $('body'),
	container_w = $container.width(),
	container_h = $container.height();

	$(window).on('mousemove.parallax', function(event) {
		var pos_x = event.pageX,
		pos_y = event.pageY,
		left  = 0,
		top   = 0;

		left = container_w / 2 - pos_x;
		top  = 20;



		TweenMax.to(
			$layer_2, 
			1, 
			{ 
				css: { 
					transform: 'translateX(' + left / 12 + 'px) translateY(' + top / 6 + 'px)' 
				}, 
				ease:Expo.easeOut, 
				overwrite: 'all' 
			});

		TweenMax.to(
			$layer_1, 
			1, 
			{ 
				css: { 
					transform: 'translateX(' + left / 4 + 'px) translateY(' + top / 2 + 'px)' 
				}, 
				ease:Expo.easeOut, 
				overwrite: 'all' 
			});

		TweenMax.to(
			$layer_0,
			10,
			{
				css: {
					transform: 'rotate(' + left / 200 + 'deg)'
				},
				ease: Expo.easeOut,
				overwrite: 'none'
			}
			)
	});
