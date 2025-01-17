/*var elementLinks = {
	questionMark: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/2000px-Question_Mark.svg.png",
	potato: "http://carismapotatoes.ca/wp-content/uploads/2016/09/potato.png",
	fire: ,
	earth: ,
	water: ,
	air: ,
	mud: ,
	brick: ,
	rain: ,
	plant: ,
	lava: ,
	obsidian: ,
	grass: ,
	dew: ,
	swamp: ,
};*/

var formulas = {
	"fire + water": {class: "steam", label: "Steam" },
	"fire + earth": {class: "lava", label: "Lava" },
	"fire + air": {class: "energy", label: "Energy"},
	"water + water": {class: "sea", label: "Sea" }, 
	"water + air": {class: "rain", label: "Rain" },
	"water + earth": {class: "mud", label: "Mud" },
	"air + earth" : {class: "dust", label: "Dust" },
	"energy + earth": {class: "potato", label: "Potato" },
	"fire + potato": {class: "firePotato", label: "Flaming Potato" },
	"water + potato": {class: "waterPotato", label: "Swimming Potato" },
	"air + potato": {class: "airPotato", label: "Supah Potato" },
	"earth + potato": {class: "earthPotato", label: "Potato Mine"},
	"potato + energy": {class: "wizardPotato", label: "Wizard Potato"},
	"lava + potato": {class: "lavaPotato", label: "Flamin'Hot"},
	"potato + potato": {class: "megaPotato", label: "Mega Potato"},
	"energy + water": {class: "tomato", label: "Tomato"},
	"fire + tomato": {class: "fireTomato", label: "Burnt Tomato" },
	"water + tomato": {class: "waterTomato", label: "Tomato Juice" },
	"air + tomato": {class: "airTomato", label: "Pilot Tomato" },
	"earth + tomato": {class: "earthTomato", label: "Tomato Planet"},
	"tomato + energy": {class: "wizardTomato", label: "Wizard Tomato"},
	"lava + tomato": {class: "lavaTomato", label: "Super Hot Sauce"},
	"tomato + tomato": {class: "megaTomato", label: "Mega Tomato"},
	"megaPotato + megaTomato": {class: "apocalypse", label: "Apocalypse"}
};

var createdElements = [];
var historyCounter = 0;

$(".row").on("click", "div", function() {
	//Check if there is any space in the formula available
	if ($("#firstElement").hasClass("questionMark")) {
		var clickedElement = $(this).children("img").attr("class");
		$("#firstElement").attr("class", clickedElement);
	} else {
		if ($("#secondElement").hasClass("questionMark")) {
			var clickedElement = $(this).children("img").attr("class");
			$("#secondElement").attr("class", clickedElement);
		}
	}

	//Reset resulting element
	$("#result").attr("class", "questionMark");
});

$("#formula span").on("click", function() {
	if(!($(this).children("img").hasClass("questionMark"))) {
		$(this).children("img").attr("class", "questionMark");
	}
});

$("#equalButton").on("click", function() {
	let ele1 = $("#firstElement").attr("class");
	let ele2 = $("#secondElement").attr("class");
	let formula1 = ele1 + " + " + ele2;
	let formula2 = ele2 + " + " + ele1;

	//if two elements are selected
	if (ele1 != "questionMark" && ele2 != "questionMark") {
		let resultClass = null;
		let resultLabel = null;
		if (formulas.hasOwnProperty(formula1)) {
			resultClass = formulas[formula1].class;
			resultLabel = formulas[formula1].label;
		} else if (formulas.hasOwnProperty(formula2)){
			resultClass = formulas[formula2].class;
			resultLabel = formulas[formula2].label;
		}

		// Update tried formulas registry
		historyCounter++;
		$("#attemptedFormulas").append("<li><strong>" + historyCounter + ".</strong> " + ele1 + " + " + ele2 + " = " + (resultClass == null ? "?" : resultClass) + "</li>")

		// Verify if it is a new element
		if (resultClass != null) {
			//Check if element is repeated
			let repeated = false;
			for (let i = 0; i < createdElements.length; i++)
				if (createdElements[i] == resultClass)
					repeated = true;

			if (!repeated) {
				//create new element
				createdElements.push(resultClass);
				$(".row").append("<div class='col-lg-2 col-md-3 col-sm-4 col-xs-6 circle'><img class='" + resultClass + "'><span class='caption'>" + resultLabel + "</span></div>");

				//change resulting element
				$("#result").attr("class", resultClass);

				//reset elements to question mark
				$("#firstElement").attr("class", "questionMark");	
				$("#secondElement").attr("class", "questionMark");	
			}	
		}

	}
});

$("#history>button").on("click", function() {
	$("#history>div").toggleClass("hidden");
	if ($("#history>div").hasClass("hidden")) {
		$("#history>button").attr("class", "side-button button-historyHidden");
	} else {
		$("#history>button").attr("class", "side-button button-historyUp");
	}
});