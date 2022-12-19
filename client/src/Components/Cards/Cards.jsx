import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { getAllPokemons, filterOrder } from "../../Redux/actions";
import { Link } from "react-router-dom";
import style from "./cards.module.css";
import Paginado from "../Paginado/Paginado";
import "../../Components/loadingSpin.css";

function Cards() {
  let pokemonsState = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  //--------------Paginado-----------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const LastPokemons = currentPage * pokemonsPerPage; //
  const FirstPokemon = LastPokemons - pokemonsPerPage; // 0
  const currentPokemons = pokemonsState.slice(FirstPokemon, LastPokemons);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //---------------------------------------------

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  const handleChange = (e) => {
    if (!e.target.value.length) {
      e.preventDefault();
    } else {
      dispatch(filterOrder(e.target.value));
    }
  };

  return (
    <div>
      <div className={style.paginado_filters}>
        <div>
          <Paginado
            pokemonsPerPage={pokemonsPerPage}
            pokemonsState={pokemonsState.length}
            paginado={paginado}
          />
        </div>
        <div className={style.filters}>
          <select onChange={handleChange}>
            <option>FILTERS</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
      </div>

      <div className={style.container}>
        {currentPokemons.length > 0 ? (
          currentPokemons.map((c) => (
            <Link key={c.id} to={`/pokemons/id/${c.id}`}>
              <Card key={c.id} name={c.name} img={c.img} type={c.type} />
            </Link>
          ))
        ) : (
          <div className="loading"></div>
        )}
      </div>
    </div>
  );
}

export default Cards;
