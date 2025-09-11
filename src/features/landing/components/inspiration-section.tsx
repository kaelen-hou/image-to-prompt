'use client'

import { Button } from '@/shared/components/ui/button'
import { ExampleCard } from '@/shared/components/ui/card-variants'
import { toast } from 'sonner'
import { Sunrise, Building, Palette, Flower, Waves, Building2 } from 'lucide-react'

export default function InspirationSection() {
  const examples = [
    {
      image: <Sunrise size={24} className="text-gray-600" />,
      title: "Sunset Landscape",
      prompt: "A serene sunset over rolling hills, warm golden light, soft clouds, peaceful atmosphere"
    },
    {
      image: <Building size={24} className="text-gray-600" />,
      title: "Ancient Architecture",
      prompt: "Ancient Greek temple, marble columns, dramatic lighting, historical monument"
    },
    {
      image: <Palette size={24} className="text-gray-600" />,
      title: "Abstract Art",
      prompt: "Vibrant abstract painting, bold brushstrokes, dynamic composition, modern art style"
    },
    {
      image: <Flower size={24} className="text-gray-600" />,
      title: "Cherry Blossoms",
      prompt: "Pink cherry blossoms in full bloom, spring season, soft petals falling, peaceful garden"
    },
    {
      image: <Waves size={24} className="text-gray-600" />,
      title: "Ocean Waves",
      prompt: "Powerful ocean waves crashing on rocky shore, dramatic seascape, stormy weather"
    },
    {
      image: <Building2 size={24} className="text-gray-600" />,
      title: "City Skyline",
      prompt: "Modern city skyline at night, glowing skyscrapers, urban landscape, neon lights"
    }
  ]

  const handleUsePrompt = async (prompt: string) => {
    try {
      await navigator.clipboard.writeText(prompt)
      toast.success('Prompt copied to clipboard!')
    } catch {
      toast.error('Failed to copy prompt')
    }
  }

  return (
    <section id="inspiration" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Inspiration from Image Prompts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how different images can be transformed into detailed prompts. 
            Get inspired by our gallery of examples.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {examples.map((example, index) => (
            <ExampleCard
              key={index}
              image={example.image}
              title={example.title}
              description={example.prompt}
              actions={
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleUsePrompt(example.prompt)}
                >
                  Use This Prompt
                </Button>
              }
            />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View More Examples
          </Button>
        </div>
      </div>
    </section>
  )
}