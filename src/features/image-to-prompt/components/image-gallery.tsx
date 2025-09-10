'use client'

import { Card, CardContent } from '@/shared/components/ui/card'
import { Button } from '@/shared/components/ui/button'
import { toast } from 'sonner'

export default function ImageGallery() {
  const handleCopyPrompt = async (prompt: string) => {
    try {
      await navigator.clipboard.writeText(prompt)
      toast.success('Prompt copied!', {
        description: 'Ready to use in your AI art generator.',
      })
    } catch {
      toast.error('Failed to copy prompt', {
        description: 'Please try again.',
      })
    }
  }

  const examples = [
    {
      image: "🌄",
      prompt: "A breathtaking mountain landscape at golden hour, with snow-capped peaks reflecting in a crystal-clear alpine lake, warm sunlight casting dramatic shadows across the rocky terrain, professional landscape photography, high resolution, cinematic lighting"
    },
    {
      image: "🎨",
      prompt: "Abstract digital art with vibrant flowing colors, dynamic brush strokes in blues and purples, modern contemporary style, fluid motion effects, high contrast, artistic composition, digital painting technique"
    },
    {
      image: "🏛️",
      prompt: "Ancient Greek temple with marble columns, classical architecture, dramatic lighting with golden sunset, historical monument, detailed stone textures, professional architectural photography, symmetrical composition"
    },
    {
      image: "🌸",
      prompt: "Cherry blossoms in full bloom, delicate pink petals falling gracefully, spring garden scene, soft natural lighting, peaceful atmosphere, macro photography, shallow depth of field, botanical beauty"
    },
    {
      image: "🌊",
      prompt: "Powerful ocean waves crashing against rugged cliffs, dramatic seascape, stormy weather, dynamic water motion, coastal landscape, moody atmosphere, high contrast, nature photography"
    },
    {
      image: "🦋",
      prompt: "Colorful butterfly with intricate wing patterns, perched on blooming flowers, macro photography, vibrant colors, natural lighting, shallow depth of field, nature close-up, detailed textures"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Highly Accurate Image to Prompt Generation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI analyzes images and creates detailed, professional prompts 
            that capture every nuance of style, composition, and artistic elements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center text-6xl">
                  {example.image}
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {example.prompt}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleCopyPrompt(example.prompt)}
                  >
                    Copy
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit
                  </Button>
                  <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                    Use
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View More Examples
          </Button>
        </div>
      </div>
    </section>
  )
}