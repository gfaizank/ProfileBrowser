import { useState } from 'react'
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";


export const useSignUp = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (username, password, confirmPassword) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:8000/auth/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, password, confirmPassword })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      navigate("/");

      // update loading state
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}