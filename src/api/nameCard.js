import { API_SERVER, axiosInstance } from "./auth_header"

export const _getNameCard = async (slug) => {
  const request = await axiosInstance.get(`${API_SERVER}/name-card/web/${slug}`)
  return request.data
}
