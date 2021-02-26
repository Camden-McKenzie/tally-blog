import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { postList } from '../components/list.layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export default function Home({ allPostsData }) {

  return (
    <Layout home>
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href={`/tags`}>
          <a><h2 className={utilStyles.headingSection}>&rarr; Search by Tag</h2></a>
        </Link>
        <h2 className={utilStyles.headingSection}>Blog</h2>
        <ul className={utilStyles.list} >
          {/* Display all posts */}
          {postList(allPostsData)}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
