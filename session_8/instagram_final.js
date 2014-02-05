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
		var dups = [];
		// if($(window).scrollTop() + $(window).height() == $(document).height()){
			for (i=0; i<5; i++){
		 		var $clone = $($('#content .row')[0]).clone();

		 		$clone.hide().appendTo("#content");

		 		// $clone.children('.card-tray').children('.card').children('.card-image').attr('src', 'http://placekitten.com/613/613');
		 		$clone.fadeIn(300);
			}
		// }
	});
});