import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Static files are served automatically by Vercel from the /public directory

// API endpoint for contact form (powered by Resend)
app.post('/api/contact', async (c) => {
  try {
    const { name, email, phone, message } = await c.req.json()

    // Validate required fields
    if (!name || !email || !message) {
      return c.json({ 
        success: false, 
        message: 'Please fill in all required fields (name, email, message).' 
      }, 400)
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return c.json({ 
        success: false, 
        message: 'Email service is not configured. Please contact us directly.' 
      }, 500)
    }

    // Send email via Resend API
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'MOI Website <onboarding@resend.dev>',
        to: ['moi.alu2012@gmail.com', 'info.moialu@gmail.com'],
        subject: `New Contact Form: ${name}`,
        reply_to: email,
        html: `
          <h2>New Contact Form Submission</h2>
          <table style="border-collapse:collapse;width:100%;max-width:500px;">
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px;">${message.replace(/\n/g, '<br>')}</td></tr>
          </table>
          <p style="margin-top:20px;color:#666;font-size:12px;">Sent from moialu.com contact form</p>
        `
      })
    })

    if (!res.ok) {
      const error = await res.text()
      console.error('Resend API error:', error)
      return c.json({ 
        success: false, 
        message: 'Failed to send message. Please try again or email us directly.' 
      }, 500)
    }

    return c.json({ 
      success: true, 
      message: 'Thank you for contacting us! We will get back to you soon.' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return c.json({ 
      success: false, 
      message: 'Failed to send message. Please try again.' 
    }, 500)
  }
})

// API endpoint for inquiry form (role-based: client, supplier, partner)
app.post('/api/inquiry', async (c) => {
  try {
    const body = await c.req.json()
    const { role, name, email, phone, company, message } = body

    if (!name || !email || !message || !role) {
      return c.json({ success: false, message: 'Please fill in all required fields.' }, 400)
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return c.json({ success: false, message: 'Email service is not configured. Please contact us directly.' }, 500)
    }

    // Build role-specific details HTML
    let roleDetails = ''
    const roleLabels: Record<string, string> = { client: '🏠 Client', supplier: '🏭 Supplier', partner: '🤝 Partner' }

    if (role === 'client') {
      const budgetLabels: Record<string, string> = { under500k: 'Under Rs 500,000', '500k1m': 'Rs 500K–1M', '1m3m': 'Rs 1M–3M', '3m5m': 'Rs 3M–5M', above5m: 'Above Rs 5M', undisclosed: 'Undisclosed' }
      const timelineLabels: Record<string, string> = { urgent: 'Urgent (<1 month)', short: '1–3 months', medium: '3–6 months', long: '6+ months', flexible: 'Flexible' }
      roleDetails = `
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Project Type</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.projectType || '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Location</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.location || '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Budget</td><td style="padding:8px;border-bottom:1px solid #eee;">${budgetLabels[body.budget] || body.budget || '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Timeline</td><td style="padding:8px;border-bottom:1px solid #eee;">${timelineLabels[body.timeline] || body.timeline || '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Quantities</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.quantity || '—'}</td></tr>
      `
    } else if (role === 'supplier') {
      roleDetails = `
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Products/Services</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.products || '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Country of Origin</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.country || '—'}</td></tr>
      `
    } else if (role === 'partner') {
      const interestLabels: Record<string, string> = { distribution: 'Distribution/Reseller', joint: 'Joint Venture', technical: 'Technical Collaboration', investment: 'Investment', other: 'Other' }
      roleDetails = `
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Partnership Type</td><td style="padding:8px;border-bottom:1px solid #eee;">${interestLabels[body.interest] || body.interest || '—'}</td></tr>
      `
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'MOI Website <onboarding@resend.dev>',
        to: ['moi.alu2012@gmail.com', 'info.moialu@gmail.com'],
        subject: `[${(roleLabels[role] || role).replace(/[^\w\s]/g, '')}] New Inquiry from ${name}`,
        reply_to: email,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;">
            <div style="background:linear-gradient(135deg,#1e3a8a,#0ea5e9);padding:20px;border-radius:12px 12px 0 0;">
              <h2 style="color:white;margin:0;">New ${roleLabels[role] || role} Inquiry</h2>
              <p style="color:rgba(255,255,255,0.8);margin:5px 0 0;">via moialu.com</p>
            </div>
            <div style="padding:20px;background:#f9fafb;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;">
              <table style="border-collapse:collapse;width:100%;">
                <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone || '—'}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${company || '—'}</td></tr>
                ${roleDetails}
                <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px;">${message.replace(/\n/g, '<br>')}</td></tr>
              </table>
            </div>
          </div>
        `
      })
    })

    if (!res.ok) {
      const error = await res.text()
      console.error('Resend API error:', error)
      return c.json({ success: false, message: 'Failed to send inquiry. Please try again or email us directly.' }, 500)
    }

    return c.json({ success: true, message: 'Thank you! Your inquiry has been sent. We will get back to you soon.' })
  } catch (error) {
    console.error('Inquiry form error:', error)
    return c.json({ success: false, message: 'Failed to send inquiry. Please try again.' }, 500)
  }
})

// SEO: robots.txt
app.get('/robots.txt', (c) => {
  return c.text(`User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://moialu.com/sitemap.xml
`, 200, { 'Content-Type': 'text/plain' })
})

// SEO: sitemap.xml
app.get('/sitemap.xml', (c) => {
  const now = new Date().toISOString().split('T')[0]
  return c.text(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://moialu.com/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://moialu.com/"/>
    <xhtml:link rel="alternate" hreflang="fr" href="https://moialu.com/"/>
    <xhtml:link rel="alternate" hreflang="zh" href="https://moialu.com/"/>
  </url>
  <url>
    <loc>https://moialu.com/ciie-poster</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://moialu.com/exhibition-poster</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
`, 200, { 'Content-Type': 'application/xml' })
})

