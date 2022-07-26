import { useContext, useEffect, useState } from "react";
import { GameStateContext } from '../helpers/Context';
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase-config'
import { AuthContext } from '../../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';

const Menu = () => {
    const { gameState, setGameState, selection, setSelection } = useContext(GameStateContext);

    const { currentUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [time, setTime] = useState("");
    const notify = () => toast.error("you already took the test please return to the home page");

    useEffect(() => {

        getExamScore();
    }, [])

    const getExamScore = async () => {
        const docRef = doc(db, selection + " score", currentUser.email);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
            const docRefe = doc(db, selection, "zzztimer");
            const docSnapshot = await getDoc(docRefe);
            if (docSnapshot.exists()) {
                setTime(docSnapshot.data());
                setLoading(false);
            } else {
                console.log("No such document!");
            }
        }
        else if (docSnap.exists()) {
            notify();
        }
    }



    if (loading) {
        return (
            <>
                <div className="loader" style={{ display: "flex" }}>
                </div>
                <ToastContainer position="bottom-right" />
            </>
        )
    }
    return (
        <>
            <div className="menu">
                <button
                    onClick={() => { setGameState("playing"); }}
                >
                    Start Quiz<br /><span style={{ fontSize: "16px" }}>your time ({time.time}) will start when clicked </span>
                </button>
            </div>

        </>
    )




}

export default Menu