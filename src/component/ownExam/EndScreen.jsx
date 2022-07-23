import { useContext, useEffect } from "react";
import { GameStateContext } from '../helpers/Context';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../firebase-config'
import { AuthContext } from '../../context/AuthContext'
import { Link } from "react-router-dom";

const EndScreen = () => {
  const { score, setScore, selection, setSelection } = useContext(GameStateContext);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    myScore();
  }, []);

  const myScore = async (e) => {
    try {
      await setDoc(doc(db, selection+ " score", currentUser.email), {
        score: score,
        mail: currentUser.email,
      });
    }
    catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="endScreen">
      <h1>Quiz Finished</h1>
      <h1 style={{margin:"20px"}}>
        score: {score}
      </h1>
      <button><Link to="/" className="linkButtonHome">Home page</Link></button>
    </div>
  )
}

export default EndScreen