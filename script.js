// slider

function getSlidesCount() {
	var count = $('.slider li').length;

	return count;
}

function getSlideWidth() {
	var width = $('.slider li').width();

	return width;
}

function next() {
	var slidesCount = getSlidesCount() - 1;
	var currentSlide = $('.slider li.active').index();
	var nextSlide = currentSlide != slidesCount ? currentSlide + 1 : 0;

	activateSlideThumb(nextSlide);
	goToSlide(nextSlide);
}

function prev() {
	var slidesCount = getSlidesCount() - 1;
	var currentSlide = $('.slider li.active').index();
	var prevSlide = currentSlide != 0 ? currentSlide - 1 : slidesCount;

	activateSlideThumb(prevSlide);
	goToSlide(prevSlide);
}

function goToSlide(index) {
	$('.slider li').removeClass('active');
	$('.slider li:eq(' + index + ')').addClass('active');
	$('.slider ul').css('left', -1000 * index + 'px');
}

function activateSlideThumb(index) {
	$('.slider-thumbs li').removeClass('active');
	$('.slider-thumbs li:eq(' + index + ')').addClass('active');
}

$(document).ready(function() {
	var sliderWidth = getSlideWidth() * getSlidesCount();

	$('.slider ul').css({
		'width': sliderWidth
	});

	activateSlideThumb(0);
	goToSlide(0);

	$('.go-right').on('click', function() {
		next();
	});

	$('.go-left').on('click', function() {
		prev();
	});

	$('.slider-thumbs a').on('click', function(e) {
		e.preventDefault();
		var i = $(this).parent().index();
		activateSlideThumb(i);
		goToSlide(i);
	});

	$(document).keydown(function(e) {
		switch (e.which) {
			case 37: // left
				prev();
				break;
			case 38: // up
				prev();
				break;
			case 39: // right
				next();
				break;
			case 40: // down
				next();
				break;
		};
	});
});
