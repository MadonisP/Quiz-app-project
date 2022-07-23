import { useContext } from "react";
import {GameStateContext}  from '../helpers/Context';
import {Questions}  from '../helpers/Questions';

const EndScreen = () => {
    const { score, setScore, setGameState } = useContext(GameStateContext);
    
      const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
      };

    return (
        <div className="EndScreen">
            <h1>Quiz Finished</h1>
            <h1>
                {score}
            </h1>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen