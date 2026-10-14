# Omoche Agada — Personal Brand Website

A modern, responsive personal brand website built to communicate my professional identity, philosophy, experience, technical capabilities, and approach to building products and reliable systems.

The website brings together my experience in **Software Engineering, Product Management, and Railway Operations**, reflecting my belief that great products combine thoughtful engineering, user-centered thinking, and operational excellence.

## Overview

This website serves as my professional home on the web—a place for recruiters, collaborators, hiring managers, and potential clients to learn about my background, how I think, what I do, and how to connect with me.

Rather than functioning solely as a traditional portfolio, the website communicates my broader professional identity, values, and approach to solving problems.

## Features

- **Responsive Design:** Adaptable layouts for desktop, tablet, and mobile devices.
- **Modern Glassmorphism:** Reusable glass-style components, subtle gradients, and ambient lighting effects.
- **Animated Navigation:** Floating glass navbar with active-section indicators and a mobile navigation menu.
- **Hero Section:** A clear introduction to my professional identity and focus.
- **Professional Philosophy:** Insights into how I approach technology, product development, and operations.
- **Career Journey:** A timeline highlighting my professional development and experience.
- **Operating Principles:** The values and principles that guide my work and decisions.
- **Selected Work:** An overview of projects and professional work.
- **Expertise:** An introduction to my technical, product, and operational capabilities.
- **Contact Section:** Direct ways to connect and explore collaboration opportunities.
- **Signature Footer:** Consistent branding, quick navigation, and professional social links.
- **Motion and Interactions:** Smooth animations and transitions powered by Framer Motion.

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework and application structure |
| React | Component-based user interfaces |
| TypeScript | Type safety and maintainable code |
| Tailwind CSS | Responsive styling and utility classes |
| Framer Motion | Animations and interactive transitions |
| Lucide React | Interface icons |
| React Icons | Social media and brand icons |

## Project Structure

```text
omoche-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── home/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Philosophy.tsx
│   │   ├── Journey.tsx
│   │   ├── OperatingPrinciples.tsx
│   │   ├── SelectedWork.tsx
│   │   ├── Expertise.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Container.tsx
├── public/
│   └── resume.pdf
├── package.json
├── tsconfig.json
└── README.md
```

*Note: The structure above illustrates the intended organization. Adjust the file list to match the actual contents of your project.*

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (a supported LTS version is recommended)
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/omocheagada/omocheagada.git
```

### 2. Navigate to the Project Directory

```bash
cd omoche-website
```

If your repository contains the application inside a nested directory, navigate to the directory containing `package.json`.

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Website

Visit [http://localhost:3000](http://localhost:3000) in your browser.

The development server supports hot reloading, so changes to the source files appear as you work.

## Available Scripts

The following are standard scripts commonly configured in a Next.js project. Confirm their availability in `package.json`.

```bash
npm run dev      # Start the development server
npm run build    # Build the production application
npm run start    # Start the production server
npm run lint     # Run lint checks, if configured
```

## Design Philosophy

The visual identity is built around six reusable design concepts:

- **`.container`** — Consistent content width and horizontal spacing.
- **`.glass`** — Reusable glassmorphism surfaces.
- **`.btn`** — Shared button styling.
- **`.display`** — Large editorial headings.
- **`.gradient`** — Gradient-accented text.
- **`.glow`** — Ambient background lighting.

These shared styles help maintain a cohesive experience across the website and reduce unnecessary duplication.

The overall design direction prioritizes clarity, confidence, intentional motion, responsive layouts, and a consistent professional identity.

## Customization

Before publishing, ensure that all personal details and links are accurate.

- Replace placeholder email addresses with the correct contact email.
- Update LinkedIn and GitHub URLs to point to the correct profiles.
- Ensure the résumé file exists at `public/resume.pdf`, or update the résumé links.
- Verify that all navigation links point to existing section IDs.
- Replace sample project descriptions with accurate information about completed work.
- Confirm that the career timeline reflects actual experience and milestones.
- Add the appropriate website metadata, favicon, and social sharing image.

## Quality and Performance

The website should be tested across modern browsers and common screen sizes before deployment.

Recommended checks include:

- Responsive layout and navigation.
- TypeScript and production build validation.
- Accessible navigation, buttons, and link labels.
- Reduced-motion support for users who prefer less animation.
- Optimized images and font loading.
- Search engine metadata and social sharing previews.
- Performance, accessibility, and SEO checks using Lighthouse.

Run a production build before deploying:

```bash
npm run build
```

Resolve any reported errors before publishing.

## Deployment

The application can be deployed to platforms that support Next.js, including Vercel.

A typical deployment workflow is:

1. Push the latest code to GitHub.
2. Import the repository into Vercel.
3. Configure the project root directory and build settings.
4. Deploy the application.
5. Verify the live website, links, mobile layout, and résumé download.
6. Configure a custom domain if required.

## Professional Focus

My work spans three interconnected areas:

**Software Engineering** — Building reliable, maintainable, and user-focused digital solutions.

**Product Management** — Connecting user needs, business objectives, and engineering execution to deliver meaningful outcomes.

**Railway Operations** — Applying operational discipline, reliability, and continuous improvement to complex systems.

Together, these experiences shape my approach to building products and systems people can trust.

## Author

**Omoche Agada**  
Software Engineer | Product Manager | Railway Operations Professional

- **Location:** Lagos, Nigeria
- **GitHub:** [github.com/omocheagada](https://github.com/omocheagada)
- **LinkedIn:** [Add your LinkedIn profile URL]

## License

This project is a personal brand website. Unless otherwise specified, the source code, written content, branding, and personal assets are intended for the author's use. Contact the author before reusing proprietary content or personal assets.git
