import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { media } from 'utils/media'

const Container = styled.div`
  width: 100%;
  padding: 0 15px 15px;
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  ${ media.sp`
    padding: 0 0 15px;
  `}
`
class TitleFormItemSet extends React.Component {

  render() {
    return (
      <Container>
        <label htmlFor={this.props.label.htmlFor}>{ this.props.label.text }</label>
        <div>
          { this.props.children }
        </div>
      </Container>
    )
  }
}

export default TitleFormItemSet
