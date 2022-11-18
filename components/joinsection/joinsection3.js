/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback, forwardRef}from 'react'
import Link from 'next/link';
import Head from 'next/head'
import style from '@/styles/joinsection/joinsection1.module.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';



export default function JoinSection3 ({dispatch, state,toggleBack , slide, handleSubmit, warning}) {

    const onChange = (field,e) => {
        dispatch({
            type:"onChange",
            field: field,
            payload: e.target.value,
        })
    }

    
  return (
    <div className={slide === 2 ? style.main : style.off}>
        <div className={style.mainBox}>
            <div className={style.imageSide}>
                <img src="/Resource/question3.png" className={style.image} />
            </div>

            <div className={style.contentSide}>
                <h1 className={style.title} >One Final Step.</h1>
                <p className={style.warning}>{warning && "Please Fill Up Everything Correctly."}</p>
                <div className={style.inputBox}>
                    <h2 className={style.label} >First Name</h2>
                    <input type="name" value={state.firstName} className={style.input} onChange={(e)=>onChange("firstName",e)}/>
                    <h2 className={style.label} >Last Name</h2>
                    <input type="name"  value={state.lastName}  className={style.input} onChange={(e)=>onChange("lastName",e)}/>
                    <h2 className={style.label}>Email Address</h2>
                    <input type="email-address"  value={state.emailAddress} className={style.input} onChange={(e)=>onChange("emailAddress",e)}/>
                    <h2 className={style.label}>Contact Number</h2>
                    <input type="contact"  value={state.contactAddress} className={style.input} placeholder="Optional" onChange={(e)=>onChange("contactNumber",e)}/>
                </div>

                <div className={style.navigationBox}>
                    <h4 className={style.buttonNavText} onClick={()=>toggleBack(1)}>{"< back"}</h4>
                    <h4 className={style.buttonText} onClick={()=>handleSubmit(state)} >{"Proceed >"} </h4>
                </div>
            </div>
        </div>
    </div>
  );
}