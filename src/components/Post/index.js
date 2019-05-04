import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { changePost, postPost } from 'actions/post'

class Post extends React.Component {

  handleChange(e) {
    this.props.changePost({key: e.target.name, value: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()

    if(!this.isValid) return

    this.props.postPost()
  }

  isValid() {
    // TODO: validation
    return true
  }

  render() {
    return (
      <form>
        <h1>post</h1>
        <div>
          <label htmlFor="title">title</label>
          <input type="text"
                 name="title"
                 value={this.props.title}
                 onChange={(e) => this.handleChange(e)}/>
        </div>
        <div>
          <label htmlFor="language">language</label>
          <input type="text"
                 name="language"
                 value={this.props.language}
                 onChange={(e) => this.handleChange(e)}/>
        </div>
        <div>
          <label htmlFor="code">code</label>
          <textarea name="code"
                    rows={10}
                    placeholder="Please write down shitty code here."
                    value={this.props.code}
                    onChange={(e) => this.handleChange(e)}/>
        </div>
        <div>
          <label htmlFor="description">description</label>
          <textarea name="description"
                    rows={5}
                    placeholder="write the appeal point."
                    value={this.props.description}
                    onChange={(e) => this.handleChange(e)}/>
        </div>
        <div>
          <button onClick={(e) => this.handleSubmit(e)}>send</button>
        </div>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.postReducer.title,
    language: state.postReducer.language,
    code: state.postReducer.code,
    description: state.postReducer.description,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changePost(dataHash) {
      dispatch(changePost(dataHash))
    },
    postPost() {
      dispatch(postPost())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
