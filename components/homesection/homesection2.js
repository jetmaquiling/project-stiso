import * as React from "react";
import Head from "next/head";
import * as style from "@/styles/homesection/homesection2.module.css";
import Link from "next/link";

const HomeSection2 = () => {
  return (
    <div className={style.main}>
      <div className={style.contentBox}>
        <h2 className={style.title}>Ways to Get Involved</h2>
        <div className={style.buttonContainer}>
          <Link
            className={`${style.buttonBox} ${style.buttonBox1}`}
            href="https://docs.google.com/forms/d/1yoGOHrJUBUwfuhIeJDm18CGscvCLmGPlN-yno1-tQ-I/viewform?fbclid=IwAR3H0zii6wp9ukTk1OIWkntS8IbBySy2Mab2J0qjphUfefSKqWdDate7uuM&edit_requested=true"
          >
            <img src="/Images/JoinBT.JPG" className={style.imageBox} />
          </Link>

          <Link
            className={`${style.buttonBox} ${style.buttonBox2}`}
            href="/info/program"
          >
            <img src="/Images/PrioritiesBT.JPG" className={style.imageBox} />
          </Link>

          <Link
            className={`${style.buttonBox} ${style.buttonBox3}`}
            href="/blog"
          >
            <img src="/Images/PressBT.JPG" className={style.imageBox} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
