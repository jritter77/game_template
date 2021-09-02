
class Detect {

	//DISTANCE FUNCTION
	static getDist(ax, ay, bx, by){
		var dx = ax - bx;
		var dy = ay - by;
		var d = Math.sqrt(dx*dx + dy*dy);
		return d;
	}

	//DIRECTION FUNCTION
	static getDir(ax, ay, bx, by){
		var dx = bx - ax;
		var dy = by - ay;
		var dir = Math.atan(dy/dx);

		if (dx<0){
			dir+= Math.PI;
		}
		else if (dy<0){
			dir += Math.PI*2;
		}
		
		
		return (dir);
	}



	//Collision Detection////////////////////////////////

	static collisionCircleObj(a, b){
		dx = (a.x+a.boundX) - (b.x+b.boundX);
		dy = (a.y+a.boundY) - (b.y+b.boundY);
		dist = Math.sqrt(dx*dx + dy*dy)

		if (a.boundR + b.boundR > dist){
			return true;
		}
	}

	static collisionCircle(x1, y1, r1, x2, y2, r2){
		dx = (x1) - (x2);
		dy = (y1) - (y2);
		dist = Math.sqrt(dx*dx + dy*dy)

		if (r1 + r2 > dist){
			return true;
		}
		return false;
	}

	static collisionRectObj(a, b){
		if (a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y) {
			return true;
		}
		return false;
	}

	static collisionRect(x1, y1, w1, h1, x2, y2, w2, h2){
		if (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2) {
			return true;
		}
		return false;
	}

	static pointInRect(px, py, rx, ry, rw, rh) {
		if (px > rx && px < (rx+rw) && py > ry && py < (ry+rh)) {
			return true;
		}
		return false;
	}

}

export {Detect}
