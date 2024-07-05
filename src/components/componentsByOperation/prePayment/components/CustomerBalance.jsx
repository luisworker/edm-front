import {Box, TextField} from "@mui/material";
import {Utils} from "../../../../utils/utils/utils.js";


export const CustomerBalance = ({customerBalance, setCustomerBalance}) => {
    const {
        account,
        customerName,
        tariffDescription,
        serviceAddress,
        lastPaymentDate,
        amountLast,
        debtPayment,
        percentageDebt,
        accountBalance,
        comment,
        unitsPayment,
        units,
        unitsType,
        unitsTopUp
    } = customerBalance;
    return (
        <div className='container border rounded flex-grow-1 mt-2'>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, minWidth: 120},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField sx={{m: 1, minWidth: 120, width: '165px'}}
                           id="filled-number"
                           label="Pagamento da dívida:"
                           type="text"
                           name="debtPayment"
                           value={Utils.formatedNumber(debtPayment)}
                           InputLabelProps={{
                               shrink: true,
                           }}
                           InputProps={{
                               readOnly: true,
                           }}
                           variant="standard"
                />
                <TextField sx={{m: 1, minWidth: 120, width: '165px'}}
                           id="filled-number"
                           label="Percentagem:"
                           type="text"
                           name="percentageDebt"
                           value={percentageDebt}
                           InputLabelProps={{
                               shrink: true,
                           }}
                           InputProps={{
                               readOnly: true,
                           }}
                           variant="standard"
                />
                <TextField sx={{m: 1, minWidth: 120, width: '165px'}}
                           id="filled-number"
                           label="Saldo da Conta:"
                           type="text"
                           name="accountBalance"
                           value={accountBalance}
                           InputLabelProps={{
                               shrink: true,
                           }}
                           InputProps={{
                               readOnly: true,
                           }}
                           variant="standard"
                />
                <TextField sx={{m: 1, minWidth: 120, width: '165px'}}
                           id="filled-number"
                           label="Última data de pagamento:"
                           type="datetime-local"
                           name="lastPaymentDate"
                           value={Utils.convertTimestampToDateTimeLocal(lastPaymentDate)}
                           InputLabelProps={{
                               shrink: true,
                           }}
                           InputProps={{
                               readOnly: true,
                           }}
                           variant="standard"
                />
                <TextField sx={{m: 1, minWidth: 120, width: '165px'}}
                           id="filled-number"
                           label="Último montante:"
                           type="text"
                           name="receivedAmount"
                           value={Utils.formatedNumber(amountLast)}
                           InputLabelProps={{
                               shrink: true,
                           }}
                           InputProps={{
                               readOnly: true,
                           }}
                           variant="standard"
                />

            </Box>

            
        </div>
    )
}
