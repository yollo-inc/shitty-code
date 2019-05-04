import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import PostsList from './PostList'
import { db } from '../../utils/firebaseClient'

class Root extends React.Component {

  state = {
    posts: []
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = async () => {
    const postsData = await db.collection("posts").get()
    const posts = postsData.docs.map(post => post.data())

    this.setState({
      posts
    })

    return posts
  }

  render() {
    const { posts } = this.state
    return (
      <PostsList posts={posts} />
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
