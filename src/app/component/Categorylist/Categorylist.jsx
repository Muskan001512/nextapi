import React from 'react'
import styles from "./Categorylist.module.css";
import Link from "next/link";
import Image from "next/image";

const Categorylist = () => {
  return (
<div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image src="/style.png" width={50} height={50} alt="" className={styles.image} />
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image src="/fashion.png" width={50} height={50} alt="" className={styles.image} />
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.anotherCategory}`}>
          <Image src="/food.png" width={50} height={50} alt="" className={styles.image} />
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image src="/culture.png" width={50} height={50} alt="" className={styles.image} />
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image src="/travel.png" width={50} height={50} alt="" className={styles.image} />
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.anotherCategory}`}>
          <Image src="/coding.png" width={50} height={50} alt="" className={styles.image} />
        </Link>

        </div>
        </div>
  )
}

export default Categorylist
