import React from "react";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { createPokemon } from "../Redux/actions";
import NavBar from "../Components/NavBar/NavBar";
import style from "./form.module.css";

function Form() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [health, setHealth] = useState(0);
  const [defense, setDefense] = useState(0);
  const [attack, setAttack] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [height, setheight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [type, setType] = useState([]);
  console.log(type);

  // const dispatch = useDispatch();
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

  const [Error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.length <= 3) {
      setError(true);
    }
    if (!img) {
      setError(true);
    }
    if (!type) {
      setError(true);
    }
    if (health === 0) {
      setError(true);
    }
    if (attack === 0) {
      setError(true);
    }
    if (defense === 0) {
      setError(true);
    }
    if (velocity === 0) {
      setError(true);
    }
    if (height === 0) {
      setError(true);
    }
    if (weight === 0) {
      setError(true);
    } else {
      const create = await createPokemon(pokemon);

      alert(create);
    }
  };

  const handleDeleteType = (ty) => {
    console.log(ty.target.outerText);
    setType(
      // ...type,
      type.filter((e) => e !== ty.target.outerText)
    );
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
              onChange={(e) => setName(e.target.value.toLowerCase())}
            />
          </label>
          <div>
            {Error && name.length <= 3 ? (
              <div className={style.error}>
                name must have more than 3 characters
              </div>
            ) : (
              ""
            )}
          </div>
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
              {!type.includes("bug") && <option name="bug">bug</option>}
              {!type.includes("ghost") && <option name="ghost">ghost</option>}
              {!type.includes("steel") && <option name="steel">steel</option>}
              {!type.includes("fire") && <option name="fire">fire</option>}
              {!type.includes("water") && <option name="water">water</option>}
              {!type.includes("grass") && <option name="grass">grass</option>}
              {!type.includes("electric") && (
                <option name="electric">electric</option>
              )}
              {!type.includes("psychic") && (
                <option name="psychic">psychic</option>
              )}
              {!type.includes("ice") && <option name="ice">ice</option>}
              {!type.includes("dragon") && (
                <option name="dragon">dragon</option>
              )}
              {!type.includes("dark") && <option name="dark">dark</option>}
              {!type.includes("fairy") && <option name="fairy">fairy</option>}
              {!type.includes("unknown") && (
                <option name="unknown">unknown</option>
              )}
              {!type.includes("shadow") && (
                <option name="shadow">shadow</option>
              )}
            </select>
          </label>
          <div className={style.types}>
            {type
              ? type.map((e) => (
                  <div key={e}>
                    <div onClick={handleDeleteType} className={style.delete}>
                      {e}
                    </div>
                  </div>
                ))
              : ""}
          </div>
          {Error && !type ? (
            <div className={style.error}>must provide at least 1 type</div>
          ) : (
            ""
          )}
          <label htmlFor="">
            Image
            <input
              className={style.input}
              name="img"
              placeholder="Url.."
              type="text"
              onChange={(e) => setImg(e.target.value)}
            />
          </label>
          <div>
            {Error && !img ? (
              <div className={style.error}>Image can not be null</div>
            ) : (
              ""
            )}
          </div>
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
          {Error && health === 0 ? (
            <div className={style.error}>Health needs to be at least 1</div>
          ) : (
            ""
          )}
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
          {Error && attack === 0 ? (
            <div className={style.error}>Attack needs to be at least 1</div>
          ) : (
            ""
          )}
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
          {Error && defense === 0 ? (
            <div className={style.error}>Defense needs to be at least 1</div>
          ) : (
            ""
          )}
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
          {Error && velocity === 0 ? (
            <div className={style.error}>Velocity needs to be at least 1</div>
          ) : (
            ""
          )}
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
          {Error && height === 0 ? (
            <div className={style.error}>Height needs to be at least 1</div>
          ) : (
            ""
          )}
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
          {Error && weight === 0 ? (
            <div className={style.error}>Weight needs to be at least 1</div>
          ) : (
            ""
          )}
          <button className={style.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
