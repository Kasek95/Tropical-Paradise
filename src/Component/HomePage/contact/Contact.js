import React from "react";
import "./contact.scss"
const Contact = () => {

    return (
        <section className={"contact"}>
            <article className={"container contact-container"}>
                <h2>KONTAKT</h2>
                <form className={"contactForm"}>
                    <label htmlFor={"name"}>Imię i Nazwisko:</label>
                    <input type={"text"} name={"name"} id={"name"}/>

                    <label htmlFor={"email"}>Adres E-mail:</label>
                    <input id={"email"} type={"email"} />

                    <label htmlFor={"message"}>Wiadomość:</label>
                    <textarea id={"message"} name={"message"}/>
                    <button className={"sendEmail"}>Wyślij</button>
                </form>
            </article>
        </section>
    )

}
export default Contact;