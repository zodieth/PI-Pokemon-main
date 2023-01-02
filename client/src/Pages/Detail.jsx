import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonId } from "../Redux/actions";
import NavBar from "../Components/NavBar/NavBar";
import style from "./detail.module.css";
import "./loadingSpin.css";
import Card from "../Components/Card/Card";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPokemonId(id));
  }, [dispatch, id]);

  const iDState = useSelector((state) => state.pokemonById);

  const [showComponent, setComponent] = useState(true);
  const [showComponentCard, setComponentCard] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setComponent(false);
      setComponentCard(true);
    }, 500);
  }, []);

  return (
    <div className={style.container}>
      <div>
        <NavBar />
      </div>
      <div className={style.card}>
        {showComponent && <div className="loading"></div>}
        {showComponentCard && (
          <div>
            {iDState.length > 0 ? (
              iDState.map((e) => (
                <Card
                  key={e.id}
                  name={e.name}
                  img={e.img}
                  type={e.type}
                  life={e.life}
                  strength={e.strength}
                  defense={e.defense}
                  speed={e.speed}
                  height={e.height}
                  weight={e.weight}
                />
              ))
            ) : (
              <div className="loading"></div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
