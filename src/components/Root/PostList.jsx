import React from 'react'
import PostItem from './PostItem'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default function PostsList({ posts }) {
  return (
    <Container>
      {posts.map(post => <PostItem {...post} key={post.title} />)}
    </Container>
  )
}
