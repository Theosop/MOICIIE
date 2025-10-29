import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// API endpoint for contact form
app.post('/api/contact', async (c) => {
  try {
    const { name, email, phone, message } = await c.req.json()
    
    // In production, you would send email or store in database
    console.log('Contact form submission:', { name, email, phone, message })
    
    return c.json({ 
      success: true, 
      message: 'Thank you for contacting us! We will get back to you soon.' 
    })
  } catch (error) {
    return c.json({ 
      success: false, 
      message: 'Failed to send message. Please try again.' 
    }, 500)
  }
})

// CIIE 2025 Poster route (redirect to static file without .html)
app.get('/ciie-poster', (c) => {
  return c.redirect('/static/ciie-poster')
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
        
        <!-- SEO Meta Tags -->
        <title>MOI Aluminium - Premium Aluminum Windows & Doors in Mauritius</title>
        <meta name="description" content="Leading manufacturer of premium aluminum windows, doors, and shutters in Mauritius since 2005. Expert craftsmanship, 20+ years experience, Made in Moris certified.">
        <meta name="keywords" content="aluminum windows Mauritius, aluminum doors Mauritius, shutters, MOI, menuiserie, luxury windows, premium doors, Made in Moris">
        
        <!-- Open Graph / Social Media -->
        <meta property="og:type" content="website">
        <meta property="og:title" content="MOI Aluminium - Premium Aluminum Solutions">
        <meta property="og:description" content="Quality aluminum windows, doors & shutters in Mauritius since 2005">
        <meta property="og:image" content="/static/logo.png">
        
        <!-- Favicon -->
        <link rel="icon" type="image/png" href="/static/logo.png">
        
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
