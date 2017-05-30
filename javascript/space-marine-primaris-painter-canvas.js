function paintCanvas() {
	var canvas = document.getElementById("spaceMarinePrimarisPainterCanvas");
	if (canvas.getContext("2d")) {
		var context = canvas.getContext("2d");
		
		paintBackground(context);
	} else {
		alert('You need HTML5 compatible browser to see this demo.');
	}
}

function paintBackground(context) {
	var img = new Image();
		img.onload = function(){
		context.drawImage(img,0,0);
		  
		paintArmor(context);
	};
	img.src = "./img/SpaceMarineHeraldryCardA5.jpg";
}

function paintArmor(context) {
	paintHead(context);
}

function paintHead(context) {
	paintHelmet(context);
	
	paintEyes(context);
}

function paintHelmet(context) {
	
}

function paintEyes(context) {
	// Right eye
	context.beginPath();
	context.moveTo(192, 70);
	context.lineTo(197, 70);
	context.lineTo(203, 71);
	context.lineTo(209, 74);
	context.lineTo(206, 75);
	context.lineTo(203, 77);
	context.lineTo(196, 75);
	context.lineTo(195, 73);
	context.closePath();
	context.fillStyle = "rgba(200, 0, 0, 0.5)";
	context.fill();
	
	// Left eye
	context.beginPath();
	context.moveTo(233, 70);
	context.lineTo(227, 70);
	context.lineTo(220, 71);
	context.lineTo(217, 74);
	context.lineTo(220, 75);
	context.lineTo(223, 77);
	context.lineTo(230, 75);
	context.lineTo(231, 73);
	context.closePath();
	context.fillStyle = "rgba(200, 0, 0, 0.5)";
	context.fill();
}