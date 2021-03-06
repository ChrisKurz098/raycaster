import React, {useEffect} from "react";
import main from "../../scripts/game/main";

function GameWindow() {

    useEffect(() => {
        const canvas = document.getElementById('canvas');
        main(canvas);
    }, [])

    
    return (
        <canvas id="canvas" width="640" height="360"></canvas>
    )
}

export default GameWindow;