import React from 'react'
import PostItem from './PostItem'

export default function PostsList({ posts }) {
  return (
    <div>
      {posts.map(post => <PostItem {...post} />)}
    </div>
  )
}
