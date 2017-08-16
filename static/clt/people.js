$.ajax({
	url: 'https://randomuser.me/api/?results=10',
	dataType: 'json',
	success: function (data) {
		console.log(data);
		var template = $(".proto.person")[0].outerHTML,
			people = data['results'],
			peopleLength = people.length;

		people.sort(function (a, b) {
			return a['name']['last'].localeCompare(b['name']['last']);
		});

		for (var i = 0; i < peopleLength; i++) {
			var person = people[i],
				name = toTitleCase(person['name']['first'] + " " + person['name']['last']),
				image = person['picture']['medium'],
				html = template.replace("proto", "");
			html = html.replace("##name##", name);
			html = html.replace("##image##", image);
			$("#people").append(html);
		}

		var selectedIndex = Math.floor((Math.random() * (peopleLength + 1))),
			selectedPerson = people[selectedIndex];

		$(".person").not(".proto").eq(selectedIndex).addClass("uk-background-primary uk-light");

		$('.detail-view').html(function (index, html) {
			var name = toTitleCase(selectedPerson['name']['first'] + " " + selectedPerson['name']['last']),
				image = selectedPerson['picture']['medium'],
				phone = selectedPerson['phone'],
				cell = selectedPerson['cell'],
				email = selectedPerson['email'],
				dob = selectedPerson['dob'],
				registered = selectedPerson['registered'];
			html = html.replace("##image##", image);
			html = html.replace("##phone##", phone);
			html = html.replace("##cell##", cell);
			html = html.replace("##email##", email);
			html = html.replace("##dob##", dob);
			html = html.replace("##registered##", registered);
			return html.replace('##name##', name);
		});

		window.setTimeout(function () {
			$("svg + svg").remove();
		}, 100);
	}
});

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

function choose(choices) {
	var index = Math.floor(Math.random() * choices.length);
	return choices[index];
}

function filterPeople() {
	// Declare variables
	var input, filter, list, entry, label, i;
	input = document.getElementById('people-filter');
	filter = input.value.toUpperCase();
	list = document.getElementById("people");
	entry = list.getElementsByTagName('a');

	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < entry.length; i++) {
		label = entry[i].getElementsByTagName("span")[0];
		console.log(label.innerHTML);
		if (label.innerHTML.toUpperCase().indexOf(filter) > -1) {
			entry[i].style.display = "";
		} else {
			entry[i].style.display = "none";
		}
	}
}