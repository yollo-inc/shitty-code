import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import styled from 'styled-components'
import { Text } from '../common'
import { S100, S200, S600 } from '../../themes/spaces'
import fontSizes from '../../themes/fontSizes'
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { media } from 'utils/media'

const Container = styled.div`
  margin-bottom: ${S600}px;
  border: 1px solid #e6e8eb;
  border-radius: ${S200}px;
  width: calc(50% - ${S100}px);
  margin-right: ${S200}px;
  &:nth-child(2n+2) {
    margin-right: 0;
  }
  ${media.sp`
    width: 100%;
    margin-right: 0;
  `}
`

const ContentContainer = styled.div`
  padding: ${S200}px;
`

export default function PostItem({ title, language, code, description }) {
  return (
    <Container>
      <ContentContainer>
        <Text color="darkGray">{language}</Text>
        <Text size="large" weight="bold">{title}</Text>
      </ContentContainer>
      <SyntaxHighlighter style={tomorrowNight} language={language} showLineNumbers customStyle={{ padding: S200, fontSize: fontSizes.medium, lineHeight: 1.8 }}>
        {code}
        <Text color="white">{language}</Text>
      </SyntaxHighlighter>
      <ContentContainer>
        <Text>{description}</Text>
      </ContentContainer>
    </Container>
  )
}
