import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Button } from '@/shared/components/ui/button'
import { Checkbox } from '@/shared/components/ui/input'
import { PageSection } from '@/shared/components/layout/page-section'
import { Construction, ImageIcon } from 'lucide-react'

export default function EnhancerSection() {
  return (
    <PageSection id="enhancer" background="white">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Image Enhancer
          </h2>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
            Coming Soon
          </span>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Improve image quality, upscale resolution, and enhance details 
          with our AI-powered image enhancement tools.
        </p>
      </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gray-50 bg-opacity-80 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="flex justify-center mb-3"><Construction size={48} className="text-gray-400" /></div>
                <p className="text-lg font-medium text-gray-700 mb-2">Feature Under Development</p>
                <p className="text-gray-600">We&apos;re working hard to bring you this amazing feature!</p>
              </div>
            </div>
            <CardHeader>
              <CardTitle>Enhance Your Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Image
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <div className="flex justify-center mb-2"><ImageIcon size={32} className="text-gray-400" /></div>
                    <p className="text-sm text-gray-600">Drop image here</p>
                    <Button variant="outline" size="sm" className="mt-2" disabled>
                      Browse
                    </Button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enhancement Options
                  </label>
                  <div className="space-y-3">
                    <Checkbox 
                      label="2x Upscaling" 
                      disabled 
                    />
                    <Checkbox 
                      label="Noise Reduction" 
                      disabled 
                    />
                    <Checkbox 
                      label="Sharpening" 
                      disabled 
                    />
                    <Checkbox 
                      label="Color Enhancement" 
                      disabled 
                    />
                  </div>
                  <Button className="w-full mt-4" disabled>
                    Enhance Image
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
    </PageSection>
  )
}