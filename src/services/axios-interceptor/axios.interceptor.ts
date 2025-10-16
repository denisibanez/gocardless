import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios'
import { Notify } from 'quasar'

const axiosApiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  timeout: 10000,
})

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const ACCESS_TOKEN: string | null = localStorage.getItem('ACCESS_TOKEN')

    if (ACCESS_TOKEN) {
      try {
        const token: string = JSON.parse(ACCESS_TOKEN)

        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
      } catch (error) {
        console.error('Error parsing ACCESS_TOKEN:', error)
        localStorage.removeItem('ACCESS_TOKEN')

        // Show error notification
        Notify.create({
          type: 'negative',
          message: 'Invalid token format',
          icon: 'error',
          position: 'top-right',
        })
      }
    }

    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error('API Error:', error.response)

    let errorMessage = 'An error occurred'

    if (error.response?.status === 403 || error.response?.status === 401) {
      // Remove invalid token
      localStorage.removeItem('ACCESS_TOKEN')
      errorMessage = 'Unauthorized: Invalid or expired token'

      // Show error notification
      Notify.create({
        type: 'negative',
        message: errorMessage,
        icon: 'lock',
        position: 'top-right',
        timeout: 3000,
      })

      throw new Error(errorMessage)
    }

    if (error.response?.status === 500) {
      errorMessage = 'Internal server error'

      Notify.create({
        type: 'negative',
        message: errorMessage,
        icon: 'error',
        position: 'top-right',
      })

      throw new Error(errorMessage)
    }

    if (error.response?.status === 400) {
      const responseData = error.response?.data as { message?: string } | undefined
      errorMessage = responseData?.message || 'Bad request'

      Notify.create({
        type: 'negative',
        message: errorMessage,
        icon: 'warning',
        position: 'top-right',
      })

      throw new Error(errorMessage)
    }

    // Generic error notification for other cases
    if (error.response?.status) {
      throw new Error(`Error ${error.response.status}: ${error.message}`)
    }

    // Throw original error for other cases
    return Promise.reject(error)
  },
)

export default axiosApiInstance
