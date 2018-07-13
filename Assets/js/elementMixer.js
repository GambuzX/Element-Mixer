var elementLinks = {
	questionMark: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/2000px-Question_Mark.svg.png",
	potato: "http://carismapotatoes.ca/wp-content/uploads/2016/09/potato.png"
};

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