import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Button } from '@/shared/components/ui/button'

export default function EnhancerSection() {
  return (
    <section id="enhancer" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Image Enhancer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Improve image quality, upscale resolution, and enhance details 
            with our AI-powered image enhancement tools.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
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
                    <Button variant="outline" size="sm" className="mt-2">
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
                      <input type="checkbox" id="upscale" className="rounded" />
                      <label htmlFor="upscale" className="text-sm">2x Upscaling</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="denoise" className="rounded" />
                      <label htmlFor="denoise" className="text-sm">Noise Reduction</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="sharpen" className="rounded" />
                      <label htmlFor="sharpen" className="text-sm">Sharpening</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="colorize" className="rounded" />
                      <label htmlFor="colorize" className="text-sm">Color Enhancement</label>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                    Enhance Image
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Before</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                  <span>Original Image</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>After</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                  <span>Enhanced Image</span>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Download Enhanced
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}