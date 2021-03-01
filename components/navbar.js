
import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <navbar className={styles.navbar}>
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
    </div>
  )
}
