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

      <!-- Hero Section - Stunning Villa Background with Value Props -->
      <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
          <img src="/static/hero-mauritius-2.jpg" alt="Luxury Villa in Mauritius" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
        </div>
        
        <!-- Content -->
        <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          <!-- Logo and Title - No White Card -->
          <div class="mb-8">
            <div class="mb-6">
              <img src="/static/logo.png" alt="MOI Logo" class="h-24 w-24 mx-auto mb-4 drop-shadow-2xl">
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-3 uppercase tracking-wide drop-shadow-lg">
              ${t.hero.title}
            </h1>
            <p class="text-xl md:text-2xl text-white font-semibold mb-12 drop-shadow-lg">${t.hero.subtitle}</p>
            
            <a href="#services" class="inline-block bg-blue-600 text-white px-12 py-4 rounded-xl hover:bg-blue-700 transition text-xl font-bold shadow-2xl border-2 border-white">
              ${t.hero.cta}
            </a>
          </div>
        </div>
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
