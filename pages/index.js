import React from "react";
import FooterV1 from "@/components/footer/footerv1";
import FooterV2 from "@/components/footer/footerv2";
import HeadV2 from "@/components/head/headv2";
import HomeSection1 from "@/components/homesection/homesection1";
import HomeSection2 from "@/components/homesection/homesection2";
import HomeSection3 from "@/components/homesection/homesection3";
import HomeSection4 from "@/components/homesection/homesection4";
import Youtube from "@/components/homesection/youtube";
import CarouselComponent from "@/components/homesection/carousel";
import NewSection1 from "@/components/newsection/newsection1";
import Head from "next/head";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>STISO Tagaytay 2022-2023</title>
        <meta
          name="description"
          content="Welcome STIers! This is official Website of STI Tagaytay STISO Officers 2022-2023"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="STISO Tagaytay 2022-2023" />
        <meta property="og:image" content="./Thumbnail/thumbnail.jpg" />
      </Head>

      <HeadV2 />
      <CarouselComponent />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <FooterV1 />
      <FooterV2 />
    </div>
  );
}
