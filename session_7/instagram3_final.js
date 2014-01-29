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
		 		var $el = $($('#content .row')[0]).clone();
		 		$el.hide().appendTo("#content");
		 		// $el.children('.card-tray').children('.card').children('.card-image').attr('src', 'http://placekitten.com/613/613');
		 		$el.fadeIn(300);
			}
		// }
	});
});