
import { useState, useEffect } from 'react'
export const useFetch = (url) => {
    const [state, setstate] = useState(
        {
            data: null, 
            loading: true, 
            error: null
        }
        )
   const  getFetch = async () => {

        try {
            const response = await fetch(url)
            const data = await response.json()
            setstate({ data, loading: false, error: null })
        } catch (error) {
            setstate({ data: null, loading: false, error })
        }
    }
    useEffect(() => {
        if (!url) return
        getFetch()
    }, [url])
  return {
        state
  }
}
