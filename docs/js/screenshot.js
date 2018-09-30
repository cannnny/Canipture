$('.fadein').on('inview', function(event, isInView){
	if (isInView){
		$(this).addClass('fadein-anime');
	}
});

window.onload = function() {
    baguetteBox.run('.scroll');
};