import { useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase-config'
import { GameStateContext } from '../../component/helpers/Context'


const SelectExam = () => {

    const [selection, setSelection] = useState("");
    const handleLogin = async (e) => {
        e.preventDefault();
        const querySnapshot = await getDocs(collection(db, selection));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            console.log(doc.data().answer)
        });
    }

    return (
        <div className='qAddDb'>
            <div className='questionWrapper'>
                <h1>please use your key</h1>
                <form className='formQuestion' onSubmit={handleLogin}>
                    <input className='inputFQBig' type="text" placeholder='key:' onChange={e => setSelection(e.target.value)} required />
                    <button className='formQButton' type="submit">Begin</button>
                </form>
            </div>
        </div>
    )
}

export default SelectExam