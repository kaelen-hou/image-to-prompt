'use client'

import { Button } from '@/shared/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
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
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 animate-spin" />
            Generating Prompt...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!generatedPrompt.trim()) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Generated Prompt</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-gray-500 py-8">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>Upload an image to generate a prompt</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main Prompt */}
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              Generated Prompt
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCopy('positive')}
              className={copiedType === 'positive' ? 'bg-green-50 border-green-200' : ''}
            >
              <Clipboard className="w-4 h-4 mr-2" />
              {copiedType === 'positive' ? 'Copied!' : 'Copy'}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none">
            <div className="text-gray-700 whitespace-pre-wrap">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {generatedPrompt}
              </ReactMarkdown>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Negative Prompt */}
      {negativePrompt.trim() && (
        <Card className="w-full">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Negative Prompt</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy('negative')}
                className={copiedType === 'negative' ? 'bg-green-50 border-green-200' : ''}
              >
                <Clipboard className="w-4 h-4 mr-2" />
                {copiedType === 'negative' ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              <div className="text-gray-700 whitespace-pre-wrap">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {negativePrompt}
                </ReactMarkdown>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}