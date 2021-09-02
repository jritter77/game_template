import {setMouseListeners, dispMouseCoord} from './mouseInput.js';
import { Draw } from './draw.js';
import { TitleScreen } from '../views/titleScreen.js';

//Create Canvas////////////////////////

const canvas = document.createElement('CANVAS');
const ctx = canvas.getContext('2d');

canvas.id = 'myCanvas';
canvas.width = 800;
canvas.height = 480;
canvas.style.backgroundColor = 'black';


///////////////////////////////////////// 

function launchGame() {
    $('#gameContainer').append(canvas);
	setMouseListeners(canvas);
	Draw.setCTX(ctx);
	runGame();
}


//MAIN PROGRAM START******************************************************************************************
function runGame(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	//GAME FUNCTIONS START/////////////////////////////////////////////////////////
	dispMouseCoord(ctx);
	
	
	TitleScreen();	

	//GAME FUNCTIONS END//////////////////////////////////////////////////////////
	requestAnimationFrame(runGame);
}
//MAIN PROGRAM END*********************************************************************************************




export {launchGame}









