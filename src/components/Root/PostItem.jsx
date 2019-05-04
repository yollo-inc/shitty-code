import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 50px;
  border: 1px solid #e6e8eb;
`

export default function PostItem({ title, language, code, description }) {
  return (
    <Container>
      <h3>{title}</h3>
      <div>{language}</div>
      <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>
      <div>{description}</div>
    </Container>
  )
}
