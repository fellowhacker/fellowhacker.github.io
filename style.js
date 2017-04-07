$(window).scroll(function() {
var theta = $(window).scrollTop() / 100 % Math.PI;
$('#leftgear').css({ transform: 'rotate(' + theta + 'rad)' });
$('#rightgear').css({ transform: 'rotate(-' + theta + 'rad)' });
});


jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},1000);
	});
});
