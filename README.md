# MOI Aluminum - Menuiserie de l'Océan Indien

Professional website for Menuiserie de l'Océan Indien Ltée, a leading aluminum joinery company in Mauritius.

## 🌐 Live URLs

- **Development**: https://3000-ibx036hjulo80wh8j5egw-583b4d74.sandbox.novita.ai
- **Production**: https://moialuciie2025.pages.dev
- **CIIE 2025 Poster**: https://moialuciie2025.pages.dev/ciie-poster
- **Exhibition Poster**: https://moialuciie2025.pages.dev/exhibition-poster

## 🏢 Company Overview

Menuiserie de l'Océan Indien Ltée specializes in the manufacturing, supply, and installation of high-quality aluminum joinery in Mauritius since 2005.

- **Grade**: MEDIUM II Contractor (Construction Industry Authority)
- **Experience**: Nearly 20 years
- **Team**: 10 skilled professionals
- **Projects**: Up to Rs 100 million
- **Certification**: "Made in Moris" collective brand member since 2022

## ✨ Website Features

### Current Features
- ✅ Official MOI logo integration (navigation, hero, footer)
- ✅ **Trilingual support (English/French/中文 Chinese)**
- ✅ Responsive design for all devices
- ✅ **MGI.mg-inspired clean service card layout**
- ✅ **6 service cards with contextual product images**
- ✅ Interactive contact form with API integration
- ✅ Company information and statistics
- ✅ Fixed navigation header with smooth scrolling
- ✅ Simple hero section with centered branding
- ✅ Modern minimalist design with Tailwind CSS
- ✅ Clean service grid (3 columns desktop, responsive)
- ✅ Professional hover effects and transitions
- ✅ Optimized performance (78% code reduction)

### Functional URIs

#### API Endpoints
- `POST /api/contact` - Contact form submission
  - Parameters: `{ name, email, phone, message }`
  - Response: `{ success: boolean, message: string }`

#### Static Routes
- `GET /` - Main website homepage
- `GET /ciie-poster` - CIIE 2025 A4 poster with authentic Feng Shui Bagua design
- `GET /exhibition-poster` - 900mm x 500mm exhibition booth poster
- `GET /static/app.js` - Frontend JavaScript application (MGI layout - 816 lines)
- `GET /static/style.css` - Custom styles
- `GET /static/[images]` - Product photos and posters (brochure1.jpg, door-red.jpg, etc.)
- `GET /static/moi-vcard-qr.png` - vCard QR code (phone/email/website)

### Page Sections
- **Navigation** - Fixed header with logo, links, and language switcher (EN/FR/中文)
- **Hero** - Clean centered section with company logo and tagline
- **Services** - 6 service cards in responsive grid:
  - Aluminum Windows (brochure1.jpg)
  - Aluminum Doors (door-red.jpg)
  - Glass Partitions (door-red-glass.jpg)
  - Roller Shutters (door-frosted.jpg)
  - Glass Balustrades (glass-balcony-railing.jpg)
  - Custom Solutions (brochure2.jpg)
- **About** - Company description with 4 statistics (Years, Projects, Capacity, Team)
- **Contact** - 3-column grid with phone, email, and address cards
- **Footer** - Dark footer with logo and company credentials

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

### Visual Design (MGI-Inspired)
- Official MOI logo (blue brand identity) displayed prominently
- Clean typography with system fonts
- Subtle gradient backgrounds (gray-50 to blue-50)
- White service cards with border outlines
- Minimalist design philosophy
- Professional spacing and alignment

### Interactions
- Service card hover effects (scale image, add shadow)
- Smooth scroll behavior
- Fixed navigation header
- Language switcher with active state highlighting
- Clean hover transitions on links
- Simple, professional animations

### Layout
- Responsive service grid (3/2/1 columns)
- Centered content with max-width containers
- Mobile-first approach
- Consistent card sizes with 4:3 aspect ratio images
- Clean section separation
- MGI.mg-inspired minimalist structure

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
│       ├── style.css       # Custom CSS
│       └── logo.png        # Official MOI logo
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

- **Lines of Code**: ~200 (backend) + ~233 (frontend)
- **Dependencies**: 4 production, 4 development
- **Build Size**: ~32.28 KB (worker bundle)
- **Supported Languages**: 3 (English, French, Chinese/中文)
- **Page Sections**: 5 main sections (Nav, Hero, Services, About, Contact, Footer)
- **Service Cards**: 6 services with product images
- **Contact Methods**: 3 (phone, email, address)
- **Product Images**: 6 high-quality photos (471KB total)

## 🎯 Recent Updates

### October 31, 2025 - CIIE 2025 Exhibition Materials
- ✅ **Authentic Feng Shui Bagua Design** for A4 CIIE poster
- ✅ **vCard QR Code** with phone, email, website for one-click actions
- ✅ **Five Elements Balance**: Fire 30%, Metal 25%, Earth 15%, Water 20%, Wood subtle
- ✅ **Feng Shui Bagua Sectors**: Wealth (purple/gold), Fame (red), Love (pink), Career (blue/black)
- ✅ **Prosperity Symbols**: Octagon QR frame (8 sides), coin patterns, wave/cloud patterns
- ✅ **Chi Flow Design**: Curved lines, soft transitions, no sharp angles
- ✅ **Chinese Text**: 创立于2005年, 20年品质保证, 扫码保存联系方式
- ✅ **Professional color gradients**: Red (Fame), Gold (Wealth), Blue (Career)
- ✅ Enhanced B2B website content targeting Chinese investors/officials
- ✅ "Gateway to Africa" visual with animated opening doors on Africa continent
- ✅ Detailed investor highlights and value propositions
- ✅ 900mm x 500mm exhibition poster matching reference design

### October 28, 2025 - MGI Layout Implementation
- ✅ Complete website redesign based on https://www.mgi.mg/
- ✅ Simplified from 1,047 lines to 233 lines (78% reduction)
- ✅ Implemented clean service card grid (3 columns responsive)
- ✅ Added Chinese language support (3rd language)
- ✅ Mapped 6 services to real product images contextually
- ✅ Created minimalist navigation and hero sections
- ✅ Added company statistics section (4 stat boxes)
- ✅ Streamlined contact section with icon cards
- ✅ Improved performance and code maintainability
- 📄 See `MGI_LAYOUT_IMPLEMENTATION.md` for full details

### October 27, 2025 - Trilingual Documentation
- ✅ Created English company profile (COMPANY_PROFILE_EN.md)
- ✅ Created Chinese company profile (COMPANY_PROFILE_ZH.md)
- ✅ Created bilingual digital business card
- ✅ Generated QR code for website (moi-website-qr.png)
- ✅ Added Chinese language to website

---

**Last Updated**: October 31, 2025
**Status**: ✅ CIIE 2025 Ready - Feng Shui Design Complete
**Maintainer**: MOI Development Team
