import { useState } from "react";
import Quiz from '../../component/ownExam/Quiz'
import Menu from '../../component/ownExam/Menu'
import EndScreen from '../../component/ownExam/EndScreen'
import {GameStateContext } from '../../component/helpers/Context'

const ExamMaker = () => {

  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="examMaker">
      <h1>Quiz App</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  )
}

export default ExamMaker