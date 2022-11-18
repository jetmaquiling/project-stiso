import * as React from "react";
import Head from "next/head";
import * as style from "@/styles/homesection/homesection4.module.css";
import Link from "next/link";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import qs from "qs";
import config from "@/config/configuration.json";
import moment from "moment";
import axios from "axios";

const Article = () => {
  const [mainArticle, setMainArticle] = React.useState({});
  const [feature, setFeature] = React.useState([]);

  React.useEffect(() => {
    async function getBlog() {
      try {
        const query = qs.stringify({
          _where: {
            _or: [
              { section_position: "feature" },
              { section_position: "main" },
            ],
          },
        });
        const { data } = await axios.get(
          `${config.SERVER_URL}/article-ernie-abellas?${query}`
        );

        data.map((article, index) => {
          if (article.section_position === "main") {
            setMainArticle(data[index]);
            setMainArticle({
              ...data[index],
              clipboard: data[index].thumbnail_image.url,
            });
          }

          if (article.section_position === "feature") {
            setFeature((feature) => [...feature, data[index]]);
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
    getBlog();
  }, []);

  return (
    <div className={style.main}>
      <h2 className={style.title}>Articles</h2>
      <div className={style.mainContainer}>
        <div className={style.imageBox}>
          <img
            className={style.image}
            src={mainArticle.clipboard}
            alt="Ernie Abella"
          />
        </div>

        <div className={style.articleBox}>
          <h6 className={style.category}>{mainArticle.subject}</h6>

          <h3 className={style.headlineSpecial}>
            <h6 className={style.time}>
              Published {moment(mainArticle.published_at).fromNow()} ...
            </h6>
            {mainArticle.main_title}
          </h3>

          <Link href={`/blog/${mainArticle.id}`}>
            <h4 className={style.button}>
              Read Story{" "}
              <ArrowRightAltIcon
                style={{ color: "#FF0000", fontSize: "40px" }}
              />{" "}
            </h4>
          </Link>
        </div>
      </div>

      <div className={style.subContainer}>
        {feature.map((article, index) => {
          if (index <= 2) {
            return (
              <div key={index} className={style.subArticleBox}>
                <h6 className={style.category}>{article.subject}</h6>

                <h3 className={style.headline}>
                  <h6 className={style.time}>
                    Published {moment(article.published_at).fromNow()} ...
                  </h6>
                  {article.main_title}
                </h3>

                <Link href={`/blog/${article.id}`}>
                  <h4 className={style.button}>
                    Read Story{" "}
                    <ArrowRightAltIcon
                      style={{ color: "#FF0000", fontSize: "40px" }}
                    />{" "}
                  </h4>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Article;
