/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback, forwardRef}from 'react'
import Link from 'next/link';
import Head from 'next/head'
import style from '@/styles/joinsection/joinsection1.module.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

export default function JoinSection1 ({dispatch, state, toggleSlide, slide, warning}) {

    const toggle = (field) => {
        dispatch({
            type:"toggle",
            field: field,
        })
    }
    
    const onChange = (field,payload) => {
        dispatch({
            type:"onChange",
            field: field,
            payload: payload,
        })
    }
    
  return (
    <div className={slide === 0 ? style.main : style.off}>
        <div className={style.mainBox}>
            <div className={style.imageSide}>
                <img src="/Resource/question1.png" className={style.image} />
            </div>

            <div className={style.contentSide}>
                <h1 className={style.title} >Let's Get Started.</h1>

                <p className={style.warning}>{warning && "Atleast choose one."}</p>
                <h2 className={style.label}>What is your current location?</h2>
                <div className={style.buttonBox}>
                    <h4 className={state.location == "Luzon" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("location","Luzon")}>Luzon</h4>
                    <h4 className={state.location == "Visayas" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("location","Visayas")}>Visayas</h4>
                    <h4 className={state.location == "Mindanao" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("location","Mindanao")}>Mindanao</h4>
                    <h4 className={state.location == "Overseas (OFW)" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("location","Overseas (OFW)")}>Overseas (OFW)</h4>
                    <h4 className={state.location == "Overseas (Filipino Expat)" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("location","Overseas (Filipino Expat)")}>Overseas (Filipino Expat)</h4>
                </div>
                
                
                <p className={style.warning}>{warning && "Atleast choose one."}</p>
                <h2 className={style.label}>What is your income class?</h2>
                <div className={style.buttonBox}>
                    <h4 className={state.class == "Class A (Upper Class)" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("class","Class A (Upper Class)")}>Class A (Upper Class)</h4>
                    <h4 className={state.class == "Class B (Upper Middle Class)" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("class","Class B (Upper Middle Class)")}>Class B (Upper Middle Class)</h4>
                    <h4 className={state.class == "Class C (Middle Class)" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("class","Class C (Middle Class)")}>Class C (Middle Class)</h4>
                    <h4 className={state.class == "Class D (Lower Middle Class)" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("class","Class D (Lower Middle Class)")}>Class D (Lower Middle Class)</h4>
                    <h4 className={state.class == "Class E (Lower Class)" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("class","Class E (Lower Class)")}>Class E (Lower Class)</h4>
                </div>

                <p className={style.warning}>{warning && "Atleast choose one."}</p>
                <h2 className={style.label}>What is you age?</h2>
                <div className={style.buttonBox}>
                    <h4 className={state.age == "18-24 years old" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("age","18-24 years old")}>18-24 years old</h4>
                    <h4 className={state.age == "25-40 years old" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("age","25-40 years old")}>25-40 years old</h4>
                    <h4 className={state.age == "41-56 years old" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("age","41-56 years old")}>41-56 years old</h4>
                    <h4 className={state.age == "56 years old and above" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("age","56 years old and above")}>56 years old and above</h4>
                  
                </div>
                    
                <div className={style.navigationBox}>
                    <Link href="/"><h4 className={style.buttonNavText}>{"< Homepage"}</h4></Link>

                    <h4 className={style.buttonText} onClick={()=>toggleSlide(1)}>{"next >"} </h4>
                </div>
            </div>
        </div>
    </div>
  );
}