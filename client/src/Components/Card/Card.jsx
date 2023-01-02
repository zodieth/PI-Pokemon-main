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
          <div className={style.health}>health: {props.health}</div>
          <div className={style.attack}>attack: {props.attack}</div>
          <div className={style.defense}>defense: {props.defense}</div>
          <div className={style.velocity}>velocity: {props.velocity}</div>
          <div className={style.height}>height: {props.height}</div>
          <div className={style.weight}>weight: {props.weight}</div>
        </Route>
        <Route exact path={"/pokemon/:name"}>
          <div className={style.health}>health: {props.health}</div>
          <div className={style.attack}>attack: {props.attack}</div>
          <div className={style.defense}>defense: {props.defense}</div>
          <div className={style.velocity}>velocity: {props.velocity}</div>
          <div className={style.height}>height: {props.height}</div>
          <div className={style.weight}>weight: {props.weight}</div>
        </Route>
      </div>
    </div>
  );
}

export default Card;