// CIIE 2025 Poster route (redirect to static file without .html)
app.get('/ciie-poster', (c) => {
  return c.redirect('/static/ciie-poster')
})

// Exhibition Poster route (900mm x 500mm)
app.get('/exhibition-poster', (c) => {
  return c.redirect('/static/exhibition-poster')
})

// QR Poster route (redirect to static file without .html)
app.get('/qr-poster', (c) => {
  return c.redirect('/static/qr-poster')
})

// Main application route
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en" class="scroll-smooth">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        <!-- Primary SEO Meta Tags -->
        <title>MOI Aluminium - Windows, Doors, Kitchen & Openings | Menuiserie Aluminium Mauritius</title>
        <meta name="description" content="MOI Aluminium — Menuiserie aluminium à Maurice. Fabricant de fenêtres, portes, ouvertures, cuisines et volets en aluminium premium depuis 2005. Certifié SMEDA, normes européennes, 500+ projets. Devis gratuit.">
        <meta name="keywords" content="aluminium, windows, doors, menuiserie, kitchen, openings, aluminium windows Mauritius, aluminium doors Mauritius, menuiserie aluminium Maurice, fenêtres aluminium, portes aluminium, ouvertures aluminium, cuisine aluminium, kitchen aluminium Mauritius, sliding doors, bi-fold doors, roller shutters, curtain wall, volets roulants, baies vitrées, MOI Aluminium, Made in Moris, CIIE 2025, export Mauritius, menuiserie Océan Indien, aluminium fabrication, aluminium manufacturer Mauritius">
        <meta name="author" content="Menuiserie de l'Océan Indien Ltée">
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
        <link rel="canonical" href="https://moialu.com/">
        
        <!-- Hreflang for multilingual SEO -->
        <link rel="alternate" hreflang="en" href="https://moialu.com/">
        <link rel="alternate" hreflang="fr" href="https://moialu.com/">
        <link rel="alternate" hreflang="zh" href="https://moialu.com/">
        <link rel="alternate" hreflang="x-default" href="https://moialu.com/">
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://moialu.com/">
        <meta property="og:site_name" content="MOI Aluminium">
        <meta property="og:title" content="MOI Aluminium - Menuiserie Aluminium | Windows, Doors, Kitchen & Openings">
        <meta property="og:description" content="Fabricant de fenêtres, portes, ouvertures et cuisines en aluminium à Maurice. 20+ ans d'expérience, certifié SMEDA, normes européennes. Exposant CIIE 2025.">
        <meta property="og:image" content="https://moialu.com/static/logo.png">
        <meta property="og:image:width" content="512">
        <meta property="og:image:height" content="512">
        <meta property="og:locale" content="en_US">
        <meta property="og:locale:alternate" content="fr_FR">
        <meta property="og:locale:alternate" content="zh_CN">
        
        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="MOI Aluminium - Windows, Doors, Kitchen & Openings | Mauritius">
        <meta name="twitter:description" content="Menuiserie aluminium premium à Maurice. Fenêtres, portes, ouvertures, cuisines. Fabricant certifié depuis 2005.">
        <meta name="twitter:image" content="https://moialu.com/static/logo.png">
        
        <!-- Geo Tags (Mauritius) -->
        <meta name="geo.region" content="MU">
        <meta name="geo.placename" content="Quartier Militaire, Mauritius">
        <meta name="geo.position" content="-20.25;57.55">
        <meta name="ICBM" content="-20.25, 57.55">
        
        <!-- Structured Data - LocalBusiness -->
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://moialu.com/#business",
          "name": "Menuiserie de l'Océan Indien Ltée",
          "alternateName": "MOI Aluminium",
          "description": "Menuiserie aluminium à Maurice. Fabricant de fenêtres, portes, ouvertures, cuisines, volets et murs-rideaux en aluminium premium depuis 2005. Leading manufacturer of aluminium windows, doors, kitchen and openings in Mauritius.",
          "url": "https://moialu.com",
          "logo": "https://moialu.com/static/logo.png",
          "image": "https://moialu.com/static/logo.png",
          "telephone": "+230-5437-3025",
          "email": "info@moialu.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Unit 29 - Block 8, DBM SME Park, Vuillemin",
            "addressLocality": "Quartier Militaire",
            "addressCountry": "MU"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -20.25,
            "longitude": 57.55
          },
          "openingHours": "Mo-Fr 08:00-17:00",
          "foundingDate": "2005",
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": 10
          },
          "areaServed": ["MU", "Africa", "Indian Ocean"],
          "knowsAbout": ["Aluminium windows", "Aluminium doors", "Menuiserie aluminium", "Kitchen aluminium", "Openings", "Roller shutters", "Bi-fold doors", "Curtain walls", "Sliding doors", "Fenêtres aluminium", "Portes aluminium", "Ouvertures aluminium", "Cuisine aluminium"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Aluminium Products",
            "itemListElement": [
              {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Aluminium Windows", "description": "Sliding, casement, top-hung, tilt-and-turn, awning and jalousie windows"}},
              {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Aluminium Doors", "description": "Sliding doors, bi-fold doors, Georgian bar doors, entrance doors"}},
              {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Aluminium Kitchen", "description": "Custom aluminium kitchen cabinets and fittings"}},
              {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Aluminium Openings", "description": "Custom aluminium openings for residential and commercial projects"}},
              {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Roller Shutters", "description": "Electric and manual aluminium roller shutters"}},
              {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Curtain Wall Systems", "description": "Commercial aluminium curtain wall and facade systems"}},
              {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Mosquito Nets", "description": "Aluminium frame mosquito net systems"}}
            ]
          },
          "sameAs": []
        }
        </script>
        
        <!-- Structured Data - Organization -->
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Menuiserie de l'Océan Indien Ltée",
          "alternateName": "MOI Aluminium",
          "url": "https://moialu.com",
          "logo": "https://moialu.com/static/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+230-5437-3025",
            "contactType": "sales",
            "areaServed": ["MU", "Africa"],
            "availableLanguage": ["English", "French", "Chinese"]
          }
        }
        </script>
        
        <!-- Favicon -->
        <link rel="icon" type="image/png" href="/static/logo.png">
        <link rel="apple-touch-icon" href="/static/logo.png">
        
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        
        <!-- Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
          tailwind.config = {
            theme: {
              extend: {
                fontFamily: {
                  'display': ['"Playfair Display"', 'serif'],
                  'sans': ['Inter', 'system-ui', 'sans-serif']
                }
              }
            }
          }
        </script>
        
        <!-- Font Awesome -->
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Custom Styles -->
        <link href="/static/style.css" rel="stylesheet">
        
        <style>
          body { 
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          .gradient-bg {
            background: linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 100%);
          }
          
          .hero-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }
          
          .card-hover {
            transition: all 0.3s ease;
          }
          
          .card-hover:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }
          
          .section-fade {
            animation: fadeInUp 0.8s ease-out;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .sticky-nav {
            backdrop-filter: blur(10px);
            background-color: rgba(255, 255, 255, 0.95);
          }
          
          .product-image {
            position: relative;
            overflow: hidden;
            border-radius: 12px;
          }
          
          .product-image img {
            transition: transform 0.5s ease;
          }
          
          .product-image:hover img {
            transform: scale(1.1);
          }
        </style>
    </head>
    <body class="bg-gray-50">
        <div id="app"></div>
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

export default app
