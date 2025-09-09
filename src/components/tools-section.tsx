import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ImageIcon, Sparkles, Palette, Zap } from 'lucide-react'

export default function ToolsSection() {
  const tools = [
    {
      title: "Image to Prompt",
      description: "Convert your images into detailed AI prompts for creating similar artwork",
      icon: ImageIcon,
      color: "bg-purple-100 text-purple-700"
    },
    {
      title: "Prompt Enhancer", 
      description: "Improve and optimize your existing prompts for better AI generation results",
      icon: Sparkles,
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "Style Analyzer",
      description: "Analyze art styles and get prompts to recreate similar aesthetic elements",
      icon: Palette,
      color: "bg-green-100 text-green-700"
    },
    {
      title: "Batch Processor",
      description: "Process multiple images at once to generate prompts in bulk",
      icon: Zap,
      color: "bg-orange-100 text-orange-700"
    }
  ]

  return (
    <section id="tools" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Image Prompt Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your creative workflow with our suite of intelligent tools designed 
            to help you generate better AI artwork.
          </p>
        </div>
        
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
                <Button variant="outline" className="w-full">
                  Try Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}