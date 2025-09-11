import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface UserUsage {
  subscription: string
  remainingUses: number
  canUse: boolean
  resetDate: string
}

interface UserState {
  // User usage data
  usage: UserUsage | null
  lastFetched: number | null
  
  // Loading state
  isLoadingUsage: boolean
  
  // Actions
  setUsage: (usage: UserUsage) => void
  setLoading: (loading: boolean) => void
  clearUsage: () => void
  shouldRefreshUsage: () => boolean
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        usage: null,
        lastFetched: null,
        isLoadingUsage: false,
        
        // Actions
        setUsage: (usage: UserUsage) => {
          set(
            {
              usage,
              lastFetched: Date.now(),
              isLoadingUsage: false
            },
            false,
            'setUsage'
          )
        },
        
        setLoading: (loading: boolean) => {
          set({ isLoadingUsage: loading }, false, 'setLoading')
        },
        
        clearUsage: () => {
          set(
            {
              usage: null,
              lastFetched: null,
              isLoadingUsage: false
            },
            false,
            'clearUsage'
          )
        },
        
        shouldRefreshUsage: () => {
          const { lastFetched } = get()
          if (!lastFetched) return true
          
          // Refresh if data is older than 5 minutes
          const fiveMinutes = 5 * 60 * 1000
          return Date.now() - lastFetched > fiveMinutes
        }
      }),
      {
        name: 'user-store',
        partialize: (state) => ({
          usage: state.usage,
          lastFetched: state.lastFetched
        })
      }
    ),
    {
      name: 'user-store',
    }
  )
)