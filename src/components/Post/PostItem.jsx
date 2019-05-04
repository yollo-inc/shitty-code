import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 50px;
`

export default function PostItem({ title, language, code, description }) {
  return (
    <Container>
      <div>{title}</div>
      <div>{language}</div>
      <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>
      <div>{description}</div>
    </Container>
  )
}
