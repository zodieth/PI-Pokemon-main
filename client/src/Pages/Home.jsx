import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Cards from "../Components/Cards/Cards";
import "../App.css";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="cards">
        <Cards />
      </div>
    </div>
  );
}

export default Home;
