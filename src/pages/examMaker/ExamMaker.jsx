import { useState,useMemo, } from "react";
import Quiz from '../../component/ownExam/Quiz'
import Menu from '../../component/ownExam/Menu'
import EndScreen from '../../component/ownExam/EndScreen'
import { GameStateContext } from '../../component/helpers/Context'
import SelectExam from "../selectExam/SelectExam";

const ExamMaker = () => {

  const [gameState, setGameState] = useState("section");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [selection, setSelection] = useState("");

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
          selection,
          setSelection
        }}
      >
        {gameState === "section" && <SelectExam />}
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  )
}

export default ExamMaker