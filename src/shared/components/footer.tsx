import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold text-white mb-4">GetPrompts</div>
            <p className="text-sm text-gray-400 mb-4">
              Transform your images into powerful AI prompts and enhance existing ones. Master AI art creation with our tools and guides.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                🐦
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                📱
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Discord</span>
                💬
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/image-to-prompt" className="hover:text-white">Image to Prompt</Link></li>
              <li><Link href="/prompt-enhancer" className="hover:text-white">Prompt Enhancer</Link></li>
              <li><Link href="/guides" className="hover:text-white">Learning Guides</Link></li>
              <li><Link href="/guides/ai-art-styles" className="hover:text-white">Art Styles</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides/prompt-engineering" className="hover:text-white">Prompt Engineering</Link></li>
              <li><Link href="/guides/midjourney-guide" className="hover:text-white">Midjourney Guide</Link></li>
              <li><Link href="/guides/stable-diffusion-guide" className="hover:text-white">Stable Diffusion</Link></li>
              <li><Link href="/guides/prompt-modifiers" className="hover:text-white">Prompt Modifiers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 GetPrompts. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}