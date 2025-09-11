import { Mail, MessageCircle, Clock, MapPin, Phone, Send } from 'lucide-react'
import { Header, Footer } from '@/shared'
import { Button } from '@/shared/components/ui/button'
import { Checkbox } from '@/shared/components/ui/checkbox'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - GetPrompts Support',
  description: 'Get in touch with the GetPrompts team. We\'re here to help with questions, feedback, and support for our AI tools.',
  keywords: ['contact', 'support', 'help', 'GetPrompts contact', 'customer service'],
  openGraph: {
    title: 'Contact Us - GetPrompts Support',
    description: 'Get in touch with the GetPrompts team for support and assistance.',
    url: 'https://getprompts.me/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed help via email",
      contact: "support@getprompts.me",
      note: "Response within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 9 AM - 6 PM EST",
      note: "Monday to Friday"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      note: "For urgent issues only"
    }
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["123 AI Innovation Drive", "San Francisco, CA 94105", "United States"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9 AM - 6 PM EST", "Saturday: 10 AM - 4 PM EST", "Sunday: Closed"]
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re here to help! Whether you have questions, feedback, or need technical support, 
            our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-gray-600">We&apos;ll get back to you within 24 hours</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors bg-white"
                >
                  <option value="">Select a topic</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="billing">Billing & Subscriptions</option>
                  <option value="feature-request">Feature Request</option>
                  <option value="bug-report">Bug Report</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Please describe your question or issue in detail..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors resize-none"
                ></textarea>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Checkbox id="newsletter" name="newsletter" />
                  </div>
                  <label htmlFor="newsletter" className="text-sm text-gray-700 leading-relaxed cursor-pointer flex-1">
                    I&apos;d like to receive updates about new features and improvements to GetPrompts
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="xl:col-span-1 space-y-6">
            {/* Contact Methods */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Methods</h2>
              
              <div className="space-y-5">
                {contactMethods.map((method, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="bg-violet-100 p-2.5 rounded-lg mr-3 flex-shrink-0 group-hover:bg-violet-200 transition-colors">
                        <method.icon className="w-5 h-5 text-violet-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{method.title}</h3>
                        <p className="text-gray-600 text-xs mb-1">{method.description}</p>
                        <p className="font-medium text-gray-900 text-sm">{method.contact}</p>
                        <p className="text-gray-500 text-xs">{method.note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Information */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Office Information</h2>
              
              <div className="space-y-5">
                {officeInfo.map((info, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="bg-gray-100 p-2.5 rounded-lg mr-3 flex-shrink-0 group-hover:bg-gray-200 transition-colors">
                        <info.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-xs leading-relaxed">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl p-6 text-white shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Quick Help</h3>
              <p className="text-violet-100 mb-4 text-sm leading-relaxed">
                Before contacting us, check our Help Center for instant answers to common questions.
              </p>
              <Button 
                asChild
                variant="secondary"
                size="sm"
                className="bg-white text-violet-600 hover:bg-gray-50 font-medium rounded-lg"
              >
                <a href="/help">Visit Help Center</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Response Time Notice */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mt-12 text-center shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-3">Response Times</h3>
          <p className="text-blue-800 max-w-2xl mx-auto leading-relaxed">
            We typically respond to support emails within 24 hours during business days. 
            For urgent technical issues, please use our live chat or phone support.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}