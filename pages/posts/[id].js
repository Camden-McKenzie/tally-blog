import Layout from '../../components/layout'
import { getAllPostIds, getPostData, getPostOffset } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import styles from './posts.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Post({ postData, nextPost, prevPost }) {

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={styles.article}>
        <PostNav nextPost={nextPost} prevPost={prevPost} />
        <div className={styles.postTitle}>
          <h1 className={styles.heading}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
        </div>
        <p />
        <div className="post" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <p></p>
      <PostNav nextPost={nextPost} prevPost={prevPost} />
    </Layout>
  )
}


function PostNav({ nextPost, prevPost }) {
  return (
    <div className={styles.navContainer} >
      { prevPost === "#BEGIN-OF-POSTS#" ? null :
        <div className={styles.prev}>
          <Link Link href={`/posts/${prevPost}`} replace >
            <a className={styles.navButton}>
              <Image className={utilStyles.flipHorizontal} src={"/icons/navigate_next.svg"} width={40} height={40} />
            </a>
          </Link>
        </div>
      }
      {
        nextPost === "#END-OF-POSTS#" ? null :
          <div className={styles.next}>
            <Link Link href={`/posts/${nextPost}`} replace >
              <a className={styles.navButton}>
                <Image src={"/icons/navigate_next.svg"} width={40} height={40} />
              </a>
            </Link>
          </div>
      }
    </div >)
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
  const nextPost = getPostOffset(postData.id, 1)
  const prevPost = getPostOffset(postData.id, -1)
  return {
    props: {
      postData,
      nextPost,
      prevPost
    }
  }
}
