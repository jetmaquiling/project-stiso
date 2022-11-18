/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useCallback } from "react";
import Link from "next/link";
import Head from "next/head";
import style from "@/styles/homesection/youtube.module.css";
import ClearIcon from "@material-ui/icons/Clear";

export default function Youtube({ openVideo, setOpenVideo }) {
  const toggle = () => {
    setOpenVideo({ url: "none", open: false });
  };

  return (
    <div
      className={openVideo.open ? style.main : style.off}
      onClick={() => toggle()}
    >
      <div className={style.xbutton}>
        <ClearIcon
          style={{ fontSize: "30px", color: "#fff", cursor: "pointer" }}
        />
      </div>
      <div className={style.videoContainer}>
        <iframe
          display="none"
          className={style.video}
          src="https://www.youtube.com/embed/Yj2YM-RdSUo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
}
