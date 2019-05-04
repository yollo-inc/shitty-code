const initialState = {
  title: '',
  language: '',
  code: '',
  description: '',
}

export default function postReducer(state = initialState, action) {
  switch(action.type) {
  case 'CHANGE_POST':
    return {
      ...state,
      [action.key]: action.value,
    }
  case 'POST_POST_SUCCESS':
    return {
      ...state,
    }
  case 'POST_POST_FAILURE':
    return {
      ...state,
    }
  default:
    return state
  }
}
