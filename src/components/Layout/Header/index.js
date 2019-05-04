import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { media } from 'utils/media'

const Container = styled.header`
  height: 84px;
  box-shadow: 0 1px #e6e8eb;
  ${ media.sp`
    height: 60px;
  `}
`
const Border = styled.div`
  height: 6px;
  background-color: #4e4376;
  background-image: linear-gradient(135deg,#2b5876,#4e4376);
`
const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  height: calc(100% - 6px);
  max-width: 1280px;
  padding: 0 36px;
  ${ media.sp`
    padding: 0 12px;
  `}
`
const Logo = styled(Link)`
  h1 {
    font-size: 2.6rem;
    font-weight: bold;
    color: #3c5173;
  }
`
const PostButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  min-width: 120px;
  background: linear-gradient(135deg,#2b5876,#4e4376);
  color: #fff;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: 0.4px;
  white-space: nowrap;
  border-radius: 9px;
  padding: 0 3px;
  ${ media.sp`
    min-width: 100px;
    height: 36px;
    line-height: 30px;
  `}
`
class Header extends React.Component {

  render() {
    return (
      <Container>
        <Border/>
        <Inner>
          <Logo to="/">
            <h1>SittyCode</h1>
          </Logo>
          <PostButton to="/post">Add Post</PostButton>
        </Inner>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
