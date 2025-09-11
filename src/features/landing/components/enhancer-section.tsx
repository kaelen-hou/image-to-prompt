import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Button } from '@/shared/components/ui/button'

export default function EnhancerSection() {
  return (
    <section id="enhancer" className="py-20 bg-white">
      <div className="container mx-auto px-4">
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
                <div className="text-4xl mb-3">🚧</div>
                <p className="text-lg font-medium text-gray-700 mb-2">Feature Under Development</p>
                <p className="text-gray-600">We're working hard to bring you this amazing feature!</p>
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
                    <div className="text-2xl mb-2">🖼️</div>
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
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="upscale" className="rounded" disabled />
                      <label htmlFor="upscale" className="text-sm">2x Upscaling</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="denoise" className="rounded" disabled />
                      <label htmlFor="denoise" className="text-sm">Noise Reduction</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="sharpen" className="rounded" disabled />
                      <label htmlFor="sharpen" className="text-sm">Sharpening</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="colorize" className="rounded" disabled />
                      <label htmlFor="colorize" className="text-sm">Color Enhancement</label>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700" disabled>
                    Enhance Image
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}