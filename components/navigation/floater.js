import * as React from "react"
import * as style from "@/styles/navigation/floater.module.css"
import Link from 'next/link'
import CloseIcon from '@material-ui/icons/Close';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return ca;
}




const Floater = ({backdrop=false}) => {
    const [auth, setAuth] = React.useState(false)
    
    function checkCookie() {
        let cookie = getCookie("cookie_authorized")
        console.log(cookie)
        if(cookie == 0){
            setAuth(false)
        }else{
            setAuth(true)
        }
    }

    React.useEffect(() => {
        checkCookie()
    }, [])

    function acceptCookie() {
        setCookie("cookie_authorized", "USER_ACCEPTED", 3)
        setAuth(true)
    }

  return (
    <div className={style.main}>

        {auth ?
        <div className={style.auth}>
            {/* <h3 className={!backdrop ? style.text1 : style.offText}>BAGONG PILIPINO </h3>
            <h3 className={!backdrop ? style.text2 : style.offText}>=</h3>
            <h3 className={!backdrop ? style.text1 : style.offText}>BAGONG PILIPINAS</h3> */}
            <div className={style.socialMediaContainer}>
                <div className={style.socialBox}>
                    <Link href="https://www.facebook.com/ernieabellaPH"><FacebookIcon style={{color: "#3b5998 ", fontSize: '20px'}}/></Link>
                </div>

                <div className={style.socialBox}>
                <Link href="https://instagram.com/ernie.abella"><InstagramIcon style={{color: "#3f729b", fontSize: '20px'}}/></Link>
                </div>

                <div className={style.socialBox}>
                <Link href="https://twitter.com/ernieabella"><TwitterIcon style={{color: "#00acee ", fontSize: '20px'}}/></Link>
                </div>

                <div className={style.socialBox}>
                    <YouTubeIcon style={{color: "#c4302b", fontSize: '20px'}}/>
                </div>
            </div>
            <Link href="/info/donate"><h3 className={style.donateButton}>DONATE</h3></Link>
        </div>
        :
        <div className={style.off} >
            <h6 className={style.cookieText}>ernieabella.com uses cookies to give you a better navigation experience on our site. As soon as you continue the tour, we assume you accept the cookies policy. Learn more about the cookie policy we use <Link href="/info/privacypolicy">here "Privacy Policy"</Link>.</h6>
            <h6 className={style.cookieButton} onClick={acceptCookie}>
                I ACCEPT
            </h6>
            <CloseIcon style={{color:"#fff", fontSize: '30px', cursor: "pointer"}} onClick={()=>{setAuth(true)}}/>
        </div>
        }
        

        
        
    </div>
    
  )
}

export default Floater
