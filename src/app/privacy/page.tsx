import { Shield, Eye, Lock, Database, Users, Mail } from 'lucide-react'
import { Header, Footer } from '@/shared'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - GetPrompts',
  description: 'Learn how GetPrompts collects, uses, and protects your personal information. Our commitment to your privacy and data security.',
  keywords: ['privacy policy', 'data protection', 'GDPR', 'privacy', 'GetPrompts privacy'],
  openGraph: {
    title: 'Privacy Policy - GetPrompts',
    description: 'Our commitment to protecting your privacy and personal data.',
    url: 'https://getprompts.me/privacy',
  },
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  const sections = [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      icon: Database,
      content: [
        {
          subtitle: "Account Information",
          text: "When you create an account, we collect your email address, name, and authentication credentials from third-party providers (Google, Discord, etc.)."
        },
        {
          subtitle: "Usage Data",
          text: "We collect information about how you interact with our services, including images uploaded, prompts generated, and feature usage patterns."
        },
        {
          subtitle: "Technical Information",
          text: "We automatically collect IP addresses, browser type, device information, and usage analytics to improve our services."
        },
        {
          subtitle: "Uploaded Content",
          text: "Images you upload are processed temporarily to generate prompts. We do not permanently store your uploaded images unless you explicitly save them to your account."
        }
      ]
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide AI-powered prompt generation services, maintain your account, and process your requests."
        },
        {
          subtitle: "Service Improvement",
          text: "Usage data helps us improve our AI models, develop new features, and enhance user experience through analytics."
        },
        {
          subtitle: "Communication",
          text: "We may send you service-related notifications, updates, and promotional content (with your consent)."
        },
        {
          subtitle: "Legal Compliance",
          text: "We may use your information to comply with legal obligations, resolve disputes, and enforce our terms of service."
        }
      ]
    },
    {
      id: "data-sharing",
      title: "Data Sharing and Disclosure",
      icon: Users,
      content: [
        {
          subtitle: "Third-Party Services",
          text: "We use trusted third-party services (Firebase, cloud storage providers) that may process your data under strict confidentiality agreements."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information when required by law, to protect our rights, or to ensure user safety and security."
        },
        {
          subtitle: "Business Transfers",
          text: "In case of merger, acquisition, or sale of assets, your information may be transferred to the new entity with appropriate protections."
        },
        {
          subtitle: "No Sale of Personal Data",
          text: "We do not sell, rent, or trade your personal information to third parties for marketing purposes."
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      content: [
        {
          subtitle: "Encryption",
          text: "All data transmitted to and from our services is encrypted using industry-standard SSL/TLS protocols."
        },
        {
          subtitle: "Access Controls",
          text: "We implement strict access controls and authentication measures to protect your data from unauthorized access."
        },
        {
          subtitle: "Regular Audits",
          text: "Our security practices are regularly reviewed and updated to meet current industry standards and regulations."
        },
        {
          subtitle: "Data Minimization",
          text: "We collect and retain only the minimum amount of data necessary to provide our services effectively."
        }
      ]
    },
    {
      id: "your-rights",
      title: "Your Privacy Rights",
      icon: Shield,
      content: [
        {
          subtitle: "Access and Portability",
          text: "You can request access to your personal data and receive a copy in a portable format."
        },
        {
          subtitle: "Correction and Updates",
          text: "You can update or correct your personal information through your account settings or by contacting us."
        },
        {
          subtitle: "Deletion",
          text: "You can request deletion of your account and associated data. Some information may be retained for legal or legitimate business purposes."
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of promotional communications and certain data processing activities through your account settings."
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
            <div className="bg-blue-100 p-4 rounded-full">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Your privacy is important to us. This policy explains how we collect, use, and protect 
            your information when you use GetPrompts services.
          </p>
          <div className="text-sm text-gray-500">
            <p>Last updated: January 11, 2025</p>
            <p>Effective date: January 11, 2025</p>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Privacy at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">🔒 Data Protection</h3>
              <p className="text-blue-800">We use encryption and security best practices to protect your data.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">🚫 No Sale</h3>
              <p className="text-blue-800">We never sell your personal information to third parties.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">⏱️ Temporary Processing</h3>
              <p className="text-blue-800">Uploaded images are processed temporarily and not permanently stored.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">🎛️ Your Control</h3>
              <p className="text-blue-800">You can access, update, or delete your data at any time.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">📧 Communication</h3>
              <p className="text-blue-800">We only send emails you want to receive, with easy opt-out options.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">🌍 GDPR Compliant</h3>
              <p className="text-blue-800">We comply with GDPR and other international privacy regulations.</p>
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

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> privacy@getprompts.me</p>
              <p><strong>Address:</strong> 123 AI Innovation Drive, San Francisco, CA 94105</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Policy Updates</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by:
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Posting the updated policy on our website</li>
              <li>• Sending an email notification to registered users</li>
              <li>• Displaying a notice on our platform</li>
              <li>• Updating the &quot;Last updated&quot; date at the top of this policy</li>
            </ul>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-xl p-8 mt-12">
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