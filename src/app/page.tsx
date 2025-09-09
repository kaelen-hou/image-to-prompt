import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import ToolsSection from '@/components/tools-section'
import GeneratorSection from '@/components/generator-section'
import EnhancerSection from '@/components/enhancer-section'
import InspirationSection from '@/components/inspiration-section'
import FAQSection from '@/components/faq-section'
import Footer from '@/components/footer'

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
