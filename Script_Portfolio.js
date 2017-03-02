
function flip(cardID){
	var cardFront="front"+cardID;
	var cardBack="back"+cardID;
	document.getElementById(cardFront).classList.toggle("hide");
	document.getElementById(cardBack).classList.toggle("show");
}
document.getElementById("back1").setAttribute("style", "display:none;");
document.getElementById("back1").className = "";

document.getElementById("back2").setAttribute("style", "display:none;");
document.getElementById("back2").className = "";

document.getElementById("back3").setAttribute("style", "display:none;");
document.getElementById("back3").className = "";


