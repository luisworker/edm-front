
import { useState, useEffect } from 'react'
export const useFetchBalance = (url, header, callingBalance) => {
    const [state, setstate] = useState(
        {
            data: null, 
            loading: true, 
            error: null
        }
        )
   const  getFetch = async () => {
        if ('' === url ) return;
        try {
            const response = await fetch(url,{
                method: 'GET',
                headers: header,

            })
            const data = await response.json()
            setstate({ data, loading: false, error: null })
        } catch (error) {
            setstate({ data: null, loading: false, error })
        }
    }
    useEffect(() => {
        if (!url) return
        getFetch()
    }, [url,callingBalance])
  return {
        state
  }
}
