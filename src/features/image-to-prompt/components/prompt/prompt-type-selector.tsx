'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'

interface PromptTypeSelectorProps {
  promptType: string
  userQuery: string
  onPromptTypeChange: (type: string) => void
  onUserQueryChange: (query: string) => void
  disabled?: boolean
}

export function PromptTypeSelector({
  promptType,
  userQuery,
  onPromptTypeChange,
  onUserQueryChange,
  disabled = false
}: PromptTypeSelectorProps) {
  const promptTypes = [
    { 
      id: 'stableDiffusion', 
      label: 'Stable Diffusion',
      description: 'Optimized for SD models with detailed style descriptions'
    },
    { 
      id: 'midjourney', 
      label: 'Midjourney',
      description: 'Creative prompts with artistic emphasis and parameters'
    },
    { 
      id: 'flux', 
      label: 'Flux',
      description: 'Latest generation model with enhanced realism'
    },
    { 
      id: 'normal', 
      label: 'General',
      description: 'Universal prompt format for most AI art generators'
    }
  ]

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Prompt Configuration</CardTitle>
        <p className="text-sm text-gray-600">
          Choose the AI model you&apos;ll use for generation
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Prompt Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            AI Model Type
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {promptTypes.map((type) => (
              <label
                key={type.id}
                className={`
                  relative flex cursor-pointer rounded-lg border p-3 transition-all
                  ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-purple-300'}
                  ${promptType === type.id 
                    ? 'border-purple-500 bg-purple-50' 
                    : 'border-gray-200 hover:bg-gray-50'
                  }
                `}
              >
                <input
                  type="radio"
                  name="promptType"
                  value={type.id}
                  checked={promptType === type.id}
                  onChange={(e) => onPromptTypeChange(e.target.value)}
                  disabled={disabled}
                  className="sr-only"
                />
                <div className="flex-1">
                  <div className="font-medium text-sm">{type.label}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {type.description}
                  </div>
                </div>
                {promptType === type.id && (
                  <div className="absolute top-3 right-3 w-2 h-2 bg-purple-600 rounded-full" />
                )}
              </label>
            ))}
          </div>
        </div>

        {/* Custom Query Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Instructions (Optional)
          </label>
          <textarea
            value={userQuery}
            onChange={(e) => onUserQueryChange(e.target.value)}
            disabled={disabled}
            placeholder="Add specific details, style preferences, or modifications..."
            className={`
              w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
              focus:ring-purple-500 focus:border-purple-500 resize-none
              ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : ''}
            `}
            rows={3}
          />
          <p className="text-xs text-gray-500 mt-1">
            Example: &ldquo;Make it more vibrant&rdquo;, &ldquo;Add cyberpunk elements&rdquo;, &ldquo;Focus on lighting&rdquo;
          </p>
        </div>
      </CardContent>
    </Card>
  )
}