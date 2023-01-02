import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPokemon } from "../Redux/actions";
import NavBar from "../Components/NavBar/NavBar";
import style from "./form.module.css";

function Form() {
  // const [input, setInput] = useState({
  //   name: "",
  //   img: "",
  //   health: "",
  //   attack: "",
  //   defense: "",
  //   velocity: "",
  //   height: "",
  //   weight: "",
  //   type: types,
  // });

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [health, setHealth] = useState(0);
  const [defense, setDefense] = useState(0);
  const [attack, setAttack] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [height, setheight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [type, setType] = useState("");

  const dispatch = useDispatch();

  const pokemon = {
    name,
    img,
    health,
    attack,
    defense,
    velocity,
    height,
    weight,
    type,
  };

  const validate = (
    name,
    img,
    health,
    attack,
    defense,
    velocity,
    height,
    weight,
    type
  ) => {
    if (name.length <= 3) {
      alert("name must have more than 3 characters");
    } else if (img > 3) {
      alert("must provide an image");
    } else if (
      health < 1 ||
      attack < 1 ||
      defense < 1 ||
      velocity < 1 ||
      height < 1 ||
      weight < 1
    ) {
      alert("must be at least 1 type");
    } else if (!type) {
      alert("must be at least 1 type");
    } else {
      dispatch(createPokemon(pokemon));
    }
    // else if (health < 1) {
    //   alert("health must be at least 1");
    // } else if (attack < 1) {
    //   alert("attack must be at least 1");
    // } else if (defense < 1) {
    //   alert("defensemust be at least 1");
    // } else if (velocity < 1) {
    //   alert("velocity must be at least 1");
    // } else if (height < 1) {
    //   alert("height must be at least 1");
    // } else if (height < 1) {
    //   alert("height must be at least 1");
    // } else if (weight < 1) {
    //   alert("weight must be at least 1");
    // } else if (type === "") {
    //   alert("must be at least 1 type");
    // }

    // if (
    //   health.length < 1 ||
    //   attack.length < 1 ||
    //   defense.length < 1 ||
    //   velocity.length < 1 ||
    //   height.length < 1 ||
    //   weight.length < 1
    // ) {
    //   alert("length must be greater than 1");
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validate(
      name,
      img,
      health,
      attack,
      defense,
      velocity,
      height,
      weight,
      type
    );
    console.log(pokemon);
  };

  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.form}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            Name
            <input
              className={style.input}
              name="name"
              placeholder="Name..."
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="">
            Types
            <select
              className={style.type}
              onChange={(e) => {
                setType([...type, e.target.value]);
              }}
              name="type"
            >
              <option>TYPES</option>
              <option name="bug">bug</option>
              <option name="ghost">ghost</option>
              <option name="steel">steel</option>
              <option name="fire">fire</option>
              <option name="water">water</option>
              <option name="grass">grass</option>
              <option name="electric">electric</option>
              <option name="psychic">psychic</option>
              <option name="ice">ice</option>
              <option name="dragon">dragon</option>
              <option name="dark">dark</option>
              <option name="fairy">fairy</option>
              <option name="unknown">unknown</option>
              <option name="shadow">shadow</option>
            </select>
          </label>
          <div className={style.types}>
            {type[0] && type[1] && type[2] ? (
              <div>
                <div>
                  {type[0]}
                  <div className={style.delete}>X</div>
                </div>
                <div>
                  {type[1]} <div className={style.delete}>X</div>
                </div>
                <div>
                  {type[2]}
                  <div className={style.delete}>X</div>
                </div>
              </div>
            ) : type[0] && type[1] ? (
              <div>
                <div>
                  {type[0]}
                  <div className={style.delete}>X</div>
                </div>
                <div>
                  {type[1]}
                  <div className={style.delete}>X</div>
                </div>
              </div>
            ) : type[0] ? (
              <div>
                <div>
                  {type[0]}
                  <div className={style.delete}>X</div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <label htmlFor="">
            Image
            <input
              className={style.input}
              name="img"
              placeholder="Url.."
              type="text"
              onChange={(e) => setImg(e.target.value.toLowerCase())}
            />
          </label>
          <label htmlFor="">
            Health
            <input
              className={style.input}
              name="health"
              placeholder="10.."
              value={health}
              type="range"
              min="0"
              max="100"
              step="1"
              onChange={(e) => setHealth(e.target.value)}
            />
            {health}
          </label>
          <label htmlFor="">
            Attack
            <input
              className={style.input}
              name="attack"
              placeholder="10..."
              value={attack}
              type="range"
              min="0"
              max="100"
              step="1"
              onChange={(e) => {
                setAttack(e.target.value);
              }}
            />
            {attack}
          </label>
          <label htmlFor="">
            Defense
            <input
              className={style.input}
              name="defense"
              placeholder="10..."
              value={defense}
              type="range"
              min="0"
              max="100"
              step="1"
              onChange={(e) => setDefense(e.target.value)}
            />
            {defense}
          </label>
          <label htmlFor="">
            Velocity
            <input
              className={style.input}
              name="velocity"
              placeholder="10..."
              value={velocity}
              type="range"
              min="0"
              max="100"
              step="1"
              onChange={(e) => setVelocity(e.target.value)}
            />
            {velocity}
          </label>
          <label htmlFor="">
            Height
            <input
              className={style.input}
              name="height"
              placeholder="10..."
              value={height}
              type="range"
              min="0"
              max="100"
              step="1"
              onChange={(e) => setheight(e.target.value)}
            />
            {height}
          </label>
          <label htmlFor="">
            Weight
            <input
              className={style.input}
              name="weight"
              placeholder="10..."
              value={weight}
              type="range"
              min="0"
              max="1000"
              step="1"
              onChange={(e) => setWeight(e.target.value)}
            />
            {weight}
          </label>
          <button className={style.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
