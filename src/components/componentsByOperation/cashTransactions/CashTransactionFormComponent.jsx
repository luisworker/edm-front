import './styles.css'
import {useForm} from "./services/customHooks/useForm.js";

export const CashTransactionFormComponent = () => {

    const initialForm = {
        inputMT1000: 0.0,
        inputMT500: 0.0,
        inputMT200: 0.0,
        inputMT100: 0.0,
        inputMT50: 0.0,
        inputMT20: 0.0,
        inputMTCoins: 0.0
    }
    const initialResults = {
        resultMT1000: 0.0,
        resultMT500: 0.0,
        resultMT200: 0.0,
        resultMT100: 0.0,
        resultMT50: 0.0,
        resultMT20: 0.0,
        total : 0.0
    }

    const {
        formState,
        inputMT1000,
        inputMT500,
        inputMT200,
        inputMT100,
        inputMT50,
        inputMT20,
        inputMTCoins,
        result,
        resultMT1000,
        resultMT500,
        resultMT200,
        resultMT100,
        resultMT50,
        resultMT20,
        total,
        inputOnchange
    } = useForm(initialForm, initialResults);

    return (
        <div className='d-flex flex-column h-100'>
            <div className='container border rounded flex-grow-1'>
                <fieldset disabled>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="mr-2 d-flex justify-content-between cash-div-custom">
                                <div className="col-auto">
                                    <label htmlFor="disabledTextInput" className="form-label">Data:</label>
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="disabledTextInput" className="form-label">Disabled input</label>
                                </div>
                            </div>
                            <div className="mr-2 d-flex justify-content-between cash-div-custom">
                                <div className="col-auto">
                                    <label htmlFor="disabledTextInput" className="form-label">Escritório Comer:</label>
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="disabledTextInput" className="form-label">Disabled input</label>
                                </div>
                            </div>
                            <div className="mr-2 d-flex justify-content-between cash-div-custom">
                                <div className="col-auto">
                                    <label htmlFor="disabledTextInput" className="form-label">No. Caixa:</label>
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="disabledTextInput" className="form-label">Disabled input</label>
                                </div>
                            </div>
                            <div className="mr-2 d-flex justify-content-between cash-div-custom">
                                <div className="col-auto">
                                    <label htmlFor="disabledTextInput" className="form-label">Utilizador:</label>
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="disabledTextInput" className="form-label">Disabled input</label>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mr-2 d-flex justify-content-between cash-div-custom">
                                <div className="col-auto">
                                    <label htmlFor="disabledTextInput" className="form-label">Desde:</label>
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="disabledTextInput" className="form-label">Disabled input</label>
                                </div>
                            </div>
                            <div className="mr-2 d-flex justify-content-between cash-div-custom">
                                <div className="col-auto">
                                    <label htmlFor="disabledTextInput" className="form-label">Até:</label>
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="disabledTextInput" className="form-label">Disabled input</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <form className='mt-3' name='cashTransactionForm'>
                <label htmlFor="disabledTextInput" className="form-label">Detalles Caixa:</label>
                <div className="border container rounded flex-grow-1">
                    <div className="mr-2 d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom">{'1000 MT:'}</label>
                        </div>
                        <div className="col-auto">
                            <div className='row '>
                                <label htmlFor="inputMT1000" className="form-label col-2">*</label>
                                <input type="number"
                                       name="inputMT1000"
                                       className="form-control col ml-3 pt-0 text-end text-end"
                                       placeholder="0"
                                       value={inputMT1000}
                                       onChange={inputOnchange}
                                />
                                <label htmlFor="disabledTextInput" className="form-label col-1">=</label>
                            </div>
                        </div>
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom ">{resultMT1000}</label>
                        </div>
                    </div>
                    <div className="mr-2 d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom">{'500 MT:'}</label>
                        </div>
                        <div className="col-auto">
                            <div className='row '>
                                <label htmlFor="disabledTextInput" className="form-label col-2">*</label>
                                <input type="number"
                                       name="inputMT500"
                                       className="form-control col ml-3 pt-0 text-end"
                                       placeholder="0"
                                       value={inputMT500}
                                       onChange={inputOnchange}/>
                                <label htmlFor="disabledTextInput" className="form-label col-1">=</label>
                            </div>
                        </div>
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput" className="form-label cash-label-custom ">{resultMT500 }</label>
                        </div>
                    </div>
                    <div className="mr-2 d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom">{'200 MT:'}</label>
                        </div>
                        <div className="col-auto">
                            <div className='row '>
                                <label htmlFor="disabledTextInput" className="form-label col-2">*</label>
                                <input type="number"
                                       name="inputMT200"
                                       className="form-control col ml-3 pt-0 text-end"
                                       placeholder="0"
                                       value={inputMT200}
                                       onChange={inputOnchange}/>
                                <label htmlFor="disabledTextInput" className="form-label col-1">=</label>
                            </div>
                        </div>
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput" className="form-label cash-label-custom ">{resultMT200}</label>
                        </div>
                    </div>
                    <div className="mr-2 d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput" className="form-label cash-label-custom">100 MT:</label>
                        </div>
                        <div className="col-auto">
                            <div className='row '>
                                <label htmlFor="disabledTextInput" className="form-label col-2">*</label>
                                <input type="number"
                                       name="inputMT100"
                                       className="form-control col ml-3 pt-0 text-end"
                                       placeholder="0"
                                       value={inputMT100}
                                       onChange={inputOnchange}/>
                                <label htmlFor="disabledTextInput" className="form-label col-1">=</label>
                            </div>
                        </div>
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput" className="form-label cash-label-custom">{resultMT100}</label>
                        </div>
                    </div>
                    <div className="mr-2 d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom">{'50 MT:'}</label>
                        </div>
                        <div className="col-auto">
                            <div className='row '>
                                <label htmlFor="disabledTextInput" className="form-label col-2">*</label>
                                <input type="number"
                                       name="inputMT50"
                                       className="form-control col ml-3 pt-0 text-end"
                                       placeholder="0"
                                       value={inputMT50}
                                       onChange={inputOnchange}/>
                                <label htmlFor="disabledTextInput" className="form-label col-1">=</label>
                            </div>
                        </div>
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput" className="form-label mr-4 cash-label-custom">{resultMT50}</label>
                        </div>
                    </div>
                    <div className="mr-2 d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom">{'20 MT:'}</label>
                        </div>
                        <div className="col-auto">
                            <div className='row '>
                                <label htmlFor="disabledTextInput" className="form-label col-2">*</label>
                                <input type="number"
                                       name="inputMT20"
                                       className="form-control col ml-3 pt-0 text-end"
                                       placeholder="0"
                                       value={inputMT20}
                                       onChange={inputOnchange}/>
                                <label htmlFor="disabledTextInput" className="form-label col-1">=</label>
                            </div>
                        </div>
                        <div className="col-auto mr-4">
                            <label htmlFor="disabledTextInput" className="form-label cash-label-custom">{resultMT20}</label>
                        </div>
                    </div>
                    <div className="mr-2 d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom mt">{'  Coins:'}</label>
                        </div>
                        <div className="col-auto justify-content-between ">

                        </div>
                        <div className="col-auto">
                            <input type="number"
                                   step="0.01"
                                   name="inputMTCoins"
                                   className="form-control col ml-3 pt-0 text-end cash-input-coin-custom"
                                   placeholder="0"
                                   value={inputMTCoins}
                                   onChange={inputOnchange}
                            />
                        </div>
                    </div>
                </div>

                <div className="border container rounded flex-grow-1 mt-2">
                    <div className="mt-3 d-flex justify-content-between cash-div-custom">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput" className="form-label ">Total na Caixa:</label>
                        </div>
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput" className="form-label">{total}</label>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label "></label>
                        </div>
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput" className="form-label">Quantidade:</label>
                        </div>
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput" className="form-label">Valor:</label>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom-1">Cheques:</label>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iChequesQuantidades" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iChequesValor" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom-1">OTP:</label>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iOtpQuantidades" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iOtpValor" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom-1">Transferéncias:</label>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iTransferenciasQuantidades"
                                   className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iTransferenciasValor" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom-1">Credit Card:</label>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iCcardQuantidades" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iCcardValor" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom-1">Rascunhos:</label>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iRascunhosQuantidades" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iRascunhosValor" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom-1">Int Con/PUB lgt:</label>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iConPubQuantidades" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iConPubValor" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom-1">Disc. Rad IN Pmt:</label>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iDiscRadQuantidades" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iDiscRadValor" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom-1">tax Exempt Cust:</label>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iDiscRadQuantidades" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iDiscRadValor" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom-1">Diff Exch. Rate:</label>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iDiscRadQuantidades" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iDiscRadValor" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom-1">Fluct in demand:</label>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iDiscRadQuantidades" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iDiscRadValor" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-between cash-div-custom row">
                        <div className="col-auto">
                            <label htmlFor="disabledTextInput"
                                   className="form-label cash-label-custom-1">Mtg Cust Sup AC:</label>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iDiscRadQuantidades" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                        <div className="col-auto">
                            <input type="number" name="iDiscRadValor" className="form-control col ml-3 pt-0"
                                   placeholder="0.0"/>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary m-3">Confirma</button>
                <button type="button" className="btn btn-secondary m-3">Cancelar</button>

            </form>
        </div>

    )
}