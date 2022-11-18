import * as React from "react";
import Head from "next/head";
import * as style from "@/styles/navigation/footerv1.module.css";
import Link from "next/link";

const FooterV2 = () => {
  return (
    <div className={style.foooterv2}>
      <p className={style.copywrite}>
        2022-2023 Copyright © STISO TAGAYTAY . All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterV2;
