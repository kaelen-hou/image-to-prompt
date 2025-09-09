import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function GeneratorSection() {
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
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-purple-400 transition-colors">
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
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Choose File
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Original Image</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                  <span>No image uploaded</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Generated Prompt</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg min-h-32 flex items-center justify-center text-gray-400">
                    Upload an image to generate prompt
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      Copy Prompt
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Refine
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}