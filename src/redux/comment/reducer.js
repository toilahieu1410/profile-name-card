import { GET_COMMENT,POST_COMMENT, PUT_COMMENT } from "../type"

const initialState = {
  listComment: []
}

const comment = (state = initialState, action) => {
  switch(action.type) {
    case GET_COMMENT: 
    return {
      ...state,
      listComment: action.data
    }
    case POST_COMMENT: 
    return {
      ...state,
      listComment: [action.data, ...state.listComment]
    }
    case PUT_COMMENT: 
    return {
      ...state,
      listComment: state.listComment.map(
        (item) => item._id === action.data._id ? item = action.data : item
      )
    }
    default: 
    return state
  }
}

export default comment