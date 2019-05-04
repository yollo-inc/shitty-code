import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

export default function PostItem({ title, language, code, description }) {
  return (
    <div>
      <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>
    </div>
  )
}
