/* eslint-disable @next/next/link-passhref */
import React from "react";
import Head from "next/head";
import * as style from "@/styles/navigation/headv2.module.css";
import NavigationV1 from "@/components/navigation/navigationv1";
import HeadV1 from "@/components/head/headv1";
import Link from "next/link";
import Floater from "../navigation/floater";

export default function HeadV2({ backdrop = false }) {
  const [pos, setPos] = React.useState("top");
  const [open, setOpen] = React.useState("top");

  React.useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 10) {
        setPos("moved");
      } else {
        setPos("top");
      }
    });
  }, []);

  return (
    <div className={style.main}>
      <HeadV1 pos={pos} open={open} setOpen={setOpen} />
      <NavigationV1 header={true} pos={pos} open={open} setOpen={setOpen} />
      <div className={backdrop ? style.backdrop : undefined} />
      {/* <Floater backdrop={backdrop} /> */}
    </div>
  );
}
