// slider
// var slider = document.getElementsByClassName('slider');

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
  console.log('slidesCount: ', slidesCount);

  var currentSlide = $('.slider li.active').index();
  console.log('currentSlide: ',currentSlide);

  var nextSlide = currentSlide != slidesCount ? currentSlide + 1 : 0;
  console.log('nextSlide: ', nextSlide);

  $('.slider li').removeClass('active');
  $('.slider li:eq(' + nextSlide + ')').addClass('active');
}

function prev() {
  var slidesCount = getSlidesCount() - 1;
  console.log('slidesCount: ', slidesCount);

  var currentSlide = $('.slider li.active').index();
  console.log('currentSlide: ',currentSlide);

  var prevSlide = currentSlide != 0 ? currentSlide - 1 : slidesCount;
  console.log('prevSlide: ', prevSlide);

  $('.slider li').removeClass('active');
  // $('.slider li:eq(' + currentSlide + ')').fadeOut("fast",function(){
    $('.slider li:eq(' + prevSlide + ')').addClass('active');
  // });
}

$(document).ready(function() {

  $('.go-right').on('click', function(){
    next();
  });

  $('.go-left').on('click', function(){
    prev();
  });
});
