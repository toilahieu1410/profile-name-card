import { toast } from "react-toastify";
import { _getComment, _postComment, _putComment } from "../../api/comment";

import { GET_COMMENT, POST_COMMENT, PUT_COMMENT } from "../type"

export const getComment = (slug) => async dispatch => {
  try {
    _getComment(slug).then(function (res) {
      return dispatch({ data: res, type: GET_COMMENT })
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const postComment = (body) => async dispatch => {
  try {
    _postComment(body).then(function (res) {
      if (res.status == 200) {
        toast.success('Thêm bình luận thành công')
        return dispatch({ data: res.data, type: POST_COMMENT })
      }
      toast.error('Lỗi không xác định')
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const putComment = (id, body) => async dispatch => {
  try {
    _putComment(id, body).then(function (res) {
      return dispatch({ data: res.data, type: PUT_COMMENT })
    })
  } catch (error) {
    throw new Error(error)
  }
}