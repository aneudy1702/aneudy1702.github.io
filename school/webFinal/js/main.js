var bg_classes = ["dark", "color", "fire", "regular"];
setInterval(function (argument) {
	$('body').removeClass('dark color fire regular').addClass(_.shuffle(bg_classes)[0]);
}, 3000);