import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import style from "./about.module.css";

function About() {
  return (
    <div>
      <NavBar />
      <div className={style.container}>
        <div className={style.card}>
          <img
            className={style.img}
            src="https://camo.githubusercontent.com/35b81f213ddb0e019b3567f6982d740bb2d01ae5dd712a1537e09e826e940228/68747470733a2f2f643331757a386c77666d796e38672e636c6f756466726f6e742e6e65742f4173736574732f6c6f676f2d68656e72792d77686974652d6c672e706e67"
            alt="img"
          />
          <h2 className={style.title}>Individual Project - Henry Pokemon</h2>
          <img
            className={style.imgpopke}
            src="https://raw.githubusercontent.com/zodieth/PI-Pokemon-main/master/pokemon.png"
            alt="imgpoke"
          />
          <br />
          <h3 className={style.h3}>Objetivos del Proyecto</h3>
          <ul className={style.ul}>
            <li className={style.li}>
              # Construir una App utlizando React, Redux, Node y Sequelize.
            </li>
            <li className={style.li}>
              {" "}
              # Afirmar y conectar los conceptos aprendidos en la carrera.
            </li>
            <li className={style.li}>
              # Aprender y practicar el workflow de GIT.
            </li>

            <li className={style.li}># Usar y practicar testing.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
