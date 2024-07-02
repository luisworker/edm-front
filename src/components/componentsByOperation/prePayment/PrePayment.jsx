import './styles.css'
import {API_URL} from "../../../auth/constants.js";
import {useAuth} from "../../../auth/AuthProvider.jsx";
import {useState} from "react";
import {useForm} from "./services/hooks/useForm.js";
import {CustomerModals} from "./services/modals/CustomerModals.jsx";

function createData(


    name,
    meterSerial,
    indicatorPrePostAccount,
    account,
    tariffDescription

) {
    return { meterSerial, name, indicatorPrePostAccount, account, tariffDescription };
}

const rows = [
    createData('Frozenttt yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const PrePayment = () => {
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
    const [error, setError] = useState('');
    const auth = useAuth();
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [result, setResult] = useState(null);

    const handleOpen = () => setOpen(true);
    const handleSelect = (e,item) => {
        console.log('PrePayment 83', item)

        setOpen(false); // Close the modal after selecting an item
        const {
            meterSerial,
            indicatorPrePostAccount,
            collectionInd,
            account,
            tariffDescription,
            serviceAddress,
            name
        } = item;


        // console.log('PrePayment 84', meterSerial, indicatorPrePostAccount, collectionInd, account, tariffDescription, serviceAddress, name)

        setMeterSearchResult({
            meterBrand: meterSerial,
            customerName: name,
            servicePointNumber: indicatorPrePostAccount,
            account: account,
            tariff: tariffDescription,
            serviceAddress: serviceAddress

        })
    }

    const handleClose = () => setOpen(false);

    const {formState,selectedOption,findInput, inputOnchange} = useForm({selectedOption:'',findInput:''})


    const url = `${API_URL}/venMeter/1.0.1`

    const getFetch = async (url, headers) => {
        try {
            const response = await fetch(url, {headers})
            const data = await response.json()
            if (!response.ok) {
                const {msgUser} = data;
                return {
                    code: response.status,
                    data: null,
                    error: msgUser
                }
            }


            return {
                code: response.status,
                data: data,
                error: null
            }
        } catch (error) {
            console.log(error, 'error')
        }
    }
    const handleSearch = async () => {
        // console.log(selectedOption, 'selectedOption', inputValue, 'inputValue')
        if (selectedOption === '0' || selectedOption === '' || findInput === '') {
            setError('Selecione uma opção e preencha o campo de busca')
        }
        const {idVendor, codUser} = auth.getUserLogin()
        const accessToken =  auth.getAccessToken()
        console.log('PrePayment 71',idVendor, 'idVendor', codUser, 'codUser', accessToken, 'accessToken')

        const headers = {
            'Authorization': `Bearer ${accessToken}`
        }
        console.log('PrePayment 62',selectedOption, findInput)

        const urlWithParams = `${url}/?idVendor=${idVendor}&codUser=${codUser}&codType=${selectedOption}&value=${findInput}`
        const result = await getFetch(urlWithParams, headers)

        // console.log('PrePayment 71', result)
        if (result.error) {
            // console.log('PrePayment 70', result.data)
            setError(result.error)
        }
        console.log('PrePayment 124',rows)

        if (result.data) {
            // console.log('PrePayment 74', result.data)

            setResult(result.data)
            handleOpen()

        }


    }

    return (
        <div>
            <div className='container border rounded flex-grow-1'>
                {error && <div className="alert alert-danger" role="alert">   {error} </div>}
                <fieldset>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="d-flex justify-content-between cash-div-custom div-small-height container">
                                <div className="col-auto">
                                    <div className="input-group mb-3">
                                        <select className="form-select input-extra-small m-1" id="inputGroupSelect01" name="selectedOption"
                                                value={selectedOption}
                                                onChange={inputOnchange}>
                                            <option value="0">Pesquisar...</option>
                                            <option value="MY001">No. Contador (ac)</option>
                                            <option value="MY002">Identificao do Client (cu)</option>
                                            <option value="MY003">No. Medidor (mr)</option>
                                            <option value="MY004">Conta Antiga (oa)</option>
                                            <option value="MY005">No. Ponto de Serviço (spn)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="row">
                                        <input className="form-control input-extra-small col" type="text"
                                               required={true}
                                               onChange={inputOnchange}
                                               name="findInput"/>
                                        <a className="btn btn-smart mt-1 col-auto form-control-ls" type="Submit"
                                           onClick={handleSearch}> 🔍</a>
                                    </div>
                                </div>
                            </div>
                            <div className="mr-2 d-flex justify-content-between cash-div-custom">
                                <div className="col-auto">
                                    <label className="form-label">Marca do contador:</label>
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="meterBrand"
                                           className="form-label">{meterBrand}</label>
                                </div>
                            </div>
                            <div className="mr-2 d-flex justify-content-between cash-div-custom">
                                <div className="col-auto">
                                    <label className="form-label">Nome do cliente:</label>
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="customerName"
                                           className="form-label">{customerName}</label>
                                </div>
                            </div>

                        </div>
                        <div className='col-6 mt-3'>
                            <div className="mr-2 d-flex justify-content-between cash-div-custom">
                                <div className="col-auto">
                                    <label className="form-label">SPN:</label>
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="servicePointNumber"
                                           className="form-label">{servicePointNumber}</label>
                                </div>
                            </div>
                            <div className="mr-2 d-flex justify-content-between cash-div-custom">
                                <div className="col-auto">
                                    <label className="form-label">Conta:</label>
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="account"
                                           className="form-label">{account}</label>
                                </div>
                            </div>
                            <div className="mr-2 d-flex justify-content-between cash-div-custom">
                                <div className="col-auto">
                                    <label className="form-label">Tarifa:</label>
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="tariff"
                                           className="form-label">{tariff}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mr-2 d-flex justify-content-between cash-div-custom">
                        <div className="col-3">
                            <label className="form-label">Endereço de serviço:</label>
                        </div>
                        <div className="col-auto">
                            <label htmlFor="serviceAddress"
                                   className="form-label-lg">{serviceAddress}</label>
                        </div>
                    </div>
                </fieldset>
                {open && <CustomerModals open={open} handleClose={handleClose} rows={result} handleSelect={handleSelect}/>}
            </div>
        </div>
    )
}
