import React, {useState} from "react";
import "./cardForm.scss";

import Cleave from 'cleave.js/react';

const CardForm = () => {
    const [cardNumber, setCardNumber] = useState()
    const [userName, setUserName] = useState()
    const [ccv, setCcv] = useState()
    const [year, setYear] = useState()
    const [typeCard, setTypeCard] = useState()


    const  onCreditCardChange = (e) => {
        setCardNumber(e.target.value)
    }
    return (
        <div className={"cardForm"}>
             <h1>Dodaj Metodę Płatności</h1>
            <div className={"input"}>
                <label htmlFor={"user"}>Imię i Nazwisko</label>
                <input onChange={e => setUserName(e.target.value)} name={"user"}  value={userName} placeholder="Imię i nazwisko"/>
            </div>
             <div className={"input"}>
                 <label htmlFor={"cardNumber"}>Numer Karty</label>
                 <Cleave onChange={onCreditCardChange} type={"text"} value={cardNumber} name={"cardNumber"}  options={{creditCard: true, }} placeholder="xxxx-xxxx-xxxx-xxxx"/>
             </div>
             <div className={"date"}>
                 <div className={"input-date"}>
                     <label htmlFor={"month"}>Data Ważności</label>
                     <Cleave onChange={e => setYear(e.target.value)} name={"month"} type={"text"} options={{date: true, datePattern: ["m","y"]}} value={year}  placeholder="Miesiąc/Rok"/>
                 </div>

                 <div className={"input-date"}>
                     <label htmlFor={"CCV"}>Kod CCV</label>
                     <Cleave onChange={e => setCcv(e.target.value)} options={{blocks: [3]}} name={"CCV"} type={"text"} value={ccv} placeholder="Kod CCV"/>
                 </div>
             </div>
        </div>
    )
}

export default CardForm;