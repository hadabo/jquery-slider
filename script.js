// slider
// var slider = document.getElementsByClassName('slider');

function countSliders() {
    var count = $('.slider ul li img').length;

    console.log(count);
    return count;
}

function getSlideWith() {
    var width = $('.slider ul li').width();

    console.log(width);
    return width;
}

function next(index) {
  $('.slider li:eq(' + index + ')').css('z-index', 1);
  return null;
}

$(document).ready(function() {
    countSliders();
    var x = getSlideWith();
    var y = next(0);

    console.log(y);


    $('.go-right, .go-left').on('click', function(){
      // var currentSlide = $('.slider li:eq(' + index + ')').css('z-index');

        next(1);
    });
});
