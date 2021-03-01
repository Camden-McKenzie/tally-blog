import { getPostFromIndex, getPostOffset } from '../lib/posts'
import Post from "./posts/[id].js"

// Displays most recent post

export default function Posts({ postData, nextPost, prevPost }) {
  return (
    <Post postData={postData} nextPost={nextPost} prevPost={prevPost} />
  )
}


export async function getStaticProps() {
  const postData = await getPostFromIndex(0)
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