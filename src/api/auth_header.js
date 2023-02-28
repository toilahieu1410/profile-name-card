import axios from "axios";

export const API_SERVER = 'http://60.60.60.194:8001/v1'

const authHeader = () => {
  const token = localStorage.getItem('token1')
  if(token) {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-access-token': token
    }
  } else {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
}

export const axiosInstance = axios.create({
  headers: authHeader()
})

