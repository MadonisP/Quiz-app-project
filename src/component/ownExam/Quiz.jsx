import { useState, useContext, useRef, useEffectOnce } from "react";
import { GameStateContext } from "../helpers/Context"
import { db } from '../../firebase-config'
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import Countdown from "react-countdown";

const Quiz = () => {
    const ref = useRef(null);

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

    useEffect(() => {
        setTimeout(() => {
            setGameState("finished");
        }, 1200000);
    }, []);



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
                <>
                    <button ref={ref} onClick={() => { finishQuiz(); }} >
                        Finish Quiz
                    </button>
                </>
            ) : (
                <>
                    <button ref={ref} onClick={() => { nextQuestion(); }} >
                        Next Question
                    </button>
                </>
            )}

        </div>

    )
}

export default Quiz