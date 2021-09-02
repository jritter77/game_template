import {Detect} from './detection.js';


//Handler Functions/////////////////////////////////
let pos = {x: 0, y: 0};			//initialize mouse position

function mouseMoveHandler(e) {				
	//triggers whenever mouse is moved
	pos = mousePosHandler(e);
}


function mouseDownHandler(e){				
	//triggers anytime mouse is clicked
	if (Detect.pointInRect(pos.x, pos.y, 156, 156, 64, 64)) {
		console.log('in rect');
	}
	else {
		console.log('not in rect');
	}
}


function mouseUpHandler(e){				
	//triggers anytime mouse is released
}

function wheelHandler(e){
	if (e.deltaY < 0){
		//scroll up code here
		console.log("up");
	}
	else{
		//scroll down code here
		console.log("down");
	}
}

///////////////////////////////////////////////////////


//MOUSE POSITION HANDLER FUNCTION/////////////////////////

function mousePosHandler(e){
	const canvas = document.getElementById('myCanvas');
	var rect = canvas.getBoundingClientRect();
	return{
		x: e.clientX - rect.left,
		y: e.clientY - rect.top
	};
}

///////////////////////////////////////////////////////

function getMousePos() {
	return pos;
}

//Set Listeners///////////////////////////////////
function setMouseListeners(canvas) {
    canvas.addEventListener("mousemove", mouseMoveHandler, false);
    canvas.addEventListener("mousedown", mouseDownHandler, false);
    canvas.addEventListener("mouseup", mouseUpHandler, false);
    canvas.addEventListener("wheel", wheelHandler, false);
}

///////////////////////////////////////////////////


//DISPLAY MOUSE COORDINATES FUNCTION//////////////////

function dispMouseCoord(ctx){					//used for debugging, put in main function
	ctx.font = "30px Arial";
	ctx.fillStyle = "white";
	ctx.fillText(`x: ${Math.round(pos.x)}, y: ${Math.round(pos.y)}`, 32, 64);
}

///////////////////////////////////////////////////////

//MOUSE INPUT MODULE END******************************************************************************

export {setMouseListeners, dispMouseCoord, getMousePos}