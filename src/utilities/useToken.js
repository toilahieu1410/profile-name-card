import { useState, useEffect } from "react";

const useToken = () => {
  const getToken = () => {
    const token = localStorage.getItem('token1')
    if (token) {
      return token
    }
    return null
  }

  const [token, setToken] = useState(getToken())
  useEffect(() => {
    const token = getToken()
    setToken(token)
  }, [])

  const saveToken = userToken => {
    localStorage.setItem('token1', userToken)
    setToken(userToken)
  }

  return {
    setToken:saveToken,
    token
  }
}

export default useToken