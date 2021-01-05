$(function () {
    $('.buttonClick').click(function (event) {
        $('.content').addClass('noidunghienra');
        $('.momo').addClass('momohienra');
    });
    $('.buttonClose, .momo').click(function () {
        $('.content').removeClass('noidunghienra');
        $('.momo').removeClass('momohienra');
    });

});