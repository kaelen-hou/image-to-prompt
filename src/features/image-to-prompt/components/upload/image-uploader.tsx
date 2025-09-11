'use client'

import { Button } from '@/shared/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { Camera, Ban } from 'lucide-react'
import { toast } from 'sonner'

interface ImageUploaderProps {
  selectedImage: string | null
  selectedFile: File | null
  onImageSelect: (imageUrl: string, file: File) => void
  disabled?: boolean
  userUsage?: {
    subscription: string
    remainingUses: number
    canUse: boolean
    resetDate: string
  } | null
}

export function ImageUploader({ 
  selectedImage, 
  selectedFile, 
  onImageSelect, 
  disabled = false,
  userUsage 
}: ImageUploaderProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error('Please select a valid image file')
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.error('Image size must be less than 10MB')
      return
    }

    try {
      const imageUrl = URL.createObjectURL(file)
      onImageSelect(imageUrl, file)
    } catch (error) {
      toast.error('Failed to process image')
      console.error('Error processing image:', error)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    if (disabled) return

    const files = Array.from(e.dataTransfer.files)
    const file = files[0]
    
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    if (!disabled) {
      setIsDragOver(true)
    }
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleButtonClick = () => {
    if (disabled) return
    fileInputRef.current?.click()
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">Upload Image</CardTitle>
        <p className="text-sm text-gray-600 text-center">
          Upload an image to generate AI prompts
        </p>
      </CardHeader>
      <CardContent>
        <div
          className={`
            border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200
            ${isDragOver && !disabled 
              ? 'border-blue-400 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400'
            }
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          `}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={handleButtonClick}
        >
          {selectedImage ? (
            <div className="space-y-4">
              <div className="relative w-full max-w-sm mx-auto">
                <Image
                  src={selectedImage}
                  alt="Selected"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
              <p className="text-sm text-gray-600">
                {selectedFile?.name}
              </p>
              {!disabled && (
                <Button variant="outline" size="sm">
                  Change Image
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-4xl text-gray-400">
                {disabled ? <Ban /> : <Camera />}
              </div>
              <div>
                <p className="text-lg font-medium text-gray-700 mb-2">
                  {disabled 
                    ? 'Upload disabled' 
                    : isDragOver 
                      ? 'Drop image here' 
                      : 'Drop image here or click to browse'
                  }
                </p>
                <p className="text-sm text-gray-500">
                  Supports JPG, PNG, WebP up to 10MB
                </p>
              </div>
              {!disabled && (
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Camera className="w-4 h-4 mr-2" />
                  Choose Image
                </Button>
              )}
            </div>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          className="hidden"
          disabled={disabled}
        />

        {/* Usage info */}
        {userUsage && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600">
              <div className="flex justify-between items-center">
                <span>Plan: {userUsage.subscription}</span>
                <span>Remaining: {userUsage.remainingUses}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}