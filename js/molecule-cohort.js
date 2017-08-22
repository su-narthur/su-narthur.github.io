$('document').ready(function() {
	$(".molecule-cohort td[data-date]").on("mouseover", function () {
		var date = $(this).attr("data-date");
		var topic = $(this).attr("data-topic");

		updateHint(date, topic);
	});
});

function updateHint(date, topic) {
	var message = date + " - " + topic;
	$(".molecule-cohort .instance-hint").finish().fadeOut(40).html(message).fadeIn(300);
}