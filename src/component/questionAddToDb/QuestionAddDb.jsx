import { useContext, useState } from 'react'
import './questionAddDb.css'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../firebase-config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/AuthContext';

const QuestionDddDb = () => {
  const [qCollectionName, setQCollectionName] = useState();
  const [qName, setQName] = useState();
  const [question, setQuestion] = useState();
  const [optionA, setOptionA] = useState();
  const [optionB, setOptionB] = useState();
  const [optionC, setOptionC] = useState();
  const [optionD, setOptionD] = useState();
  const [answer, setAnswer] = useState();

  const notify = () => toast.success("question is added successfully");

  const { currentUser } = useContext(AuthContext);


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, currentUser.uid + " " + qName, qName), {
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

  return (
    <div className='qAddDb'>
      <div className='questionWrapper'>
        <h1>Add a question</h1>
        <form className='formQuestion' onSubmit={handleLogin}>
          <input className='inputFQBig' type="text" placeholder='Quiz name:' onChange={e => setQName(e.target.value)} required /><br />
          <input className='inputFQBig' type="text" placeholder='Question:' onChange={e => setQuestion(e.target.value)} required /><br />
          <input className='inputFQBig' type="text" placeholder='optionA:' onChange={e => setOptionA(e.target.value)} required />
          <input className='inputFQBig' type="text" placeholder='optionB:' onChange={e => setOptionB(e.target.value)} required />
          <input className='inputFQBig' type="text" placeholder='optionC(if it is true false question use "-"):' onChange={e => setOptionC(e.target.value)} required />
          <input className='inputFQBig' type="text" placeholder='optionD(if it is true false question use "-"):' onChange={e => setOptionD(e.target.value)} required />
          <input className='inputFQBig' type="text" placeholder='Correct option:(example: optionC)' onChange={e => setAnswer(e.target.value)} required />
          <button className='formQButton' type="submit">Create</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default QuestionDddDb