'use client'

import { useState, useCallback } from 'react'

interface UseApiOptions {
  onSuccess?: (data: unknown) => void
  onError?: (error: Error) => void
}

interface ApiState<T> {
  data: T | null
  error: Error | null
  isLoading: boolean
}

export function useApi<T>(options: UseApiOptions = {}) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    error: null,
    isLoading: false
  })

  const execute = useCallback(async (
    apiCall: () => Promise<T>
  ): Promise<T | null> => {
    setState(prev => ({ ...prev, isLoading: true, error: null }))

    try {
      const data = await apiCall()
      setState({ data, error: null, isLoading: false })
      options.onSuccess?.(data)
      return data
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Unknown error')
      setState({ data: null, error: err, isLoading: false })
      options.onError?.(err)
      return null
    }
  }, [options])

  const reset = useCallback(() => {
    setState({ data: null, error: null, isLoading: false })
  }, [])

  return {
    ...state,
    execute,
    reset
  }
}

// Specialized hook for API requests with authentication
export function useAuthenticatedApi<T>(options: UseApiOptions = {}) {
  const api = useApi<T>(options)

  const executeWithAuth = useCallback(async (
    apiCall: (token: string) => Promise<T>,
    getToken: () => Promise<string>
  ): Promise<T | null> => {
    return api.execute(async () => {
      const token = await getToken()
      return apiCall(token)
    })
  }, [api])

  return {
    ...api,
    executeWithAuth
  }
}