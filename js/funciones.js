// smoothScroll function is applied from the document ready function
(function($) {
	$('.scroll').on('click', function(e) {
		e.preventDefault();
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top
	}, 1500);
});

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
    	if ($(this).scrollTop() > 800) {
    		$('.ir-arriba').fadeIn();
    	} else {
    		$('.ir-arriba').fadeOut();
    	}
    });

	//Menu slider
	$('.logo-diamond').click(function(){
		$('#inicio').toggleClass('active');
		$('.main-nav').toggleClass('active');
		$('.main-menu').toggleClass('active');
		$('#services').toggleClass('active');
		$('#who').toggleClass('active');
		$('#desc1').toggleClass('active');
		$('#datos').toggleClass('active');
		$('#desc2').toggleClass('active');
		$('#team').toggleClass('active');
		$('#contact').toggleClass('active');
		return false;
	});
})(jQuery);
