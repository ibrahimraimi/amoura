# Amoura - Relationship Connection App

Amoura is an interactive relationship app built with Next.js that helps couples deepen their connection through relationship cards, challenges, and interactive activities.

![Amoura App](https://github.com/ibrahimraimi/amoura/assets/your-github-username/amoura-preview.jpg)

## Features

- **Interactive Card Game**: Explore conversation prompts across different categories (Talk, Deep Dive, Dare, Touch, Wild)
- **Relationship Timeline**: Document and celebrate special moments together
- **Couple Games**: Play interactive games designed to strengthen your bond
- **Mindfulness Exercises**: Connect through shared meditation activities
- **Compatibility Insights**: Track relationship strengths and growth areas
- **Journal & Memories**: Document your journey together
- **Relationship Goals**: Set and achieve goals as a couple

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Shadcn UI](https://ui.shadcn.com/) for UI components
- [Lucide React](https://lucide.dev/) for icons

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load custom fonts.

## Project Structure

```
/app                     - Next.js app router pages
  /(main)                - Main application routes
    /play                - Card game interface
    /timeline            - Relationship timeline
    /insights            - Compatibility insights
    /mindfulness         - Meditation exercises
    /goals              - Relationship goals & challenges
    /games              - Couple games
    /journal            - Journal & memories
    /intimacy           - Intimacy tracker
    /bucket-list        - Couple bucket list
    /coaching           - Relationship coaching
  /(auth)               - Authentication routes
/components             - UI components
  /cards                - Card game components
  /layout               - Layout components
  /timeline             - Timeline components
  /mindfulness          - Meditation components
  /games                - Game components
  /journal              - Journal components
  /goals                - Goals & challenges components
  /ui                   - Shadcn UI components
/lib                    - Utility functions and data
  /hooks                - Custom React hooks
  /types                - TypeScript type definitions
  /constants            - App constants
  /data                 - Card prompts and relationship data
/public                 - Static assets
/styles                 - Global CSS
```

## Key Components

### Card System

Users can filter cards by:

- Category (Talk, Deep Dive, Dare, Touch, Wild, Photo)
- Level (Soft, Medium, Spicy, Explicit)
- Theme (General, Holiday, Anniversary, Seasonal)

### Interactive Features

- Timer functionality for timed activities
- Music player for setting the mood
- Custom card creation
- Photo challenges
- Achievement system

## Development

### Prerequisites

- Node.js 18+
- npm, yarn, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ibrahimraimi/amoura.git
cd amoura
```

2. Install dependencies:

```bash
npm install
# or
yarn
# or
bun install
```

3. Start the development server:

```bash
npm run dev
```

## Deployment

The app can be deployed using Vercel:

```bash
npm run build
```
