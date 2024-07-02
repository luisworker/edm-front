import {useRef, useState} from 'react'

export const useForm = (initialForm = {}, initialResults = {}) => {

    const [formState, setFormState] = useState(initialForm)
    // const formState = useRef(initialForm);

    const [result, setResult] = useState(initialResults)
    const inputOnchange = ({target}) => {
        const {name, value} = target
        const lexeme = name.replace('inputMT', '')
        const resultName = `resultMT${lexeme}`
        const factor = parseInt(lexeme)
        if (value < 0) return
        console.log('lexeme', lexeme)

        setFormState ({
            ...formState,
            [name]: value
        })

        if ('Coins' !== lexeme) {
            setResult({
                ...result,
                [resultName]: value * factor
            })
            setResult(prevResult => {
                console.log(prevResult, 'prevResult' )

                const total = Object.entries(prevResult).reduce((acc, [key, item]) => {
                    if (key !== 'total') {
                        return acc + parseInt(item);
                    } else {
                        return acc;
                    }
                }, 0);

                return {
                    ...prevResult,
                    ['total']:  total + parseFloat(formState['inputMTCoins'])
                }
            })
        } else {
            setResult(prevResult => {
                console.log(prevResult, 'prevResult' )

                const total = Object.entries(prevResult).reduce((acc, [key, item]) => {
                    if (key !== 'total') {
                        return acc + parseInt(item);
                    } else {
                        return acc;
                    }
                }, 0);

                return {
                    ...prevResult,
                    ['total']:  total + + parseFloat(value)
                }
            })
        }

        console.log('total' ,result['total'])

    }
    return {result, ...result, formState, ...formState, inputOnchange}
}