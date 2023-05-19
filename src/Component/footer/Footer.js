import React from "react";
import "./footer.scss"

const Footer = () => {

    return (

        <footer className="footer">

            <div className="container">

                <div className="footer__boxes">
                    <div className="footer__box">
                        <h3 className="footer__box-title"><i className="fas fa-kiwi-bird"></i> TP Co.</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa itaque repellat dolore
                            suscipit
                            culpa rerum veritatis illum assumenda sunt sequi.</p>
                    </div>
                    <div className={"footer__box footer__box-desktop"}>
                        <h3 className="footer__box-title">Wyspy</h3>
                        <ul className="footer__box-list">
                            <li className="footer__box-list-item"><a href="#">Wyspa Tiki Taki</a></li>
                            <li className="footer__box-list-item"><a href="#">Wyspa Toca Toca</a></li>
                            <li className="footer__box-list-item"><a href="#">Wyspa Nobu</a></li>
                            <li className="footer__box-list-item"><a href="#">Pozostałe wyspy</a></li>
                        </ul>
                    </div>

                    <div className={"footer__box footer__box-desktop"}>
                        <h3 className="footer__box-title">O Firmie</h3>
                        <ul className="footer__box-list">
                            <li className="footer__box-list-item"><a href="#">O nas</a></li>
                            <li className="footer__box-list-item"><a href="#">Zarząd</a></li>
                            <li className="footer__box-list-item"><a href="#">Kariera</a></li>
                            <li className="footer__box-list-item"><a href="#">FAQ</a></li>
                        </ul>
                    </div>


                </div>

            </div>
            <hr></hr>
                <p className="footer__bottom-text"> &copy; <span className="footer__year"></span> Tropical Paradise </p>
            </footer>
    )
}

export default Footer;