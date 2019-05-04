import React from 'react'
import PostItem from './PostItem'

export default function PostsList({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => <PostItem {...post} />)}
    </div>
  )
}
