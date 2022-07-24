import { useState, useMemo, } from "react";
import Quiz from '../../component/ownExam/Quiz'
import Menu from '../../component/ownExam/Menu'
import EndScreen from '../../component/ownExam/EndScreen'
import { GameStateContext } from '../../component/helpers/Context'
import SelectExam from "../selectExam/SelectExam";
import './examMaker.css'
import Countdown from "react-countdown";

const ExamMaker = () => {

  const [gameState, setGameState] = useState("section");
  const [score, setScore] = useState(0);
  const [selection, setSelection] = useState("");
  const [question, setQuestion] = useState([]);

  return (
    <div className="examMaker">
      <h1 style={{ fontFamily: 'McLaren' }}>Quizle {gameState === "playing" && <Countdown date={Date.now() + 1200000} />}</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
          selection,
          setSelection,
          question,
          setQuestion
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