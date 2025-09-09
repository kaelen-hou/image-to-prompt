import Header from '@/components/header'
import Footer from '@/components/footer'
import ImageToPromptHero from '@/components/image-to-prompt-hero'
import ImageGallery from '@/components/image-gallery'
import TestimonialsSection from '@/components/testimonials-section'
import HowItWorksSection from '@/components/how-it-works-section'
import ImageToPromptFAQ from '@/components/image-to-prompt-faq'

export default function ImageToPromptPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ImageToPromptHero />
      <ImageGallery />
      <TestimonialsSection />
      <HowItWorksSection />
      <ImageToPromptFAQ />
      <Footer />
    </div>
  )
}