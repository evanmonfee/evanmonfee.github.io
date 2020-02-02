
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



function carousel() {
    var i;
    var x = document.getElementsByClassName("profileSlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 3 seconds
}


