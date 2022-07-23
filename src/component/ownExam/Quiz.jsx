import { useState, useContext } from "react";
import { GameStateContext } from "../helpers/Context"
import { db } from '../../firebase-config'
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

const Quiz = () => {
    const { score, setScore, gameState, setGameState, selection, setSelection } = useContext(GameStateContext);
    const [isLoading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        myQuestions();
    }, []);

    const myQuestions = async () => {
        const querySnapshot = await getDocs(collection(db, selection));
        const newQuestions = querySnapshot.docs.map(doc => doc.data());
        setQuestions(newQuestions);
        setLoading(false);
      }


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");


    const chooseOption = (option) => {
        setOptionChosen(option);
    };

    const nextQuestion = () => {
        if (questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };

    const finishQuiz = () => {
        if (questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1);
        }
        setGameState("finished");
    };
    if (isLoading) {
        return <div className="loader"></div>
    }
    return (
        <div className="quiz">
            <h1>{questions[currentQuestion].question}</h1>
            <div className="questions">
                <button
                    onClick={() => {
                        chooseOption("optionA");
                    }}
                >
                    {questions[currentQuestion].optionA}
                </button>
                <button
                    onClick={() => {
                        chooseOption("optionB");
                    }}
                >
                    {questions[currentQuestion].optionB}
                </button>
                <button
                    onClick={() => {
                        chooseOption("optionC");
                    }}
                >
                    {questions[currentQuestion].optionC}
                </button>
                <button
                    onClick={() => {
                        chooseOption("optionD");
                    }}
                >
                    {questions[currentQuestion].optionD}
                </button>
            </div>

            {currentQuestion == questions.length - 1 ? (
                <button onClick={finishQuiz} id="nextQuestion">
                    Finish Quiz
                </button>
            ) : (
                <button onClick={nextQuestion} id="nextQuestion">
                    Next Question
                </button>
            )}

        </div>
    )
}

export default Quiz