
$(document).ready(function(){
	$('#load-more-btn').on('click', function(){
		var dups = [];
		// if($(window).scrollTop() + $(window).height() == $(document).height()){
			for (i=0; i<5; i++){
		 		var $clone = $($('#content .row')[0]).clone();
		 		var randomX  = randomDimension();
		 		var randomY  = randomDimension();
		 	  $clone.find('.card-image img').attr('src', 'http://placekitten.com/' + randomX + '/' + randomY);
		 		$clone.hide().appendTo("#content");
		 		$clone.fadeIn(300);
			}
		// }
	});

	function randomDimension() {
		var dimensions = [611,612,613,614,615,616];
		return dimensions[Math.floor(Math.random() * dimensions.length)].toString();
	}
});