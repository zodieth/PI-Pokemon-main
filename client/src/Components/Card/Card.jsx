import React from "react";
import style from "./card.module.css";

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
        <div className={style.life}>{props.life}</div>
        <div className={style.strength}>{props.strength}</div>
        <div className={style.defense}>{props.defense}</div>
        <div className={style.speed}>{props.speed}</div>
        <div className={style.height}>{props.height}</div>
        <div className={style.weight}>{props.weight}</div>
      </div>
    </div>
  );
}

export default Card;
