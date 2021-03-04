
import Link from 'next/link'
import styles from './navbar.module.css'
import React, { useState, useEffect } from 'react';

export default function Navbar() {
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
      <Content />
    </navbar>
  )
}

function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.double}>
        <Link href="/" >
          <a className={styles.title}>Talitha Ann</a>
        </Link>
      </div>
      <div className={styles.single}>
        <Link href="/posts" >
          <a className={styles.item}>Home</a>
        </Link>
      </div>
      <div className={styles.single}>
        <Link href="/about" >
          <a className={styles.item}>About</a>
        </Link>
      </div>
      <div className={styles.single}>
        <Link href="/tags" >
          <a className={styles.item}>Tags</a>
        </Link>
      </div>
    </div >
  )
}
