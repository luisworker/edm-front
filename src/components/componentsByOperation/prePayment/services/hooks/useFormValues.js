import {useState} from 'react'
import {Utils} from "../../../../../utils/utils/utils.js";

export const useFormValues = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)
    // const [result, setResult] = useState(initialForm)


    const inputOnchange = ({target}) => {
        const {name, value} = target;
        // console.log('useForm 10', name, value, formState)
        if (isValidNumber(value)) return;
        if (name === 'totalPayment') {
            setFormState({
                ...formState,
                [name]: value,
                ['receivedAmount']: value,
                ['toAlter']: '0,00'
            })
        } else {
            setFormState({
                ...formState,
                [name]: value,
                ['toAlter']:'' !== formState['totalPayment'] ? value - parseFloat(formState['totalPayment'].toString().replace(',', '.')) : ''
            })
        }

    }
    const handleAction = ({target}) => {
        const {name, value} = target;
        if (value.length < 1) return;
        if (name === 'totalPayment') {
            setFormState({
                ...formState,
                [name]: Utils.formatedNumber(value),
                ['receivedAmount']: Utils.formatedNumber(value),
                ['toAlter']: ('' === formState['totalPayment'] || isNaN(parseFloat(formState['totalPayment'].toString().replace(',', '.')))) ? '' : Utils.formatedNumber(formState['toAlter'])
            })
        } else {
            setFormState({
                ...formState,
                [name]: Utils.formatedNumber(value),
                ['toAlter']: ('' === formState['totalPayment']) ? '' : Utils.formatedNumber(formState['toAlter'])
            })
        }

    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleAction(event);
        }
    };

    return {formState, ...formState, inputOnchange, handleAction, handleKeyDown}
}


const isValidNumber = (value) => {
    const validNumber = value.match(/^[\d.,]*$/);
    console.log('isValidNumber', value, !validNumber)

    return !(value.match(/^[\d.,]*$/));
}