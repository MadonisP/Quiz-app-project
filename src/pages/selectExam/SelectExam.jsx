import { useContext } from 'react'
import { GameStateContext } from '../../component/helpers/Context'

const SelectExam = () => {
    const { gameState, setGameState,selection, setSelection } = useContext(GameStateContext);

    return (
        <div className='qAddDb'>
            <div className='questionWrapper'>
                <label>enter your key</label>
                <input className='inputFQBig' type="text" placeholder='key:' onChange={(e) => setSelection(e.target.value)} required />
                <button className='formQButton' type="submit" onClick={() => { setGameState("menu"); }}>Begin</button>
            </div>
        </div>
    )
}

export default SelectExam