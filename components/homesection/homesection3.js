import * as React from "react";
import Head from "next/head";
import * as style from "@/styles/homesection/homesection3.module.css";
import Link from "next/link";

const HomeSection3 = () => {
  return (
    <div className={style.main}>
      <div className={style.imageBox}>
        <img
          className={style.image}
          src="/Images/president.jpg"
          alt="Marwin Gonzales"
        />
      </div>
      <div className={style.contentBox}>
        <h1 className={style.title}>Meet Marwin</h1>
        <p className={style.subTitle}>
          The President of the STISO Tagaytay 2022-2023. A leader to lead us to
          new horizons and create an environment that promotes collaboration,
          teamwork, and of course fun. <br />
          WE AIM HIGH STI
        </p>
        <Link href="/info/about">
          <h4 className={style.button}>READ MORE</h4>
        </Link>
      </div>
    </div>
  );
};

export default HomeSection3;
