//DRAW FUNCTIONS/////////////////////////////////////

class Draw {

	static ctx;

	static setCTX(context) {
		Draw.ctx = context;
	}

	//DRAW RECTANGLE FUNCTION
	static drawRect(x, y, width, height, color="black"){
		Draw.ctx.beginPath();
		Draw.ctx.rect(x, y, width, height);
		Draw.ctx.fillStyle = color;
		Draw.ctx.fill();
		Draw.ctx.closePath();
	}

	//DRAW CIRCLE FUNCTION
	static drawCircle(x, y, size, color="black"){
		Draw.ctx.beginPath();
		Draw.ctx.arc(x, y, size, 0, Math.PI*2);
		Draw.ctx.fillStyle = color;
		Draw.ctx.fill();
		Draw.ctx.closePath();
	}

	//DRAW TEXT FUNCTION
	static drawText(x, y, str, style="30px Arial"){
		Draw.ctx.font = style;
		Draw.ctx.fillStyle = "black";
		Draw.ctx.fillText(str, x, y);
	}
}




////////////////////////////////////////////////////

//GENERAL FUNCTIONS MODULE END************************************************************************************

export {Draw}