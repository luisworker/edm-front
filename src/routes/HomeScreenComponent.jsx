import {useState} from "react"
import {HomeMainScreenComponent} from "../components/componentsByOperation/HomeMainScreenComponent.jsx"
import {DefaultLayout} from "../layout/DefaultLayout.jsx";


export const HomeScreenComponent = () => {
    const [operation, setOperation] = useState({title: 'Welcome to the Home Screen', operationName: ''})

    const buttomHandle = ({target}) => {
        console.log('from buttom handle: ', target.innerText, target.name)
        const newOperation = {title: target.innerText, operationName: target.name}
        console.log(newOperation)
        setOperation(newOperation)
    }
    // useEffect(() => {
    //     console.log('from useEffect: ', operation)
    // }, [operation])
    return (
        <DefaultLayout>
        <div>
            <div className="row">
                <div className="col-4 me-auto">
                    <div className="accordion" id="accordionFirstLevel">
                        {/*<div className="accordion-item">*/}
                        {/*    <h2 className="accordion-header">*/}
                        {/*        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"*/}
                        {/*                data-bs-target="#panelsStayOpen-atendimientoCliente" aria-expanded="false"*/}
                        {/*                aria-controls="panelsStayOpen-atendimientoCliente">*/}
                        {/*            Atendimiento ao client*/}
                        {/*        </button>*/}
                        {/*    </h2>*/}
                        {/*    <div id="panelsStayOpen-atendimientoCliente" className="accordion-collapse collapse show">*/}
                        {/*        <div className="accordion-body">*/}
                        {/*            /!* poner lo que vaya dentro luego *!/*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-cicloComertial" aria-expanded="false"
                                        aria-controls="panelsStayOpen-cicloComertial">
                                    Ciclo comercial
                                </button>
                            </h2>
                            <div id="panelsStayOpen-cicloComertial" className="accordion-collapse collapse show">

                                <div className="accordion-body container">
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed py-1" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseEscritorioComercial"
                                                        aria-expanded="false"
                                                        aria-controls="flush-collapseEscritorioComercial">
                                                    Cobrança no Escritorio Comercial
                                                </button>
                                            </h2>
                                            <div id="flush-collapseEscritorioComercial"
                                                 className="accordion-collapse collapse"
                                                 data-bs-parent="#accordionFlushExample">
                                                <div className="d-grid gap-2 mx-auto mt-3">
                                                    <a className="btn tree-btn-custom"
                                                       onClick={buttomHandle}
                                                       name="postPayment"
                                                       type="button">
                                                        Pós-pagamento</a>
                                                    <a className="btn tree-btn-custom"
                                                       onClick={buttomHandle}
                                                       name="prePayment"
                                                       type="button">
                                                        Pré-pagamento</a>
                                                    <a className="btn tree-btn-custom"
                                                       onClick={buttomHandle}
                                                       name="paymentCancellation"
                                                       type="button">Cancelamiento de pagamento</a>

                                                    <a className="btn tree-btn-custom"
                                                       onClick={buttomHandle}
                                                       name="lackOfPayment"
                                                       type="button">A falta de pagamento</a>

                                                    <a className="btn tree-btn-custom"
                                                       name="cashRegisterStatus"
                                                       onClick={buttomHandle}
                                                       type="button">Status Caixa</a>

                                                    <a className="btn tree-btn-custom"
                                                       name="openCloseCashRegister"
                                                       onClick={buttomHandle}
                                                       type="button">Abrir / Fechar Caixa</a>

                                                    <a className="btn tree-btn-custom"
                                                       onClick={buttomHandle}
                                                       name="cashRegisterTransactions"
                                                       type="button">Transações de Caixa</a>

                                                    <a className="btn tree-btn-custom"
                                                       onClick={buttomHandle}
                                                       name="transactionsCashRegisterHistory"
                                                       type="button">Histórico de Transações de Caixa</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <HomeMainScreenComponent operation={operation}/>
                </div>

            </div>

        </div>
        </DefaultLayout>
    )
}
