import { API_SERVER, axiosInstance } from "./auth_header";

export const _getComment = async () => {
  const slug = 'dien-thoai-di-dong-apple-iphone-13-pro-max-chinh-hang-vn-a'

  const request = await axiosInstance.get(`${API_SERVER}/comment`, {
    params: {slug: slug} 
  })
  return request.data
}

export const _postComment = async (body) => {
  const request = await axiosInstance.post(`${API_SERVER}/comment`, body )
  return request.data
}

export const _putComment = async (id, body) => {
  const request = await axiosInstance.put(`${API_SERVER}/comment/${id}`, body)
  return request
}