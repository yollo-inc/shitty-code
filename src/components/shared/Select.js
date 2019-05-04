import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: 7px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #333333 transparent transparent transparent;
  }
`
const StyledSelect = styled.select`
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
  padding-right: 20px;
  resize: none;
`
class Select extends React.Component {

  render() {
    return (
      <Container>
        <StyledSelect name={this.props.name} value={this.props.value} onChange={(e) => this.props.handleChange(e)}>
          <option value="JavaScript">JavaScript</option>
          <option value="Ruby">Ruby</option>
        </StyledSelect>
      </Container>
    )
  }
}

export default Select
