import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from '../../firebase-config'
import { PermIdentity, MailOutline, Search, Lock, Key, ChatBubble } from '@mui/icons-material';
import { AuthContext } from '../../context/AuthContext'
import './user.css'
import Popup from 'reactjs-popup';

const User = () => {

    const params = useParams();
    const id = params;

    const [userCollection, setUserCollection] = useState();
    const [loading, setLoading] = useState(true);
    const [examCheck, setExamCheck] = useState();
    const [loadingPop, setLoadingPop] = useState(true);
    const [examQuestions, setExamQuestions] = useState([]);
    const [counter, setCounter] = useState(0);

    const { currentUser } = useContext(AuthContext)


    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const docRef = doc(db, "users", id.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setLoading(false);
            setUserCollection(docSnap.data());
        } else {
            setLoading(false);
        }
    }

    const handleQSearch = async (e) => {
        e.preventDefault();
        const querySnapshot = await getDocs(collection(db, examCheck));
        const examQuestionsCarry = querySnapshot.docs.map(doc => doc.data());
        setExamQuestions(examQuestionsCarry);
        setLoadingPop(false);
    }



    if (loading) {
        return <div className="loader" style={{ display: "flex" }}></div>
    }
    return (
        <div className="user" style={{ height: "100%" }}>
            <div className="userShow">
                <div className="userShowTop">
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Full name: {userCollection.first} {userCollection.last}</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon" />
                        <span className="userShowInfoTitle">{userCollection.username}</span>
                    </div>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon" />
                        <span className="userShowInfoTitle">{userCollection.id}</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon" />
                        <span className="userShowInfoTitle">{userCollection.email}</span>
                    </div>
                    <span className="userShowTitle">Exam Search</span>

                    <div className="userShowInfo">
                        <Search className="userShowIcon" />
                        <span className="userShowInfoTitle">
                            {currentUser && (
                                <Popup
                                    trigger={<button className="formQButton" style={{ width: "100%", height: "30px", padding: "5px" }}>Exam question search</button>}
                                    modal
                                    nested
                                >
                                    {close => (
                                        <div style={{ fontSize: "12px", backgroundColor: "#FFCFDF", width: "400px" }}>
                                            <button style={{ cursor: "pointer", position: "absolute", display: "block", padding: "2px 5px", lineHeight: "20px", right: "-10px", top: "-10px", fontSize: "24px", background: "#ffffff", borderRadius: "18px", border: "1px solid #cfcece" }} onClick={close}>
                                                &times;
                                            </button>

                                            <div style={{ width: "100", borderBottom: "1px solid gray", fontSize: "18px", textAlign: "center", padding: "5px" }}> Enter exam key</div>
                                            <div style={{ width: "100%", padding: "10px 5px" }}>
                                                {' '}
                                                You can check your questions by entering your key:
                                                <br />
                                                <input type="text" placeholder='Enter your exam key' className='inputFQBig' style={{ width: "90%" }} onChange={e => setExamCheck(e.target.value)} required />
                                            </div>
                                            <form >
                                                <div style={{ width: "100%", padding: "10px 5px", margin: "auto", textAlign: "center" }}>
                                                    <button className="formQButton" style={{ width: "30%", marginRight: "10px" }} onClick={handleQSearch}> Confirm </button>
                                                    <button
                                                        className="formQButton" onClick={() => { close(); }} style={{ width: "30%", backgroundColor: "#ECE2E1", color: "#100F0F" }}> Close
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                </Popup>
                            )}
                        </span>
                    </div>
                </div >
                <span className="userShowTitle">Questions</span>


                <div >
                    {examQuestions.length > 0 && (
                        <div className="userShowInfo">
                            <ul>
                                {examQuestions.map(eQuestion => (
                                    <li key={eQuestion.question} className="userShowInfoTitle"><ChatBubble className="userShowIcon" />{eQuestion.question} <br /><Lock className="userShowIcon" />{eQuestion.optionA} <br /><Lock className="userShowIcon" />{eQuestion.optionB} <br /> <Lock className="userShowIcon" />{eQuestion.optionC} <br /><Lock className="userShowIcon" />{eQuestion.optionD}<br /> <Key className="userShowIcon" />{eQuestion.answer}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div >

        </div >
    )
}

export default User