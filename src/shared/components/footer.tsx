import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold text-white mb-4">Image Prompt</div>
            <p className="text-sm text-gray-400 mb-4">
              Transform your images into powerful AI prompts. Create better AI art with our advanced tools.
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
              <li><Link href="#" className="hover:text-white">Image to Prompt</Link></li>
              <li><Link href="#" className="hover:text-white">Prompt Enhancer</Link></li>
              <li><Link href="#" className="hover:text-white">Style Analyzer</Link></li>
              <li><Link href="#" className="hover:text-white">Batch Processor</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Documentation</Link></li>
              <li><Link href="#" className="hover:text-white">API Reference</Link></li>
              <li><Link href="#" className="hover:text-white">Examples</Link></li>
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Image Prompt. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}