import { useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useEffect } from "react"


type Resule = {
    bpi: Record<string, number> | null ;
} 

const Historyresule = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data,setData] = useState<Resule | null>(null)
    const query = new URLSearchParams(useLocation().search)
    const start = query.get("start");
    const end = query.get("end");

    const fetchData = async () => {
        try{
            const resp = await axios.get<Resule>(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=${start}&end=${end}`)
            setData(resp.data)
            setLoading(false)
        }
        catch(err) {
            setLoading(false)
            setError(true)
        }
    }
    useEffect(() => {
		 fetchData()
	}, [])


    const render = () => {
        if (loading)
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Historical price</p>
                    <p className='text-2xl'>Loading ...</p>
                </div>
            )
        else if (error)
            return <div className='text-center space-y-3'>
                <p className='text-2xl font-semibold'>Historical price</p>
                <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
            </div>
        else
        type dataType = {
            key: string;
            value: number;
        }
        const show: dataType[]= []

        if(data?.bpi) {
            for (const [key, value] of Object.entries(data?.bpi)) {
                show.push({key,value})
            }
        }

            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Historical price</p>
                    <p className='text-xl font-semibold'> ( From {start} To {end})</p>
                    <ul>
                    <ul>
                        {show.map((e) => <li className='text-xl' key={e.key}>{e.key} - {e.value.toLocaleString()} THB</li> )}
                    </ul>
                    </ul>
                </div>
            )
    }



    return (
        render()
    )




}


export default Historyresule