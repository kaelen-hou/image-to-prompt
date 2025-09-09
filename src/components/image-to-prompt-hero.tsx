'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { toast } from 'sonner'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Camera, Sparkles, AlertTriangle, Clipboard, Ban } from 'lucide-react'

export default function ImageToPromptHero() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [negativePrompt, setNegativePrompt] = useState('')
  const [promptType, setPromptType] = useState('stableDiffusion')
  const [userQuery, setUserQuery] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const uploadToServer = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      const data = await response.json()
      return data.url
    } catch (error) {
      console.error('Upload error:', error)
      throw error
    }
  }

  const handleFileSelect = async (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
        setGeneratedPrompt('')
        setNegativePrompt('')
      }
      reader.readAsDataURL(file)

      try {
        toast.loading('Uploading image...', {
          description: 'Please wait while we process your image.',
        })
        
        const imageUrl = await uploadToServer(file)
        setUploadedImageUrl(imageUrl)
        
        toast.dismiss()
        toast.success('Image uploaded successfully!', {
          description: 'Click Generate to create your AI prompt.',
        })
      } catch {
        toast.dismiss()
        toast.error('Upload failed', {
          description: 'Please try uploading your image again.',
        })
      }
    } else {
      toast.error('Invalid file type', {
        description: 'Please upload a valid image file (JPG, PNG, WebP, etc.)',
      })
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleGenerate = async () => {
    if (!uploadedImageUrl) {
      toast.error('Please upload an image first', {
        description: 'You need to upload an image before generating a prompt.',
      })
      return
    }
    
    setIsGenerating(true)
    toast.loading('Analyzing your image...', {
      description: 'Our AI is processing your image to create the perfect prompt.',
    })
    
    try {
      const response = await fetch('/api/generate-prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageUrl: uploadedImageUrl,
          promptType: promptType,
          userQuery: userQuery || '描述下这张图片'
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }))
        console.error('API Error:', response.status, errorData)
        throw new Error(`Failed to generate prompt: ${response.status} - ${errorData.error || 'Unknown error'}`)
      }

      const result = await response.json()
      
      // Parse the Coze API response
      let prompt = "Generated prompt from your image"
      
      try {
        if (result.success && result.data?.data) {
          // Parse the JSON string in the data field
          const parsedData = JSON.parse(result.data.data)
          const fullResponse = parsedData.output1 || parsedData.output || prompt
          
          // Try to extract positive and negative prompts
          if (fullResponse.includes('**Prompt:**') && fullResponse.includes('**Negative prompt:**')) {
            const parts = fullResponse.split('**Negative prompt:**')
            const positivePrompt = parts[0].replace('**Prompt:**', '').trim()
            const negativePromptText = parts[1].trim()
            
            prompt = positivePrompt
            setNegativePrompt(negativePromptText)
          } else {
            prompt = fullResponse
            setNegativePrompt('')
          }
        } else if (result.data?.output) {
          prompt = result.data.output
        }
      } catch (parseError) {
        console.error('Failed to parse Coze response:', parseError)
        prompt = result.data?.data || prompt
        setNegativePrompt('')
      }
      
      setGeneratedPrompt(prompt)
      setIsGenerating(false)
      toast.dismiss()
      toast.success('Prompt generated successfully!', {
        description: 'Your AI prompt is ready to use. Click Copy to get started.',
      })
    } catch (error) {
      console.error('Generate prompt error:', error)
      setIsGenerating(false)
      toast.dismiss()
      toast.error('Failed to generate prompt', {
        description: 'Please try again or check your connection.',
      })
    }
  }

  const handleCopyPrompt = async () => {
    if (generatedPrompt) {
      try {
        await navigator.clipboard.writeText(generatedPrompt)
        toast.success('Prompt copied to clipboard!', {
          description: 'You can now paste it into your AI art generator.',
        })
      } catch {
        toast.error('Failed to copy prompt', {
          description: 'Please try again or manually select and copy the text.',
        })
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Free Image to Prompt Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your images into detailed AI prompts instantly. Upload any image and get 
            professional prompts for Midjourney, DALL-E, Stable Diffusion, and more.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">Upload Your Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileInput}
                    accept="image/*"
                    className="hidden"
                  />
                  <div 
                    className={`border-2 border-dashed rounded-lg p-8 text-center bg-white transition-colors cursor-pointer ${
                      isDragOver ? 'border-purple-500 bg-purple-50' : 'border-purple-300 hover:border-purple-400'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={handleButtonClick}
                  >
                    <div className="space-y-4">
                      <Camera className="w-16 h-16 text-purple-500 mx-auto" />
                      <div>
                        <p className="text-lg font-medium text-gray-700">
                          Drop your image here
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                          or click to browse files
                        </p>
                      </div>
                      <Button 
                        type="button"
                        className="bg-purple-600 hover:bg-purple-700"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleButtonClick()
                        }}
                      >
                        Choose Image
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        AI Model
                      </label>
                      <select 
                        className="w-full p-3 border border-gray-200 rounded-xl bg-white text-gray-800 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-300"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: 'right 0.75rem center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '1.25em 1.25em',
                          paddingRight: '2.5rem'
                        }}
                        value={promptType}
                        onChange={(e) => setPromptType(e.target.value)}
                      >
                        <option value="midjourney">Midjourney</option>
                        <option value="stableDiffusion">Stable Diffusion</option>
                        <option value="flux">Flux</option>
                        <option value="normal">Normal</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        User Description (Optional)
                      </label>
                      <textarea 
                        className="w-full p-3 border border-gray-200 rounded-xl bg-white text-gray-800 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 resize-none"
                        placeholder="Enter your specific requirements or description..."
                        rows={3}
                        value={userQuery}
                        onChange={(e) => setUserQuery(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Leave empty to use default: &quot;描述下这张图片&quot;
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-gray-50 border rounded-lg p-6 h-64 flex items-center justify-center overflow-hidden relative">
                    {selectedImage ? (
                      <Image
                        src={selectedImage}
                        alt="Uploaded preview"
                        fill
                        className="object-contain rounded"
                        unoptimized
                      />
                    ) : (
                      <p className="text-gray-500 text-center">
                        Preview your image here
                      </p>
                    )}
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Sparkles className="w-4 h-4 text-green-600 mr-2" />
                        Generated Prompt
                      </label>
                      <div className="bg-white border-2 border-gray-200 rounded-lg h-32 flex items-center justify-center overflow-hidden relative">
                        {isGenerating ? (
                          <div className="flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
                            <p className="text-gray-600">Generating prompt...</p>
                          </div>
                        ) : generatedPrompt ? (
                          <div className="w-full h-full p-4 overflow-y-auto custom-scrollbar">
                            <div className="text-gray-700 prompt-prose">
                              <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                  // Custom components for better styling
                                  strong: ({children}) => <strong className="font-semibold text-green-700">{children}</strong>,
                                  p: ({children}) => <p className="mb-2 last:mb-0">{children}</p>,
                                  h1: ({children}) => <h1 className="text-base font-bold text-green-800 mb-2">{children}</h1>,
                                  h2: ({children}) => <h2 className="text-sm font-semibold text-green-700 mb-1">{children}</h2>,
                                }}
                              >
                                {generatedPrompt}
                              </ReactMarkdown>
                            </div>
                          </div>
                        ) : (
                          <p className="text-gray-400 text-center px-4">
                            Your AI prompt will appear here after uploading an image
                          </p>
                        )}
                        {generatedPrompt && (
                          <div className="absolute bottom-2 right-2 text-xs text-gray-400 bg-white/80 px-1 rounded">
                            Scroll for more
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex-1 bg-green-50 hover:bg-green-100 border-green-300 text-green-700 hover:text-green-800"
                          disabled={!generatedPrompt}
                          onClick={handleCopyPrompt}
                        >
                          <Clipboard className="w-4 h-4 mr-2" />
                          Copy Positive Prompt
                        </Button>
                      </div>
                    </div>

                    {negativePrompt && (
                      <div>
                        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 mr-2" />
                          Negative Prompt
                        </label>
                        <div className="bg-white border-2 border-red-200 rounded-lg h-24 overflow-hidden relative">
                          <div className="w-full h-full p-4 overflow-y-auto custom-scrollbar-red">
                            <div className="text-gray-700 prompt-prose">
                              <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                  // Custom components for better styling
                                  strong: ({children}) => <strong className="font-semibold text-red-700">{children}</strong>,
                                  p: ({children}) => <p className="mb-2 last:mb-0">{children}</p>,
                                  h1: ({children}) => <h1 className="text-base font-bold text-red-800 mb-2">{children}</h1>,
                                  h2: ({children}) => <h2 className="text-sm font-semibold text-red-700 mb-1">{children}</h2>,
                                }}
                              >
                                {negativePrompt}
                              </ReactMarkdown>
                            </div>
                          </div>
                          {negativePrompt.length > 100 && (
                            <div className="absolute bottom-2 right-2 text-xs text-red-400 bg-white/80 px-1 rounded">
                              Scroll for more
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2 mt-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="flex-1 bg-red-50 hover:bg-red-100 border-red-300 text-red-700 hover:text-red-800"
                            onClick={async () => {
                              try {
                                await navigator.clipboard.writeText(negativePrompt)
                                toast.success('Negative prompt copied!', {
                                  description: 'Use this to exclude unwanted elements.',
                                })
                              } catch {
                                toast.error('Failed to copy negative prompt')
                              }
                            }}
                          >
                            <Ban className="w-4 h-4 mr-2" />
                            Copy Negative Prompt
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" disabled={!generatedPrompt}>
                        Download
                      </Button>
                      <Button 
                        className="flex-1 bg-purple-600 hover:bg-purple-700"
                        disabled={!uploadedImageUrl || isGenerating}
                        onClick={handleGenerate}
                      >
                        {isGenerating ? 'Generating...' : 'Generate'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}