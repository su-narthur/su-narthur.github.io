$('document').ready(function() {
	$(".recurrence-options").children().hide();
	$(".recurrence-options .none").show();
});

var updateRecurrenceOptions = function( el ) {
	var value = el.value;
	var options = $(".recurrence-options");
	options.children().hide();
	options.children("."+value).show();
};


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
	data.addColumn('string', 'Date');
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
		legend: { position: 'top' },
		'chartArea': {
			'top': 20,
			'left': 30,
			'bottom': 10,
			'width': '100%',
			'height': '100%'
		}
	};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(data, options);
	$(window).resize(function(){
		// redraw twice in order to fix issue with chart inside resizable flex child
		var chartDiv = $('#chart_div');
		chartDiv.width(0);
		chart.draw(data, options);
		chartDiv.width('auto');
		chart.draw(data, options);
	});
}