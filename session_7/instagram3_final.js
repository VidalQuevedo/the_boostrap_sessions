$(document).ready(function(){
	$(window).on('scroll', function(){
		var dups = [];
		if($(window).scrollTop() + $(window).height() == $(document).height()){
			for (i=0; i<5; i++){
		 		$($('#content .row')[0]).clone().appendTo("#content");
			}
		}
	});
});