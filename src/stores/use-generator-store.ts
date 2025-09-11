import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface UserUsage {
  subscription: string
  remainingUses: number
  canUse: boolean
  resetDate: string
}

interface GeneratorState {
  // Image state
  selectedImage: string | null
  selectedFile: File | null
  
  // Generation state
  isGenerating: boolean
  generatedPrompt: string
  negativePrompt: string
  
  // Configuration state
  promptType: string
  userQuery: string
  
  // User state
  userUsage: UserUsage | null
  
  // Actions
  setImage: (image: string, file: File) => void
  clearImage: () => void
  setPromptType: (type: string) => void
  setUserQuery: (query: string) => void
  setUserUsage: (usage: UserUsage | null) => void
  startGeneration: () => void
  setGenerationResult: (prompt: string, negativePrompt?: string) => void
  endGeneration: () => void
  reset: () => void
}

export const useGeneratorStore = create<GeneratorState>()(
  devtools(
    (set) => ({
      // Initial state
      selectedImage: null,
      selectedFile: null,
      isGenerating: false,
      generatedPrompt: '',
      negativePrompt: '',
      promptType: 'stableDiffusion',
      userQuery: '',
      userUsage: null,
      
      // Actions
      setImage: (image: string, file: File) => {
        set(
          {
            selectedImage: image,
            selectedFile: file,
            // Clear previous results when new image is selected
            generatedPrompt: '',
            negativePrompt: ''
          },
          false,
          'setImage'
        )
      },
      
      clearImage: () => {
        set(
          {
            selectedImage: null,
            selectedFile: null,
            generatedPrompt: '',
            negativePrompt: ''
          },
          false,
          'clearImage'
        )
      },
      
      setPromptType: (type: string) => {
        set({ promptType: type }, false, 'setPromptType')
      },
      
      setUserQuery: (query: string) => {
        set({ userQuery: query }, false, 'setUserQuery')
      },
      
      setUserUsage: (usage: UserUsage | null) => {
        set({ userUsage: usage }, false, 'setUserUsage')
      },
      
      startGeneration: () => {
        set({ isGenerating: true }, false, 'startGeneration')
      },
      
      setGenerationResult: (prompt: string, negativePrompt: string = '') => {
        set(
          {
            generatedPrompt: prompt,
            negativePrompt,
            isGenerating: false
          },
          false,
          'setGenerationResult'
        )
      },
      
      endGeneration: () => {
        set({ isGenerating: false }, false, 'endGeneration')
      },
      
      reset: () => {
        set(
          {
            selectedImage: null,
            selectedFile: null,
            isGenerating: false,
            generatedPrompt: '',
            negativePrompt: '',
            promptType: 'stableDiffusion',
            userQuery: '',
          },
          false,
          'reset'
        )
      }
    }),
    {
      name: 'generator-store',
    }
  )
)