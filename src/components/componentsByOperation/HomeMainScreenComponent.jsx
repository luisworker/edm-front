import {CashTransactionFormComponent} from "./cashTransactions/CashTransactionFormComponent.jsx";
import {PostPayment} from "./postPayment/PostPayment.jsx";
import {PrePayment} from "./prePayment/PrePayment.jsx";
import {PaymentCancellation} from "./paymentCancellation/PaymentCancellation.jsx";
import {LackOfPayment} from "./lackOfPayment/LackOfPayment.jsx";
import {OpenCloseCashRegister} from "./openCloseCashRegister/OpenCloseCashRegister.jsx";
import {CashTransactionsStatus} from "./cashTransactionsStatus/CashTransactionsStatus.jsx";
import {CashTransactionsHistory} from "./cashTransactionsHistory/CashTransactionsHistory.jsx";

const navObject = {
    'default': null,
    'estadoDeCaixa': <CashTransactionFormComponent/>,

};
export const HomeMainScreenComponent = ({operation: {operationName = 'default', title = ''}}) => {
    const handleForm = () => {
    switch (operationName) {
        case 'postPayment':
            return <PostPayment/>
        case 'prePayment':
            return <PrePayment/>
        case 'paymentCancellation':
            return <PaymentCancellation/>
        case 'lackOfPayment':
            return <LackOfPayment/>
        case 'cashRegisterStatus':
            return <CashTransactionFormComponent/>
        case 'openCloseCashRegister':
            return <OpenCloseCashRegister/>
        case 'cashRegisterTransactions':
            return <CashTransactionsStatus/>
        case 'transactionsCashRegisterHistory':
            return <CashTransactionsHistory/>
        default:
            return null
    }
    }
    return (
        <div className=" ml-1 mr-1">
            <nav className="navbar bg-body-tertiary ">
                <div className="container-fluid">
                    <a className="navbar-brand text-center" href="#">
                        {title}
                    </a>
                </div>
            </nav>
            {handleForm()}
        </div>
    )
}
