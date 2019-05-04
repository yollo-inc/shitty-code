import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Header from './Header'

const Container = styled.div`
`
const Main = styled.main`
  padding: 0 18px;
  max-width: 597px;
  min-width: 320px;
  margin: 72px auto 0;
`
class Layout extends React.Component {

  render() {
    return (
      <Container>
        <Header/>
        <Main>
          { this.props.children }
        </Main>
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
