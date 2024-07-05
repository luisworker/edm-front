import './styles.css'

import {CustomerScreen} from "./components/CustomerScreen.jsx";
import {CustomerPayment} from "./components/CustomerPayment.jsx";
import {API_URL} from "../../../auth/constants.js";
import {useAuth} from "../../../auth/AuthProvider.jsx";
import {useEffect, useState} from "react";
import {useFetchBalance} from "./services/hooks/useFetchBalance.js";
import {CustomerBalance} from "./components/CustomerBalance.jsx";
import CustomerBalanceTable from "./components/CustomerBalanceTable.jsx";
import {useFetchSell} from "./services/hooks/useFetchSell.js";
import {useFetchPdf} from "./services/hooks/useFetchPdf.js";
// import {CustomerModals} from "./services/modals/CustomerModals.jsx";

// to test table
function createData(id, conceitos, unidadesBase, price, montante) {
    return {
        id, conceitos, unidadesBase, price, montante,

    };
}

export const PrePayment = () => {
    // login data
    const auth = useAuth()
    const {idVendor, codUser} = auth.getUserLogin()
    const accessToken = auth.getAccessToken()
    const headers = {
        'Authorization': `Bearer ${accessToken}`
    }
    // search meter data
    const meterSearchResultInitial = {
        meterBrand: '--',
        customerName: '--',
        servicePointNumber: '--',
        account: '--',
        tariff: '--',
        serviceAddress: '--'
    }
    const [meterSearchResult, setMeterSearchResult] = useState(meterSearchResultInitial);
    const {meterBrand, customerName, servicePointNumber, account, tariff, serviceAddress} = meterSearchResult;

    // payment data
    const [paymentInfo, setPaymentInfo] = useState({
        totalPayment: '', receivedAmount: '', toAlter: ''
    });
    const {totalPayment, receivedAmount, toAlter} = paymentInfo;
    const [unlockSell, setUnlockSell] = useState(true)
    const [unlockReset, setUnlockReset] = useState(false)
    const [urlSell, setUrlSell] = useState('')
    const [headersSell, setHeadersSell] = useState(headers)
    const [callingSell, setCallingSell] = useState(false)
    const [totalPaymentNumber, setTotalPaymentNumber] = useState(0)

    // customer balance data
    const initialValues = {
        account: null,
        customerName: '',
        tariffDescription: '',
        serviceAddress: '',
        lastPaymentDate: null,
        amountLast: null,
        debtPayment: null,
        percentageDebt: null,
        accountBalance: null,
        comment: '',
        unitsPayment: null,
        units: null,
        unitsType: '',
        unitsTopUp: []
    }
    const [customerBalance, setCustomerBalance] = useState(initialValues);
    const [urlBalance, setUrlBalance] = useState('')
    const [callingBalance, setCallingBalance] = useState(false)
    const [selected, setSelected] = useState([])
    const [bodySell, setBodySell] = useState({})
    const {unitsTopUp} = customerBalance
    const [transactionId, setTransactionId] = useState('');
    const [urlPdf, setUrlPdf] = useState('')
    //common


    const urlBanks = `${API_URL}/venPayment/1.0.1/bankBranches`

    const urlPaymentMethods = `${API_URL}/venPayment/1.0.1/paymentMethods`


    const handlerCalculate = () => {

        const totalPaymentNumber = parseInt(totalPayment.toString().replace(',', '.'));
        const toAlterNumber = parseInt(toAlter.toString().replace(',', '.'));
        if (isNaN(totalPaymentNumber) || isNaN(toAlterNumber)) {

            return;
        }

        setPaymentInfo({
            ...paymentInfo,
            ['name']: customerName,
            ['meterSerial']: meterBrand
        })
        setTotalPaymentNumber(totalPaymentNumber)
        setUrlBalance(`${API_URL}/venPayment/1.0.1/?idVendor=${idVendor}&codUser=${codUser}&meterSerial=${meterBrand}&totalPayment=${totalPaymentNumber}&debtPayment=${toAlterNumber}`)
        setCallingBalance(!callingBalance)
    }

    const handlerSell = () => {
        const chequeDetails = {}
        const {meterBrand} = meterSearchResult

        const {
            account,
            accountBalance,
            comment,
            debtPayment,
            percentageDebt,
            units,
            unitsPayment,
            unitsType,
            tariffDescription
        } = customerBalance


        const body = {
            account,
            accountBalance,
            chequeDetails,
            codUser,
            comment,
            debtPayment,
            idVendor: idVendor.toString(),
            meterSerial: meterBrand,
            paymentMethod: "FP001",
            percentageDebt,
            requestID: `l3dcTuimFo35o3vF7GVlLwfjz622vQ${new Date().getTime()/1000}`,
            tariffDescription,
            totalPayment: totalPaymentNumber,
            units,
            unitsPayment,
            unitsType
        }
        setBodySell(body)
        setHeadersSell({
            ...headers, 'Content-Type': 'application/json'
        })
        setUrlSell(`${API_URL}/venPayment/1.0.1/`)
        setCallingSell(!callingSell)


    }
    const handlerReset = () => {


        // const totalPaymentNumber = parseInt(totalPayment.toString().replace(',', '.'));
        // const toAlterNumber = parseInt(toAlter.toString().replace(',', '.'));
        // if (isNaN(totalPaymentNumber) || isNaN(toAlterNumber)) {
        //     console.log('aki revisar',paymentInfo)
        //
        //     return;
        // }
        // setUrlBalance(`${API_URL}/venPayment/1.0.1/?idVendor=${idVendor}&codUser=${codUser}&meterSerial=${meterBrand}&totalPayment=${totalPaymentNumber}&debtPayment=${toAlterNumber}`)
        // setCallingBalance(!callingBalance)
    }

    //metodos de pago
    const {stateSell} = useFetchSell(urlSell, headersSell, callingSell, bodySell)
    useEffect(() => {
        if (!stateSell) return


        if (stateSell.data) {
            setTransactionId(stateSell.data.transactionId)
            //venPDF/1.0.1/?idVendor=9850&codUser=caixa&duplicate=0&transactionId=202407040000070
            setUrlPdf(`${API_URL}/venPDF/1.0.1/?idVendor=${idVendor}&codUser=${codUser}&duplicate=0&transactionId=${transactionId}`)

        }
        console.log('stateSell', stateSell)
    }, [stateSell, callingSell])
    const {statePdf} = useFetchPdf(urlPdf, headers, transactionId)
    //balance
    const {state} = useFetchBalance(urlBalance, headers, callingBalance)
    useEffect(() => {
        // if (!state.data) return
        if (state.data) {
            setCustomerBalance(prevState => ({
                ...prevState, ...state.data,
                unitsTopUp: state.data.unitsTopUp && state.data.unitsTopUp.length === 0 ?
                    [
                        createData(1, 'Cupcake', 305, 3.7, 67),
                        createData(2, 'Donut', 452, 25.0, 51),
                        createData(3, 'Eclair', 262, 16.0, 24),
                        createData(4, 'Frozen yoghurt', 159, 6.0, 24),
                        createData(5, 'Gingerbread', 356, 16.0, 49),
                        createData(6, 'Honeycomb', 408, 3.2, 87),
                        createData(7, 'Ice cream sandwich', 237, 9.0, 37),
                        createData(8, 'Jelly Bean', 375, 0.0, 94),
                        createData(9, 'KitKat', 518, 26.0, 65),
                        createData(10, 'Lollipop', 392, 0.2, 98),
                        createData(11, 'Marshmallow', 318, 0, 81),
                        createData(12, 'Nougat', 360, 19.0, 9),
                        createData(13, 'Oreo', 437, 18.0, 63),
                    ]
                    : state.data.unitsTopUp
            }));
            setUnlockSell(false)
        }
    }, [state, callingBalance])
    // useEffect(() => {
    //     if (customerBalance === initialValues) return
    //     if (customerBalance.unitsTopUp === []) {
    //         setCustomerBalance({
    //             ...customerBalance,
    //             ['unitsTopUp']:  [
    //                 createData(1, 'Cupcake', 305, 3.7, 67),
    //                 createData(2, 'Donut', 452, 25.0, 51),
    //                 createData(3, 'Eclair', 262, 16.0, 24),
    //                 createData(4, 'Frozen yoghurt', 159, 6.0, 24),
    //                 createData(5, 'Gingerbread', 356, 16.0, 49),
    //                 createData(6, 'Honeycomb', 408, 3.2, 87),
    //                 createData(7, 'Ice cream sandwich', 237, 9.0, 37),
    //                 createData(8, 'Jelly Bean', 375, 0.0, 94),
    //                 createData(9, 'KitKat', 518, 26.0, 65),
    //                 createData(10, 'Lollipop', 392, 0.2, 98),
    //                 createData(11, 'Marshmallow', 318, 0, 81),
    //                 createData(12, 'Nougat', 360, 19.0, 9),
    //                 createData(13, 'Oreo', 437, 18.0, 63),
    //             ]
    //         })
    //     }
    // }, [customerBalance])
    useEffect(() => {
        if ([] === selected) return
        console.log('falta para ver que hacemos  con lo que seleccionemos', selected)
    }, [selected])

    // const {data, loading, error} = state
    return (<div className="me-3">
            <CustomerScreen meterSearchResult={meterSearchResult}
                            setMeterSearchResult={setMeterSearchResult}></CustomerScreen>
            <CustomerPayment paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo}
                             handlerCalculate={handlerCalculate} handlerSell={handlerSell} handlerReset={handlerReset}
                             unlockSell={unlockSell} unlockReset={unlockReset}/>
            <CustomerBalance customerBalance={customerBalance} setCustomerBalance={setCustomerBalance}/>
            <CustomerBalanceTable rows={unitsTopUp} selected={selected} setSelected={setSelected}/>
        </div>

    )
}
