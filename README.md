# MeraDhan - Economic Calendar

A pixel-perfect, production-ready web application built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Pixel-Perfect Design**: Exact implementation of the Figma design
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS v4, ShadCN UI
- **Smooth Animations**: Framer Motion for fluid transitions
- **Production Ready**: Clean code, proper folder structure, and best practices

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: ShadCN UI
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Steps to Run Locally

1. **Navigate to the project directory**:
   ```bash
   cd meradhan-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
meradhan-app/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Economic Calendar page
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── ui/                 # ShadCN UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── table.tsx
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with links
│   ├── Breadcrumb.tsx      # Breadcrumb navigation
│   ├── DateFilter.tsx      # Date filter tabs
│   ├── EventsTable.tsx     # Economic events table
│   ├── CalendarWidget.tsx  # Interactive calendar
│   └── Newsletter.tsx      # Newsletter subscription
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🎨 Design Implementation

### Colors
- **Primary Blue**: `#003D82`
- **Orange/Red**: `#FF5733`
- **Light Blue**: `#E8F4FF`
- **Gray**: `#6B7280`
- **Light Gray**: `#F3F4F6`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, various sizes
- **Body**: Regular weight, 14-16px

### Components

1. **Header**
   - Logo with tagline
   - Desktop navigation menu
   - Mobile hamburger menu
   - Sign Up CTA button

2. **Economic Calendar**
   - Breadcrumb navigation
   - Page title with description
   - Date filter tabs (Yesterday, Today, Tomorrow, etc.)
   - Events table with time, country, and event details
   - Interactive calendar widget
   - Importance indicators (stars)
   - Favorite functionality

3. **Newsletter Section**
   - Email subscription form
   - Privacy policy notice
   - Responsive layout

4. **Footer**
   - Company information
   - Social media links
   - Product links
   - Resource links
   - Contact information
   - Disclaimer

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ✨ Animations

Smooth animations powered by Framer Motion:
- Page transitions
- Button hover effects
- Table row animations
- Calendar interactions
- Mobile menu slide-in

## 🚀 Production Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Render

## 📝 Notes

- All components are fully typed with TypeScript
- Code follows React and Next.js best practices
- Accessibility compliant
- SEO optimized with proper metadata
- No unused code or dependencies

## 🤝 Contributing

This is a production-ready application. For any modifications:
1. Follow the existing code structure
2. Maintain TypeScript types
3. Keep components modular and reusable
4. Test responsiveness on all devices

## 📄 License

This project is built for MeraDhan.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
