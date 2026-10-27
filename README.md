# 🌐 Md. Waheduzzaman | Personal Portfolio

<p align="center">
  <a href="https://waheduzzaman.vercel.app">
    <img src="https://waheduzzaman.vercel.app/my-logo.png" alt="Md. Waheduzzaman Portfolio" width="120" height="120" style="border-radius: 50%;" />
  </a>
</p>

<h3 align="center">Modern, High-Performance Developer Portfolio</h3>

<p align="center">
  Built with <strong>Next.js 16 (App Router)</strong>, <strong>React 19</strong>, <strong>Tailwind CSS v4</strong>, and <strong>HeroUI</strong>.
</p>

<p align="center">
  <a href="https://waheduzzaman.vercel.app"><strong>Explore Live Demo »</strong></a>
  <br />
  <br />
  <a href="#-key-features">Key Features</a> •
  <a href="#%EF%B8%8F-tech-stack">Tech Stack</a> •
  <a href="#-featured-projects">Featured Projects</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-environment-variables">Environment Variables</a> •
  <a href="#-contact--connect">Connect</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel Deployment" />
  <img src="https://img.shields.io/badge/Status-Available_for_Roles-success?style=for-the-badge" alt="Status" />
</p>

---

## 👨‍💻 About The Portfolio

This repository contains the source code for the personal portfolio website of **Md. Waheduzzaman**, a passionate **Frontend & MERN Stack Developer**. The application showcases production-ready web apps, engineering philosophies, interactive skills matrix, academic background, certifications, and direct contact integration.

Designed with a sleek, minimalist aesthetic featuring glassmorphism, responsive ambient lighting, micro-interactions, and accessible typography.

---

## ✨ Key Features

- **⚡ Modern Architecture**: Built on Next.js 16 App Router and React 19 with React Compiler support for maximum performance.
- **🌓 Dark & Light Modes**: System-aware theme toggle with persistent preferences using `next-themes`.
- **🎨 Glassmorphic & Clean UI**: Styled with Tailwind CSS v4, subtle ambient background glows, responsive grid patterns, and accessible UI elements.
- **💼 Dynamic Project Catalog**:
  - Highlights featured full-stack and frontend applications.
  - Dedicated `/projects` listing and `/projects/[id]` detailed views.
  - Interactive project detail modal and direct links to live demos & source code.
- **🛠️ Interactive Tech Stack & Skills Showcase**:
  - Infinite smooth marquee for desktop view and categorized mobile grid.
  - Visual skill competency indicators across Frontend, Backend, Database, and DevOps.
- **📬 Functional Contact System**:
  - Integrated with **EmailJS** for direct client-side email dispatch without backend overhead.
  - Real-time form validation, feedback toasts, and loading states.
  - One-click links for WhatsApp, Phone, and Email.
- **📜 Verified Credentials & Education**:
  - Interactive modal view for course certification from Programming Hero (Batch 13).
  - Academic background timeline detailing BSS in Economics at National University.
- **📊 Vercel Analytics**: Privacy-friendly audience analytics and Core Web Vitals monitoring.

---

## 🛠️ Tech Stack

