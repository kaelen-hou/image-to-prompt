'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Button } from '@/shared/components/ui/button'
import { useRouter } from 'next/navigation'

export default function GeneratorSection() {
  const router = useRouter()

  const handleNavigateToGenerator = () => {
    router.push('/image-to-prompt')
  }
  return (
    <section id="generator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Image Prompt Generator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload your image and instantly generate detailed prompts that capture 
            the essence, style, and composition of your artwork.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Upload Your Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-purple-400 transition-colors cursor-pointer"
                onClick={handleNavigateToGenerator}
              >
                <div className="space-y-4">
                  <div className="text-4xl">📷</div>
                  <div>
                    <p className="text-lg font-medium text-gray-700">
                      Drop your image here or click to browse
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Supports JPG, PNG, WebP up to 10MB
                    </p>
                  </div>
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleNavigateToGenerator()
                    }}
                  >
                    Choose File
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Ready to transform your images into detailed prompts?
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
              onClick={handleNavigateToGenerator}
            >
              Start Generating →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}