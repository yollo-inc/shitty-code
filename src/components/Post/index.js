import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

class Post extends React.Component {

  render() {
    return (
      <div>
        post
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

export default connect(mapStateToProps, mapDispatchToProps)(Post)
