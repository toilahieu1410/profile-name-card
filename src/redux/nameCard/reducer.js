import { GET_NAMECARD } from "../type"

const initialState = {
  listNameCard: {},
  listNews: [],
}

const nameCard = (state = initialState, action) => {
  switch (action.type) {
    case GET_NAMECARD:
      return {
        ...state,
        listNameCard: action.data
      }

      default: 
      return state
  }
}

export default nameCard