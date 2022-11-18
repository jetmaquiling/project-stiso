import * as React from "react";
import Head from "next/head";
import * as style from "@/styles/aboutsection/aboutsection1.module.css";
import Link from "next/link";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import StopIcon from "@material-ui/icons/Stop";

const AboutSection1 = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.imageBox}>
          <img src="/Images/president.jpg" className={style.image} />
        </div>

        <div className={style.contentBox}>
          <h6 className={style.title}>STISO PRESIDENT</h6>
          <div className={style.underline} />

          <div className={style.textBox}>Wait waht?</div>
        </div>
      </div>

      <div className={style.container2}>
        <div className={style.contentBox}>
          <h6 className={style.title}>STISO VICE PRESIDENT</h6>
          <div className={style.underline} />

          <div className={style.textBox}>Wait waht?</div>
        </div>

        <div className={style.imageBox}>
          <img src="/Images/unknown.png" className={style.image} />
        </div>
      </div>

      <div className={style.container}>
        <div className={style.imageBox}>
          <img src="/Images/unknown.png" className={style.image} />
        </div>

        <div className={style.contentBox}>
          <h6 className={style.title}>STISO SECRETARY</h6>
          <div className={style.underline} />

          <div className={style.textBox}>Wait waht?</div>
        </div>
      </div>

      <div className={style.container2}>
        <div className={style.contentBox}>
          <h6 className={style.title}>STISO TREASURER</h6>
          <div className={style.underline} />

          <div className={style.textBox}>Wait waht?</div>
        </div>

        <div className={style.imageBox}>
          <img src="/Images/unknown.png" className={style.image} />
        </div>
      </div>

      <div className={style.container}>
        <div className={style.imageBox}>
          <img src="/Images/unknown.png" className={style.image} />
        </div>

        <div className={style.contentBox}>
          <h6 className={style.title}>STISO AUDITOR</h6>
          <div className={style.underline} />

          <div className={style.textBox}>Wait waht?</div>
        </div>
      </div>

      <div className={style.container2}>
        <div className={style.contentBox}>
          <h6 className={style.title}>STISO P.R.O 1</h6>
          <div className={style.underline} />

          <div className={style.textBox}>Wait waht?</div>
        </div>

        <div className={style.imageBox}>
          <img src="/Images/unknown.png" className={style.image} />
        </div>
      </div>

      <div className={style.container}>
        <div className={style.imageBox}>
          <img src="/Images/unknown.png" className={style.image} />
        </div>

        <div className={style.contentBox}>
          <h6 className={style.title}>STISO P.R.O. 2</h6>
          <div className={style.underline} />

          <div className={style.textBox}>Wait waht?</div>
        </div>
      </div>

      <div className={style.container2}>
        <div className={style.contentBox}>
          <h6 className={style.title}>STISO P.I.O.</h6>
          <div className={style.underline} />

          <div className={style.textBox}>Wait waht?</div>
        </div>

        <div className={style.imageBox}>
          <img src="/Images/unknown.png" className={style.image} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
