import { useContext, useState } from 'react'
import './questionAddDb.css'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../firebase-config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/AuthContext';
import Popup from 'reactjs-popup';



const QuestionDddDb = () => {
  const [qName, setQName] = useState();
  const [question, setQuestion] = useState();
  const [optionA, setOptionA] = useState();
  const [optionB, setOptionB] = useState();
  const [optionC, setOptionC] = useState();
  const [optionD, setOptionD] = useState();
  const [answer, setAnswer] = useState();
  const [time, setTime] = useState("");

  const notify = () => toast.success("question is added successfully");

  const { currentUser } = useContext(AuthContext);


  const handleQAdd = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, currentUser.uid + " " + qName, question), {
        question: question,
        optionA: optionA,
        optionB: optionB,
        optionC: optionC,
        optionD: optionD,
        answer: answer,
      });
      notify();
    }
    catch (e) {
      console.error(e)
    }
  }

  const handleTimer = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, currentUser.uid + " " + qName, "zzztimer"), {
        time: time,
      });
      notify();
    }
    catch (e) {
      console.error(e)
    }
  }




  return (
    <div className='qAddDb'>
      <div className='questionWrapper'>
        <h1>Add a question</h1>
        <form className='formQuestion' onSubmit={handleQAdd}>
          <input className='inputFQBig' type="text" placeholder='Quiz name:' onChange={e => setQName(e.target.value)} required /><br />
          <input className='inputFQBig' type="text" placeholder='Question:' onChange={e => setQuestion(e.target.value)} required /><br />
          <input className='inputFQBig' type="text" placeholder='A:' onChange={e => setOptionA(e.target.value)} required />
          <input className='inputFQBig' type="text" placeholder='B:' onChange={e => setOptionB(e.target.value)} required />
          <input className='inputFQBig' type="text" placeholder='C(if it is true false question use "-"):' onChange={e => setOptionC(e.target.value)} required />
          <input className='inputFQBig' type="text" placeholder='D(if it is true false question use "-"):' onChange={e => setOptionD(e.target.value)} required />
          <input className='inputFQBig' type="text" placeholder='Correct option:(example: optionC)' onChange={e => setAnswer(e.target.value)} required />
          <button className='formQButton' type="submit">Create</button>
        </form>
        <Popup
          trigger={<button className="formQButton" style={{ width: "20%", height: "30px", padding: "5px" }}> Exam time limit</button>}
          modal
          nested
        >
          {close => (
            <div style={{ fontSize: "12px", backgroundColor: "#FFCFDF", width: "400px" }}>
              <button style={{ cursor: "pointer", position: "absolute", display: "block", padding: "2px 5px", lineHeight: "20px", right: "-10px", top: "-10px", fontSize: "24px", background: "#ffffff", borderRadius: "18px", border: "1px solid #cfcece" }} onClick={close}>
                &times;
              </button>

              <div style={{ width: "100", borderBottom: "1px solid gray", fontSize: "18px", textAlign: "center", padding: "5px" }}> Enter exam time limit</div>
              <div style={{ width: "100%", padding: "10px 5px" }}>
                {' '}
                Exam will end within the time you specified
                <br />
                <input className='inputFQBig' type="text" style={{ width: "90%" }} placeholder='Quiz name:' onChange={e => setQName(e.target.value)} required /><br />
                <input type="number" placeholder='20' className='inputFQBig' style={{ width: "90%" }} onChange={e => setTime(e.target.value)} required />
              </div>
              <form onSubmit={handleTimer}>
                <div style={{ width: "100%", padding: "10px 5px", margin: "auto", textAlign: "center" }}>
                  <Popup
                    trigger={<button className="formQButton" style={{ width: "30%", marginRight: "10px" }}> Confirm </button>}
                    position="top center"
                    nested
                  >
                  </Popup>
                  <button
                    className="formQButton" onClick={() => { close(); }} style={{ width: "30%", backgroundColor: "#ECE2E1", color: "#100F0F" }}> Close
                  </button>
                </div>
              </form>
            </div>
          )}
        </Popup>
        <ToastContainer />
      </div >
    </div >
  )
}

export default QuestionDddDb