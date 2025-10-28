// MOI Aluminum - MGI-Inspired Clean Layout
(function() {
  'use strict';

  const translations = {
    en: {
      nav: { home: 'Home', services: 'Our Services', projects: 'Projects', contact: 'Contact' },
      hero: {
        title: 'Menuiserie de l\'Océan Indien',
        subtitle: 'Premium Aluminium Joinery Since 2005 • Mauritius',
        cta: 'View Our Services',
        scroll: 'SCROLL',
        tagline: 'New Key Value Proposition',
        values: {
          security: 'Security & Strength',
          corrosion: 'Corrosion Resistant',
          maintenance: 'Low Maintenance',
          quality: 'Affordable Quality',
          smeda: 'SMEDA Registered',
          climate: 'Perfect for Ocean Climate',
          manufacturing: 'Professional Manufacturing',
          island: 'Durable Island Solutions'
        }
      },
      services: {
        title: 'Our Services',
        subtitle: 'Complete range of aluminum joinery solutions',
        items: [
          { title: 'Aluminium Windows', desc: 'Energy-efficient windows in various styles', img: '/static/aluminum-windows-commercial.jpg' },
          { title: 'Aluminium Doors', desc: 'Secure and stylish entrance solutions', img: '/static/door-red.jpg' },
          { title: 'Glass Partitions', desc: 'Modern office and home divisions', img: '/static/glass-partition-office.jpg' },
          { title: 'Roller Shutters', desc: 'Security and privacy solutions', img: '/static/door-frosted.jpg' },
          { title: 'Glass Balustrades', desc: 'Contemporary safety railings', img: '/static/glass-balustrade-balcony.jpg' },
          { title: 'Custom Solutions', desc: 'Tailored designs for any space', img: '/static/custom-shower-partition.jpg' }
        ]
      },
      about: {
        title: 'About Us',
        text1: 'Since 2005, MOI has been manufacturing and installing premium aluminium solutions across Mauritius.',
        text2: 'Grade MEDIUM II Contractor • Made in Moris Member • 20 Years Experience'
      },
      contact: {
        title: 'Contact Us',
        phone: '+230 543 730 25',
        email: 'moi.alu2012@gmail.com',
        address: 'Unit 29 - Block 8, DBM SME Park, Vuillemin, Quartier Militaire',
        qrTitle: 'Scan to Visit Our Website',
        qrSubtitle: 'Scan this QR code with your phone camera'
      }
    },
    fr: {
      nav: { home: 'Accueil', services: 'Nos Services', projects: 'Projets', contact: 'Contact' },
      hero: {
        title: 'Menuiserie de l\'Océan Indien',
        subtitle: 'Menuiserie Aluminium Premium Depuis 2005 • Maurice',
        cta: 'Voir Nos Services',
        scroll: 'DÉFILER',
        tagline: 'Nouvelle Proposition de Valeur Clé',
        values: {
          security: 'Sécurité & Robustesse',
          corrosion: 'Résistant à la Corrosion',
          maintenance: 'Faible Entretien',
          quality: 'Qualité Abordable',
          smeda: 'Agréé SMEDA',
          climate: 'Parfait pour Climat Océanique',
          manufacturing: 'Fabrication Professionnelle',
          island: 'Solutions Durables Île'
        }
      },
      services: {
        title: 'Nos Services',
        subtitle: 'Gamme complète de solutions en menuiserie aluminium',
        items: [
          { title: 'Fenêtres Aluminium', desc: 'Fenêtres économes en énergie', img: '/static/aluminum-windows-commercial.jpg' },
          { title: 'Portes Aluminium', desc: 'Solutions d\'entrée sécurisées', img: '/static/door-red.jpg' },
          { title: 'Cloisons Vitrées', desc: 'Divisions modernes pour bureaux', img: '/static/glass-partition-office.jpg' },
          { title: 'Volets Roulants', desc: 'Sécurité et intimité', img: '/static/door-frosted.jpg' },
          { title: 'Garde-corps Verre', desc: 'Rampes de sécurité contemporaines', img: '/static/glass-balustrade-balcony.jpg' },
          { title: 'Solutions Sur Mesure', desc: 'Conceptions adaptées', img: '/static/custom-shower-partition.jpg' }
        ]
      },
      about: {
        title: 'À Propos',
        text1: 'Depuis 2005, MOI fabrique et installe des solutions en aluminium à Maurice.',
        text2: 'Entrepreneur Grade MOYEN II • Membre Made in Moris • 20 Ans d\'Expérience'
      },
      contact: {
        title: 'Contactez-Nous',
        phone: '+230 543 730 25',
        email: 'moi.alu2012@gmail.com',
        address: 'Unité 29 - Bloc 8, DBM SME Park, Vuillemin, Quartier Militaire',
        qrTitle: 'Scannez pour Visiter Notre Site',
        qrSubtitle: 'Scannez ce code QR avec votre appareil photo'
      }
    },
    zh: {
      nav: { home: '首页', services: '我们的服务', projects: '项目', contact: '联系我们' },
      hero: {
        title: '印度洋门窗公司',
        subtitle: '自2005年起提供优质铝合金门窗 • 毛里求斯',
        cta: '查看我们的服务',
        scroll: '向下滚动',
        tagline: '新的关键价值主张',
        values: {
          security: '安全坚固',
          corrosion: '防腐蚀',
          maintenance: '低维护',
          quality: '优质实惠',
          smeda: 'SMEDA认证',
          climate: '适合海洋气候',
          manufacturing: '专业制造',
          island: '岛屿耐用方案'
        }
      },
      services: {
        title: '我们的服务',
        subtitle: '完整的铝合金门窗解决方案系列',
        items: [
          { title: '铝合金窗户', desc: '多种风格的节能窗', img: '/static/aluminum-windows-commercial.jpg' },
          { title: '铝合金门', desc: '安全时尚的入口解决方案', img: '/static/door-red.jpg' },
          { title: '玻璃隔断', desc: '现代办公和家居分隔', img: '/static/glass-partition-office.jpg' },
          { title: '卷帘门', desc: '安全和隐私解决方案', img: '/static/door-frosted.jpg' },
          { title: '玻璃栏杆', desc: '现代安全护栏', img: '/static/glass-balustrade-balcony.jpg' },
          { title: '定制方案', desc: '为任何空间量身定制', img: '/static/custom-shower-partition.jpg' }
        ]
      },
      about: {
        title: '关于我们',
        text1: '自2005年以来，MOI一直在毛里求斯制造和安装高品质铝合金解决方案。',
        text2: '中级II级承包商 • 毛里求斯制造成员 • 20年经验'
      },
      contact: {
        title: '联系我们',
        phone: '+230 543 730 25',
        email: 'moi.alu2012@gmail.com',
        address: 'Unit 29 - Block 8, DBM SME Park, Vuillemin, Quartier Militaire',
        qrTitle: '扫码访问我们的网站',
        qrSubtitle: '使用手机相机扫描此二维码'
      }
    }
  };

  let currentLang = 'en';

  function render() {
    const t = translations[currentLang];
    document.getElementById('app').innerHTML = `
      <!-- Navigation MGI Style -->
      <nav class="fixed w-full bg-white shadow-sm z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center gap-2">
              <img src="/static/logo.png" alt="MOI" class="h-12 w-12">
              <span class="font-bold text-lg text-gray-900">MOI</span>
            </div>
            <div class="hidden md:flex gap-8 items-center">
              <a href="#home" class="text-gray-700 hover:text-blue-600">${t.nav.home}</a>
              <a href="#services" class="text-gray-700 hover:text-blue-600">${t.nav.services}</a>
              <a href="#about" class="text-gray-700 hover:text-blue-600">About</a>
              <a href="#contact" class="text-gray-700 hover:text-blue-600">${t.nav.contact}</a>
              <div class="flex gap-2 ml-4 border-l pl-4">
                <button onclick="window.moiApp.setLang('en')" class="px-2 py-1 text-sm ${currentLang==='en'?'bg-blue-600 text-white':'text-gray-600'} rounded">EN</button>
                <button onclick="window.moiApp.setLang('fr')" class="px-2 py-1 text-sm ${currentLang==='fr'?'bg-blue-600 text-white':'text-gray-600'} rounded">FR</button>
                <button onclick="window.moiApp.setLang('zh')" class="px-2 py-1 text-sm ${currentLang==='zh'?'bg-blue-600 text-white':'text-gray-600'} rounded">中文</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- Hero Section - Aesthetic Modern Design -->
      <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Background Image with Elegant Overlay -->
        <div class="absolute inset-0 z-0">
          <img src="/static/hero-mauritius-2.jpg" alt="Luxury Villa in Mauritius" class="w-full h-full object-cover scale-105 animate-slow-zoom">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-black/40 to-blue-900/60"></div>
          <!-- Elegant Geometric Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>
        
        <!-- Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
          <!-- Elegant Logo Container -->
          <div class="mb-8 animate-fade-in">
            <div class="inline-block p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl mb-8">
              <img src="/static/logo.png" alt="MOI Logo" class="h-28 w-28 mx-auto filter drop-shadow-2xl">
            </div>
          </div>
          
          <!-- Title with Elegant Typography -->
          <div class="mb-12 animate-fade-in-up">
            <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              <span class="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                ${t.hero.title}
              </span>
            </h1>
            
            <!-- Decorative Line -->
            <div class="flex items-center justify-center my-6">
              <div class="h-px w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div class="mx-4 w-2 h-2 rounded-full bg-white/70"></div>
              <div class="h-px w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>
            
            <p class="text-2xl md:text-3xl text-white/95 font-light tracking-wide leading-relaxed max-w-3xl mx-auto">
              ${t.hero.subtitle}
            </p>
          </div>
          
          <!-- Call to Action -->
          <div class="animate-fade-in-up animation-delay-300">
            <a href="#services" class="group inline-flex items-center gap-3 bg-white/95 hover:bg-white text-blue-900 px-10 py-5 rounded-full text-lg font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 border-2 border-white/50">
              <span>${t.hero.cta}</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
          
          <!-- Scroll Indicator -->
          <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div class="flex flex-col items-center gap-2 text-white/70">
              <span class="text-sm font-light tracking-widest">${t.hero.scroll || 'SCROLL'}</span>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Custom Animations -->
        <style>
          @keyframes slow-zoom {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slow-zoom {
            animation: slow-zoom 20s ease-in-out infinite;
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out;
          }
          .animation-delay-300 {
            animation-delay: 0.3s;
            opacity: 0;
            animation-fill-mode: forwards;
          }
        </style>
      </section>

      <!-- Services Section - MGI Card Style -->
      <section id="services" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">${t.services.title}</h2>
            <p class="text-lg text-gray-600">${t.services.subtitle}</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${t.services.items.map(item => `
              <div class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div class="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">${item.title}</h3>
                  <p class="text-gray-600 mb-4">${item.desc}</p>
                  <a href="#contact" class="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                    Learn More
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- About Section - Clean -->
      <section id="about" class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">${t.about.title}</h2>
          <p class="text-lg text-gray-700 mb-4">${t.about.text1}</p>
          <p class="text-md text-gray-600">${t.about.text2}</p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div><div class="text-4xl font-bold text-blue-600">20+</div><div class="text-gray-600">Years</div></div>
            <div><div class="text-4xl font-bold text-blue-600">500+</div><div class="text-gray-600">Projects</div></div>
            <div><div class="text-4xl font-bold text-blue-600">100M</div><div class="text-gray-600">Rs Capacity</div></div>
            <div><div class="text-4xl font-bold text-blue-600">10+</div><div class="text-gray-600">Team</div></div>
          </div>
        </div>
      </section>

      <!-- Contact Section - Simple -->
      <section id="contact" class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">${t.contact.title}</h2>
          <div class="grid md:grid-cols-3 gap-8 text-center">
            <div class="p-6 border border-gray-200 rounded-lg">
              <div class="text-3xl mb-3">📞</div>
              <div class="font-bold text-gray-900 mb-2">Phone</div>
              <a href="tel:+23054373025" class="text-blue-600 hover:text-blue-700">${t.contact.phone}</a>
            </div>
            <div class="p-6 border border-gray-200 rounded-lg">
              <div class="text-3xl mb-3">✉️</div>
              <div class="font-bold text-gray-900 mb-2">Email</div>
              <a href="mailto:${t.contact.email}" class="text-blue-600 hover:text-blue-700">${t.contact.email}</a>
            </div>
            <div class="p-6 border border-gray-200 rounded-lg">
              <div class="text-3xl mb-3">📍</div>
              <div class="font-bold text-gray-900 mb-2">Location</div>
              <p class="text-sm text-gray-600">${t.contact.address}</p>
            </div>
          </div>
          
          <!-- QR Code Section -->
          <div class="mt-16 text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">${t.contact.qrTitle || 'Scan to Visit Our Website'}</h3>
            <p class="text-gray-600 mb-6">${t.contact.qrSubtitle || 'Scan this QR code with your phone camera'}</p>
            <div class="inline-block p-6 bg-white border-2 border-gray-200 rounded-xl shadow-lg">
              <img src="/static/moi-website-qr.png" alt="MOI Website QR Code" class="w-48 h-48 mx-auto">
              <p class="mt-4 text-sm text-gray-500 font-medium">www.moialu.com</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src="/static/logo.png" alt="MOI" class="h-16 w-16 mx-auto mb-4 opacity-90">
          <p class="text-gray-400 mb-2">Menuiserie de l'Océan Indien Ltée</p>
          <p class="text-sm text-gray-500">© 2025 MOI. All rights reserved. | Made in Moris | Grade MEDIUM II Contractor</p>
        </div>
      </footer>
    `;
  }

  function setLang(lang) {
    currentLang = lang;
    render();
  }

  window.moiApp = { setLang };
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
();
