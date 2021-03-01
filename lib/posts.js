import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { sortPostByDate, getIndexFromId, getIdFromIndex } from '../lib/posts_functions'

const postsDirectory = path.join(process.cwd(), 'posts')

function getAllPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  return allPostsData
}

// Get all posts sorted by date
export function getSortedPostsData() {
  const allPostsData = getAllPostsData()

  // Sort posts by date
  return sortPostByDate(allPostsData)
}

// Get all posts with specific {tag} attribute
export function getPostsByTag(tag) {
  let allPostsData = getAllPostsData()

  // Get group of posts by tag
  allPostsData = allPostsData.filter(post => {
    const tags = post.tags.split(" ")
    return tags.includes(tag)
  })

  return sortPostByDate(allPostsData)
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  let i = 0
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostFromIndex(index) {
  const allPostsData = getSortedPostsData()
  const id = getIdFromIndex(index, allPostsData)
  return getPostData(id)
}

export function getPostOffset(id, offset) {
  const allPostsData = getSortedPostsData()
  const index = getIndexFromId(id, allPostsData)
  const nextPost = getIdFromIndex(index + offset, allPostsData)
  return nextPost
}

// Get a list of all tags used on site
//    TODO create tags.txt file which contains a list of all used tags
//    for efficiency
export function getPostTags() {
  const allPostsData = getAllPostsData()

  let tags = []

  allPostsData.forEach(post => {
    post.tags.split(" ").forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    })
  })

  return tags
}

// Get post by id
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
