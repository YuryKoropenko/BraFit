$(function() {
	
	/*slider*/
	$('.p-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		items:1
	});

	/*mob-menu*/
	$('.h-mobmenu').on('click', function() {
		$('.header__bottom').toggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.header__bottom').length) return;
				$('.header__bottom').hide();
				event.stopPropagation();
			});
		return false;
	});

	$('.p-filter__inst').fancybox();

});