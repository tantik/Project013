$(window).resize(function() {
	positionPopup();
});
$(document).ready(initPage);
function initPage(){
	initPopup();
	initNav();
}
function initNav(){
	$('.open-nav').click(function(){
		$('body').toggleClass('opened');
	});
}
/* Popup initiation */
function initPopup() {
	$('a[data-popup]').click(function(e) {
		e.preventDefault();
		var id = $(this).attr('data-popup');
		var maskHeight = $(document).height();
		$('.fader').css({'height':maskHeight});
		$('.fader').show();
		positionPopup();
		if($('#' + id).height() >= $(window).height()){
			$('#' + id).css({
				top: $(window).scrolltop(),
			});
		} else {
			$('#' + id).css({
				top: $(window).scrollTop()+ $(window).height()/2,
				marginTop: -$('#' + id).height()/2
			});
		}
		$('#' + id).show();
	});
	$('.popup-close').click(function (e) {
		e.preventDefault();
		$('.fader').hide();
		$('.popup').hide();
	});
	$('.fader').click(function () {
		$(this).hide();
		$('.popup').hide();
		$('body').removeClass('opened');
	});
}
/* Popup position */
function positionPopup(){
	if($('.popup').width() < $(document).width()){
		$('.popup').css({
			'marginLeft': -($('.popup').width())/2,
			'left': '50%'
		});
	}
	else{
		$('.popup').css({
			'marginLeft': 0,
			'left': 0
		});
	}
}