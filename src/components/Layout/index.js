import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

class Layout extends React.Component {

  render() {
    return (
      <div>
        { this.props.children }
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
