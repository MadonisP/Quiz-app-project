import { useContext, useEffect } from "react";
import { GameStateContext } from '../helpers/Context';

const Menu = () => {
    const { gameState, setGameState} = useContext(GameStateContext);

        return (
            <div className="menu">
                <button
                    onClick={() => { setGameState("playing");}}
                >
                    Start Quiz<br /><span style={{ fontSize: "16px" }}>(your time will start when clicked)</span>
                </button>
            </div>
        )
    }

    export default Menu