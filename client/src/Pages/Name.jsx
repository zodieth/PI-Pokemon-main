import React from "react";
import { useEffect, useState } from "react";
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

  let nameState = useSelector((state) => state.pokemonByName);

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
      <NavBar />
      <div className="cards">
        {showComponent && <div className="loading"></div>}
        {showComponentCard && (
          <div>
            {!nameState ? (
              <div>not found</div>
            ) : nameState ? (
              nameState.map((e) => {
                return (
                  <Card
                    key={e.id}
                    name={e.name}
                    img={e.img}
                    type={e.type}
                    health={e.health}
                    attack={e.attack}
                    defense={e.defense}
                    velocity={e.velocity}
                    height={e.height}
                    weight={e.weight}
                  />
                );
              })
            ) : (
              <div className="loading"></div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Name;
