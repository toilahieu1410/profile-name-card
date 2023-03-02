import { GET_ALLNAMECARD, GET_NAMECARD } from "../type"

const initialState = {
  listNameCard: {},
  listNews: [],
  listAllNameCard: []
}

const nameCard = (state = initialState, action) => {
  switch (action.type) {
    case GET_NAMECARD:
      return {
        ...state,
        listNameCard: action.data
      }
    case GET_ALLNAMECARD:
      return {
        ...state,
        listAllNameCard: action.data
      }
      default: 
      return state
  }
}

export default nameCard