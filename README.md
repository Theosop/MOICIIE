# MOI Aluminum - Menuiserie de l'Océan Indien

Professional website for Menuiserie de l'Océan Indien Ltée, a leading aluminum joinery company in Mauritius.

## 🌐 Live URLs

- **Development**: https://3000-ibx036hjulo80wh8j5egw-583b4d74.sandbox.novita.ai
- **Production**: (To be deployed to Cloudflare Pages)

## 🏢 Company Overview

Menuiserie de l'Océan Indien Ltée specializes in the manufacturing, supply, and installation of high-quality aluminum joinery in Mauritius since 2005.

- **Grade**: MEDIUM II Contractor (Construction Industry Authority)
- **Experience**: Nearly 20 years
- **Team**: 10 skilled professionals
- **Projects**: Up to Rs 100 million
- **Certification**: "Made in Moris" collective brand member since 2022

## ✨ Website Features

### Current Features
- ✅ Bilingual support (English/French)
- ✅ Responsive design for all devices
- ✅ Product showcase with comprehensive catalog
- ✅ Interactive contact form with API integration
- ✅ Company information and history
- ✅ Gallery of product types
- ✅ Smooth scrolling navigation
- ✅ Modern gradient design with Tailwind CSS
- ✅ Mobile-friendly hamburger menu

### Functional URIs

#### API Endpoints
- `POST /api/contact` - Contact form submission
  - Parameters: `{ name, email, phone, message }`
  - Response: `{ success: boolean, message: string }`

#### Static Routes
- `GET /` - Main website homepage
- `GET /static/app.js` - Frontend JavaScript application
- `GET /static/style.css` - Custom styles

### Page Sections
- **Home** - Hero section with company introduction
- **About** - Company history, certifications, and statistics
- **Products** - Windows, Doors, Shutters, and Custom Solutions
- **Gallery** - Visual showcase of product types
- **Contact** - Contact information and inquiry form

## 🛠 Tech Stack

- **Backend**: Hono (v4.10.1) - Lightweight web framework
- **Runtime**: Cloudflare Workers/Pages
- **Frontend**: Vanilla JavaScript with Tailwind CSS
- **Build Tool**: Vite (v6.4.1)
- **Deployment**: Wrangler (v4.4.0)
- **Process Manager**: PM2 (development)

## 📦 Data Architecture

### Contact Form Data Flow
1. User submits form → Frontend validation
2. POST request to `/api/contact` → Hono backend
3. Backend processes and logs submission
4. Response sent back to frontend
5. Success/error message displayed

**Note**: Currently logs to console. Production implementation should integrate with email service (SendGrid, Mailgun) or store in Cloudflare D1 database.

### Static Assets
- Served via `serveStatic` from `public/static/` directory
- Cloudflare Pages automatically handles caching and CDN distribution

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- PM2 (pre-installed in sandbox)

### Development

```bash
# Install dependencies (already done)
npm install

# Build the project
npm run build

# Start development server (sandbox)
npm run clean-port
pm2 start ecosystem.config.cjs

# Check server status
pm2 list
pm2 logs moi-webapp --nostream

# Test locally
curl http://localhost:3000
```

### Available Scripts

```bash
npm run dev              # Vite development server
npm run dev:sandbox      # Wrangler dev server (sandbox mode)
npm run build            # Build for production
npm run preview          # Preview production build
npm run deploy           # Build and deploy to Cloudflare
npm run deploy:prod      # Deploy with project name
npm run clean-port       # Kill process on port 3000
npm run test             # Test local server
```

## 📱 Products Offered

### Windows
- Strong window
- Sliding window wooden finish
- Opening windows
- Casement windows
- Aluminum doors with Georgian bars
- Awnings

### Doors & Shutters
- Tilt and turn
- Aluminum doors
- Aluminum rockets
- Mosquito nets
- Roller shutters with Georgian bars
- Electric window roller shutters
- Aluminum louvered doors
- Casement aluminum/mosquito net shutters
- Aluminum roller shutters

### Custom Solutions
- Color customization
- Custom dimensions
- Commercial projects
- Residential projects

## 📞 Contact Information

**Address:**
Unit 29 - Block 8
DBM SME Park, Vuillemin
Quartier Militaire, Mauritius

**Phone:**
- +230 543 730 25
- +230 594 021 90

**Fax:** +230 697 0411

**Email:**
- moi.alu2012@gmail.com
- info.moialu@gmail.com

**Website:** www.moialu.com

**Business Hours:**
- Monday - Friday: 8:00 AM - 5:00 PM
- Saturday: 8:00 AM - 12:00 PM

## 🎨 Design Features

- Modern gradient backgrounds (blue to cyan)
- Card hover animations
- Smooth scroll behavior
- Sticky navigation with backdrop blur
- Responsive grid layouts
- Font Awesome icons
- Google Fonts (Inter)
- Mobile-first approach

## 🔄 Next Steps

### Recommended Enhancements
1. **Email Integration** - Connect contact form to SendGrid/Mailgun API
2. **Image Gallery** - Add real product photos from company portfolio
3. **Project Showcase** - Add detailed case studies with before/after photos
4. **Quote Calculator** - Interactive tool for estimating project costs
5. **Blog Section** - Company news and aluminum industry insights
6. **Customer Testimonials** - Reviews and feedback section
7. **Search Functionality** - Product search and filtering
8. **Multi-currency** - Support for MUR, USD, EUR pricing

### Technical Improvements
1. Add Cloudflare D1 database for contact form submissions
2. Implement email notifications using third-party API
3. Add Cloudflare KV for caching translations
4. Set up analytics (Cloudflare Web Analytics)
5. Add SEO optimizations and sitemap
6. Implement WhatsApp integration for instant contact
7. Add PDF brochure downloads

## 📄 License & Registration

- **Company Name**: Menuiserie de l'Océan Indien Ltée
- **Incorporation No**: 57739
- **Incorporation Date**: 2nd August 2005
- **VAT Registration**: VAT20330081
- **Business Registration**: C06057739
- **Contractor Grade**: MEDIUM II (Construction Industry Authority)

## 🏗 Project Structure

```
webapp/
├── src/
│   └── index.tsx           # Hono backend application
├── public/
│   └── static/
│       ├── app.js          # Frontend JavaScript
│       └── style.css       # Custom CSS
├── dist/                   # Build output (generated)
├── ecosystem.config.cjs    # PM2 configuration
├── wrangler.jsonc          # Cloudflare configuration
├── vite.config.ts          # Vite build configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file

## 🚀 Deployment Status

- ✅ **Development**: Running on sandbox
- ⏳ **Production**: Ready for Cloudflare Pages deployment
- 📦 **Build**: Successful (dist/ directory generated)
- 🔧 **Configuration**: Complete

## 📊 Project Statistics

- **Lines of Code**: ~3,800 (backend) + ~31,000 (frontend)
- **Dependencies**: 4 production, 4 development
- **Build Size**: ~30.79 KB (worker bundle)
- **Supported Languages**: 2 (English, French)
- **Page Sections**: 5 main sections
- **Product Categories**: 3 categories
- **Contact Methods**: 4 (phone, email, form, address)

---

**Last Updated**: October 21, 2025
**Status**: ✅ Active Development
**Maintainer**: MOI Development Team
