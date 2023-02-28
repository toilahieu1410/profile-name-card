import { _getNameCard, } from "../../api/nameCard"
import { GET_NAMECARD } from "../type"

export const getNameCard = (slug) => async dispatch => {
  try {
    _getNameCard(slug).then(res => {
      return dispatch({type: GET_NAMECARD, data: res })
    })
  } catch (error) {
    throw new Error(error)
  }
}

