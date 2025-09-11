// 常见问题数据，按页面组织
export const FAQ_DATA = {
  // 首页FAQ
  homepage: [
    {
      question: "What is GetPrompts?",
      answer: "GetPrompts is a free AI-powered platform that helps you transform images into detailed AI art prompts and enhance existing prompts. It works with all major AI art generators including Midjourney, DALL-E, Stable Diffusion, and more."
    },
    {
      question: "How does the image-to-prompt generator work?",
      answer: "Our AI analyzes your uploaded image to identify visual elements, style, composition, lighting, colors, and artistic techniques. It then generates detailed text prompts that can recreate similar images using AI art generators."
    },
    {
      question: "Is GetPrompts free to use?",
      answer: "Yes, GetPrompts offers free access to both our image-to-prompt generator and prompt enhancer tools. No signup required for basic usage, though registered users get additional features and higher usage limits."
    },
    {
      question: "Which AI art generators are supported?",
      answer: "Our prompts work with all major AI art platforms including Midjourney, DALL-E 3, Stable Diffusion, Leonardo AI, Adobe Firefly, and many others. The prompts are optimized for cross-platform compatibility."
    },
    {
      question: "Can I use the generated prompts commercially?",
      answer: "Yes, you can use the prompts we generate for commercial purposes. However, check the specific terms of service of the AI art generator you're using, as different platforms have different commercial usage policies."
    }
  ],

  // 图片转提示词页面FAQ
  'image-to-prompt': [
    {
      question: "What image formats are supported?",
      answer: "We support all common image formats including JPG, PNG, WEBP, GIF, and SVG. Maximum file size is 10MB per image."
    },
    {
      question: "How accurate are the generated prompts?",
      answer: "Our AI has been trained on millions of image-prompt pairs and achieves high accuracy in identifying artistic styles, composition, and visual elements. The quality of prompts depends on image clarity and complexity."
    },
    {
      question: "Can I upload multiple images at once?",
      answer: "Currently, you can process one image at a time for the most accurate results. We're working on batch processing features for premium users."
    },
    {
      question: "What happens to my uploaded images?",
      answer: "We process your images securely and delete them from our servers within 24 hours. We never use your images for training or any other purposes without explicit consent."
    },
    {
      question: "Why should I use this instead of describing the image myself?",
      answer: "Our AI captures technical details, artistic styles, and subtle elements that are easy to miss. It uses proper terminology and generates prompts optimized for AI art generators, saving you time and improving results."
    }
  ],

  // 提示词增强器页面FAQ
  'prompt-enhancer': [
    {
      question: "How does the prompt enhancer improve my prompts?",
      answer: "Our AI analyzes your existing prompt and adds relevant details like artistic styles, technical parameters, lighting conditions, and composition elements that improve image quality and coherence."
    },
    {
      question: "Can I specify which AI model to optimize for?",
      answer: "Yes, you can choose to optimize your prompts specifically for Midjourney, DALL-E, Stable Diffusion, or other models. Each has different strengths and prompt syntax preferences."
    },
    {
      question: "What makes a good prompt for enhancement?",
      answer: "Even basic prompts can be enhanced. However, prompts with clear subjects and some descriptive elements work best. Avoid extremely vague or contradictory descriptions."
    },
    {
      question: "How long should my input prompt be?",
      answer: "Anywhere from a few words to several sentences works. Our enhancer can expand short prompts or refine longer ones. There's no strict length requirement."
    },
    {
      question: "Can I enhance prompts in languages other than English?",
      answer: "Currently, we primarily support English prompts for the best results, as most AI art generators work optimally with English descriptions. We're working on multilingual support."
    }
  ],

  // 指南页面通用FAQ
  guides: [
    {
      question: "Do I need experience with AI art to use these guides?",
      answer: "Not at all! Our guides are designed for beginners and include step-by-step instructions. We also have advanced sections for experienced users looking to improve their skills."
    },
    {
      question: "How often are the guides updated?",
      answer: "We regularly update our guides to reflect the latest features and best practices for AI art generators. New models and techniques are added as they become available."
    },
    {
      question: "Can I suggest topics for new guides?",
      answer: "Absolutely! We welcome suggestions from our community. Contact us through our feedback form with ideas for guides you'd like to see."
    },
    {
      question: "Are there downloadable versions of the guides?",
      answer: "Currently, our guides are web-based for the most up-to-date information. We're considering PDF downloads and offline access for registered users."
    }
  ],

  // 提示词工程指南FAQ
  'prompt-engineering': [
    {
      question: "What is prompt engineering?",
      answer: "Prompt engineering is the practice of crafting specific, detailed text instructions that guide AI models to generate desired outputs. It's both an art and a science that involves understanding how AI interprets language."
    },
    {
      question: "How long does it take to learn prompt engineering?",
      answer: "Basic prompt writing can be learned in a few hours, but mastering advanced techniques takes weeks of practice. Our guide provides a structured learning path from beginner to expert level."
    },
    {
      question: "What are the most important prompt engineering techniques?",
      answer: "Key techniques include using specific descriptive language, understanding style keywords, applying composition rules, using negative prompts effectively, and iterating based on results."
    },
    {
      question: "Should I use technical terms in my prompts?",
      answer: "Yes, when appropriate. Technical terms like 'golden ratio', 'depth of field', 'cinematic lighting' help AI models understand exactly what you want. Our guide includes comprehensive lists of effective technical terms."
    }
  ]
}

// 获取特定页面的FAQ数据
export function getFAQForPage(page: keyof typeof FAQ_DATA) {
  return FAQ_DATA[page] || []
}

// 搜索FAQ
export function searchFAQs(query: string) {
  const results: Array<{question: string; answer: string; page: string}> = []
  
  Object.entries(FAQ_DATA).forEach(([page, faqs]) => {
    faqs.forEach(faq => {
      if (
        faq.question.toLowerCase().includes(query.toLowerCase()) ||
        faq.answer.toLowerCase().includes(query.toLowerCase())
      ) {
        results.push({ ...faq, page })
      }
    })
  })
  
  return results
}