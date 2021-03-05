import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from './tags/tags.module.css'
import { getSortedPostsData, getPostTags } from '../lib/posts'
import { getPostsByTagAndData } from '../lib/posts_functions'
import { PostList } from '../components/list.layout'





export default function Home({ allPostsData, tags }) {

  // Router to get query from URL
  const router = useRouter()
  // Current Tag
  const { tag } = router.query
  // Get only posts with specific tag
  const allPosts = getPostsByTagAndData(tag, allPostsData)

  return (
    <Layout page="tags">
      <Head>
        <title>Tagged Posts</title>
      </Head>

      {/* Tag Selector Section */}
      <section className={`${styles.tagSection} ${utilStyles.padding1px}`}>
        {/* OUTLINE (for each tag)
          <div> Container
            <h2> Tag (Selected/Not)
        */}
        {tags.map(t => {
          return <div className={styles.tagTitleContainer}>{
            /* Build Tag Selectors */
            t == tag ? (
              <p className={`${utilStyles.upperCase} ${utilStyles.headingLg} ${utilStyles.selected}`}>{t}</p>
            ) : (
              <Link href={{ query: { tag: t } }}>
                <a className={`${utilStyles.upperCase} ${utilStyles.headingLg}`}>{t}</a>
              </Link>
            )}
          </div>
        })}

      </section>
      <hr />

      {/* Selected Tag Results */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/* Current Tag */}
        <h2 className={`${utilStyles.headingSection} ${utilStyles.upperCase}`}>{tag}</h2>
        {/* List of results */}
        <ul className={utilStyles.list} >
          {/* Get info for each post */}
          <PostList allPostsData={allPosts} />
        </ul>
      </section>
    </Layout >
  )
}

// Retrive All Posts & List of all Tag
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const tags = getPostTags()
  return {
    props: {
      allPostsData,
      tags
    }
  }
}