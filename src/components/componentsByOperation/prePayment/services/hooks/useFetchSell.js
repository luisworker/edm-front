
import { useState, useEffect } from 'react'
export const useFetchSell = (urlSell, headersSell, callingSell, bodySell) => {
    const [state, setstate] = useState(
        {
            data: null, 
            loading: true, 
            error: null
        }
        )
    console.log(urlSell, 'urlSell', headersSell, 'headersSell', callingSell, 'callingSell', bodySell, 'body')

    const  getFetch = async () => {
        if ('' === urlSell ) return;
        try {
            const response = await fetch(urlSell,{
                method: 'POST',
                headers: headersSell,
                body: JSON.stringify(bodySell)

            })
            const data = await response.json()
            setstate({ data, loading: false, error: null })
        } catch (error) {
            setstate({ data: null, loading: false, error })
        }
    }
    useEffect(() => {
        console.log(urlSell, 'urlSell')

        if (!urlSell) return
        getFetch()
    }, [urlSell,callingSell])
  return {
        state
  }
}
