import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Talitha Ann'
export const siteTitle = 'Because Why Not?'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
            <>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}
                    data-aos="fade"
                    data-aos-easing="ease-in-quart"
                    data-aos-duration="1000"
                    data-aos-delay="800">{name}</a>
                </Link>
              </h2>
            </>
          )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome} data-aos="fade" data-aos-easing="ease-out-quart" data-aos-duration="500">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
