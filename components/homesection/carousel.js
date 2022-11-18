/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useCallback } from "react";
import Link from "next/link";
import Head from "next/head";
import Carousel from "nuka-carousel";
import style from "@/styles/homesection/carousel.module.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

export default function CarouselComponent() {
  const [state, setState] = React.useState(0);

  React.useEffect(() => {
    if (state === 3) {
      setState(0);
    }
  }, [state]);

  return (
    <div className={style.main}>
      <Carousel
        slideIndex={state}
        afterSlide={(slideIndex) => setState(slideIndex)}
        width="100%"
        height="100%"
        transitionMode="scroll"
        onDragStart={(slideIndex) => {
          if (state == 2) {
            setState(0);
          }
        }}
        autoplay={true}
        autoplayInterval={4000}
        renderCenterLeftControls={({ previousSlide }) => (
          <div className={style.carouselButton}>
            <ArrowBackIosIcon
              style={{ fontSize: "70px" }}
              onClick={previousSlide}
            />
          </div>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <div className={style.carouselButton}>
            <ArrowForwardIosIcon
              style={{ fontSize: "70px" }}
              onClick={() => {
                if (state == 2) {
                  setState(0);
                } else {
                  nextSlide();
                }
              }}
            />
          </div>
        )}
      >
        <div className={style.itemContainer1}>
          <div className={style.itemBox1}>
            <div className={style.textBox}>
              <h1 className={style.title}>LEADERS THAT ARE FELT</h1>
              <div className={style.buttoncontainer}>
                <Link href="/info/about">
                  <h4 className={style.button}>LEARN MORE</h4>
                </Link>
                {/* <PlayCircleOutlineIcon onClick={()=>toggle("https://www.youtube.com/embed/V5Is1K5Bprs")} style={{fontSize: '45px'}} className={style.youtubeButton}/> */}
              </div>
            </div>
          </div>
        </div>

        <div className={style.itemContainer2}>
          <div className={style.itemBox1}>
            <div className={style.textBox}>
              <h1 className={style.title}>AN ACTIVE SOCIETY</h1>
              {/* <p className={style.subText}>
                                The PHILIPPINE CENTURY, Change can happen OVERNIGHT!
                        </p> */}
              <div className={style.buttoncontainer}>
                <Link href="/info/program">
                  <h4 className={style.button}>LEARN MORE</h4>
                </Link>
                {/* <PlayCircleOutlineIcon onClick={()=>toggle("https://www.youtube.com/embed/Hh5NoTvzDQY")} style={{fontSize: '45px'}} className={style.youtubeButton}/> */}
              </div>
            </div>
          </div>
        </div>

        <div className={style.itemContainer3}>
          <div className={style.itemBox1}>
            <div className={style.textBox}>
              <h1 className={style.title}>CONFIDENT INDIVIDUALS</h1>
              <div className={style.buttoncontainer}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.google.com/forms/d/1yoGOHrJUBUwfuhIeJDm18CGscvCLmGPlN-yno1-tQ-I/viewform?fbclid=IwAR3H0zii6wp9ukTk1OIWkntS8IbBySy2Mab2J0qjphUfefSKqWdDate7uuM&edit_requested=true"
                >
                  <h4 className={style.button}>JOIN THE ADVOCACY</h4>
                </a>
                {/* <PlayCircleOutlineIcon onClick={()=>toggle("https://www.youtube.com/embed/yVlRTRWKGkw")} style={{fontSize: '45px'}} className={style.youtubeButton}/> */}
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
