$(function() {
	
	/*slider*/
	$('.p-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		items:1
	});

	$('.p-card__slider').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items:1,
		dotsContainer: '.p-card__pagin'
	});

	$('.p-complect__slider').owlCarousel({
		loop:true,
		nav:true,
		margin:30,
		responsive:{
			0:{
				items:2
			},
			767:{
				items:3
			}
		}
	});

	$('.p-favorite__slider').owlCarousel({
		loop:true,
		nav:true,
		margin:30,
		responsive:{
			0:{
				items:2
			},
			767:{
				items:3
			}
		}
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

	if ($(window).width() < 991) {
		$('.p-basket__price-text').text('Стоимость:')
	}

	$('.p-sposob__list1').children('.p-sposob__item').on('click', function() {
		$('.p-sposob__list1 .p-sposob__item').removeClass('active');
		$(this).addClass('active');
	});
	$('.p-sposob__list2').children('.p-sposob__item').on('click', function() {
		$('.p-sposob__list2 .p-sposob__item').removeClass('active');
		$(this).addClass('active');
	});

});