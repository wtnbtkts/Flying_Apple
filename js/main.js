var images = ["img/apple1.png","img/apple2.png"];
var images_rand = 0;

var img1_top = 400;
var img1_left = 0;

var yoko = 0;
var speed = 0;

var score = 0;　
var timerId;

var sound = new Audio("sound/sound.mp3");
var sound2 = new Audio("sound/sound2.mp3");

init();  
function init() {

	images_rand = Math.floor(Math.random() * images.length);
	document.getElementById("img1").src = images[images_rand];

	img1_left = 0;
	document.getElementById("img1").style.top = img1_top + "px";
	document.getElementById("img1").style.left = img1_left + "px";


	speed = (Math.floor(Math.random() * 20) + 20) * -1; 
	yoko = Math.floor(Math.random()*30);
}

gravity();
function gravity() {

	if (img1_top < 500) { 
		speed = speed + 2; 
		img1_top = img1_top + speed;
		img1_left = img1_left + yoko;
		document.getElementById("img1").style.top = img1_top + "px";
		document.getElementById("img1").style.left = img1_left + "px";
	} else {
		img1_top = 300;
		init();
	}

	timerId = setTimeout("gravity()",50);
}

function tap() {

	if (images_rand == 0) {
		score++;
		document.getElementById("img1").src = "img/apple3.png";
		sound.play();
	} else if (images_rand == 1) {
		score--;
		document.getElementById("img1").src = "img/dokuro.png";
		sound2.play();
	}
	document.getElementById("score").textContent = score;
	if (score >= 5) {
		clearTimeout(timerId);
		alert("clear!");
	}
}

