import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Button } from '@/shared/components/ui/button'
import { PageSection, SectionHeader } from '@/shared/components/layout/page-section'
import { ImageIcon, Sparkles, Palette, BookOpen } from 'lucide-react'

export default function ToolsSection() {
  const tools = [
    {
      title: "Image to Prompt",
      description: "Convert your images into detailed AI prompts for creating similar artwork",
      icon: ImageIcon,
      color: "bg-violet-100 text-violet-700",
      href: "/image-to-prompt"
    },
    {
      title: "Prompt Enhancer", 
      description: "Improve and optimize your existing prompts for better AI generation results",
      icon: Sparkles,
      color: "bg-blue-100 text-blue-700",
      href: "/prompt-enhancer"
    },
    {
      title: "Learning Guides",
      description: "Master prompt engineering with our comprehensive guides and tutorials",
      icon: BookOpen,
      color: "bg-green-100 text-green-700",
      href: "/guides"
    },
    {
      title: "Style Explorer",
      description: "Discover different AI art styles and learn how to achieve them",
      icon: Palette,
      color: "bg-orange-100 text-orange-700",
      href: "/guides/ai-art-styles"
    }
  ]

  return (
    <PageSection id="tools" background="white">
      <SectionHeader
        title="AI-Powered Image Prompt Tools"
        subtitle="Transform your creative workflow with our suite of intelligent tools designed to help you generate better AI artwork."
      />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${tool.color} flex items-center justify-center mb-4`}>
                  <tool.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{tool.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={tool.href}>
                  <Button variant="outline" className="w-full">
                    {tool.title === "Learning Guides" ? "Browse Guides" : 
                     tool.title === "Style Explorer" ? "Explore Styles" : "Try Now"}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
    </PageSection>
  )
}