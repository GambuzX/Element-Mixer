var elementLinks = {
	questionMark: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/2000px-Question_Mark.svg.png",
	potato: "http://carismapotatoes.ca/wp-content/uploads/2016/09/potato.png"
}

$(".row").on("click", "div", function() {
	if ($("#firstElement").hasClass("questionMark")) {
		var clickedElement = $(this).children("img").attr("class");
		$("#firstElement").removeClass("questionMark");
		$("#firstElement").addClass(clickedElement);
	} else {
		if ($("#secondElement").hasClass("questionMark")) {
			var clickedElement = $(this).children("img").attr("class");
			$("#secondElement").removeClass("questionMark");
			$("#secondElement").addClass(clickedElement);
		}
	}
})