rowSize=7;
colSize=10;
shipSize=3;
numShips=3;	//Num of ships and attemps can be changed as needed. It is enough to make changes only in the declaration part.
shipLocation=[];
guesses=0;
shipsSunk=0;
attempts=15;
score=0;

function updateScore()
{
	document.getElementById("scoreDisplay").innerHTML=score;
	document.getElementById("scoreDisplayResult").innerHTML=score;
}

function checkGuess(id) {
	guesses++;
	for(var i=0;i<shipLocation.length;i++)
	{
		if(shipLocation[i]==id)
		{
			document.getElementById(id).innerHTML="HIT";	//Update HIT to an image of a ship
			score=score+100;
			updateScore();
			shipLocation.splice(i,1);
			//console.log(shipLocation);
			isSunk();
			return;
		}
	}
	if(document.getElementById(id).innerHTML!="HIT")
	{
	if(document.getElementById(id).innerHTML!="X")			//Update X to an image
	{
		document.getElementById(id).innerHTML="X";
		attempts--;
		score=score-20;
		if(score<0)
			score=0;
		updateScore();
		document.getElementById("attemptsLeft").src="Images/"+attempts+".PNG";
		if(attempts==0)
		{
			document.getElementById("displayResult").className="displayDiv";
			document.getElementById("displayResult").className="fadeIn";
		}
			return;
	}
	}
}

function isSunk()
{
	for(var i=0;i<shipLocation.length-1;i++)
	{
		if((shipLocation[i]=="end")&&(shipLocation[i+1]=="end"))	//A ship is sunk
		{
			shipsSunk++;
			score=score+500;
			updateScore();
			document.getElementById("shipsLeft").src="Images/"+(numShips-shipsSunk)+".PNG";
			//console.log(shipsSunk);
			shipLocation.splice(i+1,1);
		}
	}
	if(shipsSunk==numShips)
	{
		document.getElementById("resultImage").src="Images/YouWon.PNG";
		document.getElementById("displayResult").className="displayDiv";
		//alert('You have sunk all the ships in '+guesses+' guesses'); 		//Guesses are also stored in case you want to change the game format
	}
}

function locationCheck(location)
{
	for(var i=0;i<location.length;i++)
	{
		//console.log(location[i]);
		if(shipLocation.indexOf(location[i])>=0)
			return false;		//match found
	}
	return true;
}

function loadShips()
{
	//numShips=document.getElementById("numShipsText").value;	//For custom input. The input content have been removed from HTML, but is retained in js just in case.
	//document.getElementById("inputNumShips").className="hideDiv";	//For custom input

	var shipsGenerated=0;
	while(shipsGenerated!=numShips)
	{
		var direction=Math.floor(Math.random()*2);
		var newLocation=[];
		if(direction==0)				//Horizontal Ship
		{
			var row=Math.floor(Math.random()*rowSize);
			var col=Math.floor(Math.random()*((colSize-shipSize)+1));
			for(var i=0;i<shipSize;i++)
			{
				newLocation.push(row+""+col);
				col++;
			}
			//console.log('Location: '+newLocation);
		}
		else						//Vertical Ship
		{
			var col=Math.floor(Math.random()*colSize);
			var row=Math.floor(Math.random()*((rowSize-shipSize)+1));
			for(var i=0;i<shipSize;i++)
			{
				newLocation.push(row+""+col);
				row++;
			}
			//console.log('Location: '+newLocation);
		}
		if(locationCheck(newLocation))
		{
			console.log('Location: '+newLocation);	
			shipLocation.push("end");
			for(var j=0;j<newLocation.length;j++)
				shipLocation.push(newLocation[j]);
			shipsGenerated++;
			//console.log("shipsGenerated"+shipsGenerated);		
		}
	}
	shipLocation.push("end");
	//console.log("Locations.."+shipLocation);
}

function displayGame()
{
	document.getElementById("homeScreen").className="hideDiv";
	document.getElementById("instructionsScreen").className="hideDiv";
	//document.getElementById("numShipsText").focus();			//For custom input
}

function displayHome()
{
	//document.getElementById("homeScreen").setAttribute("style","display:block;");
	
	if((shipsSunk==numShips)||(guesses==0)||(attempts==0))
		location.reload();
	else 
	{
		if(confirm("You will lose your current progress. Continue?"))
			location.reload();
	}
}

function displayInstructions()
{
	document.getElementById("homeScreen").className="hideDiv";
	document.getElementById("instructionsScreen").className="displayDiv";
	//document.getElementById("homeScreen").removeAttribute("style");	//Use this if hideDiv CSS class fails
}

window.onload = init;

function init() {
	document.getElementById("displayResult").className="hideDiv";
	document.getElementById("shipsLeft").src="Images/"+(numShips-shipsSunk)+".PNG";
	document.getElementById("attemptsLeft").src="Images/"+attempts+".PNG";
	updateScore();
	loadShips();
}