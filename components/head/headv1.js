import * as React from "react";
import Head from "next/head";
import * as style from "@/styles/navigation/headv1.module.css";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const HeadV1 = ({ pos, open, setOpen }) => {
  return (
    <div className={pos === "top" ? style.main : style.off}>
      <div className={pos === "top" ? style.navbar : style.navbarFixed}>
        <div className={pos === "top" ? style.navbar1 : style.navbar1Fixed}>
          <Link href="/">
            <img src="/Logo/LogoWhite.png" className={style.logo} alt="logo" />
          </Link>
        </div>

        <div className={pos === "top" ? style.navbar2 : style.navbar2Fixed}>
          <Link href="/info/about">
            <div className={style.buttonBox}>
              <h4 className={style.buttonFont}>Meet The Team</h4>
            </div>
          </Link>

          <Link href="/info/program">
            <div className={style.buttonBox}>
              <h4 className={style.buttonFont}>Platform</h4>
            </div>
          </Link>

          <Link href="/blog">
            <div className={style.buttonBox}>
              <h4 className={style.buttonFont}>News</h4>
            </div>
          </Link>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/1yoGOHrJUBUwfuhIeJDm18CGscvCLmGPlN-yno1-tQ-I/viewform?fbclid=IwAR3H0zii6wp9ukTk1OIWkntS8IbBySy2Mab2J0qjphUfefSKqWdDate7uuM&edit_requested=true"
          >
            <div className={style.buttonBox}>
              <h4 className={style.buttonFont}>Get Involved</h4>
            </div>
          </a>

          <Link href="/info/event">
            <div className={style.buttonBox}>
              <h4 className={style.buttonFont}> Upcoming Events</h4>
            </div>
          </Link>
        </div>

        <div
          className={style.navbar4}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <MenuIcon
            style={{ color: "#fff", fontSize: "40px", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeadV1;
