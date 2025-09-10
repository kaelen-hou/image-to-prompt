import { Header, Footer } from '@/shared'
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
