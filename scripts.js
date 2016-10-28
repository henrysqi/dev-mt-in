$(document).ready(function(){
	
//	$(document)
//	$('.friend-tile').hover(function(){
//		$(this).find('.tile-info').css('display', 'block');
//	})
	
	$(document).on('mouseenter', '.friend-tile', function () {
        $(this).find('.tile-info').css({
            "display": "block"
        });
    });
	
	$(document).on('mouseleave', '.friend-tile', function () {
        $(this).find('.tile-info').css({
            "display": "none"
        });
    });
	
})