import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { postList } from '../components/list.layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {

  return (<Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>

    <section className={utilStyles.headingMd}>
      <p>I plagiarize other individual’s lives for art.</p>
      <p>
        These accounts are my interpretation of how others feel at various points in their life.
        My words, but their feelings, lives, and stories.
        I hope you enjoy my take.
        </p>
      {/* <p>
          <a href="https://blondleadingblond.wordpress.com/author/talithaann/">
            <i> &rarr; My Old Blog </i>
          </a>
        </p> */}
    </section>
  </Layout>)
}