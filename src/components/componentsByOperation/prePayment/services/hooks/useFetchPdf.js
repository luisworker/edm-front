
import { useState, useEffect } from 'react'
export const useFetchPdf = (urlPdf, header, transactionId) => {
    const [state, setstate] = useState(
        {
            data: null, 
            loading: true, 
            error: null
        }
        )
   const  getFetch = async () => {
        if ('' === urlPdf ) return;
        try {
            const response = await fetch(urlPdf,{
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

        if (!urlPdf) return
        getFetch()
    }, [urlPdf,transactionId])
  return {
        state
  }
}
