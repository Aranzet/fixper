$(document).ready(function(){
    if (screen.width > 420) {
        $('.team__slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            prevArrow: '<div class="prev team__slider__prev">Назад</div>',
            nextArrow: '<div class="next team__slider__next">Далее</div>',
            responsive: [
                {
                breakpoint: 420,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                breakpoint: 780,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ]
        });
    }
    if (screen.width >= 420) {
        $('.team__slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            prevArrow: '<div class="prev team__slider__prev">Назад</div>',
            nextArrow: '<div class="next team__slider__next">Далее</div>',
        });
    }
});
$(document).ready(function(){
    $('.reviews__slider').slick({
        dots: true,
        infinite: true,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev reviews__slider__prev">Назад</div>',
        nextArrow: '<div class="next reviews__slider__next">Далее</div>',
        responsive: [
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
    });
});