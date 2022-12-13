import React from "react";
import { useState } from "react";
import style from "./searchBar.module.css";
import { searchName } from "../../Redux/actions";
import { Link } from "react-router-dom";

function SearchBar() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    searchName(input);
  };

  return (
    <div className={style.container}>
      <div className={style.searchBar}>
        <input
          onChange={handleChange}
          className={style.input}
          type="text"
          placeholder="Search..."
        />
        <Link to={`/pokemon/${input}`}>
          <div onClick={handleSubmit} className={style.go}>
            GO
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SearchBar;
