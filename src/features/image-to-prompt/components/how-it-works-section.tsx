import { Upload, Search, Sparkles, Copy, Lightbulb, Target, Zap } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Upload Your Image",
      description: "Simply drag and drop or click to upload any image from your device. We support JPG, PNG, WebP and more formats.",
      icon: Upload
    },
    {
      number: "2", 
      title: "AI Analysis",
      description: "Our advanced AI analyzes your image, identifying artistic style, composition, colors, objects, and visual elements.",
      icon: Search
    },
    {
      number: "3",
      title: "Generate Prompt",
      description: "Get a detailed, professional prompt optimized for your chosen AI platform like Midjourney, DALL-E, or Stable Diffusion.",
      icon: Sparkles
    },
    {
      number: "4",
      title: "Copy & Use",
      description: "Copy the generated prompt and use it in your favorite AI art generator to create stunning artwork.",
      icon: Copy
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How to Use Image to Prompt Generator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform any image into a professional AI prompt in just 4 simple steps. 
            No technical knowledge required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <div className="flex items-center justify-center mb-4">
                  <step.icon className="w-10 h-10 text-purple-600" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-purple-200 -translate-y-0.5"></div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pro Tips for Best Results
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-1">High Quality Images</h4>
                  <p className="text-sm text-gray-600">Upload clear, high-resolution images for more accurate prompt generation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-1">Specific Subjects</h4>
                  <p className="text-sm text-gray-600">Images with clear subjects and defined styles work best for detailed prompts.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-1">Instant Processing</h4>
                  <p className="text-sm text-gray-600">Get your prompts in seconds, ready to use in any AI art generator.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}