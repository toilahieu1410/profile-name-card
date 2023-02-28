import { STREET, DISTRICT, WARD } from "../type";

const initialState = {
  listStreet:  null,
  listDistrict: [],
  listWard: [],
}

const address = (state = initialState, action) => {
  switch (action.type) {
    case STREET:
    return {
      ...state,
      listStreet: action.data
    }
    case DISTRICT:
      return {
        ...state,
        listDistrict: action.data
      }
    case WARD: 
    return {
      ...state,
      listWard: action.data
    }
    default:
      return state
  }
}

export default address

