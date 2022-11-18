import FooterV1 from "@/components/footer/footerv1";
import FooterV2 from "@/components/footer/footerv2";
import HeadV2 from "@/components/head/headv2";
import styles from "@/styles/caveat/canvas.module.css";
import { useRef, useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function CanvasLink() {
  function onChrome() {
    console.log("wow");
    const url = "https://ernieabella.com/canvas/";
    window.open("googlechrome://navigate?url=" + url, "_system");
  }

  return (
    <div>
      <Head>
        <title>Canvas - Ernie Abella</title>
        <meta
          name="description"
          content="Support the campaign by setting up your profile picture with campaign overlay."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Canvas - Easily Set Up Profile Picture- Ernie Abell BAGONG PILIPINAS"
        />
        <meta property="og:image" content="./Thumbnail/ernieabella.png" />
      </Head>
      <HeadV2 backdrop={true} />
      {/* DO NOT TOUCH */}

      <div className={styles.container}>
        <div className={styles.button_link}>
          <div>
            <p>Note:</p>
            <p>The canvas will only work in Chrome Browser,</p>
            <p>Please make sure you are using a browser.</p>
          </div>

          <div className={styles.button} onClick={onChrome}>
            Open Link in Chrome
          </div>
          {/* <Link legacyBehavior href="/canvas">
            <div className={styles.button}>Proceed To Canvas</div>
          </Link> */}
        </div>
      </div>

      <FooterV1 />
      <FooterV2 />
    </div>
  );
}
