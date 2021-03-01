import Layout from '../../components/layout'
import { getAllPostIds, getPostData, getNextPost } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import styles from './posts.module.css'
import Link from 'next/link'

export default function Post({ postData, nextPost }) {

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={styles.article}>
        <div className={styles.postTitle}>
          <h1 className={utilStyles.headingXl} data-aos="fade-right" data-aos-easing="ease-out-back" data-aos-duration="600" >{postData.title}</h1>
          <div className={utilStyles.lightText} data-aos="fade" data-aos-easing="ease-in-quart" data-aos-duration="1000" data-aos-delay="800" >
            <Date dateString={postData.date} />
          </div>
        </div>
        <p />
        <div className="post" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} data-aos="fade" data-aos-easing="ease-in-quart" data-aos-duration="1000" data-aos-delay="800" />
      </article>
      <p></p>

      {/* Link to next post
          or return to home if last post */}
      {nextPost == "#END-OF-POSTS#" ?
        <Link href={`/`} >
          <a className={styles.link}><h2>END</h2></a>
        </Link> :
        <Link href={`${nextPost}`} replace local >
          <a className={styles.link}><h2>Next Post</h2></a>
        </Link>
      }
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  const nextPost = getNextPost(postData.id)
  return {
    props: {
      postData,
      nextPost
    }
  }
}
