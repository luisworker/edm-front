
import { useState, useEffect } from 'react'
export const UseFetch = (request) => {
    const {url,methodHttpRequest ,headers, params, condition, action} = request;
    const {optionSelected, inputValue,meterSearchResultInitial} = params;
    console.log('UseFetch 4', request)
    const [meterSearchResult, setMeterSearchResult] = useState(meterSearchResultInitial);
    const [error, setError] = useState('');
    // console.log('UseFetch 4', url, optionSelected, inputValue)
    const [state, setstate] = useState(
        {
            data: null, 
            loading: true, 
            error: null
        }
        )
   const  getFetch = async () => {
    if (url) return;
        try {
            const response = await fetch(url,{
                method: methodHttpRequest,
                headers: headers,
            })
            const data = await response.json()
            setstate({ data, loading: false, error: null })
        } catch (error) {
            setstate({ data: null, loading: false, error })
        }
    }
    useEffect(() => {

        if(!condition) return
        if (optionSelected === '0' || optionSelected === '' || inputValue === '') {
            //         setError('Selecione uma opção e preencha o campo de busca')
            //     }
        getFetch()
        }
    }, [action])
  return {
        state, error
  }
}
