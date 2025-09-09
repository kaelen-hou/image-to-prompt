import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Create Better AI Art
          <br />
          <span className="text-purple-600">with Image Prompts</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your images into powerful AI prompts. Generate stunning artwork, 
          enhance your creativity, and discover new possibilities with our advanced AI tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
            Get Started Free
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3">
            View Examples
          </Button>
        </div>
        <div className="mt-12 flex justify-center space-x-8 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>No signup required</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>100% Free</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Instant results</span>
          </div>
        </div>
      </div>
    </section>
  )
}