const initialState = {
  title: '',
  code: '',
  description: '',
}

export default function postReducer(state = initialState, action) {
  switch(action.type) {
  case '__REPLACE_ME__':
    return {
      ...state,
    }
  default:
    return state
  }
}
