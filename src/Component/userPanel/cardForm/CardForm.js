import React, {useState} from "react";
import "./cardForm.scss";
import Cards from 'react-credit-cards-2';
import "react-credit-cards-2/dist/lib/styles.scss"
import supabase from "../../../supabase";
import Cleave from "cleave.js/react"
import {AiOutlineCloseCircle} from "react-icons/ai"
import {toast} from "react-toastify";

const CardForm = ({user,getPayments,closeForm}) => {
      const [name, setName] = useState("")
      const [cardNumber, setCardNumber] = useState("")
     const [epixry, setExpiry] = useState("")
     const [focus,setFocus] = useState("")
     const [ccv,setCcv] = useState("")
    const close = () => {
          closeForm()
        setName("")
        setCardNumber("")
        setExpiry("")
        setFocus("")
        setCcv("")
    }

   const onSubmit =async(e) => {
          e.preventDefault()
       await supabase.from("payments").insert({
           userOwner: name,
           cardNumber: cardNumber,
           cardCCV: ccv,
           cardYear: epixry,
           userId: user.id
       });
       toast.success('Dodałeś kartę!', {
           position: "top-right",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
       })
       getPayments()
       setName("")
       setCardNumber("")
       setExpiry("")
       setFocus("")
       setCcv("")
       closeForm()
   }
    return (
         <section className={"card"}>
             <Cards
                 number={cardNumber}
                 expiry={epixry}
                 cvc={ccv}
                 name={name}
                 focused={focus}
             />
             <form onSubmit={onSubmit} className={"cardForm"}>
                 <button onClick={close} className={"close"} type={"reset"}><AiOutlineCloseCircle className={"icon"}/></button>
                 <h1>Dodaj Metodę Płatności</h1>
                 <div className={"input"}>
                     <label htmlFor={"user"}>Imię i Nazwisko</label>
                     <input
                         type={"text"}
                         name={"name"}
                         onChange={e => setName(e.target.value)}
                         onFocus={e => setFocus(e.target.name)}
                         value={name}
                         placeholder="Imię i nazwisko"
                         id={"user"}
                     />
                 </div>
                 <div className={"input"}>
                     <label htmlFor={"cardNumber"}>Numer Karty</label>
                     <Cleave onChange={e => setCardNumber(e.target.value)}
                            onFocus={e => setFocus(e.target.name)}
                            name={"number"}
                            value={cardNumber}
                             placeholder="xxxx-xxxx-xxxx-xxxx"
                            options={{creditCard: true}}
                             type={"text"}
                             id={"cardNumber"}
                         />

                 </div>
                 <div className={"date"}>
                     <div className={"input-date"}>
                         <label htmlFor={"month"}>Data Ważności</label>
                         <Cleave
                             onChange={e => setExpiry(e.target.value)}
                             onFocus={e => setFocus(e.target.name)}
                             name={"expiry"}
                             type={"text"}
                             options={{
                                 date:true,
                                 datePattern: ["m", "y"]
                             }}
                             value={epixry}
                             placeholder="Miesiąc/Rok"
                             id={"month"}
                         />
                     </div>

                     <div className={"input-date"}>
                         <label htmlFor={"CCV"}>Kod CVC</label>
                         <Cleave
                             onChange={e => setCcv(e.target.value)}
                             onFocus={e => setFocus(e.target.name)}
                             options={{
                                 blocks: [3]
                             }}
                             name={"cvc"}
                             type={"text"}
                             value={ccv}
                             placeholder="Kod CVC"
                             id={"CCV"}
                         />
                     </div>
                 </div>
                 <button type={"submit"} className={"Add"}>Dodaj</button>

             </form>
         </section>

    )
}

export default CardForm;