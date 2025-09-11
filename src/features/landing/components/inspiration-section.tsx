'use client'

import { Button } from '@/shared/components/ui/button'
import { PageSection, SectionHeader } from '@/shared/components/layout/page-section'
import { ExampleCard } from '@/shared/components/cards'
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
    <PageSection id="inspiration" background="muted">
      <SectionHeader
        title="Inspiration from Image Prompts"
        subtitle="Discover how different images can be transformed into detailed prompts. Get inspired by our gallery of examples."
      />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {examples.map((example, index) => (
            <ExampleCard
              key={index}
              icon={example.image}
              title={example.title}
              prompt={example.prompt}
              onCopy={() => handleUsePrompt(example.prompt)}
            />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View More Examples
          </Button>
        </div>
    </PageSection>
  )
}