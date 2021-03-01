import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

import { postList } from '../components/list.layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/* <Link href={`/tags`}>
          <a><h2 className={utilStyles.headingSection}>&rarr; Search by Tag</h2></a>
        </Link> */}
        <h2 className={`${utilStyles.headingSection} ${utilStyles.center}`}>All Posts</h2>
        <ul className={utilStyles.list} >
          {/* Display all posts */}
          {postList(allPostsData)}
        </ul>
      </section>
    </Layout >
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
