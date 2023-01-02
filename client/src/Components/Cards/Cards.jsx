import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { getAllPokemons, filterOrder, filterType } from "../../Redux/actions";
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

  const handleChange2 = (e) => {
    if (!e.target.value.length) {
      e.preventDefault();
    } else {
      dispatch(filterType(e.target.value));
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
            current={currentPage}
          />
        </div>
        <div className={style.filters}>
          <select onChange={handleChange}>
            <option>ORDER</option>
            <option value="A-Z">UPWARD</option>
            <option value="Z-A">DOWNWARD</option>
          </select>
        </div>
        <div className={style.filters}>
          <select onChange={handleChange}>
            <option>ATTACK</option>
            <option value="UP">UPWARD</option>
            <option value="DOWN">DOWNWARD</option>
          </select>
        </div>
        <div className={style.filters}>
          <select onChange={handleChange2}>
            <option value="TYPES">TYPES</option>
            <option value="bug">BUG</option>
            <option value="ghost">GHOST</option>
            <option value="steel">STEEL</option>
            <option value="fire">FIRE</option>
            <option value="water">WATER</option>
            <option value="grass">GRASS</option>
            <option value="electric">ELECTRIC</option>
            <option value="psychic">PSYCHCIC</option>
            <option value="ice">ICE</option>
            <option value="dragon">DRAGON</option>
            <option value="dark">DARK</option>
            <option value="fairy">FAIRY</option>
            <option value="unknown">UNKNOWN</option>
            <option value="shadow">SHADOW</option>
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
