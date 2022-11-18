import * as React from "react";
import Head from "next/head";
import * as style from "@/styles/navigation/footerv1.module.css";
import Link from "next/link";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const FooterV1 = () => {
  return (
    <div className={style.main}>
      <div className={`${style.section} ${style.section1}`}>
        <h3 className={style.label}>Contact Us</h3>
        <p className={style.text}>046 423 6451</p>
        <p className={style.text}>
          Tagaytay Rotonda, Aguinaldo Highway, Tagaytay City, 4120 Cavite
        </p>
        <p className={style.text}>stisotagaytay@gmail.com</p>

        <div className={style.socialMediaContainer}>
          <Link href="/">
            <div className={style.socialBox}>
              <FacebookIcon />
            </div>
          </Link>
          <Link href="/">
            <div className={style.socialBox}>
              <InstagramIcon />
            </div>
          </Link>
          <Link href="/">
            <div className={style.socialBox}>
              <TwitterIcon />
            </div>
          </Link>
          <Link href="/">
            <div className={style.socialBox}>
              <YouTubeIcon />
            </div>
          </Link>
        </div>
      </div>

      <div className={`${style.section} ${style.section2}`}>
        <img src="/Logo/LogoWhite.png" className={style.image} />
      </div>

      <div className={`${style.section} ${style.section3}`}>
        <img src="/Logo/STILogo.png" className={style.imageBPBP} />
        <p className={style.text}>
          STISO Tagaytay is supported by <br /> STI College Tagaytay.
        </p>
        <Link href="/info/donate/">
          <h4 className={style.buttonFont}>Enroll Now</h4>
        </Link>
      </div>
    </div>
  );
};

export default FooterV1;
