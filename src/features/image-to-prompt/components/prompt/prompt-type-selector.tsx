'use client'


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
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Prompt Configuration</h3>
          <p className="text-sm text-gray-600">
            Choose the AI model you&apos;ll use for generation
          </p>
        </div>

        <div className="space-y-6">
          {/* Prompt Type Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              AI Model Type
            </label>
            <div className="grid grid-cols-1 gap-3">
              {promptTypes.map((type) => (
                <label
                  key={type.id}
                  className={`
                    relative flex cursor-pointer rounded-xl border-2 p-4 transition-all duration-200
                    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-violet-300'}
                    ${promptType === type.id 
                      ? 'border-violet-500 bg-violet-50 shadow-md' 
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
                    <div className="flex items-center space-x-2">
                      <div className="font-semibold text-sm text-gray-900">{type.label}</div>
                      {promptType === type.id && (
                        <div className="w-2 h-2 bg-violet-600 rounded-full" />
                      )}
                    </div>
                    <div className="text-xs text-gray-600 mt-1 leading-relaxed">
                      {type.description}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Custom Query Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Additional Instructions
              <span className="text-gray-500 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <textarea
                value={userQuery}
                onChange={(e) => onUserQueryChange(e.target.value)}
                disabled={disabled}
                placeholder="Add specific details, style preferences, or modifications..."
                className={`
                  w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm
                  focus:ring-2 focus:ring-violet-500 focus:border-violet-500 resize-none
                  transition-all duration-200
                  ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : 'hover:border-gray-400'}
                `}
                rows={3}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              💡 Example: &ldquo;Make it more vibrant&rdquo;, &ldquo;Add cyberpunk elements&rdquo;, &ldquo;Focus on lighting&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}