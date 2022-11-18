/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import * as style from "@/styles/caveat/countdown.module.css";
import FooterV1 from "@/components/footer/footerv1";
import { useCountdown } from "@/components/useCountdown";
import Link from "next/link";
import moment from "moment";
import Head from "next/head";

const Countdown = () => {
  const [days, hours, minutes, seconds] = useCountdown(
    moment("11 22 2022, 12:00", "MM DD YYYY, hh:mm")
  );

  const [time, setTime] = React.useState({
    days: 1,
    hours: 7,
    minutes: 0,
    seconds: 0,
  });
  const [radius, setRadius] = React.useState({
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  });

  React.useEffect(() => {
    setRadius({
      days: mapNumber(days, 30, 0, 0, 360),
      hours: mapNumber(hours, 24, 0, 0, 360),
      minutes: mapNumber(minutes, 60, 0, 0, 360),
      seconds: mapNumber(seconds, 60, 0, 0, 360),
    });
    setTime({
      days: mapNumber(days, 30, 0, 0, 360),
      hours: mapNumber(hours, 24, 0, 0, 360),
      minutes: mapNumber(minutes, 60, 0, 0, 360),
      seconds: mapNumber(seconds, 60, 0, 0, 360),
    });
  }, [days, hours, minutes, seconds]);

  return (
    <div className={style.main}>
      <Head>
        <title>STI College Competition Balayan Batangas</title>
        <meta
          name="description"
          content="Hello, Everyone! I’m sincerely inviting you to support the STI
          TAGAYTAY candidates who has the capability, the talent, and the
          heart to win."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="STI College Competition Balayan Batangas"
        />
        <meta property="og:image" content="./Thumbnail/thumbnail.jpg" />
      </Head>

      <div className={style.logoBox}>
        <img src="/Logo/LogoWhite.png" className={style.logo} />
      </div>

      <p className={style.subtitle}>
        STI CLUSTER COMPETITION - Balayan Batangas
      </p>

      <div className={style.backdrop}>
        <div className={style.countdownwrapper}>
          <div className={style.countdownitem}>
            <SVGCircle
              radius={radius.days}
              time={time.days}
              color={"#0000FF"}
            />
            {days}
            <span>days</span>
          </div>

          <div className={style.countdownitem}>
            <SVGCircle
              radius={radius.hours}
              time={time.hours}
              color={"#FFFF00"}
            />
            {hours}
            <span>hours</span>
          </div>

          <div className={style.countdownitem}>
            <SVGCircle
              radius={radius.minutes}
              time={time.minutes}
              color={"#fff"}
            />
            {minutes}
            <span>minutes</span>
          </div>

          <div className={style.countdownitem}>
            <SVGCircle
              radius={radius.seconds}
              time={time.seconds}
              color={"#FF0000"}
            />
            {seconds}
            <span>seconds</span>
          </div>
        </div>
        <div className={style.buttonContainer}>
          <Link href="https://www.google.com/maps/place/Abenida+Maria+Orosa,+Ermita,+Maynila,+1000+Kalakhang+Maynila/@14.5843949,120.9793563,19z/data=!3m1!4b1!4m5!3m4!1s0x3397ca247033c5ad:0x57ef04d73a118ff2!8m2!3d14.5843936!4d120.9799034">
            <div className={`${style.buttonBox} `}>
              <h4 className={style.h4animate}>{"View Location >"}</h4>
            </div>
          </Link>
          <Link href="/">
            <div className={`${style.buttonBox} `}>
              <h4 className={style.h4animate}>{"Share >"}</h4>
            </div>
          </Link>
        </div>
      </div>
      <div className={style.infoContainer}>
        <div className={style.infoRow}>
          <div className={style.info}>
            <h4 className={style.label}>Assembly Time:</h4>
            <h4 className={style.infoData}>November 22, 2022 (TUE 8:30 AM)</h4>
          </div>
        </div>

        <div className={style.infoRow}>
          <div className={style.info}>
            <h4 className={style.label}>Start of Program:</h4>
            <h4 className={style.infoData}>November 22, 2022 (TUE 1:00 PM)</h4>
          </div>
        </div>

        <div className={style.infoRow}>
          <div className={style.info}>
            <h4 className={style.label}>Location:</h4>
            <h4 className={style.infoData}>STI College Balayan Batangas</h4>
          </div>
        </div>
      </div>

      <div className={style.infoContainer}>
        <div className={style.info}>
          <div className={style.logoBox}>
            <img src="/Logo/STILogo.png" className={style.logo} />
          </div>
          <h4 className={style.messageData}>
            Hello, Everyone! I’m sincerely inviting you to support the STI
            TAGAYTAY candidates who has the capability, the talent, and the
            heart to win.
          </h4>

          <h4 className={style.messageData}>
            There’s still time! On May 22, I encourage you to attend this event.
            Let’s give them a chance to be seen. Then we will be enlightened and
            we will be proud as an STI Tagaytay Student, we will be excited with
            this performances, for we are genuinely involved in this fight.
          </h4>

          <Link href="/">
            <div className={`${style.buttonBox} `}>
              <h4 className={style.h4animate}>Join Now</h4>
            </div>
          </Link>
        </div>
      </div>
      <FooterV1 />
    </div>
  );
};

const SVGCircle = ({ radius, time, color }) => (
  <svg className={style.countdownsvg}>
    <path
      className={style.smooth}
      fill="none"
      stroke={color}
      strokeWidth={time <= 1 || time == 59 ? "0" : "5"}
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}
export default Countdown;
