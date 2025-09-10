import { Card, CardContent } from '@/shared/components/ui/card'
import { Button } from '@/shared/components/ui/button'

export default function InspirationSection() {
  const examples = [
    {
      image: "🌅",
      title: "Sunset Landscape",
      prompt: "A serene sunset over rolling hills, warm golden light, soft clouds, peaceful atmosphere"
    },
    {
      image: "🏛️",
      title: "Ancient Architecture",
      prompt: "Ancient Greek temple, marble columns, dramatic lighting, historical monument"
    },
    {
      image: "🎨",
      title: "Abstract Art",
      prompt: "Vibrant abstract painting, bold brushstrokes, dynamic composition, modern art style"
    },
    {
      image: "🌸",
      title: "Cherry Blossoms",
      prompt: "Pink cherry blossoms in full bloom, spring season, soft petals falling, peaceful garden"
    },
    {
      image: "🌊",
      title: "Ocean Waves",
      prompt: "Powerful ocean waves crashing on rocky shore, dramatic seascape, stormy weather"
    },
    {
      image: "🏙️",
      title: "City Skyline",
      prompt: "Modern city skyline at night, glowing skyscrapers, urban landscape, neon lights"
    }
  ]

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
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="text-6xl mb-4 text-center">{example.image}</div>
                <h3 className="text-lg font-semibold mb-2">{example.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {example.prompt}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Use This Prompt
                </Button>
              </CardContent>
            </Card>
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