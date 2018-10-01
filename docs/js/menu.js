$('#js-hover').on('mouseenter', function(){
    $('#js-menu').slideDown();
});
$('#js-hover').on('mouseleave', function(){
    $('#js-menu').slideUp();
});
$(document).on('click', '#mobile-menu-icon', function(){
    $('#mobile-menu').animate({width :'toggle'});
});
$(document).on('click', '#mobile-menu-close', function(){
    $('#mobile-menu').animate({width :'toggle'});
})