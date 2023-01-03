import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonId } from "../Redux/actions";
import NavBar from "../Components/NavBar/NavBar";
import style from "./detail.module.css";
import "./loadingSpin.css";

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
    <div>
      <div>
        <NavBar />
      </div>
      <div className={style.card}>
        {showComponent && <div className="loading"></div>}
        {showComponentCard && (
          <div>
            {iDState.length > 0 ? (
              iDState.map((e) => (
                <div className={style.container} key={e.id}>
                  <h1 className={style.name}>{e.name}</h1>
                  <img className={style.img} src={e.img} alt="img" />
                  <div className={style.types}>
                    {e.type[0] && e.type[1] && e.type[2] ? (
                      <div className={style.container_types}>
                        <div className={style.type}>{e.type[0]}</div>
                        <div className={style.type}>{e.type[1]}</div>
                        <div className={style.type}>{e.type[2]}</div>
                      </div>
                    ) : e.type[0] && e.type[1] ? (
                      <div className={style.container_types}>
                        <div className={style.type}>{e.type[0]}</div>
                        <div className={style.type}>{e.type[1]}</div>
                      </div>
                    ) : e.type[0] ? (
                      <div className={style.container_types}>
                        <div className={style.type}>{e.type[0]}</div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className={style.stats}>
                    <div className={style.stat}>
                      {!e.health ? "" : <div>health: {e.health}</div>}
                    </div>
                    <div className={style.stat}>
                      {!e.attack ? "" : <div>attack: {e.attack}</div>}
                    </div>
                    <div className={style.stat}>
                      {!e.defense ? "" : <div>defense: {e.defense}</div>}
                    </div>
                    <div className={style.stat}>
                      {!e.velocity ? "" : <div>velocity: {e.velocity}</div>}
                    </div>
                    <div className={style.stat}>
                      {!e.height ? "" : <div>height: {e.height}</div>}
                    </div>
                    <div className={style.stat}>
                      {!e.weight ? "" : <div>weight: {e.weight}</div>}
                    </div>
                  </div>
                </div>
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
