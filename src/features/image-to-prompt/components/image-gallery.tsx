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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Highly Accurate Image to Prompt Generation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our AI analyzes images and creates detailed, professional prompts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 flex items-center justify-center text-4xl">
                  {example.image}
                </div>
                <div className="bg-gray-50 p-3 rounded-lg mb-3">
                  <p className="text-xs text-gray-700 leading-relaxed line-clamp-4">
                    {example.prompt}
                  </p>
                </div>
                <div className="flex gap-1">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs"
                    onClick={() => handleCopyPrompt(example.prompt)}
                  >
                    Copy
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 text-xs">
                    Edit
                  </Button>
                  <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700 text-xs">
                    Use
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline">
            View More Examples
          </Button>
        </div>
      </div>
    </section>
  )
}