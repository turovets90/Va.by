$(document).ready(function(){


        $('.hamburger').click(function () {
            $('.main_menu').toggleClass('open');
            $('html').toggleClass('page-noscroll');

            $('.main_menu .mm_close').click(function () {
                $('.main_menu').removeClass('open');
                $('html').removeClass('page-noscroll');
            });
            return false;
        });
        $(document).on('click', function(e) {
            if (!$(e.target).closest(".main_menu.open").length) {
                $(".main_menu.open").removeClass('open');
                $("html").removeClass('page-noscroll');
            }
            e.stopPropagation();
        });


    $('.search_toggler').click(function () {
        $('.search_container').toggleClass('open');
        $('html').toggleClass('page-noscroll1');

        $('.search_container .close_search_form').click(function () {
            $('.search_container').removeClass('open');
            $('html').removeClass('page-noscroll1');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".search_container.open").length) {
            $(".search_container.open").removeClass('open');
            $("html").removeClass('page-noscroll1');
        }
        e.stopPropagation();
    });


    if($(".home_product_slider > div").length >4){
        $('.home_product_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }



    $('.slick_btn_group .slick_prev').click(function(){
        $('.home_product_slider').slick('slickPrev');
    });

    $('.slick_btn_group .slick_next').click(function(){
        $('.home_product_slider').slick('slickNext');
    });


    $('.catalog_title').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('act');
    });


    if($('.product_img_slider .item').length >1){
        $('.product_img_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots:true,
            //fade:true,
        });
    }





    /*************************/


        $('.main_menu .arrow').click(function(){
            $(this).toggleClass('rotate');
            $(this).next().slideToggle();
        });


    if($('.main_slider .slider_item').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots:true,
            fade:true,
            infinite:false,
            //speed: 1000,
            //autoplay: true,
            //autoplaySpeed: 2000,
        });
    }


    $('.f_catalog .show_catalog').click(function () {
        if($('.f_catalog_body').is(':visible')){
            $('.f_catalog_body').slideUp();
            $(this).text('Развернуть').addClass('rotate');
        }else{
            $('.f_catalog_body').slideDown();
            $(this).text('Свернуть').removeClass('rotate');
        }
    });



    if($(".product_slider .product_item").length >3){
        $('.product_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots:false,
            infinite:false,
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },

                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }


    $('.s_catalog .s_title').click(function(){
        $('.s_catalog .s_nav').slideToggle();
        $(this).toggleClass('act');
    });


    $('.tab_content #show_more').click(function(){
        if($('.tab_content .more').is(':visible')){
            $('.tab_content .more').slideUp();
            $(this).text('Подробнее').removeClass('rotate');
        }else{
            $('.tab_content .more').slideDown();
            $(this).text('Свернуть').addClass('rotate');
        }
    })

    $('#show_specifications').click(function(){
        $('.specifications_item').removeClass('hide');
        $(this).hide();
    });


    $(function () {
        $('input, textarea').each(function () {
            $(this).blur(function(){
                if(!this.value){
                    $(this).removeClass('act');
                }
                else{
                    $(this).addClass('act');
                }
            });
            if ( !this.value ) {
                $(this).removeClass('act');
            }
            else{
                $(this).addClass('act');
            }
        });
    });


    $(".phone").mask("+375 (99) 999-99-99");


    /*$(window).resize(function(){
        var header = $('header').outerHeight();
        console.log(header);
        $(window).scroll(function(){
            if ($(window).scrollTop() > header) {
                $('header').addClass('fixed');
                $('body').css({
                    'padding-top':header+'px'
                });
            } else {
                $('header').removeClass('fixed');
                $('body').css({
                    'padding-top':'0px'
                });
            }
        });



    });
    $(window).resize();*/




});


