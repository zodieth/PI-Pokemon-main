import React, { useState, useEffect } from "react";
import "../Components/loadingSpin.css";
import { Link } from "react-router-dom";
import style from "./landing.module.css";
import "../App.css";

function Landing() {
  const [showComponent, setComponent] = useState(true);
  const [showComponentButton, setComponentButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setComponent(false);
      setComponentButton(true);
    }, 1000);
  }, []);

  return (
    <div className="landing">
      {showComponent && <div className="loading"></div>}
      {showComponentButton && (
        <Link className={style.home} to="/home">
          HOME
        </Link>
      )}
    </div>
  );
}

export default Landing;
