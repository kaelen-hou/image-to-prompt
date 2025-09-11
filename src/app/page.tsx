import { Header, Footer } from '@/shared'
import { WebApplicationStructuredData, OrganizationStructuredData } from '@/shared/components/seo'
import {
  HeroSection,
  ToolsSection,
  GeneratorSection,
  EnhancerSection,
  InspirationSection,
  FAQSection
} from '@/features/landing'

export default function Home() {
  return (
    <div className="min-h-screen">
      <WebApplicationStructuredData
        name="GetPrompts - AI Image to Prompt Generator & Prompt Enhancer"
        description="Transform your images into detailed AI prompts and enhance existing prompts for Midjourney, DALL-E, Stable Diffusion and more. Free online tools for content creators and AI enthusiasts."
        url="https://getprompts.me"
        applicationCategory="Multimedia"
        operatingSystem="Any"
        offers={{
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }}
      />
      <OrganizationStructuredData
        name="GetPrompts"
        url="https://getprompts.me"
        description="AI-powered tools for image to prompt generation and prompt enhancement for artists and content creators"
      />
      <Header />
      <HeroSection />
      <ToolsSection />
      <GeneratorSection />
      <EnhancerSection />
      <InspirationSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
