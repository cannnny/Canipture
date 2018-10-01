$('#js-hover').on('mouseenter', function(){
    $('#js-menu').slideDown();
});
$('#js-hover').on('mouseleave', function(){
    $('#js-menu').slideUp();
});
$(document).on('click', '#mobile-menu-icon', function(){
    $('#mobile-menu').addClass('active');
});
$(document).on('click', '#menu-close-icon', function(){
    $('#mobile-menu').removeClass('active');
});