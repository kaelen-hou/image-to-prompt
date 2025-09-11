import { Search, HelpCircle, Book, MessageCircle, Mail, ExternalLink } from 'lucide-react'
import { Header, Footer } from '@/shared'
import { Button } from '@/shared/components/ui/button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help Center - GetPrompts Support & Documentation',
  description: 'Find answers to common questions, tutorials, and support resources for GetPrompts AI tools. Get help with image-to-prompt generation and prompt enhancement.',
  keywords: ['help center', 'support', 'FAQ', 'tutorials', 'GetPrompts help', 'AI tools support'],
  openGraph: {
    title: 'Help Center - GetPrompts Support & Documentation',
    description: 'Find answers to common questions and get support for GetPrompts AI tools.',
    url: 'https://getprompts.me/help',
  },
  alternates: {
    canonical: '/help',
  },
}

export default function HelpPage() {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: Book,
      questions: [
        {
          q: "How do I use the Image to Prompt generator?",
          a: "Upload your image using the drag-and-drop interface or click to browse. Our AI will analyze your image and generate detailed prompts optimized for various AI art platforms."
        },
        {
          q: "What image formats are supported?",
          a: "We support JPG, PNG, WebP, and GIF formats. Images should be under 10MB for optimal processing speed."
        },
        {
          q: "Do I need to create an account?",
          a: "No account is required for basic usage. However, creating an account gives you access to usage history, saved prompts, and higher daily limits."
        }
      ]
    },
    {
      title: "Tools & Features",
      icon: HelpCircle,
      questions: [
        {
          q: "What's the difference between Image to Prompt and Prompt Enhancer?",
          a: "Image to Prompt generates prompts from uploaded images, while Prompt Enhancer improves existing text prompts by adding quality modifiers and style keywords."
        },
        {
          q: "Which AI platforms are supported?",
          a: "Our prompts are optimized for Midjourney, DALL-E, Stable Diffusion, Leonardo AI, and other major AI art generation platforms."
        },
        {
          q: "Can I customize the generated prompts?",
          a: "Yes! Generated prompts serve as a starting point. You can edit, combine, or enhance them further using our Prompt Enhancer tool."
        }
      ]
    },
    {
      title: "Account & Billing",
      icon: MessageCircle,
      questions: [
        {
          q: "What are the usage limits?",
          a: "Free users can generate 10 prompts per day. Premium subscribers get unlimited generations plus priority processing and advanced features."
        },
        {
          q: "How do I upgrade my account?",
          a: "Click 'Get Started' in the header to view our subscription plans. You can upgrade directly through our secure payment system."
        },
        {
          q: "Can I cancel my subscription anytime?",
          a: "Yes, you can cancel your subscription at any time from your account settings. You'll retain access until the end of your billing period."
        }
      ]
    }
  ]

  const quickLinks = [
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for all features",
      icon: ExternalLink,
      href: "#tutorials"
    },
    {
      title: "API Documentation",
      description: "Technical documentation for developers",
      icon: Book,
      href: "#api-docs"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and share tips",
      icon: MessageCircle,
      href: "#community"
    },
    {
      title: "Contact Support",
      description: "Get personalized help from our team",
      icon: Mail,
      href: "/contact"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How can we help you?
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Find answers to common questions, explore tutorials, and get the most out of our AI tools
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, tutorials, or features..."
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-3">
                <div className="bg-violet-100 p-2 rounded-lg mr-3">
                  <link.icon className="w-5 h-5 text-violet-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{link.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{link.description}</p>
            </a>
          ))}
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <div className="bg-violet-100 p-3 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                    <h4 className="text-lg font-medium text-gray-900 mb-3">{faq.q}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl p-8 mt-16 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-violet-100 mb-6 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-violet-600 hover:bg-gray-50"
            >
              <a href="/contact">Contact Support</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-violet-600"
            >
              <a href="/guides">Browse Guides</a>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}