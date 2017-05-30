function exportColorScheme() {
	var canvas = document.getElementById("spaceMarinePrimarisPainterCanvas");
	var img = new Image();
	img.crossOrigin="anonymous";
	img.src = canvas.toDataURL("image/jpg");
	window.open().location = img;
}