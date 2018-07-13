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

$(".row").on("click", "div", function() {
	if ($("#firstElement").hasClass("questionMark")) {
		var clickedElement = $(this).children("img").attr("class");
		$("#firstElement").attr("class", clickedElement);
	} else {
		if ($("#secondElement").hasClass("questionMark")) {
			var clickedElement = $(this).children("img").attr("class");
			$("#secondElement").attr("class", clickedElement);
		}
	}
});

$("#formula span").on("click", function() {
	if(!($(this).children("img").hasClass("questionMark"))) {
		$(this).children("img").attr("class", "questionMark");
	}
});

$("#equalButton").on("click", function() {
	let ele1 = $("#firstElement").attr("class");
	let ele2 = $("#secondElement").attr("class");
	console.log(ele1 + " + " + ele2);

	//if two elements are selected
	if (ele1 != "questionMark" && ele2 != "questionMark") {
		if ( (ele1 + " + " + ele2) == "fire + water") {
			$("#result").addClass("steam");
			$(".steam").parent().removeAttr("hidden");
		}
	}
});