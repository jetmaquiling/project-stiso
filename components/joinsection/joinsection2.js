/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Link from 'next/link';
import Head from 'next/head'
import style from '@/styles/joinsection/joinsection1.module.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

export default function JoinSection2 ({dispatch, state, toggleSlide,toggleBack, slide, warning}) {

    
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
    <div className={slide === 1 ? style.main : style.off}>
        <div className={style.mainBox}>
            <div className={style.imageSide}>
                <img src="/Resource/question2.png" className={style.image} />
            </div>

            <div className={style.contentSide}>
                <h1 className={style.title} >Almost There.</h1>
               

                <p className={style.warning}>{warning && "Atleast choose one."}</p>
                <h2 className={style.label}>What is your gender?</h2>
                <div className={style.buttonBox}>
                    <h4 className={state.gender == "Male" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("gender","Male")}>Male</h4>
                    <h4 className={state.gender == "Female" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("gender","Female")}>Female</h4>
                </div>


                <p className={style.warning}>{warning && "Atleast choose one."}</p>
                <h2 className={style.label}>What is your highest education attainment?</h2>
                <div className={style.buttonBox}>
                    <h4 className={state.education == "None" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("education","None")}>None</h4>
                    <h4 className={state.education == "Grade School" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("education","Grade School")}>Grade School</h4>
                    <h4 className={state.education == "High School" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("education","High School")}>High School</h4>
                    <h4 className={state.education == "Technical-Vocational Course" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("education","Technical-Vocational Course")}>Technical-Vocational Course</h4>
                    <h4 className={state.education == "College" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("education","College")}>College</h4>
                    <h4 className={state.education == "Post Graduate" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("education","Post Graduate")}>Post Graduate</h4>
                </div>


                <p className={style.warning}>{warning && "Atleast choose one."}</p>
                <h2 className={style.label}>What is your current state?</h2>
                <div className={style.buttonBox}>
                    <h4 className={state.state == "Student" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("state","Student")}>Student</h4>
                    <h4 className={state.state == "Employed" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("state","Employed")}>Employed</h4>
                    <h4 className={state.state == "Unemployed" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("state","Unemployed")}>Unemployed</h4>
                    <h4 className={state.state == "Self-Employed" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("state","Self-Employed")}>Self-Employed</h4>
                    <h4 className={state.state == "Business Owner" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("state","Business Owner")}>Business Owner</h4>
                </div>

                    
                <div className={style.navigationBox}>
                    <h4 className={style.buttonNavText} onClick={()=>toggleBack(0)}>{"< back"}</h4>

                    <h4 className={style.buttonText} onClick={()=>toggleSlide(2)}>{"next >"} </h4>
                </div>
            </div>
        </div>
    </div>
  );
}