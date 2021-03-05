
import Link from 'next/link'
import styles from './navbar.module.css'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'


export default function Navbar({ page }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 50);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);


  return (
    <navbar className={`${visible ? styles.visible : styles.notVisible} ${styles.navbar}`}>
      <Content page={page} />
    </navbar>
  )
}

function Content({ page }) {

  console.log(page)

  return (
    <div className={styles.container}>
      <div>
        <Link href="/" >
          <a className={styles.title}>Talitha Ann</a>
        </Link>
      </div>
      <div className={page == "posts" ? styles.current : null}>
        <Link href="/posts" >
          <a className={styles.item}>Home</a>
        </Link>
      </div>
      <div className={page == "about" ? styles.current : null}>
        <Link href="/about" >
          <a className={styles.item}>About</a>
        </Link>
      </div>
      <div className={page == "tags" ? styles.current : null}>
        <Link href="/tags" >
          <a className={styles.item}>Tags</a>
        </Link>
      </div>
    </div >
  )
}
