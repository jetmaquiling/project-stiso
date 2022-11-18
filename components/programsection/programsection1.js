import * as React from "react";
import Head from "next/head";
import * as style from "@/styles/programsection/programsection1.module.css";
import Link from "next/link";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import StopIcon from "@material-ui/icons/Stop";

const data = [
  {
    number: "#1",
    link: "/",
    title: "A WEBSITE FOR ALL",
    subtitle: "Making a presence in the social media world",
    items: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    ],
  },
  {
    number: "#2",
    link: "/",
    title: "SCHOOL FAIR",
    subtitle: "We all deserve some fun",
    items: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    ],
  },
  {
    number: "#3",
    link: "/",
    title: "Art Making Contest",
    subtitle: "Promoting Self Expression and Confidence",
    items: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    ],
  },
  {
    number: "#4",
    link: "/",
    title: "MOVIE SCREENING ",
    subtitle: "Create a feeling of happiness when nothing else can",
    items: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    ],
  },
  {
    number: "#5",
    link: "/",
    title: "Christmas Ball",
    subtitle: "Bringing people closer together",
    items: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    ],
  },
  {
    number: "#6",
    link: "/",
    title: "STUDENT APPRECIATION",
    subtitle: "A genuine compliment to all who deserve",
    items: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    ],
  },
  {
    number: "#7",
    link: "/",
    title: "Social Club",
    subtitle: "Promoting mental health awareness",
    items: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    ],
  },
  {
    number: "#8",
    link: "/",
    title: "TEAM BUILDING",
    subtitle: "Evolving into a cohesive society",
    items: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    ],
  },
  {
    number: "#9",
    link: "/",
    title: "YEAR END PARTY",
    subtitle:
      "An opportunity for the leadership and employees to look back a year passed",
    items: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    ],
  },
  {
    number: "#10",
    link: "/",
    title: "Outreach Program",
    subtitle: "A school that helps, uplifts, and support",
    items: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    ],
  },
];

const ProgramSection1 = () => {
  return (
    <div className={style.main}>
      <img className={style.image} src="/Logo/LogoWhite.png" />
      {/* <div  className={style.contentBox}>   
            <h2  className={style.title1}>PAG NAGBAGO ANG</h2>
            <h2 style={{color: '#0038A8'}} className={style.title2}>PILIPINO</h2>
            <h2  className={style.title1}>MABABAGO ANG</h2>
            <h2 style={{color: '#BF0D3E'}} className={style.title2}>PILIPINAS</h2>
          </div> */}
      {data.map((d) => {
        return (
          <div key={d.number} className={style.platformContainer}>
            <div className={style.titleContainer}>
              <h2 className={style.number}>{d.number}</h2>
              <div className={style.titleBox}>
                <Link href="/info/program/">
                  <h3 className={style.title}>{d.title}</h3>
                </Link>
                <h4 className={style.subTitle}>{d.subtitle}</h4>
              </div>
            </div>
            <div className={style.underline2} />
            {d.items.map((i) => {
              return (
                <div key={i} className={style.textContainer}>
                  <StopIcon style={{ color: "#BF0D3E" }} />
                  <p className={style.textItem}>{i}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ProgramSection1;
