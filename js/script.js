$(document).ready(function () {
    $('.slider').slick({
        nextArrow: '<button class="slider-arrow arrow-next"><img src="./img/slider-next.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slider-arrow arrow-prev"><img src="./img/slider-prev.svg" alt="prev arrow"></button>',

        responsive: [
            {
                breakpoint: 441,
                settings: {
                    arrows: false
                }
            }
        ]


    });


});
