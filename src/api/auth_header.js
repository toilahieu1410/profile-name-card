import axios from "axios"

export const API_SERVER = 'http://192.168.83.125:8009/v1'

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