$(document).ready(function() {

    var currentPosition = 0;
    var slideWidth = 960;
    var slides = $('.slide');
    var numberOfSlides = slides.length;
    var slideShowInterval;
    var speed = 5000;


    slideShowInterval = setInterval(changePosition, speed);

    slides.wrapAll('<div id="slidesHolder"></div>')

    slides.css({ 'float' : 'left' });

    $('#slidesHolder').css('width', slideWidth * numberOfSlides);


    function changePosition(direction) {
        if (direction != 'next' && direction != 'previous')
        {
            if(currentPosition == numberOfSlides - 1) {
                currentPosition = 0;
            } else {
                currentPosition++;
            }
        }
        if (direction === 'next'){
            if(currentPosition == numberOfSlides - 1) {
                currentPosition = 0;
            } else {
                currentPosition++;
            }
        }
        if (direction === 'previous') {
            if (currentPosition > 0 && direction === "previous") {
                currentPosition -= 1;
            }
            if (currentPosition == 0 && direction === "previous") {
                currentPosition = numberOfSlides - 1;
            }
        }

        moveSlide();
    }


    function moveSlide() {
        $('#slidesHolder')
            .animate({'marginLeft' : slideWidth*(-currentPosition)});
    }

    $( "#btn-next" ).click(function() {
        changePosition('next');
    });

    $( "#btn-previous" ).click(function() {
        changePosition('previous');
    });

});