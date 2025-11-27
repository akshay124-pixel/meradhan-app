# 🚀 Quick Setup Instructions

## Prerequisites
- Node.js 18 or higher
- npm (comes with Node.js)

## Installation Steps

### 1. Navigate to Project Directory
```bash
cd meradhan-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Open in Browser
Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see the MeraDhan Economic Calendar page!

## Build for Production

```bash
npm run build
npm start
```

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can specify a different port:
```bash
npm run dev -- -p 3001
```

### Clear Cache
If you encounter any issues:
```bash
rm -rf .next
npm run dev
```

### Dependencies Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

## Project Features

✅ Pixel-perfect design implementation
✅ Fully responsive (mobile, tablet, desktop)
✅ Smooth animations with Framer Motion
✅ TypeScript for type safety
✅ Tailwind CSS v4 for styling
✅ ShadCN UI components
✅ Production-ready code
✅ SEO optimized
✅ Accessibility compliant

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **ShadCN UI** - UI components
- **Framer Motion** - Animations
- **Lucide React** - Icons

## File Structure

```
meradhan-app/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page (Economic Calendar)
│   └── globals.css      # Global styles
├── components/
│   ├── ui/              # ShadCN components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Footer
│   ├── Breadcrumb.tsx   # Breadcrumb navigation
│   ├── DateFilter.tsx   # Date filter tabs
│   ├── EventsTable.tsx  # Events table
│   ├── CalendarWidget.tsx # Calendar
│   └── Newsletter.tsx   # Newsletter form
└── lib/
    └── utils.ts         # Utilities
```

## Next Steps

1. ✅ App is running locally
2. Test responsiveness on different devices
3. Customize content as needed
4. Deploy to production (Vercel recommended)

## Support

For any issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ShadCN UI Documentation](https://ui.shadcn.com)

---

**Happy Coding! 🎉**
