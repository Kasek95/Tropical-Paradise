import React from "react"
import "./rateIsland.scss"
import {Link} from "react-router-dom";

const RateIsland = () => {

    return (
        <>
            <section className={"rateIsland"}>
                <article className={"container rateIslandContainer"}>
                    <h2>POLECANE WYSPY</h2>
                     <section className={"cardContainer"}>
                         <div className="islands__card" >
                             <div className="islands__card-img islands__card-img--first">
                                 <h3 className="islands__card-img-title">Wyspa Tiki Taki</h3>
                                 <p className="islands__card-img-info"><i className="fas fa-angle-double-right"></i>
                                     Więcej informacji
                                 </p>
                             </div>
                             <div className="islands__card-info">
                                 <h3 className="islands__card-info-title">Wyspa Tiki Taki</h3>
                                 <ul className="islands__card-info-list">
                                     <li className="islands__card-info-list-item">Piękna okolica</li>
                                     <li className="islands__card-info-list-item">Ciepła woda</li>
                                     <li className="islands__card-info-list-item">Czyste plaże</li>
                                     <li className="islands__card-info-list-item">Ekskluzywny bar</li>
                                     <li className="islands__card-info-list-item">Wysokie palmy</li>
                                 </ul>
                                 <button className="islands__card-info-btn btn-special-animation"><Link to={`/islands?Island=Tiki-Taki`}>Tiki Taki</Link></button>
                             </div>
                         </div>
                         <div className="islands__card" >
                             <div className="islands__card-img islands__card-img--second">
                                 <h3 className="islands__card-img-title">Wyspa Toca Toca</h3>
                                 <p className="islands__card-img-info"><i className="fas fa-angle-double-right"></i> Więcej
                                     informacji</p>
                             </div>
                             <div className="islands__card-info">
                                 <h3 className="islands__card-info-title">Wyspa Toca Toca</h3>
                                 <ul className="islands__card-info-list">
                                     <li className="islands__card-info-list-item">Piękna okolica</li>
                                     <li className="islands__card-info-list-item">Ciepła woda</li>
                                     <li className="islands__card-info-list-item">Czyste plaże</li>
                                     <li className="islands__card-info-list-item">Ekskluzywny bar</li>
                                     <li className="islands__card-info-list-item">Wysokie palmy</li>
                                 </ul>
                                 <button className="islands__card-info-btn btn-special-animation"><Link to={`/islands?Island=Toca-Toca`}>Toca Toca</Link></button>
                             </div>
                         </div>

                         <div className="islands__card" >
                             <div className="islands__card-img islands__card-img--third">
                                 <h3 className="islands__card-img-title">Wyspa Nobu</h3>
                                 <p className="islands__card-img-info"><i
                                     className="fas fa-angle-double-right"></i> Więcej
                                     informacji</p>
                             </div>
                             <div className="islands__card-info">
                                 <h3 className="islands__card-info-title">Wyspa Nobu</h3>
                                 <ul className="islands__card-info-list">
                                     <li className="islands__card-info-list-item">Piękna okolica</li>
                                     <li className="islands__card-info-list-item">Ciepła woda</li>
                                     <li className="islands__card-info-list-item">Czyste plaże</li>
                                     <li className="islands__card-info-list-item">Ekskluzywny bar</li>
                                     <li className="islands__card-info-list-item">Wysokie palmy</li>
                                 </ul>
                                 <button className="islands__card-info-btn btn-special-animation"><Link to={`/islands?Island=Nobu`}>Nobu</Link></button>
                             </div>
                         </div>
                     </section>
                </article>
            </section>
        </>
    )

}

export default RateIsland;
