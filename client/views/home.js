import { launchGame } from "../game/engine/game.js";




function Home() {

    // Set basic page structure
    $('#app').append(`
        <div class='row' style='margin-top:5%'>
            <div id='leftColumn' class='col'></div>
            <div id='gameContainer' class='col'></div>
            <div id='rightColumn' class='col'></div>
        </div>
    `);


    // Lauch game to home screen. Creates/appends canvas, sets listeners, and calls game loop.
    launchGame();

}

export {Home};



