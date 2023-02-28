// Tinh thanh
import {API_SERVER, axiosInstance} from './auth_header'

export const _getCity = async () => {
  const request = await axiosInstance.get(`${API_SERVER}/deliver/city`)
  return request.data
}

// Quan huyen
export const _getDistrict = async (id) => {
  const request = await axiosInstance.get(`${API_SERVER}/deliver/district/${id}`)
  return request.data
}

// phuong xa
export const _getWard = async (id) => {
  const request = await axiosInstance.get(`${API_SERVER}/deliver/ward/${id}`)
  return request.data
}
