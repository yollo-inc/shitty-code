import axios from 'axios'
import { push } from 'connected-react-router'

export const changePost = (dataHash) => {
  return {
    type: 'CHANGE_POST',
    key: dataHash['key'],
    value: dataHash['value']
  }
}

export const postPost = () => {
  return(dispatch, getState) => {
    return axios.post("__REPLACE_ME__", {
      params: {
        data: {
          body: {
            title: getState().postReducer.title,
            code: getState().postReducer.code,
            description: getState().postReducer.description
          }
        }
      }
    })
      .then(res => {
        dispatch({type: 'POST_POST_SUCCESS'})
        alert('success')
      }).catch(err => {
        dispatch({type: 'POST_POST_FAILURE'})
        alert('failure')
      })
  }
}