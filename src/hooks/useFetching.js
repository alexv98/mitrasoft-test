import {useState} from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetching = async () => {
    try {
      setIsLoading(true)
      await callback()
    } catch (e) {
      console.log(e.message)
      setError(e.message)
    } finally {
      new Promise(resolve =>
        setTimeout(() => {
          resolve(setIsLoading(false))
        }, 500))
      }
  }

  return [fetching, isLoading, error]
}