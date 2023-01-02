import React from "react";
import style from "./card.module.css";
import { Route } from "react-router-dom";

function Card(props) {
  return (
    <div className={style.container}>
      <h1 className={style.name}>{props.name}</h1>
      <img className={style.img} src={props.img} alt="img" />
      <div className={style.types}>
        <div className={style.types}>
          {props.type[0] && props.type[1] && props.type[2] ? (
            <div className={style.container_types}>
              <div className={style.type}>{props.type[0]}</div>
              <div className={style.type}>{props.type[1]}</div>
              <div className={style.type}>{props.type[2]}</div>
            </div>
          ) : props.type[0] && props.type[1] ? (
            <div className={style.container_types}>
              <div className={style.type}>{props.type[0]}</div>
              <div className={style.type}>{props.type[1]}</div>
            </div>
          ) : props.type[0] ? (
            <div className={style.container_types}>
              <div className={style.type}>{props.type[0]}</div>
            </div>
          ) : (
            ""
          )}
        </div>
        <Route exact path={"/pokemons/id/:id"}>
          <div className={style.health}>
            {!props.health ? "" : <div>health:{props.health}</div>}
          </div>
          <div className={style.attack}>
            {!props.attack ? "" : <div>attack:{props.attack}</div>}
          </div>
          <div className={style.defense}>
            {!props.defense ? "" : <div>defense:{props.defense}</div>}
          </div>
          <div className={style.velocity}>
            {!props.velocity ? "" : <div>velocity:{props.velocity}</div>}
          </div>
          <div className={style.height}>
            {!props.height ? "" : <div>height:{props.height}</div>}
          </div>
          <div className={style.weight}>
            {!props.weight ? "" : <div>weight:{props.weight}</div>}
          </div>
        </Route>
        <Route exact path={"/pokemon/:name"}>
          <div className={style.health}>
            {!props.health ? "" : <div>health:{props.health}</div>}
          </div>
          <div className={style.attack}>
            {!props.attack ? "" : <div>attack:{props.attack}</div>}
          </div>
          <div className={style.defense}>
            {!props.defense ? "" : <div>defense:{props.defense}</div>}
          </div>
          <div className={style.velocity}>
            {!props.velocity ? "" : <div>velocity:{props.velocity}</div>}
          </div>
          <div className={style.height}>
            {!props.height ? "" : <div>height:{props.height}</div>}
          </div>
          <div className={style.weight}>
            {!props.weight ? "" : <div>weight:{props.weight}</div>}
          </div>
        </Route>
      </div>
    </div>
  );
}

export default Card;
