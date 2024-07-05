import {useEffect, useState} from 'react'
import {Box, Button, colors, FormControl, InputLabel, NativeSelect, TextField} from "@mui/material";
import {useFormValues} from "../services/hooks/useFormValues.js";
import {WarningModals} from "../services/modals/WarningModals.jsx";

const formatedNumber = (number) => {
    if (number === 0) return "0,00"
    return number.toLocaleString('es-ES', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

export const CustomerPayment = ({paymentInfo, setPaymentInfo, handlerCalculate, handlerSell,handlerReset, unlockSell, unlockReset}) => {
    const [error, setError] = useState(null)
    const [paymentType, setPaymentType] = useState('cash')
    const [bank, setBank] = useState('none')
    const [selectedDate, setSelectedDate] = useState(null);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {

        setOpen(true)
    };
    const handlePaymentTypeChange = ({target}) => {
        // if ('cash' === target.value) {
        //     handleChooseBankChange({target: {value: 'none'}})
        // }
        setPaymentType(target.value)
    }
    const handleChooseBankChange = ({target}) => {
        setBank(target.value)
    }

    const {
        paymentValues,
        totalPayment,
        receivedAmount,
        toAlter,
        inputOnchange,
        handleAction,
        handleKeyDown
    } = useFormValues(paymentInfo)
    useEffect(() => {


        setPaymentInfo({totalPayment, receivedAmount, toAlter});

    }, [totalPayment, receivedAmount, toAlter]);
    return (
        <div className='container border rounded flex-grow-1 mt-2'>
            {/*{error && <div className="alert alert-danger" role="alert">   {error} </div>}*/}
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, minWidth: 120},
                }}
                noValidate
                autoComplete="off"
            >
                <FormControl sx={{m: 2, minWidth: 120}} name="paymentType">
                    <InputLabel variant="outlined" htmlFor="uncontrolled-native" style={{color: 'black'}}>
                        Método de Pagamento:
                    </InputLabel>
                    <NativeSelect
                        defaultValue={paymentType}
                        onChange={handlePaymentTypeChange}
                        inputProps={{
                            name: 'paymentType',
                            id: 'uncontrolled-native',
                        }}
                    >

                        <option value={'cash'}>Cash</option>
                        <option value={'cheque'}>Cheque</option>
                        <option value={'creditCard'}>Debit/Credit Card</option>
                        <option value={'creditNote'}>Credit Note-Clearance</option>
                    </NativeSelect>
                </FormControl>

                <TextField sx={{m: 1, minWidth: 120, width: '165px'}}
                           id="standard-number"
                           label="Total do Pagamento:"
                           type="text"
                           name="totalPayment"
                           onChange={inputOnchange}
                           onBlur={handleAction} // Se ejecuta al perder el foco
                           onKeyDown={handleKeyDown} // Se ejecuta al presionar una tecla
                           value={formatedNumber(totalPayment)}

                           InputLabelProps={{
                               shrink: true,
                           }}
                           variant="standard"
                />
                <TextField sx={{m: 1, minWidth: 120, width: '165px'}}
                           id="filled-number"
                           label="Montante Recibido"
                           type="text"
                           name="receivedAmount"
                           onChange={inputOnchange}
                           onBlur={handleAction} // Se ejecuta al perder el foco
                           onKeyDown={handleKeyDown} // Se ejecuta al presionar una tecla
                           value={formatedNumber(receivedAmount)}
                           InputLabelProps={{
                               shrink: true,
                           }}
                           variant="standard"
                />
                <TextField sx={{m: 1, minWidth: 120, width: '165px'}}
                           id="filled-number"
                           label="Alterar"
                           type="text"
                           name="toAlter"
                           value={formatedNumber(toAlter)}
                           InputLabelProps={{
                               shrink: true,
                           }}
                           variant="standard"
                />
                <FormControl sx={{m: 2, minWidth: 120}} hidden={'cash' === paymentType}>
                    <InputLabel variant="outlined" htmlFor="uncontrolled-native" style={{color: 'black'}}>
                        Banco e Agências:
                    </InputLabel>
                    <NativeSelect
                        defaultValue={bank}
                        disabled={'cash' === paymentType}
                        onChange={handleChooseBankChange}
                        inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={'none'}>----</option>
                        <option value={'cash'}>Cash</option>
                        <option value={'cheque'}>Cheque</option>
                        <option value={'creditCard'}>Debit/Credit Card</option>
                        <option value={'creditNote'}>Credit Note-Clearance</option>
                    </NativeSelect>
                </FormControl>
                <TextField sx={{m: 1, minWidth: 120, width: '165px'}}
                           name="checkNumber"
                           label="Número de Cheque:"
                           type="number"
                           hidden={'cheque' !== paymentType}
                           InputLabelProps={{
                               shrink: true,
                           }}
                           variant="standard"
                />
                <TextField sx={{m: 1, minWidth: 120, width: '165px'}}
                           name="bankAccountNumber"
                           label="Número da conta bancária:"
                           type="text"
                           hidden={'cheque' !== paymentType}
                           InputLabelProps={{
                               shrink: true,
                           }}
                           variant="standard"
                />
                <TextField sx={{m: 1, minWidth: 120, width: '165px'}}
                           name="letterNumber"
                           label="Número do cartão:"
                           type="text"
                           hidden={'creditCard' !== paymentType}
                           InputLabelProps={{
                               shrink: true,
                           }}
                           variant="standard"
                />
                <TextField sx={{m: 1, minWidth: 120, width: '165px'}}
                           name="letterType"
                           label="Tipo de carta:"
                           type="text"
                           hidden={'creditCard' !== paymentType}
                           InputLabelProps={{
                               shrink: true,
                           }}
                           variant="standard"
                />
                <TextField sx={{m: 1, minWidth: 120, width: '165px'}}
                           name="cardReceiptNumber"
                           label="Número do Recibo do Cartão:"
                           type="number"
                           hidden={'creditCard' !== paymentType}
                           InputLabelProps={{
                               shrink: true,
                           }}
                           variant="standard"
                />
                <TextField sx={{m: 1, minWidth: 120, width: '165px'}}
                           name="pdvNumber"
                           label="Número do PDV:"
                           type="text"
                           hidden={'creditCard' !== paymentType}
                           InputLabelProps={{
                               shrink: true,
                           }}
                           variant="standard"
                />
                <TextField sx={{m: 1, minWidth: 120, width: '165px'}}
                           name="additionalInformation"
                           label="Informação adicional:"
                           type="text"
                           InputLabelProps={{
                               shrink: true,
                           }}
                           variant="standard"
                />

                {/*<DatePickerCustom/>*/}
                <Box sx={{m: 2 }}>
                    <Button sx={{style:colors.lightBlue}}
                        variant="contained"
                        onClick={handlerCalculate}
                        disabled={totalPayment === ''}
                        aling="left"
                    >Calcular</Button>
                    <Button
                        sx={{m: 1, style:colors.lightBlue}}
                        variant="contained"
                        onClick={handleOpen}
                        disabled={unlockSell}
                    >Venda</Button>
                    <Button
                        sx={{style:colors.lightBlue}}
                        variant="contained"
                        onClick={handlerReset}
                        disabled={unlockReset}
                    >Redefinir</Button>
                </Box>
            </Box>
            <WarningModals
                open={open}
                handleClose={() => setOpen(false)}
                dataUser={paymentInfo}
                handleAccept={handlerSell}
            />
        </div>

    )
}
