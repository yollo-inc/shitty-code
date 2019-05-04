import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

class Root extends React.Component {

  render() {
    return (
      <div>
        root
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Root)
