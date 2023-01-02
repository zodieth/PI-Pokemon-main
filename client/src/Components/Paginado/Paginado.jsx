import React from "react";
import style from "./paginado.module.css";
import previous from "../../img/previous.png";
import next from "../../img/next.png";

function Paginado({ paginado, pokemonsPerPage, pokemonsState, current }) {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(pokemonsState / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={style.paginado}>
        <li className={style.number}>
          <img
            src={previous}
            alt="previous"
            className={style.button}
            onClick={() => paginado(current - 1)}
          ></img>
        </li>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <div key={number}>
              <li className={style.number} key={number}>
                <button
                  className={style.button}
                  onClick={() => paginado(number)}
                >
                  {number}
                </button>
              </li>
            </div>
          ))}
        <li className={style.number}>
          <img
            src={next}
            alt="next"
            className={style.button}
            onClick={() => paginado(current + 1)}
          ></img>
        </li>
      </ul>
    </nav>
  );
}

export default Paginado;
