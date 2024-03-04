import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Authlink from "../Authlink/Authlink";



const Navbar = () => {
  return (
    <div className = {styles.container}>
      <div className = {styles.socials}>
        <Image src="/youtube.png"  width={50} height={50} alt="YouTube"/>
        <Image src="/facebook.png"  width={50} height={50} alt="facebook"/>
        <Image src="/instagram.png"  width={50} height={50} alt="instagram"/>
        <Image src="/tiktok.png"  width={50} height={50} alt="tiktok"/>

      </div>
      <div className = {styles.logo}>lamaBlog</div>
      <div className = {styles.links} >
      {/* <Link href="/" className={styles.link}>themtoggle</Link> */}
      
        <Link href = "/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About us</Link>
       
        <Authlink/>
   </div>
        
      
    </div>
  )
}

export default Navbar
