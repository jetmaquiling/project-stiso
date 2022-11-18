import * as React from "react";
import Head from "next/head";
import * as style from "@/styles/newsection/newsection3.module.css";
import Link from "next/link";
import qs from "qs";
import config from "@/config/configuration.json";
import moment from "moment";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";

const NewSection3 = () => {
  const [load, setLoad] = React.useState(true);
  const [feature, setFeature] = React.useState([]);

  React.useEffect(() => {
    async function getBlog() {
      try {
        const query = qs.stringify({
          _where: { _or: [{ subject: "CAMPAIGN UPDATES" }] },
        });
        const { data } = await axios.get(
          `${config.SERVER_URL}/article-ernie-abellas?${query}`
        );
        console.log("Capaign Update", data);
        setFeature((feature) => [...feature, ...data]);
        setLoad(false);
      } catch (err) {
        console.log(err);
      }
    }
    getBlog();
  }, []);

  if (!load) {
    return (
      <div className={style.main}>
        <h2 className={style.label}>Upcoming Events</h2>
        <div className={style.articleContainer}>
          {feature.map((data) => {
            return (
              <>
                <Link href={`/blog/${data.id}`}>
                  <div key={data} className={style.articleItem}>
                    <img
                      className={style.articleImage}
                      src={data.thumbnail_image.url}
                    />
                    <h4 className={style.articleTitle}>{data.main_title}</h4>
                    <p className={style.articleSubTitle}>{data.sub_title}</p>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.main}>
        <h2 className={style.label}>👇 Top Stories 👇</h2>
        <div className={style.articleContainer}>
          {[1, 2, 3, 4].map((data) => {
            return (
              <div key={data} className={style.articleItem}>
                <Skeleton
                  className={style.skeleton}
                  animation="wave"
                  height={400}
                />
                <Skeleton
                  className={style.skeleton}
                  animation="wave"
                  height={10}
                />
                <Skeleton
                  className={style.skeleton}
                  animation="wave"
                  height={10}
                />
                <Skeleton
                  className={style.skeleton}
                  animation="wave"
                  height={10}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default NewSection3;
