import React from "react";
import style from "./navBar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../img/pokeball.png";
import { Route } from "react-router-dom";

function NavBar() {
  return (
    <div className={style.everything}>
      <header className={style.header}>
        <Route exact path="/home">
          <img
            className={style.logo}
            src={logo}
            alt=""
            onClick={() => window.location.reload()}
          />
        </Route>

        <Route exact path="/pokemon/:name">
          <Link to="/home">
            <img className={style.logo} src={logo} alt="" />
          </Link>
        </Route>

        <Route exact path="/pokemons/:id">
          <Link to="/home">
            <img className={style.logo} src={logo} alt="" />
          </Link>
        </Route>

        <div className={style.nav}>
          <nav>
            <ul className={style.nav__links}>
              <Route exact path="/home">
                <li onClick={() => window.location.reload()}>
                  <Link to="#">Home</Link>
                </li>
              </Route>
              <Route exact path="/pokemons/:id">
                <li>
                  <Link to="/home">Home</Link>
                </li>
              </Route>
              <Route exact path="/pokemon/:name">
                <li>
                  <Link to="/home">Home</Link>
                </li>
              </Route>
              <li>
                <Link to="/">Landing</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <div>
            <SearchBar />
          </div>
        </div>
      </header>
      <Link className={style.form} to="/form">
        <button>Create Pokemon</button>
      </Link>
    </div>
  );
}

export default NavBar;
