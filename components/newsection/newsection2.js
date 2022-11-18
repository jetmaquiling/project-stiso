import * as React from "react";
import Head from "next/head";
import * as style from "@/styles/newsection/newsection2.module.css";
import Link from "next/link";
import qs from "qs";
import config from "@/config/configuration.json";
import moment from "moment";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";

const NewSection2 = () => {
  const [feature, setFeature] = React.useState([]);
  const [load, setLoad] = React.useState(true);

  return (
    <div className={style.main}>
      <h2 className={style.label}>👇 Top Stories 👇</h2>
      <div className={style.articleContainer}>
        <Link className={style.articleItem} href={`/blog`}>
          <div className={style.articleImageBox}>
            <img className={style.articleImage} src="/Thumbnail/Slide12.jpg" />
          </div>
          <h6 className={style.articleSubject}>NEWS</h6>
          <h4 className={style.articleTitle}>
            STISO Who: The President's Message
            <span className={style.author}>- By Marwin M.</span>
          </h4>
        </Link>

        <Link className={style.articleItem} href={`/blog`}>
          <div className={style.articleImageBox}>
            <img className={style.articleImage} src="/Thumbnail/Slide14.jpg" />
          </div>
          <h6 className={style.articleSubject}>TRENDING</h6>
          <h4 className={style.articleTitle}>
            Top 10 Most Handsome Faces Of STI Tagaytay
            <span className={style.author}>- By Shane C.</span>
          </h4>
        </Link>

        <Link className={style.articleItem} href={`/blog`}>
          <div className={style.articleImageBox}>
            <img className={style.articleImage} src="/Thumbnail/Slide15.jpg" />
          </div>
          <h6 className={style.articleSubject}>NEWS</h6>
          <h4 className={style.articleTitle}>
            Know Who: The STI Tagaytay Band
            <span className={style.author}>- By Adrian S.</span>
          </h4>
        </Link>

        <Link className={style.articleItem} href={`/blog`}>
          <div className={style.articleImageBox}>
            <img className={style.articleImage} src="/Thumbnail/Slide16.jpg" />
          </div>
          <h6 className={style.articleSubject}>FUN</h6>
          <h4 className={style.articleTitle}>
            Top Ten Most Hangout Sites Of STI Tagaytay Students
            <span className={style.author}>- By Ruth F.</span>
          </h4>
        </Link>

        <Link className={style.articleItem} href={`/blog`}>
          <div className={style.articleImageBox}>
            <img className={style.articleImage} src="/Thumbnail/Slide17.jpg" />
          </div>
          <h6 className={style.articleSubject}>NEWS</h6>
          <h4 className={style.articleTitle}>
            Young Talents: Meet Jeremy Dela Cruz An Aspiring Artist
            <span className={style.author}>- By Samantha M.</span>
          </h4>
        </Link>

        <Link className={style.articleItem} href={`/blog`}>
          <div className={style.articleImageBox}>
            <img className={style.articleImage} src="/Thumbnail/Slide18.jpg" />
          </div>
          <h6 className={style.articleSubject}>BUSINESS</h6>
          <h4 className={style.articleTitle}>
            How To Get Started As A Working Student
            <span className={style.author}>- By Marwin M.</span>
          </h4>
        </Link>

        <Link className={style.articleItem} href={`/blog`}>
          <div className={style.articleImageBox}>
            <img className={style.articleImage} src="/Thumbnail/Slide19.jpg" />
          </div>
          <h6 className={style.articleSubject}>EVENTS</h6>
          <h4 className={style.articleTitle}>
            STI Christmas Ball: An Event Of A Lifetime
            <span className={style.author}>- By Mark A.</span>
          </h4>
        </Link>

        <Link className={style.articleItem} href={`/blog`}>
          <div className={style.articleImageBox}>
            <img className={style.articleImage} src="/Thumbnail/Slide13.jpg" />
          </div>
          <h6 className={style.articleSubject}>TRENDING</h6>
          <h4 className={style.articleTitle}>
            Top 10 Most Beautiful Faces in STI Tagaytay
            <span className={style.author}>- By Daniella C.</span>
          </h4>
        </Link>

        <Link className={style.articleItem} href={`/blog`}>
          <div className={style.articleImageBox}>
            <img className={style.articleImage} src="/Thumbnail/Slide20.jpg" />
          </div>
          <h6 className={style.articleSubject}>NEWS</h6>
          <h4 className={style.articleTitle}>
            Interview With the President: The Person Who Started It All
            <span className={style.author}>- By Czarina R.</span>
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default NewSection2;
