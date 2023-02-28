import { API_SERVER, axiosInstance } from "./auth_header";

export const _getProfile = async () => {
  const request = await axiosInstance.get(`${API_SERVER}/account/profile`)
  return request.data
}