import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'



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
        <p>
          <a href="https://blondleadingblond.wordpress.com/author/talithaann/">
            <i> &rarr; Original Blog </i>
          </a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingSection}>Blog</h2>
        <ul className={utilStyles.list} >
          {allPostsData.map(({ id, date, title }) => (
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
