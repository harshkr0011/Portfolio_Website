- Personal Portfolio Website

A modern, interactive portfolio website built with Next.js, featuring AI-powered personalization, stunning 3D graphics, and a comprehensive showcase of skills, projects, and experience.

![Portfolio Preview](https://placehold.co/800x400/29ABE2/FFFFFF?text=DevSite+Spark+Portfolio)

## ✨ Features

### 🎨 **Visual Excellence**
- **Animated Hero Section** with glassmorphism effects and 3D background
- **Interactive 3D Graphics** powered by Three.js
- **Smooth Animations** using Framer Motion
- **Parallax Scrolling** effects for enhanced user experience
- **Responsive Design** optimized for all devices

### 🤖 **AI-Powered Features**
- **AI Welcome Messages** - Personalized greetings based on visitor context
- **Smart Content Tailoring** - Dynamic content adaptation
- **Intelligent User Experience** - Context-aware interactions

### 📱 **Core Functionality**
- **Project Showcase** - Interactive grid with filtering and detailed project pages
- **Animated Timeline** - Professional experience and skills visualization
- **Services Section** - Animated, expandable service cards
- **Blog Integration** - Markdown support with syntax highlighting and dynamic TOCs
- **Contact Form** - Serverless form with email integration
- **Photo Gallery** - Interactive image showcase
- **Certifications Display** - Professional credentials showcase

### 🎯 **User Experience**
- **Smooth Scrolling** with Lenis
- **Custom Cursor Effects** for enhanced interactivity
- **Loading Animations** and transitions
- **Accessibility Features** with ARIA labels and keyboard navigation

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety and better development experience

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### **3D Graphics & Effects**
- **Three.js** - 3D graphics library
- **OGL** - WebGL library for custom effects
- **Cursor Effects** - Custom cursor animations

### **AI Integration**
- **Genkit** - AI development framework
- **Google AI** - AI model integration

### **Content & Forms**
- **React Markdown** - Markdown rendering
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Resend** - Email service

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your configuration:
   ```env
   # Email Service (Resend)
   RESEND_API_KEY=your_resend_api_key
   
   # AI Services (Google AI)
   GOOGLE_AI_API_KEY=your_google_ai_key
   
   # Contact Form
   CONTACT_EMAIL=your_email@example.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:9003](http://localhost:9003)

## 📁 Project Structure

```
Portfolio_Website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── blog/              # Blog pages
│   │   ├── projects/          # Project pages
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── 3d/               # Three.js components
│   │   ├── sections/         # Page sections
│   │   ├── shared/           # Reusable components
│   │   └── ui/               # UI components
│   ├── data/                 # Static data and content
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   └── ai/                   # AI integration
├── public/                   # Static assets
├── docs/                     # Documentation
└── package.json             # Dependencies and scripts
```

## 🎨 Customization

### **Content Management**
All content is managed in `src/data/index.ts`:
- **Education** - Academic background
- **Skills** - Technical skills with icons
- **Certifications** - Professional credentials
- **Experience** - Work history
- **Projects** - Portfolio projects
- **Services** - Offered services
- **Blog Posts** - Blog content

### **Styling**
- **Colors**: Customize in `tailwind.config.ts`
- **Fonts**: Configure in `app/globals.css`
- **Components**: Modify in `src/components/ui/`

### **AI Features**
Configure AI flows in `src/ai/flows/`:
- `personalized-welcome.ts` - Welcome message generation
- `tailor-experience.ts` - Content personalization

## 📝 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run genkit:dev       # Start AI development server
npm run genkit:watch     # Watch AI files for changes

# Production
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run typecheck        # Run TypeScript checks
```

## 🌟 Key Features Explained

### **AI Welcome System**
The portfolio uses AI to generate personalized welcome messages based on:
- Referrer information
- User agent data
- Time of day
- Geographic location

### **3D Background**
Interactive 3D background using Three.js with:
- Particle systems
- Dynamic lighting
- Responsive canvas sizing
- Performance optimization

### **Project Showcase**
- Filterable project grid
- Detailed project pages
- Image galleries
- Live demo links
- GitHub repository links

### **Blog System**
- Markdown support
- Syntax highlighting
- Dynamic table of contents
- Responsive design
- SEO optimization

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### **Netlify**
1. Build command: `npm run build`
2. Publish directory: `out`
3. Configure environment variables

### **Other Platforms**
The app is compatible with any platform that supports Next.js static export.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

**Harsh Kumar** - Full Stack Developer & AI Enthusiast

- **Education**: B.Tech in Computer Science from Lovely Professional University
- **Skills**: MERN Stack, AI Integration, Cloud Computing
- **Certifications**: MongoDB, Google Digital Marketing, freeCodeCamp
- **Experience**: Vice President at Pioneers Club, LPU

## 📞 Contact

- **Email**: [Harshkr0011@gmail.com]
- **LinkedIn**: [https://www.linkedin.com/in/harsh-kumar-1b359b21a/]
- **GitHub**: [https://github.com/harshkr0011]
- **Portfolio**: [https://portfolio-website-plum-six-99.vercel.app/]

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ using Next.js, Three.js, and AI
