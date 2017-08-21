$('document').ready(function() {
	$(".recurrence-options").children().hide();
	$(".recurrence-options .none").show();

	$(".cohort td[data-date]").on("mouseover", function () {
		var date = $(this).attr("data-date");
		var topic = $(this).attr("data-topic");

		highlightCells(date);
		updateHint(date, topic);
	}).on("mouseout", function () {
		$(".cohort td").removeClass('active');
	});
});

function updateHint(date, topic) {
	var message = date + " - " + topic;
	$(".instance-hint").finish().fadeOut(40).html(message).fadeIn(300);
}

function highlightCells(date) {
	var cells = $(".cohort td[data-date='" + date + "']");
	$(".cohort td").removeClass('active');
	cells.addClass('active');
}

var updateRecurrenceOptions = function( el ) {
	var value = el.value;
	var options = $(".recurrence-options");
	options.children().hide();
	options.children("."+value).show();
}


// CHARTS

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Topping');
	data.addColumn('number', 'Visitors');
	data.addColumn('number', 'Members');
	data.addColumn('number', 'Daily Total Attendance');
	data.addColumn('number', 'Cumulative Visitors');
	data.addRows([
		['8/3', 4, 14, 18, 4],
		['8/4', 9, 9, 18, 12],
		['8/5', 13, 2, 15, 17],
		['8/6', 16, 4, 20, 24],
		['8/7', 14, 16, 30, 29]
	]);

	// Set chart options
	var options = {
		title: 'Attendance',
		legend: { position: 'top' }
	};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(data, options);
	$(window).resize(function(){ chart.draw(data, options); });
}