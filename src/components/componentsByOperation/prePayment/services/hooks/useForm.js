import {useState} from 'react'

export const useForm = (initialForm = {} ) => {

    const [formState, setFormState] = useState(initialForm)
    // const [result, setResult] = useState(initialForm)


    const inputOnchange = ({target}) => {
        const {name, value} = target;
        console.log('useForm 10', name, value, formState)
        setFormState({
            ...formState,
            [name]: value
        })
    }
  return {formState,...formState, inputOnchange}
}
