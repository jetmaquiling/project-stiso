import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/homesection/homesection1.module.css'
import Link from 'next/link'

const HomeSection1 = () => {
 
  
  return (
        <div className={style.main}>

            <video autoPlay muted loop  className={style.video}>
                <source src="/Videos/PapaErnie.mp4" type="video/mp4"/>
            </video>

           
        </div>
  )
  
}

export default HomeSection1
