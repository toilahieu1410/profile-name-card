import { _getCity, _getDistrict, _getWard } from "../../api/address"

import {STREET, DISTRICT, WARD} from "../../redux/type"

export const getCity = () => async dispatch => {
  try {
    _getCity().then(function(res) {
      return dispatch({data: res, type: STREET})
    })
  } catch (error){
    throw new Error(error)
  }
}

export const getDistrict = (id) => async dispatch => {
  try {
    _getDistrict(id).then(function(res) {
      return dispatch({data: res, type: DISTRICT})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getWard = (id) => async dispatch => {
  try {
    _getWard(id).then(function(res) {
      return dispatch({data: res, type: WARD})
    })
  } catch (error) {
    throw new Error(error)
  }
}