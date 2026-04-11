# SS Fitness — Sanjay Singh | Certified Body Recomposition Coach

A modern, premium fitness coaching website built for **Sanjay Singh**, a certified Lifestyle & Body Recomposition Coach. Designed with a sleek dark aesthetic, smooth animations, and a fully responsive layout for all devices.

---

## Live Preview

> Coming soon — deploy via Vercel or Netlify.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | Frontend UI framework |
| **TypeScript** | Type-safe development |
| **Vite** | Lightning-fast build tool |
| **Tailwind CSS v3** | Utility-first styling |
| **Framer Motion** | Premium animations & transitions |
| **React Router DOM v6** | Client-side routing |
| **Lucide React** | Icon library |
| **shadcn/ui** | Accessible UI components |

---

## Features

- **Hero Section** — Full-screen animated hero with silhouette image, staggered text reveal, and CTA buttons
- **About Section** — Coach bio and credentials with animated entrance
- **Certifications Section** — Premium card layout displaying certified credentials
- **Coaching / Services Section** — Coaching packages with hover animations
- **Mission Section** — Vision and philosophy with bold typographic layout
- **Testimonials Section** — Client success stories
- **Contact Page** — Dedicated `/contact` route with staggered form animations and golden glow UI
- **Mobile Navigation** — Fullscreen overlay menu with smooth clip-path animation
- **Tab Activity Alert** — Favicon switches between two icons when the user leaves the tab
- **Logo Hover** — Yellow logo smoothly fades to white on hover

---

## Pages

| Route | Description |
|---|---|
| `/` | Main homepage with all sections |
| `/contact` | Dedicated contact & consultation page |

---

## Getting Started

### Prerequisites

- Node.js `>= 18`
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/blazecodeprakhar/sanjay-fitness.git

# Navigate to project
cd sanjay-fitness

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## Project Structure

```
sanjay-fitness/
├── public/
│   ├── favicon.png
│   ├── favicon2.png
│   └── logo_yellow_custom.png
├── src/
│   ├── assets/
│   │   └── hero-silhouette.jpg
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── MissionSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── Footer.tsx
│   │   └── AnimatedSection.tsx
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## Design System

- **Primary Color:** `hsl(50, 100%, 50%)` — Golden Yellow `#FFD500`
- **Background:** Pure Black `#000000`
- **Font Headings:** Bebas Neue (display)
- **Font Body:** DM Sans (legible, modern)
- **Border Radius:** `rounded-2xl` / `rounded-3xl` for cards, `rounded-full` for buttons

---

## Developer

Built and maintained by **Prakhar** — [@blazecodeprakhar](https://github.com/blazecodeprakhar)

---

## License

This project is private and built for **Sanjay Singh Fitness**. All rights reserved.
