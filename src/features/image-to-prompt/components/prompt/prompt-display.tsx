'use client'

import { Button } from '@/shared/components/ui/button'
import { useState } from 'react'
import { Clipboard, Sparkles } from 'lucide-react'
import { toast } from 'sonner'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface PromptDisplayProps {
  generatedPrompt: string
  negativePrompt: string
  isLoading?: boolean
  onCopy?: (type: 'positive' | 'negative') => void
}

export function PromptDisplay({
  generatedPrompt,
  negativePrompt,
  isLoading = false,
  onCopy
}: PromptDisplayProps) {
  const [copiedType, setCopiedType] = useState<'positive' | 'negative' | null>(null)

  const handleCopy = async (type: 'positive' | 'negative') => {
    const textToCopy = type === 'positive' ? generatedPrompt : negativePrompt
    
    if (!textToCopy.trim()) {
      toast.error('No prompt to copy')
      return
    }

    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopiedType(type)
      toast.success(`${type === 'positive' ? 'Prompt' : 'Negative prompt'} copied to clipboard!`)
      onCopy?.(type)
      
      setTimeout(() => setCopiedType(null), 2000)
    } catch (error) {
      toast.error('Failed to copy to clipboard')
      console.error('Copy failed:', error)
    }
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-violet-600 animate-spin" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Generating Prompt...
            </h3>
          </div>
          <div className="space-y-3">
            <div className="animate-pulse">
              <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-3/4 mb-3" />
              <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-1/2 mb-3" />
              <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-5/6 mb-3" />
              <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-2/3" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!generatedPrompt.trim()) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-violet-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Generated Prompt</h3>
          </div>
          <div className="text-center text-gray-600 py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-gray-500" />
            </div>
            <p className="text-lg font-semibold mb-3 text-gray-800">Upload an image to generate a prompt</p>
            <p className="text-sm text-gray-600">Your AI-generated prompt will appear here</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Main Prompt */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Generated Prompt</h3>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCopy('positive')}
              className={`
                transition-all duration-200 rounded-lg
                ${copiedType === 'positive' 
                  ? 'bg-green-50 border-green-300 text-green-700' 
                  : 'border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300'
                }
              `}
            >
              <Clipboard className="w-4 h-4 mr-2" />
              {copiedType === 'positive' ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="prose prose-sm max-w-none">
              <div className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {generatedPrompt}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Negative Prompt */}
      {negativePrompt.trim() && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">🚫</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Negative Prompt</h3>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy('negative')}
                className={`
                  transition-all duration-200 rounded-lg
                  ${copiedType === 'negative' 
                    ? 'bg-green-50 border-green-300 text-green-700' 
                    : 'border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300'
                  }
                `}
              >
                <Clipboard className="w-4 h-4 mr-2" />
                {copiedType === 'negative' ? 'Copied!' : 'Copy'}
              </Button>
            </div>
            <div className="bg-red-50 rounded-xl p-4">
              <div className="prose prose-sm max-w-none">
                <div className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {negativePrompt}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}