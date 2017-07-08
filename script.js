$(function(){

	$(window).scroll(function() {
		
			if ($(window).scrollTop()>=500) {
				$(".encabezado").removeClass("menu-large").addClass("menu-small");
			}
			else {
				$(".encabezado").removeClass("menu-small").addClass("menu-large");
			}
	});
});
