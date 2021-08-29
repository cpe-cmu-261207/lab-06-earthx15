import axios from 'axios'
import { useEffect, useState } from 'react'



type CurP = {
    time: {
        updated: string;
    }
    bpi: {
        THB: {
            rate_float: number
        }
    }
}


const Curent = () => {

    const [curp, setCurp] = useState<CurP | null>(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    //fetch with async await
    const fetchApi = async () => {
        try {
            const resp =
                await axios.get<CurP>(`https://api.coindesk.com/v1/bpi/currentprice/thb.json`)
            setCurp(resp.data)
            setLoading(false)
        }
        catch (err) {
            setLoading(false)
            setError(true)
        }
    }
    useEffect(() => {
		 fetchApi()
	}, [])

    const render = () => {
        if (loading)
            return (
                <div className='text-center space-y-3'>
                <p className='text-2xl font-semibold'>Current price</p>
                <p className='text-2xl'>Loading ...</p>
            </div>
            )
        else if (error)
            return <p>There was some error !</p>
        else
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Current price</p>
                    <p className='text-2xl'>{curp?.bpi.THB.rate_float.toLocaleString()} THB</p>
                    <p> (Last updated {curp?.time.updated}) </p>
                </div>
            )
    }



    return (
        render()
    )
}


export default Curent