import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { postList } from '../components/list.layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/about.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  const iconSize = 60;

  return (
    <Layout page="about">
      <Head>
        <title>Talitha Ann</title>
      </Head>

      <section className={`${styles.header} ${utilStyles.center}`}>
        <Image
          priority={true}
          src="/images/profile.jpeg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt="Talitha Ann"
        />
        <h1 className={utilStyles.heading2Xl}>Talitha Ann</h1>
      </section>

      <section className={utilStyles.headingMd}>
        <p>I plagiarize other individual’s lives for art.</p>
        <p>
          These accounts are my interpretation of how others feel at various points in their life.
          My words, but their feelings, lives, and stories.
          I hope you enjoy my take.
        </p>


        {/* Link to Wordpress Blog */}
        {/* <p>
          <a href="https://blondleadingblond.wordpress.com/author/talithaann/">
            <i> &rarr; My Old Blog </i>
          </a>
        </p> */}
      </section>

      <hr />

      <section className={utilStyles.horzList}>
        <Link href="https://www.linkedin.com/in/talitha-mckenzie/">
          <a className={utilStyles.icon}>
            <Image src={"/icons/social/linkedin.svg"} width={iconSize} height={iconSize} />
          </a>
        </Link>
        <Link href="https://twitter.com/TallyMkz?s=09">
          <a className={utilStyles.icon}>
            <Image src={"/icons/social/twitter.svg"} width={iconSize} height={iconSize} />
          </a>
        </Link>
        <Link href="https://blondleadingblond.wordpress.com/author/talithaann/">
          <a className={utilStyles.icon}>
            <Image src={"/icons/social/wordpress.svg"} width={iconSize} height={iconSize} />
          </a>
        </Link>
      </section>
    </Layout>)
}