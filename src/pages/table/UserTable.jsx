import { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase-config'
import { AuthContext } from '../../context/AuthContext'
import { Link } from "react-router-dom";

const UserTable = () => {

    const [findQuestion, setFindQuestion] = useState("");
    const [userDatas, setUserDatas] = useState([]);
    const [wait, setWait] = useState(true);

    const { currentUser } = useContext(AuthContext)


    const myQuestions = async () => {
        const querySnapshot = await getDocs(collection(db, findQuestion + " score"));
        const newQuestions = querySnapshot.docs.map(doc => doc.data());
        setUserDatas(newQuestions);
        setWait(false);
    }

    if (wait) {
        return (
            <div className='qAddDb'>
                <div className='questionWrapper'>
                    <label>enter your exam name</label>
                    <input className='inputFQBig' type="text" placeholder='Enter exam name id ex: HtPFYohOSChrWd6iuVNMTpVOeon1 vize' onChange={(e) => setFindQuestion(e.target.value)} required />
                    <button className='formQButton' type="submit" onClick={myQuestions}>Begin</button>
                </div>
            </div>
        )
    }
    return (
        <>
        <TableContainer component={Paper} style={{ height: "100vh" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        <TableCell style={{ fontWeight: "600" }}>Exam name</TableCell>
                        <TableCell align="right" style={{ fontWeight: "600" }}>Question scores </TableCell>
                        <TableCell align="right" style={{ fontWeight: "600" }}>emails</TableCell>
                        <TableCell align="right" style={{ fontWeight: "600" }}>Exam link</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userDatas.map((data) => (
                        <TableRow
                            key={data.mail}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{findQuestion}</TableCell>
                            <TableCell align="right">{data.score}</TableCell>
                            <TableCell align="right">{data.mail}</TableCell>
                            <TableCell align="right">{data.uid} (pass this id to url ex: localhost:3000/"idHere")</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <button className='formQButton' style={{marginBottom:"0px"}}><Link to={`/user/${currentUser.uid}`}>My Profile</Link></button>
        </>
    )
}

export default UserTable