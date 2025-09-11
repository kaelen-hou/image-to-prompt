'use client'

import { Button } from '@/shared/components/ui/button'
import { useState, useRef, memo, useCallback } from 'react'
import Image from 'next/image'
import { Camera, Ban } from 'lucide-react'
import { toast } from 'sonner'
import { clientLogger } from '@/lib/logger/client'

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

function ImageUploaderComponent({ 
  selectedImage, 
  selectedFile, 
  onImageSelect, 
  disabled = false,
  userUsage 
}: ImageUploaderProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = useCallback(async (file: File) => {
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
      clientLogger.componentLog('error', 'Image processing failed', 'ImageUploader', {
        fileName: file.name,
        fileSize: file.size
      }, error instanceof Error ? error : new Error(String(error)))
    }
  }, [onImageSelect])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    if (disabled) return

    const files = Array.from(e.dataTransfer.files)
    const file = files[0]
    
    if (file) {
      handleFileSelect(file)
    }
  }, [disabled, handleFileSelect])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    if (!disabled) {
      setIsDragOver(true)
    }
  }, [disabled])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleButtonClick = useCallback(() => {
    if (disabled) return
    fileInputRef.current?.click()
  }, [disabled])

  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }, [handleFileSelect])

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Image</h3>
          <p className="text-sm text-gray-600">
            Upload an image to generate AI prompts
          </p>
        </div>

        <div
          className={`
            relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300
            ${isDragOver && !disabled 
              ? 'border-violet-400 bg-violet-50 scale-105' 
              : 'border-gray-300 hover:border-violet-300'
            }
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-50'}
          `}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={handleButtonClick}
        >
          {selectedImage ? (
            <div className="space-y-4">
              <div className="relative w-full max-w-sm mx-auto group">
                <Image
                  src={selectedImage}
                  alt="Selected"
                  width={400}
                  height={300}
                  className="rounded-xl object-cover shadow-md group-hover:shadow-lg transition-shadow duration-200"
                  style={{ aspectRatio: '4/3' }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-xl transition-all duration-200" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700 truncate">
                  {selectedFile?.name}
                </p>
                <p className="text-xs text-gray-500">
                  {selectedFile && `${(selectedFile.size / 1024 / 1024).toFixed(1)} MB`}
                </p>
              </div>
              {!disabled && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Change Image
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full flex items-center justify-center">
                {disabled ? (
                  <Ban className="w-8 h-8 text-gray-400" />
                ) : (
                  <Camera className="w-8 h-8 text-violet-600" />
                )}
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-900">
                  {disabled 
                    ? 'Upload disabled' 
                    : isDragOver 
                      ? 'Drop image here' 
                      : 'Drop image here or click to browse'
                  }
                </p>
                <p className="text-sm text-gray-600">
                  Supports JPG, PNG, WebP up to 10MB
                </p>
              </div>
              {!disabled && (
                <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-200">
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
      </div>

      {/* Usage info */}
      {userUsage && (
        <div className="border-t border-gray-100 bg-gray-50 p-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">Plan:</span>
              <span className="px-2 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium">
                {userUsage.subscription}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Remaining:</span>
              <span className="font-bold text-violet-600">{userUsage.remainingUses}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export const ImageUploader = memo(ImageUploaderComponent)