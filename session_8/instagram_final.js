// $(document).ready(function(){
// 	$(window).on('scroll', function(){
// 		var dups = [];
// 		if($(window).scrollTop() + $(window).height() == $(document).height()){
// 			for (i=0; i<5; i++){
// 		 		$($('#content .row')[0]).clone().appendTo("#content");
// 			}
// 		}
// 	});
// });

$(document).ready(function(){
	$('#load-more-btn').on('click', function(){
		var dimensions = [611,612,613,614,615,616];
		var dups = [];
		// if($(window).scrollTop() + $(window).height() == $(document).height()){
			for (i=0; i<5; i++){
		 		var $clone = $($('#content .row')[0]).clone();
		 		var rand_x  = dimensions[Math.floor(Math.random() * dimensions.length)].toString();
		 		var rand_y  = dimensions[Math.floor(Math.random() * dimensions.length)].toString();
		 	  $clone.find('.card-image img').attr('src', 'http://placekitten.com/' + rand_x + '/' + rand_y);
		 		$clone.hide().appendTo("#content");
		 		$clone.fadeIn(300);
			}
		// }
	});
});