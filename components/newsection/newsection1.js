import * as React from "react";
import Head from "next/head";
import * as style from "@/styles/newsection/newsection1.module.css";
import Link from "next/link";
import qs from "qs";
import config from "@/config/configuration.json";
import moment from "moment";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";

const NewSection1 = () => {
  return (
    <div className={style.main}>
      <Link href={`/blog`}>
        <div className={style.mainContainer}>
          <h2 className={style.label}>Feature Story</h2>
          <h2 className={style.mainTitle}>
            New STI Leaders Arising, The Future Is Looking Bright
          </h2>
          <img className={style.mainImage} src="/Thumbnail/Slide11.jpg" />
        </div>
      </Link>
    </div>
  );
};

export default NewSection1;
