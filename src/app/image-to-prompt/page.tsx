import { Header, Footer } from '@/shared'
import {
  ImageToPromptHero,
  ImageGallery,
  TestimonialsSection,
  HowItWorksSection,
  ImageToPromptFAQ
} from '@/features/image-to-prompt'

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