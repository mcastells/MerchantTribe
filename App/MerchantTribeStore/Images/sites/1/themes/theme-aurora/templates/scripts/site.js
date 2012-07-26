$(function () {
    // bg
    $.backstretch('https://s3.amazonaws.com/illtee-web/layout/bg.jpg');

    // select text in qty field on focus
    $('input[name="qty"]').focus(function () { $(this).select(); });

});