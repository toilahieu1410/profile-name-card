import { _getProfile } from "../../api/profile";
import { PROFILE } from "../type";

export const getProfile = () => async dispatch => {
  try {
    _getProfile().then(function(res) {
      return dispatch({data: res, type: PROFILE})
    })
  } catch (error) {
    throw new Error(error)
  }
}