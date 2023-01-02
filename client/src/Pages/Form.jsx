import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPokemon } from "../Redux/actions";
import NavBar from "../Components/NavBar/NavBar";
import style from "./form.module.css";

function Form() {
  const types = [];

  const [input, setInput] = useState({
    name: "",
    img: "",
    health: "",
    attack: "",
    defense: "",
    velocity: "",
    height: "",
    weight: "",
    type: types,
  });
  const dispatch = useDispatch();

  const handleType = (e) => {
    types.push(e.target.value);
    console.log(types);
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPokemon(input));
    console.log(input);
  };

  return (
    <div className={style.container}>
      <NavBar />
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="">
          Name
          <input
            name="name"
            placeholder="Name..."
            type="text"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Type
          <select onChange={handleType} name="type">
            <option>TYPES</option>
            <option nane="bug">bug</option>
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
        <label htmlFor="">
          Image
          <input
            name="img"
            placeholder="Url.."
            type="text"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Health
          <input
            name="health"
            placeholder="10.."
            type="number"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Attack
          <input
            name="attack"
            placeholder="10..."
            type="number"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Defense
          <input
            name="defense"
            placeholder="10..."
            type="number"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Velocity
          <input
            name="velocity"
            placeholder="10..."
            type="number"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Height
          <input
            name="height"
            placeholder="10..."
            type="number"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Weight
          <input
            name="weight"
            placeholder="10..."
            type="number"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
