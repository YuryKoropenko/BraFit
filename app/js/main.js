$(function() {
	
	/*slider*/
	$('.p-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		items:1
	});

	/*инструкция*/
	$('.p-filter__inst').fancybox();

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

	/*фильтр*/
	$('.b-filter__link').on('click', function() {

		$(this).parent().toggleClass('b-filter__item-active');
		$(this).parent().children('.b-filter__list').stop(false, true).slideToggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.b-filter__list').length) return;
				$('.b-filter__item').removeClass('b-filter__item-active');
				$('.b-filter__list').slideUp();
				event.stopPropagation();
			});
		return false;
	});

});