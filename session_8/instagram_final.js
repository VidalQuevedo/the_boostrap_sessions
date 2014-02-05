
$(document).ready(function(){
	$('#load-more-btn').on('click', function(){
		var dimensions = [611,612,613,614,615,616];
		var dups = [];
		// if($(window).scrollTop() + $(window).height() == $(document).height()){
			for (i=0; i<5; i++){
		 		var $clone = $($('#content .row')[0]).clone();
		 		var randomX  = dimensions[Math.floor(Math.random() * dimensions.length)].toString();
		 		var randomY  = dimensions[Math.floor(Math.random() * dimensions.length)].toString();
		 	  $clone.find('.card-image img').attr('src', 'http://placekitten.com/' + randomX + '/' + randomY);
		 		$clone.hide().appendTo("#content");
		 		$clone.fadeIn(300);
			}
		// }
	});

	var random
});