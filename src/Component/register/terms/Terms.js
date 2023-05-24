import React from "react";
import "./terms.scss"
import {Link} from "react-router-dom"

const Terms = () => {

    return (
        <main className={"termsMain"}>
            <section className={"container termsContainer"}>
                 <span>1. Żeby zamówić nocleg musisz być zarejestrowany </span>
                 <span>2. Możesz odwołać nocleg max. 2 tyg od rozpoczęcia noclegu</span>
                 <span>3. Jeśli odwołasz nocleg zostanie zwrócone tylko 50%</span>
                 <span>4. Żeby odwołać rezerwację możesz napisać do admina lub usunąć w swoim koncie</span>
                <span>5. Zwierzęta są dozwolone na terenie apartamentów</span>
                <span>6. Po przybyciu na miejscu musisz wpłacić kaucję w wysokości 100zł</span>
                <span>7. Jeśli wszystko będzie okej po wymeldowaniu kaucja zostanie zwrócona</span>
                <Link to={"/register"}>Powrót</Link>
            </section>
        </main>
    )

}

export default Terms