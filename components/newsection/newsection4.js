import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/newsection/newsection3.module.css'
import Link from 'next/link'

const NewSection4 = () => {
 
  
  return (
        <div className={style.main}>
            <h2  className={style.label} >COMMUNITY</h2>
            <div className={style.articleContainer}>
                {[1,2,3,4].map((data)=>{
                    return (
                        <div key={data} className={style.articleItem}>
                            <img className={style.articleImage} src="/Thumbnail/ernieabella.png"/>
                            <h4 className={style.articleTitle}>De nouvelles règles pour voyager vers la France entrent en vigueur ce samedi</h4>
                        </div>
                    )
                })}
            
            </div>
        </div>
  )
  
}

export default NewSection4
