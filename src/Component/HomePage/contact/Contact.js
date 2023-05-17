import React from "react";
import "./contact.scss"
const Contact = () => {

    return (
        <section className={"contact"}>
            <article className={"container contact-container"}>
                <h2>KONTAKT</h2>
                <form className={"contactForm"}>
                    <label htmlFor={"name"}>Imię i Nazwisko:</label>
                    <input type={"text"} name={"name"}/>

                    <label htmlFor={"email"}>Adres E-mail:</label>
                    <input type={"email"} />

                    <label htmlFor={"message"}>Wiadomość:</label>
                    <textarea name={"message"}/>
                    <button className={"sendEmail"}>Wyślij</button>
                </form>
            </article>
        </section>
    )

}
export default Contact;