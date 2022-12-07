import React from "react";
import style from "./card.module.css";

function Card(props) {
  return (
    <div className={style.container}>
      <h1 className={style.name}>{props.name}</h1>
    </div>
  );
}

export default Card;
