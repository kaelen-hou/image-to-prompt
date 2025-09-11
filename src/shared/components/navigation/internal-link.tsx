import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

interface InternalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'button' | 'card' | 'inline'
  showIcon?: boolean
  external?: boolean
}

export function InternalLink({ 
  href, 
  children, 
  className = '', 
  variant = 'default',
  showIcon = false,
  external = false
}: InternalLinkProps) {
  const baseClasses = 'transition-colors'
  
  const variantClasses = {
    default: 'text-violet-600 hover:text-violet-700 underline',
    button: 'inline-flex items-center px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 font-medium',
    card: 'block p-4 bg-white border border-gray-200 rounded-lg hover:border-violet-300 hover:shadow-md',
    inline: 'text-violet-600 hover:text-violet-700'
  }

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (external) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {children}
        {showIcon && <ExternalLink className="w-4 h-4 ml-1 inline" />}
      </a>
    )
  }

  return (
    <Link href={href} className={combinedClasses}>
      {children}
    </Link>
  )
}

// Related content component with internal linking
interface RelatedContent {
  title: string
  description: string
  href: string
  category?: string
}

interface RelatedLinksProps {
  title?: string
  items: RelatedContent[]
  className?: string
}

export function RelatedLinks({ 
  title = "Related Guides", 
  items, 
  className = '' 
}: RelatedLinksProps) {
  return (
    <section className={`mt-16 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <InternalLink
            key={index}
            href={item.href}
            variant="card"
            className="group"
          >
            {item.category && (
              <div className="text-xs font-medium text-violet-600 mb-2 uppercase tracking-wide">
                {item.category}
              </div>
            )}
            <h3 className="font-semibold text-gray-900 group-hover:text-violet-600 mb-2 transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">
              {item.description}
            </p>
          </InternalLink>
        ))}
      </div>
    </section>
  )
}

// CTA section with internal links
interface CTASection {
  title: string
  description: string
  primaryLink: {
    text: string
    href: string
  }
  secondaryLink?: {
    text: string
    href: string
  }
}

export function CTASection({ title, description, primaryLink, secondaryLink }: CTASection) {
  return (
    <section className="mt-16 text-center bg-violet-50 rounded-2xl p-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <InternalLink
          href={primaryLink.href}
          variant="button"
        >
          {primaryLink.text}
        </InternalLink>
        {secondaryLink && (
          <InternalLink
            href={secondaryLink.href}
            className="inline-flex items-center px-6 py-3 border border-violet-600 text-violet-600 rounded-lg hover:bg-violet-50 font-medium"
          >
            {secondaryLink.text}
          </InternalLink>
        )}
      </div>
    </section>
  )
}

// Content hub navigation
interface ContentHubItem {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  count?: number
}

export function ContentHubNav({ 
  title = "Browse More Content",
  items 
}: { 
  title?: string
  items: ContentHubItem[] 
}) {
  return (
    <nav className="mb-12">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <InternalLink
            key={index}
            href={item.href}
            className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-violet-100 hover:text-violet-700 rounded-full text-sm font-medium transition-colors"
          >
            {item.icon && <item.icon className="w-4 h-4 mr-2" />}
            {item.title}
            {item.count && (
              <span className="ml-2 px-2 py-0.5 bg-gray-200 text-gray-600 rounded-full text-xs">
                {item.count}
              </span>
            )}
          </InternalLink>
        ))}
      </div>
    </nav>
  )
}