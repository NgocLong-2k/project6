$(function () {

    thoigian = setInterval(function () {
        $('.btnslide__next').trigger('click');
    },3000);

    $('.btnslide__next').click(function () {
        clearInterval(thoigian);
        var behind = $('.active').next();
        var vitri = $('.xanh').index()+1;
        $('.btnslide ul li').removeClass('xanh');
        if (vitri == $('.btnslide ul li').length){
            vitri=0;
        }
        $('.btnslide ul li:nth-child('+(vitri+1)+')').addClass('xanh');

        if (behind.length == 0 ){
            $('.active').addClass('remove-left').one('webkitAnimationEnd',function () {
                $('.remove-left').removeClass('remove-left');
            });
            $('.apple__slide ._1slide:first-child').addClass('from-right').one('webkitAnimationEnd',function () {
                $('.active').removeClass('active');
                $('.from-right').addClass('active').removeClass('from-right');
            });
        }else {
            $('.active').addClass('remove-left').one('webkitAnimationEnd',function () {
                $('.remove-left').removeClass('remove-left');
            });
            behind.addClass('from-right').one('webkitAnimationEnd',function () {
                $('.active').removeClass('active');
                $('.from-right').addClass('active').removeClass('from-right');
            });
        }
    });

    $('.btnslide__previous').click(function () {
       var before = $('.active').prev();
        clearInterval(thoigian);
        var vitri = $('.xanh').index()+1;
        $('.btnslide ul li').removeClass('xanh');
        if (vitri == 1){
            vitri = $('.btnslide ul li').length +1;
        }
        $('.btnslide ul li:nth-child('+(vitri-1)+')').addClass('xanh');

        if (before.length == 1 ){
            $('.active').addClass('remove-right').one('webkitAnimationEnd',function () {
                $('.remove-right').removeClass('remove-right');
            });
            before.addClass('from-left').one('webkitAnimationEnd',function () {
                $('.active').removeClass('active');
                $('.from-left').addClass('active').removeClass('from-left');
            });

        }else {
            $('.active').addClass('remove-right').one('webkitAnimationEnd',function () {
                $('.remove-right').removeClass('remove-right');
            });
            $('.apple__slide ._1slide:last-child').addClass('from-left').one('webkitAnimationEnd',function () {
                $('.active').removeClass('active');
                $('.from-left').addClass('active').removeClass('from-left');
            });

        }
    });
    
    $('.btnslide ul li').click(function () {
        $('.btnslide ul li').removeClass('xanh');
        $(this).addClass('xanh');

        $('.active').addClass('remove-right').one('webkitAnimationEnd',function () {
            $('.remove-right').removeClass('remove-right');
        });
        $('.apple__slide ._1slide:nth-child('+($(this).index()+1)+')').addClass('from-left').one('webkitAnimationEnd',function () {
            $('.active').removeClass('active');
            $('.from-left').addClass('active').removeClass('from-left');
        });
    });
});
