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
	$('#load-more').on('click', function(){
		var dups = [];
		// if($(window).scrollTop() + $(window).height() == $(document).height()){
			for (i=0; i<5; i++){
		 		$($('#content .row')[0]).clone().hide().appendTo("#content").fadeIn(300);
			}
		// }
	});
});