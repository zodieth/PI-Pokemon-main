import React from "react";
import style from "./navBar.module.css";
import { Link } from "react-router-dom";
import logo from "../../img/pokeball.png";

function NavBar() {
  return (
    <header className={style.header}>
      <img className={style.logo} src={logo} alt="" />
      <nav>
        <ul className={style.nav__links}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/landing">Landing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Link className={style.form} to="/form">
        <button>Create Pokemon</button>
      </Link>
    </header>
  );
}

export default NavBar;
