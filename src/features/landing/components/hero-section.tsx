import Link from 'next/link'
import { Button } from '@/shared/components/ui/button'
import { BookOpen } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Master AI Art Creation
          <br />
          <span className="text-violet-600">with GetPrompts</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your images into powerful AI prompts and enhance existing ones. 
          Learn prompt engineering, generate stunning artwork, and discover new creative possibilities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/image-to-prompt">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-lg px-8 py-3">
              Get Started Free
            </Button>
          </Link>
          <Link href="/guides">
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 inline-flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Learn Prompt Engineering
            </Button>
          </Link>
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