import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { getAllPokemons } from "../../Redux/actions";
import { Link } from "react-router-dom";
import style from "./cards.module.css";
import Paginado from "../Paginado/Paginado";
import "../../Components/loadingSpin.css";

function Cards() {
  let pokemonsState = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  //--------------Paginado-----------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(9);
  const LastPokemons = currentPage * pokemonsPerPage; // 9
  const FirstPokemon = LastPokemons - pokemonsPerPage; // 0
  const currentPokemons = pokemonsState.slice(FirstPokemon, LastPokemons);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //---------------------------------------------

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Paginado
          pokemonsPerPage={pokemonsPerPage}
          pokemonsState={pokemonsState.length}
          paginado={paginado}
        />
      </div>
      <div className={style.container}>
        {currentPokemons.length > 0 ? (
          currentPokemons.map((c) => (
            <Link key={c.id} to={`/pokemons/${c.id}`}>
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
