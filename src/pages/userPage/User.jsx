import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase-config'
import { PermIdentity, MailOutline,  } from '@mui/icons-material';
import {AuthContext} from  '../../context/AuthContext'
import './user.css'

const User = () => {

    const params = useParams();
    const id = params;

    const [userCollection, setUserCollection] = useState();
    const [loading, setLoading] = useState(true);

    const { currentUser } = useContext(AuthContext)


    useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        console.log(id.id)
        const docRef = doc(db, "users", id.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setLoading(false);
            console.log("Document data:", docSnap.data());
            setUserCollection(docSnap.data());
        } else {
            console.log("No such document!");
            setLoading(false);
        }
    }
    if(loading){
        return <div className="loader" style={{display:"flex"}}></div>
    }
    return (
        <div className="user">
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
                </div>
            </div>
        </div>
    )
}

export default User