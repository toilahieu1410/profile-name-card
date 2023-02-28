import {PROFILE} from '../type'

const initialState = {
  listProfile: {}
}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE:
      return {
        ...state,
        listProfile: action.data
      }
      default: 
      return state
  }
}

export default profile