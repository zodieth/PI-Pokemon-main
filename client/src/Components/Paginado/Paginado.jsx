import React from "react";
import style from "./paginado.module.css";
// import { useDispatch } from "react-redux";
// import { filterOrder } from "../../Redux/actions";

function Paginado({ paginado, pokemonsPerPage, pokemonsState }) {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(pokemonsState / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={style.paginado}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className={style.number} key={number}>
              <button className={style.button} onClick={() => paginado(number)}>
                {number}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Paginado;
