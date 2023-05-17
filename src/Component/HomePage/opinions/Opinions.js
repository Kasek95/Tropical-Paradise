import React from "react";
import "./opinions.scss"
import Slider from "react-slick";
import {settingsOpinions} from "./settingsOpinions";
import rev1 from "../../../assets/rev1.jpg"
import rev2 from "../../../assets/rev2.jpg"
import rev3 from "../../../assets/rev3.jpg"

const Opinions = () => {

    return (
        <section className={"opinionsHomePage"}>
             <h2>Opinie</h2>
             <article className={"container opinionsContainer"}>

                      <div className="reviews__boxes">
                          <Slider {...settingsOpinions}>
                              <div className="reviews__box">
                                  <div className="reviews__box-img">
                                      <img src={rev1} alt="Anna Nowak"/>
                                  </div>
                                  <div className="reviews__box-info">
                                      <div className="reviews__box-quote"><i className="fas fa-quote-right"></i></div>
                                      <p className="reviews__box-text">
                                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis hic provident
                                          ipsum
                                          asperiores maxime adipisci? Consectetur, aliquam consequuntur. Ipsum, natus!
                                      </p>
                                      <strong>Anna Nowak</strong>
                                  </div>
                              </div>
                              <div className="reviews__box">
                                  <div className="reviews__box-img">
                                      <img src={rev2} alt="Jan Kowalski"/>
                                  </div>
                                  <div className="reviews__box-info">
                                      <div className="reviews__box-quote"><i className="fas fa-quote-right"></i></div>
                                      <p className="reviews__box-text">
                                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis hic provident
                                          ipsum
                                          asperiores maxime adipisci? Consectetur, aliquam consequuntur. Ipsum, natus!
                                      </p>
                                      <strong>Jan Kowalski</strong>
                                  </div>
                              </div>
                              <div className="reviews__box">
                                  <div className="reviews__box-img">
                                      <img src={rev3} alt="Maria Wiśniewska"/>
                                  </div>
                                  <div className="reviews__box-info">
                                      <div className="reviews__box-quote"><i className="fas fa-quote-right"></i></div>
                                      <p className="reviews__box-text">
                                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis hic provident
                                          ipsum
                                          asperiores maxime adipisci? Consectetur, aliquam consequuntur. Ipsum, natus!
                                      </p>
                                      <strong>Maria Wiśniewska</strong>
                                  </div>
                              </div>
                          </Slider>
                      </div>

             </article>
        </section>
    )

}
export default Opinions;