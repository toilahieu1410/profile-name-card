import { API_SERVER, axiosInstance } from "./auth_header"

export const _getAllNameCard = async (params) => {
  const request = await axiosInstance.get(`${API_SERVER}/name-card/cms-all`, {
    params: params
  })
  return request.data
}
export const _getNameCard = async (slug) => {
  const request = await axiosInstance.get(`${API_SERVER}/name-card/web/${slug}`)
  console.log(request.data,'ddd')
  return request.data

}
