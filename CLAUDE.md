# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an image-to-prompt web application built with Next.js 15 that allows users to upload images and generate AI prompts for various image generation models. The app integrates with Coze API for prompt generation.

## Development Commands

```bash
# Start development server (with Turbopack)
npm run dev

# Build the application (with Turbopack)
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Architecture

### Feature-Based Directory Structure

The project follows a feature-based architecture organized as follows:

```
src/
├── features/                    # Feature modules
│   ├── landing/                # Landing page functionality
│   │   ├── components/         # Hero, tools, generator, etc.
│   │   └── index.ts           # Feature exports
│   ├── image-to-prompt/       # Image-to-prompt functionality
│   │   ├── components/        # Upload interface, gallery, etc.
│   │   ├── services/          # Prompt generation logic
│   │   ├── types/            # Feature-specific types
│   │   └── index.ts
│   ├── auth/                  # Authentication feature
│   │   ├── components/        # Login components
│   │   ├── context/          # AuthContext provider
│   │   ├── services/         # Firebase auth config
│   │   ├── middleware/       # Auth middleware
│   │   ├── client.ts         # Client-side exports only
│   │   ├── server.ts         # Server-side exports only
│   │   └── index.ts
│   ├── user/                  # User management
│   │   ├── components/       # User dashboard
│   │   ├── services/         # Usage tracking, subscriptions
│   │   ├── types/           # User-related types
│   │   └── index.ts
│   └── storage/              # File storage feature
│       ├── services/         # Upload validation, OSS
│       ├── types/           # Storage-related types
│       └── index.ts
├── shared/                   # Shared code across features
│   ├── components/          # Common UI components
│   │   ├── ui/             # Radix UI components
│   │   ├── header.tsx      # Global header
│   │   └── footer.tsx      # Global footer
│   ├── lib/                # Utility functions
│   ├── hooks/              # Reusable React hooks
│   └── types/              # Global type definitions
└── app/                    # Next.js App Router
    ├── (routes)/           # Route groups
    └── api/                # API routes organized by feature
```

### API Routes
- **`/api/upload`**: File upload validation with user quota checking
- **`/api/generate-prompt`**: AI prompt generation using Coze workflows
- **`/api/usage`**: User usage tracking and limits
- **`/api/subscription`**: Subscription management

### External Integrations
- **Coze API**: AI prompt generation via workflows
- **Firebase**: Authentication, Firestore database, Storage, and Analytics

### Environment Variables Required
- `COZE_API_TOKEN`: API token for Coze service
- `COZE_WORKFLOW_ID`: Workflow ID for prompt generation
- `COZE_BASE_URL`: Base URL for Coze API (defaults to https://api.coze.cn)
- `NEXT_PUBLIC_FIREBASE_API_KEY`: Firebase API key
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`: Firebase auth domain
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`: Firebase project ID
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`: Firebase storage bucket
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`: Firebase messaging sender ID
- `NEXT_PUBLIC_FIREBASE_APP_ID`: Firebase app ID
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`: Firebase measurement ID (optional, for Analytics)

### Tech Stack
- Next.js 15 with React 19
- TypeScript
- Tailwind CSS v4
- Radix UI components
- Coze API for AI integration
- Firebase for authentication and database
- 项目目录 src 中的文件名必须符合 kebab-case 命名规范