'use client'

import { Suspense, memo } from 'react'
import { Sparkles } from 'lucide-react'

// Lightweight shell component that renders immediately
const HeroShell = memo(() => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section - Renders immediately */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transform Images to AI Prompts
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload any image and instantly generate detailed prompts for AI art generation.
            Perfect for Stable Diffusion, Midjourney, and other AI models.
          </p>
        </div>

        {/* Main Content Layout - Immediate skeleton */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(320px,400px)_1fr] gap-6 lg:gap-8 xl:gap-10 items-start">
          {/* Left Sidebar Skeleton */}
          <div className="space-y-6">
            {/* Image Uploader Placeholder */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="h-64 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-32 mx-auto animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Prompt Type Selector Placeholder */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="h-48 bg-gray-100 rounded-lg animate-pulse"></div>
            </div>

            {/* Quota Indicator Placeholder */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
              <div className="h-20 bg-gray-100 rounded-lg animate-pulse"></div>
            </div>
          </div>

          {/* Right Content Skeleton */}
          <div className="space-y-6 min-w-0">
            {/* Generation Button Placeholder */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="text-center">
                <button className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg opacity-50 cursor-not-allowed flex items-center mx-auto">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Loading...
                </button>
              </div>
            </div>

            {/* Results Placeholder */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

HeroShell.displayName = 'HeroShell'

export { HeroShell }