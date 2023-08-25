$(function () {
    //@media : header 메뉴바
    $('.mopen').on('click', function () {
        $('.bottom_left').toggleClass('on')
    })

    $('.bottom_left>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
        $(this).parent().siblings().find('.sub').slideUp();
        // -> 마지막줄 반응형에서 다른 서브메뉴 클릭했을때 이전 서브메뉴 들어가게하기
    })




    // 메인비쥬얼 : 슬라이드 스테이 타임
    $('.visual_wrap').on('init afterChange', function (e, s, c) {
        $('.stay_bar span').animate({ width: ((100 / 6) * c) + 16.66666666 + "%" }, 400)
    })
    // 메인비쥬얼 : 이미지 다음페이지
    $('.visual_wrap').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
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

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    // slidesToScroll: 1,
                }
            },
        ]
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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    // slidesToScroll: 1,
                }
            },
        ]
    });

    //@media 반응형 content:화살표
    $('.content_wrap .content_mopen .left').on('click', function () {
        $('.content_cap').slick('slickPrev')
    })
    $('.content_wrap .content_mopen .right').on('click', function () {
        $('.content_cap').slick('slickNext')
    })



});