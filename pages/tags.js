import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData, getPostTags } from '../lib/posts'
import { getPostsByTagAndData } from '../lib/posts_functions'




export default function Home({ allPostsData, tags }) {

  // Router to get query from URL
  const router = useRouter()
  // Current Tag
  const { tag } = router.query
  // Get only posts with specific tag
  const allPosts = getPostsByTagAndData(tag, allPostsData)

  return (
    <Layout home>
      <Head>
        <title>Tagged Posts</title>
      </Head>

      {/* Tag Selector Section */}
      <section className={`${utilStyles.tagSection} ${utilStyles.padding1px}`}>
        {/* OUTLINE (for each tag)
          <div> Container
            <h2> Tag (Selected/Not)
        */}
        {tags.map(t => {
          return <div className={utilStyles.tagTitleContainer}>{
            /* Build Tag Selectors */
            t == tag ? (
              <h2 className={`${utilStyles.tagTitle} ${utilStyles.selected}`}>{t}</h2>
            ) : (
                <Link href={{ query: { tag: t } }}>
                  <a><h2 className={utilStyles.tagTitle}>{t}</h2></a>
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
          {allPosts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <div data-aos="fade" data-aos-easing="ease-in-quart" data-aos-offset="-20" data-aos-duration="500">
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </div>
            </li>
          ))}
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