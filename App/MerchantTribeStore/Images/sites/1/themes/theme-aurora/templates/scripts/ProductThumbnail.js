$(function () {
    $('.record').hover(
        function () {
            $(this).children('.productInfo').animate({ top: '-=72', opacity: 0.74 });
            $(this).children('.productImageLink').children('.recordimage').css('background-position', '0px -275px');
        },
        function () {
            $(this).children('.productInfo').animate({ top: '+=72', opacity: 0.10 });
            $(this).children('.productImageLink').children('.recordimage').css('background-position', '0px 0px');
        });
});