$(function () {
    // 메인비쥬얼 : 슬라이드 스테이 타임
    $('.visual_wrap').on('init afterChange', function (e, s, c) {
        $('.stay_bar span').animate({ width: ((100 / 6) * c) + 16.66666666 + "%" }, 400)
    })
    // 메인비쥬얼 : 이미지 다음페이지
    $('.visual_wrap').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    // 메인비쥬얼 : 화살표
    $('.main_visual .main_arrows .left').on('click', function () {
        $('.visual_wrap').slick('slickPrev')
    })
    $('.main_visual .main_arrows .right').on('click', function () {
        $('.visual_wrap').slick('slickNext')
    })










    // product : 이미지 다음페이지
    $('.product_img').slick({
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
    });

    $('.product_wrap .product_arrows .left').on('click', function () {
        $('.product_img').slick('slickPrev')
    })
    $('.product_wrap .product_arrows .right').on('click', function () {
        $('.product_img').slick('slickNext')
    })






    // content : 이미지 다음페이지
    $('.content_cap').slick({
        slidesToShow: 3,
        arrows: false,
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
    });



});