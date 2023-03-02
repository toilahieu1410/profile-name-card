import { _getAllNameCard, _getNameCard, } from "../../api/nameCard"
import { GET_ALLNAMECARD, GET_NAMECARD } from "../type"

export const getAllNameCard = (params) => async dispatch => {
  try {
    _getAllNameCard(params).then((res) => {
      return dispatch({type: GET_ALLNAMECARD, data: res.data})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getNameCard = (slug) => async dispatch => {
  try {
    _getNameCard(slug).then(res => {
      return dispatch({type: GET_NAMECARD, data: res })
    })
  } catch (error) {
    throw new Error(error)
  }
}

