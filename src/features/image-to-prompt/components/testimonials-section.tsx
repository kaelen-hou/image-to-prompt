import { Card, CardContent } from '@/shared/components/ui/card'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Digital Artist",
      avatar: "👩‍🎨",
      rating: 5,
      testimonial: "This tool has revolutionized my workflow! I can now generate perfect prompts from my reference images in seconds. The accuracy is incredible - it captures details I would have missed."
    },
    {
      name: "Michael Rodriguez",
      role: "Content Creator",
      avatar: "👨‍💻",
      rating: 5,
      testimonial: "As someone who creates content daily, this tool saves me hours of work. The prompts it generates are so detailed and accurate that my AI artwork has improved dramatically."
    },
    {
      name: "Emily Watson",
      role: "Marketing Designer",
      avatar: "👩‍💼",
      rating: 5,
      testimonial: "The best image-to-prompt tool I've used! It understands artistic styles perfectly and generates prompts that actually work. My clients are amazed by the results."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of artists, designers, and creators who trust our AI-powered 
            image-to-prompt generator for their creative projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-purple-600 rounded-2xl p-8 text-center text-white">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">100K+</div>
              <p className="text-purple-200">Images Processed</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <p className="text-purple-200">Happy Users</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <p className="text-purple-200">Accuracy Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <p className="text-purple-200">Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}