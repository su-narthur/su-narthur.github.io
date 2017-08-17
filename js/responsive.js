$(document).ready(function() {
	$('.to-detail').on("click", function() {
		$('body').addClass('detail-active');
	});
	$('.to-list').on("click", function() {
		$('body').removeClass('detail-active');
	});
});