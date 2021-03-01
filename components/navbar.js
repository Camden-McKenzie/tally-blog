
import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar({ home, page }) {
  return (

    home || page ?
      <navbar className={styles.navbar}>
        <Content />
      </navbar>
      :
      <navbar className={styles.navbar} data-aos="slide-down" data-aos-easing="ease-out-quart" data-aos-duration="1000" data-aos-delay="800">
        <Content />
      </navbar>
  )
}

function Content() {
  return (
    <div className={styles.container}>
      <Link href="/" >
        <a className={styles.item}>Home</a>
      </Link>
      <Link href="/about" >
        <a className={styles.item}>About</a>
      </Link>
      <Link href="/tags" >
        <a className={styles.item}>Tags</a>
      </Link>
    </div>
  )
}
