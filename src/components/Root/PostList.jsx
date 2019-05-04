import React from 'react'
import PostItem from './PostItem'
import styled from 'styled-components'
import { S300, S500 } from '../../themes/spaces'
import { backgroundGrayColor } from '../../themes/colors'

const Container = styled.div`
  padding: ${S300}px ${S500}px;
  background-color: ${backgroundGrayColor};
`

export default function PostsList({ posts }) {
  return (
    <Container>
      {posts.map(post => <PostItem {...post} />)}
    </Container>
  )
}
