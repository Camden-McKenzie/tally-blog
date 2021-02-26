/* Posts Functions

Complementary functions for posts.js
These Fn do not interact with the file system

*/

export function getPostsByTagAndData(tag, allPosts) {
  var allPostsData = allPosts

  // Get group of posts by tag
  allPostsData = allPostsData.filter(post => {
    const tags = post.tags.split(" ")
    return tags.includes(tag)
  })

  return sortPostByDate(allPostsData)
}


export function sortPostByDate(allPostsData) {
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}