import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../Components/Card/Card";
import { searchName } from "../Redux/actions";
import { useDispatch } from "react-redux";
import NavBar from "../Components/NavBar/NavBar";
import "../App.css";
import "./loadingSpin.css";

function Name() {
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    dispatch(searchName(name));
  }, [dispatch, name]);

  const nameState = useSelector((state) => state.pokemonByName);

  console.log(nameState);
  return (
    <div>
      <NavBar />
      <div className="cards">
        {nameState ? (
          nameState.map((e) => {
            return <Card key={e.id} name={e.name} img={e.img} type={e.type} />;
          })
        ) : (
          <div className="loading"></div>
        )}
      </div>
    </div>
  );
}

export default Name;
