// slider
// var slider = document.getElementsByClassName('slider');

function countSlides() {
    var count = $('.slider li').length;

    return count;
}

function getSlideWith() {
    var width = $('.slider li').width();

    return width;
}

function next() {
  var currentSlide = $('.slider li.active').index();
  var nextSlide;

  if (currentSlide == countSlides() - 1) {
    nextSlide = 0;
  } else {
    nextSlide = currentSlide + 1;
  }

  $('.slider li').removeClass('active');
  $('.slider li:eq(' + nextSlide + ')').addClass('active');
}

function prev() {
  var currentSlide = $('.slider li.active').index();
  var prevSlide = currentSlide == 0 ? countSlides() - 1 : currentSlide - 1;


  $('.slider li').removeClass('active');
  $('.slider li:eq(' + prevSlide + ')').addClass('active');
}

$(document).ready(function() {
    $('.go-right').on('click', function(){
        next();
    });
    $('.go-left').on('click', function(){
        prev();
    });
});
