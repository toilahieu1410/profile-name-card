import { API_SERVER, axiosInstance } from "./auth_header"

export const _getCategories = async () => {
  const request = await axiosInstance.get(`${API_SERVER}/product/categories`)
}

// Lay chi tiet
export const _getProductDetail = async (slug) => {
  const request = await axiosInstance.get(`${API_SERVER}/product`, {
    params: slug
  })
  return request.data
}
