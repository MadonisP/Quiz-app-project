import { useContext } from "react";
import {GameStateContext}  from '../helpers/Context';

const Menu = () => {
    const { gameState, setGameState} = useContext(GameStateContext);
    return (
        <div className="Menu">
            <button
                onClick={() => {
                    setGameState("playing");
                }}
            >
                Start Quiz
            </button>
        </div>
    )
}

export default Menu