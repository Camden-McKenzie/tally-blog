import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar'


const name = 'Talitha Ann'
export const siteTitle = 'Because Why Not?'

export default function Layout({ children, page }) {
  return (
    <>
      <Navbar page={page} />
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="images/favicon.ico" />
          <meta
            name="Poems and blog posts by talitha ann"
            content="Poems blog talitha ann poetry writing"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
        </header>
        <main>{children}</main>
      </div>
    </>
  )
}
