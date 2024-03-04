"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './authlink.module.css';

const Authlink = () => {
  const [open, setOpen] = useState(false);

  const status = "noauthenticated";
 

  return (
    <>
      {status === "noauthenticated" ? (
        <Link href="/login">login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Authlink;
