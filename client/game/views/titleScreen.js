import { Draw } from "../engine/draw.js";
import { getMousePos } from "../engine/mouseInput.js";

const TitleScreen = () => {
    const canvas = document.getElementById('myCanvas');
    const mouse_pos = getMousePos();

    Draw.drawCircle(mouse_pos.x, mouse_pos.y, 4, 'red');
}


export {TitleScreen}