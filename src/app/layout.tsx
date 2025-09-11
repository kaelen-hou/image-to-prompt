import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/shared/components/ui/sonner";
import { AuthProvider } from "@/features/auth/client";
import { InstallPrompt } from "@/shared/components/pwa";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GetPrompts - AI Image to Prompt Generator & Prompt Enhancer",
  description: "Transform your images into detailed AI prompts and enhance existing prompts for Midjourney, DALL-E, Stable Diffusion and more. Free online tools for content creators and AI enthusiasts.",
  keywords: ["AI prompts", "image to prompt", "prompt enhancer", "Midjourney", "DALL-E", "Stable Diffusion", "AI art generator", "prompt engineering", "image analysis", "prompt optimization"],
  authors: [{ name: "GetPrompts" }],
  creator: "GetPrompts",
  publisher: "GetPrompts",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://getprompts.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "GetPrompts - AI Image to Prompt Generator & Prompt Enhancer",
    description: "Transform your images into detailed AI prompts and enhance existing prompts for Midjourney, DALL-E, Stable Diffusion and more. Free online tools for content creators and AI enthusiasts.",
    url: 'https://getprompts.me',
    siteName: 'GetPrompts',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'GetPrompts - AI Image to Prompt Generator & Prompt Enhancer',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "GetPrompts - AI Image to Prompt Generator & Prompt Enhancer",
    description: "Transform your images into detailed AI prompts and enhance existing prompts for Midjourney, DALL-E, Stable Diffusion and more.",
    images: ['/og-image.jpg'],
    creator: '@getprompts',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {children}
          <InstallPrompt />
          <Toaster
            position="top-center"
            expand={false}
            richColors
            offset={20}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
