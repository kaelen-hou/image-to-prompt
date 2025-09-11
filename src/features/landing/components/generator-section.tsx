'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Button } from '@/shared/components/ui/button'
import { PageSection, SectionHeader } from '@/shared/components/layout/page-section'
import { useRouter } from 'next/navigation'
import { Camera, ArrowRight } from 'lucide-react'

export default function GeneratorSection() {
  const router = useRouter()

  const handleNavigateToGenerator = () => {
    router.push('/image-to-prompt')
  }
  
  return (
    <PageSection id="generator" background="muted">
      <SectionHeader 
        title="Image Prompt Generator"
        subtitle="Upload your image and instantly generate detailed prompts that capture the essence, style, and composition of your artwork."
      />

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Upload Your Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-purple-400 hover:bg-purple-50/50 transition-all duration-200 cursor-pointer group"
                onClick={handleNavigateToGenerator}
              >
                <div className="space-y-4">
                  <div className="flex justify-center"><Camera size={48} className="text-gray-400 group-hover:text-purple-500 transition-colors duration-200" /></div>
                  <div>
                    <p className="text-lg font-medium text-gray-700">
                      Drop your image here or click to browse
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Supports JPG, PNG, WebP up to 10MB
                    </p>
                  </div>
                  <Button 
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

        <div className="text-center mt-6 md:mt-8">
          <p className="text-gray-600 mb-4 md:mb-6">
            Ready to transform your images into detailed prompts?
          </p>
          <Button 
            size="lg" 
            onClick={handleNavigateToGenerator}
          >
            Start Generating <ArrowRight size={16} className="ml-1 inline" />
          </Button>
        </div>
      </div>
    </PageSection>
  )
}