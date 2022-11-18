import AboutSection1 from '@/components/aboutsection/aboutsection1'
import AboutSection2 from '@/components/aboutsection/aboutsection2'
import FooterV1 from '@/components/footer/footerv1'
import FooterV2 from '@/components/footer/footerv2'
import HeadV2 from '@/components/head/headv2'
import Head from 'next/head'
import styles from '../home.module.css'

export default function About() {
  return (
    <div className={styles.main}>
      <HeadV2/>
        <AboutSection1/>
        <FooterV1/>
      <FooterV2/>
    </div>
  )
}
