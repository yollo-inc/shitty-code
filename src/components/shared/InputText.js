import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const Input = styled.input`
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 1.4rem;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
`
class InputText extends React.Component {

  render() {
    return (
      <Input type="text"
             name={this.props.name}
             value={this.props.value}
             onChange={(e) => this.props.handleChange(e)}/>
    )
  }
}

export default InputText
