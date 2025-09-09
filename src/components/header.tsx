import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-bold text-purple-600">
            Image Prompt
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#tools" className="text-sm text-gray-600 hover:text-gray-900">
              Tools
            </Link>
            <Link href="/image-to-prompt" className="text-sm text-gray-600 hover:text-gray-900">
              Generator
            </Link>
            <Link href="#enhancer" className="text-sm text-gray-600 hover:text-gray-900">
              Enhancer
            </Link>
            <Link href="#inspiration" className="text-sm text-gray-600 hover:text-gray-900">
              Inspiration
            </Link>
            <Link href="#faq" className="text-sm text-gray-600 hover:text-gray-900">
              FAQ
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}