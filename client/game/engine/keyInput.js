//KEYBOARD INNPUT MODULE START**********************************************************************************

//Set Game Variables//////////////////////////////

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed = false;

//////////////////////////////////////////////////

//Set Listeners///////////////////////////////////

function setKeyboardListeners() {
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
}


///////////////////////////////////////////////////

//Handler Functions/////////////////////////////////

function keyDownHandler(e){
	if(e.key == "Right" || e.key == "ArrowRight") {
		rightPressed = true;
	}
	else if(e.key == "Left" || e.key == "ArrowLeft") {
		leftPressed = true;
	}
	else if(e.key == "Up" || e.key == "ArrowUp") {
		upPressed = true;
	}
	else if(e.key == "Down" || e.key == "ArrowDown") {
		downPressed = true;
	}
	else if(e.key == "Space") {
		spacePressed = true;
	}
}

function keyUpHandler(e){
	if(e.key == "Right" || e.key == "ArrowRight") {
		rightPressed = false;
	}
	else if(e.key == "Left" || e.key == "ArrowLeft") {
		leftPressed = false;
	}
	else if(e.key == "Up" || e.key == "ArrowUp") {
		upPressed = false;
	}
	else if(e.key == "Down" || e.key == "ArrowDown") {
		downPressed = false;
	}
	else if(e.key == "Space") {
		spacePressed = false;
	}
}

///////////////////////////////////////////////////////

//KEYBOARD INPUT MODULE END*******************************************************************************

export {setKeyboardListeners}