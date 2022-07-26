import { useState, useContext, useRef, useEffectOnce } from "react";
import { GameStateContext } from "../helpers/Context"
import { db } from '../../firebase-config'
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";

const Quiz = () => {
    const ref = useRef(null);

    const { score, setScore, gameState, setGameState, selection, setSelection } = useContext(GameStateContext);
    const [isLoading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [qTime, setQTime] = useState("20");

    useEffect(() => {
        myQuestions();
    }, []);

    const myQuestions = async () => {
        const docRef = doc(db, selection, "zzztimer");
        const docSnap = await getDoc(docRef);
        const querySnapshot = await getDocs(collection(db, selection));
        const newQuestions = querySnapshot.docs.map(doc => doc.data());

        setQuestions(newQuestions);

        if (docSnap.exists()) {
            console.log("Document data:", (docSnap.data().time)*60);
            setQTime(docSnap.data());
            setLoading(false);
            setTimeout(() => {
                setGameState("finished");
            }, ((docSnap.data().time)*60)+"000");
        } else {
            console.log("No such document!");
            setLoading(false);
        }
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

            {currentQuestion == questions.length - 2 ? (
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