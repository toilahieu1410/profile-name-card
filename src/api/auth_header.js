import axios from "axios"

export const API_SERVER = 'https://nodejshoplong.hoplong.com/v1'

const authHeader = () => {

  const token = localStorage.getItem('token')

  if(token) {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-access-token': token
    }
  } else {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
};

export const axiosInstance = axios.create({
  headers: authHeader()
})