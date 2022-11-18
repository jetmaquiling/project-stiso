import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/navigation/headv3.module.css'
import Link from 'next/link'
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import NavigationV1 from "../navigation/navigationv1";
import CloseIcon from '@material-ui/icons/Close';
import HeadV1  from '@/components/head/headv1';

const HeadV3 = ({}) => {
  const [pos, setPos] = React.useState("top")
  const [open, setOpen] = React.useState("top")


  React.useEffect (()=>{
    document.addEventListener("scroll", e => {
        let scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 10){
           setPos("moved")
        } else {
           setPos("top")
        }
    })
  },[])
  
  return (
    <div  className={style.main} >
       <HeadV1   pos={pos} open={open} setOpen={setOpen}/>
        <NavigationV1 header={false}  pos={pos} open={open} setOpen={setOpen} />

    </div>
    
  )

}

export default HeadV3
