import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/components/ui/accordion'

export default function FAQSection() {
  const faqs = [
    {
      question: "How does the image to prompt conversion work?",
      answer: "Our AI analyzes your uploaded image to identify key visual elements, artistic style, composition, colors, and subject matter. It then generates detailed text prompts that capture these characteristics, which can be used with AI art generators like DALL-E, Midjourney, or Stable Diffusion."
    },
    {
      question: "What image formats are supported?",
      answer: "We support all common image formats including JPG, PNG, WebP, and GIF. Images should be under 10MB in size for optimal processing speed. Higher resolution images generally produce more detailed and accurate prompts."
    },
    {
      question: "Is there a limit to how many images I can process?",
      answer: "Free users can process up to 10 images per day. Premium subscribers get unlimited image processing, batch upload capabilities, and priority processing speeds. We also offer API access for developers and businesses."
    },
    {
      question: "Can I edit or customize the generated prompts?",
      answer: "Absolutely! All generated prompts can be edited and customized. You can add your own descriptions, adjust style parameters, or combine multiple prompts. Our prompt enhancer tool can also help optimize your prompts for better AI generation results."
    },
    {
      question: "Do you store my uploaded images?",
      answer: "We prioritize your privacy and security. Uploaded images are processed immediately and deleted from our servers within 24 hours. We don't store your images permanently or use them for any other purposes. Premium users can optionally save their images and prompts to their private workspace."
    },
    {
      question: "Which AI art generators work with these prompts?",
      answer: "Our prompts are optimized to work with all major AI art generators including DALL-E 2/3, Midjourney, Stable Diffusion, Adobe Firefly, and many others. We provide specific formatting options for different platforms to ensure the best results."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our image prompt tools and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}