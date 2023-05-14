import React from "react";
import "./paymentInfo.scss"

const PaymentInfo = ({showCardForm}) => {
    return (
        <>
            <div className={"PaymentInfo"}>
                <h3>Nie posiadasz żadnej karty</h3>
                <span>Przejdź to dodaj kartę i dodaj kartę</span>
                <span>Możesz dodać usunąć i edytować kartę kiedykolwiek</span>
                <button onClick={showCardForm} className={"addCart"}>Dodaj Kartę</button>
            </div>
        </>
    )
}
export default PaymentInfo;