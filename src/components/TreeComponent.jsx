import React from 'react'

export const TreeComponent = () => {
  return (
    <div className="row">
                <div className="col-4 me-auto">
                    <div className="accordion" id="accordionFirstLevel">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-atendimientoCliente" aria-expanded="false" aria-controls="panelsStayOpen-atendimientoCliente">
                                    Atendimiento ao client
                                </button>
                            </h2>
                            <div id="panelsStayOpen-atendimientoCliente" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    {/* poner lo que vaya dentro luego */}
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-cicloComertial" aria-expanded="false" aria-controls="panelsStayOpen-cicloComertial">
                                    Ciclo comercial
                                </button>
                            </h2>
                            <div id="panelsStayOpen-cicloComertial" className="accordion-collapse collapse show">

                                <div className="accordion-body container">
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed py-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEscritorioComercial" aria-expanded="false" aria-controls="flush-collapseEscritorioComercial">
                                                    Cobrança no Escritorio Comercial
                                                </button>
                                            </h2>
                                            <div id="flush-collapseEscritorioComercial" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                <div className="d-grid gap-2 mx-auto mt-3">
                                                    <a className="btn tree-btn-custom" type="button">Pegamento on-line</a>
                                                    <a className="btn tree-btn-custom" type="button">Cancelamiento de pagamento</a>
                                                    <a className="btn tree-btn-custom" type="button">A falta de pagamento</a>
                                                    <a className="btn tree-btn-custom" type="button">Plano de prestação</a>
                                                    <a className="btn tree-btn-custom" type="button">Late Payment adjustment</a>
                                                    <a className="btn tree-btn-custom" type="button">Estado de Caixa</a>
                                                    <a className="btn tree-btn-custom" type="button">Abrir / Fechar caixa</a>
                                                    <a className="btn tree-btn-custom" type="button">Transacçõnes de Caixa</a>
                                                    <a className="btn tree-btn-custom" type="button">Histórico de Transacçõnes de Caixa</a>
                                                    <a className="btn tree-btn-custom" type="button">Bank Deposits Inquiries</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePrePagamento" aria-expanded="false" aria-controls="flush-collapsePrePagamento">
                                                    Pré-pagamento
                                                </button>
                                            </h2>
                                            <div id="flush-collapsePrePagamento" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                            </div>
                                        </div>
                                    </div>



                                </div>

                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Manuntençao de unidades
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    {/* poner lo que vaya dentro luego */}
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Manuntençao BD
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    {/* poner lo que vaya dentro luego */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                   
               
            </div>
  )
}