### **Frontend & Frameworks**
| Technology | Description |
| :--- | :--- |
| **[Next.js 16](https://nextjs.org/)** | App Router, Server Components, Metadata API, font optimization |
| **[React 19](https://react.dev/)** | Core UI library with React Compiler |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Next-generation utility-first styling system |
| **[HeroUI](https://heroui.com/)** | Accessible component system & utilities |
| **[React Icons](https://react-icons.github.io/react-icons/)** | Scalable vector icon pack (FontAwesome, SimpleIcons, Feather) |
| **[next-themes](https://github.com/pacocoursey/next-themes)** | Flawless dark/light mode switching |

### **Backend & APIs (Full-Stack Competencies)**
| Technology | Description |
| :--- | :--- |
| **Node.js & Express.js** | Scalable REST APIs and microservices architecture |
| **MongoDB** | Document database schema design and aggregation |
| **JWT & BetterAuth** | Secure authentication, HTTP-only cookies, and role-based access control |
| **Stripe** | Payment gateway integrations |
| **EmailJS** | Client-side transactional email service |

---

## 🚀 Featured Projects

| Project | Description | Tech Stack | Live Demo | Code |
| :--- | :--- | :--- | :---: | :---: |
| **Quick Rent** | Comprehensive property rental & booking marketplace with role-based dashboards, Stripe payments, and reviews. | Next.js, Express, MongoDB, Stripe, JWT | [Live](https://quick-rent-ecru.vercel.app) | [Client](https://github.com/WahiduzzamanSakib/Quick-Rent) / [Server](https://github.com/WahiduzzamanSakib/Quick-Rent-Server) |
| **Pet Adoption Platform** | Multi-role platform for adopting pets, tracking requests, and listing rescues with secure authentication. | React, Next.js, Express, MongoDB, JWT | [Live](https://pet-adoption-platform-flax.vercel.app) | [Client](https://github.com/WahiduzzamanSakib/pet-adoption-platform) / [Server](https://github.com/WahiduzzamanSakib/pet-adoption-platform-server) |
| **Sun Cart (Summer Store)** | E-commerce application with BetterAuth (OAuth + Email), dynamic catalog, and user profiles. | Next.js, Tailwind CSS, MongoDB, HeroUI | [Live](https://sun-cart-plum.vercel.app) | [Client](https://github.com/WahiduzzamanSakib/sun-cart) |
| **Weather App** | Real-time weather dashboard with Geolocation API and 7-day forecast powered by Open-Meteo. | React, Vite, Tailwind CSS, Open-Meteo API | [Live](https://wahid-weather.netlify.app) | [Client](https://github.com/WahiduzzamanSakib/Weather-App) |
| **Movie Explorer** | Responsive movie discovery portal with instant search, TVMaze API integration, and modal previews. | React, Tailwind CSS, TVMaze API | [Live](https://movie-exporerr.netlify.app/) | [Client](https://github.com/WahiduzzamanSakib/Movie-Explorer) |

---

## 📁 Project Structure

```bash
my-portfolio/
├── public/                 # Static assets, icons, project previews & data
│   ├── projects.json       # Structured data source for projects
│   ├── my-logo.png         # Site branding & OpenGraph image
│   └── wahid.webp          # Developer profile portrait
├── src/
│   ├── app/
│   │   ├── globals.css     # Global theme variables, keyframe animations & Tailwind setup
│   │   ├── layout.js       # Root layout with fonts, metadata, providers & analytics
│   │   ├── page.js         # Homepage composed of modular sections
│   │   └── projects/       # Projects route
│   │       ├── page.jsx    # Complete projects listing page
│   │       └── [id]/       # Dynamic single project details page
│   └── components/
│       ├── common/
│       │   ├── Navbar.jsx  # Responsive navigation bar with scroll tracking & theme switch
│       │   └── Footer.jsx  # Site footer with social links & back-to-top trigger
│       ├── About.jsx       # Biography, metrics bento, and core values
│       ├── Achievements.jsx# Certifications showcase with lightbox modal
│       ├── Contact.jsx     # EmailJS interactive form & direct channels
│       ├── Education.jsx   # Academic background timeline
│       ├── FeaturedProject.jsx # Curated featured projects grid
│       ├── Features.jsx    # Engineering philosophies & principles
│       ├── Hero.jsx        # Landing hero with typewriter animation & CTA buttons
│       ├── ScrollProgress.jsx # Page scroll progress bar indicator
│       ├── Skills.jsx      # Skills categorization & proficiency bars
│       ├── TechStack.jsx   # Infinite marquee of technologies in production
│       ├── theme-provider.js
│       └── theme-toggle.js # Dark / light mode toggle button
├── next.config.mjs         # Next.js configuration & image remote domains
├── package.json            # Project dependencies & scripts
└── tailwind.config.js      # Tailwind CSS configuration
```

---

## 🚦 Getting Started

Follow these steps to run the portfolio locally on your machine.

### Prerequisites

- **Node.js**: v18.18.0 or newer (v20+ recommended)
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/WahiduzzamanSakib/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAIL_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_EMAIL_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## ⚙️ Environment Variables

To enable the contact form functionality with EmailJS, configure the following variables:

| Variable | Description |
| :--- | :--- |
| `NEXT_PUBLIC_EMAIL_SERVICE_ID` | EmailJS Service ID |
| `NEXT_PUBLIC_EMAIL_TEMPLATE_ID` | EmailJS Template ID |
| `NEXT_PUBLIC_EMAIL_PUBLIC_KEY` | EmailJS Public API Key |

*(If not configured, other sections of the website will continue to function normally.)*

---

## 🚀 Build & Deployment

To generate a production build:

```bash
# Build the application
npm run build

# Start the production server
npm run start
```

### Deploying to Vercel

The portfolio is optimized for deployment on the [Vercel Platform](https://vercel.com):

1. Push your repository to GitHub.
2. Import the project into Vercel.
3. Configure the environment variables in the Vercel dashboard.
4. Deploy!

---

## 📬 Contact & Connect

Feel free to connect or reach out for collaboration, freelance opportunities, or job inquiries:

- **Portfolio**: [waheduzzaman.vercel.app](https://waheduzzaman.vercel.app)
- **Email**: [wahidzamanpg@gmail.com](mailto:wahidzamanpg@gmail.com)
- **LinkedIn**: [linkedin.com/in/waheduzzaman-md](https://www.linkedin.com/in/waheduzzaman-md)
- **GitHub**: [github.com/WahiduzzamanSakib](https://github.com/WahiduzzamanSakib)
- **WhatsApp**: [+880 1752-187286](https://wa.me/8801752187286)

---

<p align="center">
  Crafted with ❤️ and precision by <strong>Md. Waheduzzaman</strong>.
</p>
