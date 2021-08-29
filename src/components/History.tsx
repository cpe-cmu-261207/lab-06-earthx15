import { useState } from "react"
import { useHistory } from 'react-router-dom'


const History = () => {
    const [start, setStart] = useState<string | null>(null);
    const [end, setEnd] = useState<string | null>(null);
    const history = useHistory();

    const getResult = () => {
        if(start && end && Date.parse(start) <= Date.parse(end)){
            history.push(`/history/result?start=${start}&end=${end}`)
        }else {
            alert("Please select start date and end date correctly")
        }
    }

    return (
        <div className='text-center space-y-3 space-x-3'>
            <p className='text-2xl font-semibold'>Select historical range</p>
            <span>From date</span>
            <input type='date' onChange={e => setStart(e.target.value)}></input>
            <span>To date</span>
            <input type='date' onChange={e =>setEnd(e.target.value)}></input>
            <br />
            <button onClick={getResult}>Get data</button>
        </div>
    )
}


export default History