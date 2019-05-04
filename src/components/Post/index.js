import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Layout from 'components/Layout'
import styled from 'styled-components'
import { changePost, postPost } from 'actions/post'
import TitleFormItemSet from 'components/shared/TitleFormItemSet'
import InputText from 'components/shared/InputText'
import Select from 'components/shared/Select'
import TextArea from 'components/shared/TextArea'
import { media } from 'utils/media'

const Form = styled.form`
`
const FormSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`
const SectionItem = styled.div`
  width: 100%;
  ${props => props.wide === true && 'width: 70%;'}
  ${props => props.narrow === true && 'width: 30%;'}
  ${ media.sp`
    width: 100%;
  `}
`
const SubmitContainer = styled.div`
  padding: 15px 0;
  text-align: center;
`
const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #1b9ad1;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: 0.4px;
  white-space: nowrap;
  border: none;
  border-radius: 9px;
  padding: 0 18px;
`
class Post extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

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
      <Layout>
        <Form>
          <FormSectionContainer>
            <SectionItem wide={true}>
              <TitleFormItemSet label={{text: 'Title', htmlFor: 'title'}}>
                <InputText name="title"
                           value={this.props.title}
                           handleChange={(e) => this.handleChange(e)}/>
              </TitleFormItemSet>
            </SectionItem>
            <SectionItem narrow={true}>
              <TitleFormItemSet label={{text: 'Language', htmlFor: 'language'}}>
                <Select name="language"
                        value={this.props.language}
                        handleChange={(e) => this.handleChange(e)}/>
              </TitleFormItemSet>
            </SectionItem>
          </FormSectionContainer>
          <FormSectionContainer>
            <TitleFormItemSet label={{text: 'Code', htmlFor: 'code'}}>
              <TextArea name="code"
                        rows={10}
                        placeholder="Please write down shitty code here."
                        value={this.props.code}
                        handleChange={(e) => this.handleChange(e)}/>
            </TitleFormItemSet>
          </FormSectionContainer>
          <FormSectionContainer>
            <TitleFormItemSet label={{text: 'Description', htmlFor: 'description'}}>
              <TextArea name="description"
                        rows={5}
                        placeholder="write the appeal point."
                        value={this.props.description}
                        handleChange={(e) => this.handleChange(e)}/>
            </TitleFormItemSet>
          </FormSectionContainer>
          <SubmitContainer>
            <SubmitButton onClick={(e) => this.handleSubmit(e)}>Submit</SubmitButton>
          </SubmitContainer>
        </Form>
      </Layout>
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
