import React from "react";
import style from "./searchBar.module.css";
// import img from "../../img/search-icon.svg";

function SearchBar() {
  return (
    <div className={style.container}>
      <div className={style.searchBar}>
        <input className={style.input} type="text" placeholder="Search..." />

        <div className={style.go}>GO</div>
      </div>
    </div>
  );
}

export default SearchBar;
