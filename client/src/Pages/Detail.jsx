import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonId } from "../Redux/actions";
import NavBar from "../Components/NavBar/NavBar";
import Card from "../Components/Card/Card";
import style from "./detail.module.css";

function Detail() {
  const { id } = useParams();
  const iDState = useSelector((state) => state.pokemonById);

  console.log(iDState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonId(id));
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div>
        <NavBar />
      </div>
      <div className={style.card}>
        {iDState.length > 0 ? (
          iDState.map((c) => (
            <Card key={c.id} name={c.name} img={c.img} type={c.type} />
          ))
        ) : (
          <h1>loading..</h1>
        )}
      </div>
      <div>{console.log(iDState)}</div>
    </div>
  );
}

export default Detail;
