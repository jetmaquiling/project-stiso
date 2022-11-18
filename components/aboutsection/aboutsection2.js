import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/aboutsection/aboutsection1.module.css'
import Link from 'next/link'

const AboutSection2 = () => {
 
  
  return (
        <div className={style.aboutmain}>
           <div className={style.container}>

             <div className={style.imageBox}>
                <img src="/Images/papaImage2.png" className={style.image} />
             </div>

             <div  className={style.contentBox}>
                <h6  className={style.title}>ABOUT</h6>
                <div  className={style.underline}/>
                <div  className={style.textBox}>Ernesto "Ernie" Corpuz Abella is a Filipino businessman, writer, and former evangelist who served in President Rodrigo Duterte's administration as Presidential Spokesperson (2016-2017) and Undersecretary for Strategic Communications and Research of the Department of Foreign Affairs (2017-2021).</div>
                <div  className={style.textBox}>Before joining the government, he was an executive with a Davao city-based agricultural products manufacturer and a local cooperative which he co-founded. He also established a school in Davao and was a columnist for local newspaper Sunstar Davao.</div>
                     
             </div>

           </div>
            
           



        </div>
  )
  
}

export default AboutSection2
