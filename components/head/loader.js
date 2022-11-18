import * as React from "react";
import * as style from "@/styles/caveat/loader.module.css";

const Loader = () => {
  return (
    <div className={style.main}>
      <div className={style.logoBox}></div>
      <div className={style.sideA}></div>
      <div className={style.sideB}></div>
    </div>
  );
};

export default Loader;
