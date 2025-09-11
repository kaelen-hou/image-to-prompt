import { FileText, Users, CreditCard, Shield, AlertTriangle, Scale } from 'lucide-react'
import { Header, Footer } from '@/shared'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - GetPrompts',
  description: 'Read the terms and conditions for using GetPrompts AI tools and services. Understand your rights and responsibilities.',
  keywords: ['terms of service', 'terms and conditions', 'user agreement', 'GetPrompts terms'],
  openGraph: {
    title: 'Terms of Service - GetPrompts',
    description: 'Terms and conditions for using GetPrompts AI tools and services.',
    url: 'https://getprompts.me/terms',
  },
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance-of-terms",
      title: "Acceptance of Terms",
      icon: FileText,
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing or using GetPrompts services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services."
        },
        {
          subtitle: "Age Requirements",
          text: "You must be at least 13 years old to use our services. If you are between 13 and 18, you must have parental consent to use GetPrompts."
        },
        {
          subtitle: "Changes to Terms",
          text: "We reserve the right to update these terms at any time. We will notify users of material changes via email or through our platform. Continued use of our services after changes constitutes acceptance of the new terms."
        }
      ]
    },
    {
      id: "description-of-service",
      title: "Description of Service",
      icon: Users,
      content: [
        {
          subtitle: "AI-Powered Tools",
          text: "GetPrompts provides AI-powered tools for generating image prompts and enhancing text prompts for use with various AI art generation platforms."
        },
        {
          subtitle: "Service Availability",
          text: "We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service. Maintenance, updates, or technical issues may temporarily affect availability."
        },
        {
          subtitle: "Feature Updates",
          text: "We may add, modify, or remove features at our discretion. We will provide reasonable notice for significant changes that affect core functionality."
        }
      ]
    },
    {
      id: "user-accounts",
      title: "User Accounts and Responsibilities",
      icon: Users,
      content: [
        {
          subtitle: "Account Security",
          text: "You are responsible for maintaining the security of your account credentials. Notify us immediately of any unauthorized access or security breaches."
        },
        {
          subtitle: "Accurate Information",
          text: "You must provide accurate, complete, and current information when creating your account and keep this information updated."
        },
        {
          subtitle: "Prohibited Activities",
          text: "You may not use our services for illegal activities, to violate others' rights, to distribute malware, or to circumvent our security measures or usage limits."
        },
        {
          subtitle: "Content Guidelines",
          text: "You may not upload content that is illegal, harmful, threatening, abusive, defamatory, or violates intellectual property rights."
        }
      ]
    },
    {
      id: "payment-and-billing",
      title: "Payment and Billing",
      icon: CreditCard,
      content: [
        {
          subtitle: "Subscription Plans",
          text: "Premium features require a paid subscription. Pricing, features, and billing cycles are clearly displayed during the purchase process."
        },
        {
          subtitle: "Payment Processing",
          text: "Payments are processed securely through third-party payment processors. We do not store your full payment information on our servers."
        },
        {
          subtitle: "Refunds and Cancellations",
          text: "You may cancel your subscription at any time. Refunds are provided in accordance with our refund policy, typically within 30 days of purchase for unused services."
        },
        {
          subtitle: "Price Changes",
          text: "We may change subscription prices with 30 days' notice. Existing subscribers will maintain their current pricing until their next billing cycle."
        }
      ]
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: Shield,
      content: [
        {
          subtitle: "Your Content",
          text: "You retain ownership of images you upload and prompts you create. By using our service, you grant us a limited license to process your content to provide our services."
        },
        {
          subtitle: "Generated Content",
          text: "AI-generated prompts are provided 'as-is' for your use. We make no claims of ownership over the prompts generated by our AI tools."
        },
        {
          subtitle: "Our Intellectual Property",
          text: "GetPrompts' technology, algorithms, and platform design are protected by intellectual property laws. You may not copy, modify, or reverse-engineer our services."
        },
        {
          subtitle: "Third-Party Content",
          text: "Our service may include third-party content or links. We are not responsible for third-party content and do not endorse any third-party materials."
        }
      ]
    },
    {
      id: "limitations-and-liability",
      title: "Limitations and Liability",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "Service Limitations",
          text: "Our AI tools are provided for creative assistance and may not always produce perfect results. Users should review and validate all generated content."
        },
        {
          subtitle: "Disclaimer of Warranties",
          text: "Our services are provided 'as-is' without warranties of any kind. We do not guarantee that our services will meet your specific requirements or be error-free."
        },
        {
          subtitle: "Limitation of Liability",
          text: "Our liability is limited to the amount you paid for our services in the 12 months preceding any claim. We are not liable for indirect, incidental, or consequential damages."
        },
        {
          subtitle: "Indemnification",
          text: "You agree to indemnify GetPrompts against claims arising from your use of our services, violation of these terms, or infringement of others' rights."
        }
      ]
    },
    {
      id: "termination",
      title: "Termination",
      icon: Scale,
      content: [
        {
          subtitle: "Termination by You",
          text: "You may terminate your account at any time by contacting our support team or using the account deletion feature in your settings."
        },
        {
          subtitle: "Termination by Us",
          text: "We may suspend or terminate your account for violations of these terms, illegal activities, or if required by law. We will provide notice when possible."
        },
        {
          subtitle: "Effect of Termination",
          text: "Upon termination, your access to our services will cease, and we may delete your account data in accordance with our data retention policies."
        },
        {
          subtitle: "Survival",
          text: "Sections regarding intellectual property, payment obligations, disclaimers, and limitations of liability will survive termination."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full">
              <FileText className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            These terms govern your use of GetPrompts services. Please read them carefully 
            to understand your rights and responsibilities.
          </p>
          <div className="text-sm text-gray-500">
            <p>Last updated: January 11, 2025</p>
            <p>Effective date: January 11, 2025</p>
          </div>
        </div>

        {/* Key Points Summary */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Key Points</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-green-900 mb-2">✅ What You Can Do</h3>
              <ul className="text-green-800 space-y-1">
                <li>• Use our AI tools for creative projects</li>
                <li>• Keep ownership of your uploaded content</li>
                <li>• Cancel your subscription anytime</li>
                <li>• Export and use generated prompts freely</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-green-900 mb-2">❌ What You Cannot Do</h3>
              <ul className="text-green-800 space-y-1">
                <li>• Upload illegal or harmful content</li>
                <li>• Share your account credentials</li>
                <li>• Reverse-engineer our technology</li>
                <li>• Violate others&apos; intellectual property</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12">
          {sections.map((section, sectionIndex) => (
            <section key={sectionIndex} id={section.id} className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <div className="bg-violet-100 p-3 rounded-lg mr-4">
                  <section.icon className="w-6 h-6 text-violet-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
              
              <div className="space-y-6">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.subtitle}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Additional Legal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These Terms of Service are governed by and construed in accordance with the laws 
              of the State of California, without regard to conflict of law principles.
            </p>
            <p className="text-gray-600">
              Any disputes arising from these terms will be subject to the exclusive jurisdiction 
              of the courts located in San Francisco County, California.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> legal@getprompts.me</p>
              <p><strong>Address:</strong> 123 AI Innovation Drive, San Francisco, CA 94105</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Severability and Entire Agreement */}
        <div className="bg-gray-50 rounded-xl p-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Severability</h3>
              <p className="text-gray-600 text-sm">
                If any provision of these terms is found to be unenforceable, the remaining 
                provisions will continue to be valid and enforceable.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Entire Agreement</h3>
              <p className="text-gray-600 text-sm">
                These terms, together with our Privacy Policy, constitute the entire agreement 
                between you and GetPrompts regarding the use of our services.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#${section.id}`}
                className="text-violet-600 hover:text-violet-700 text-sm py-1 transition-colors"
              >
                {index + 1}. {section.title}
              </a>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}