import { API_SERVER,axiosInstance } from "./auth_header";

export const _login = async (params) => {
  const request = await axiosInstance.get(`${API_SERVER}/account/sign-in`, {
    params: params
  })
  return request
}

export const _register = async (body) => {
  const request = await axiosInstance.post(`${API_SERVER}/account/sign-up`, body)
  return request
}