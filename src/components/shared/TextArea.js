import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const Area = styled.textarea`
  display: block;
  width: 100%;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  resize: none;
`
class TextArea extends React.Component {

  render() {
    return (
      <Area name={this.props.name}
            rows={this.props.rows}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={(e) => this.props.handleChange(e)}/>
    )
  }
}

export default TextArea
