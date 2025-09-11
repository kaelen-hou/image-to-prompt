'use client';

import { Header, Footer } from '@/shared'
import { Wifi, RefreshCw } from 'lucide-react'

export default function OfflinePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Wifi className="w-8 h-8 text-gray-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              You&apos;re offline
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              It looks like you&apos;ve lost your internet connection. Don&apos;t worry, you can still browse the pages you&apos;ve already visited.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              What you can do while offline:
            </h2>
            <div className="space-y-3 text-left">
              <div className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-700">Browse previously visited pages</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-700">View cached images and content</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mr-3">✗</span>
                <span className="text-gray-500">Generate new prompts from images</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mr-3">✗</span>
                <span className="text-gray-500">Access your account or usage data</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors font-medium"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}