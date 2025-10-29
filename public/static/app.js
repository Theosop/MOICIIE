// MOI Aluminum - MGI-Inspired Clean Layout
(function() {
  'use strict';

  const translations = {
    en: {
      nav: { home: 'Home', showcase: 'Showcase', products: 'Products', partners: 'Partners', projects: 'Installation', about: 'Company', contact: 'Contact' },
      hero: {
        title: 'Menuiserie de l\'Océan Indien',
        subtitle: 'Premium Aluminium Solutions for Global Markets',
        ciie: 'Exhibiting at CIIE 2025 - China International Import Expo',
        tagline: 'Your Trusted Aluminium Partner from Mauritius',
        cta: 'View Product Catalog',
        scroll: 'SCROLL',
        values: {
          experience: '20+ Years Experience',
          certified: 'SMEDA Grade Medium II',
          export: 'Export Ready',
          quality: 'European Standards',
          capacity: '100M Rs Annual Capacity',
          madein: 'Made in Mauritius'
        }
      },
      showcase: {
        title: 'Product Showcase',
        subtitle: 'High-quality aluminium solutions for residential and commercial projects',
        items: [
          { title: 'Premium Sliding Doors', desc: 'Luxury black frame systems with thermal break technology', img: '/static/luxury-sliding-doors.jpg' },
          { title: 'Casement Windows', desc: 'Modern black frame windows with double glazing', img: '/static/product-casement-window.jpg' },
          { title: 'Bi-Fold Doors', desc: 'Seamless indoor-outdoor connection systems', img: '/static/product-bifold-door.jpg' }
        ]
      },
      products: {
        title: 'Product Catalog',
        subtitle: 'Complete range of aluminum windows, doors and shutters',
        items: [
          { name: 'Sliding Window', img: '/static/prod-sliding-window.jpg', cat: 'Windows' },
          { name: 'Top Hung Window', img: '/static/prod-top-hung.jpg', cat: 'Windows' },
          { name: 'Casement Window Wooden Finish', img: '/static/prod-casement-wood.jpg', cat: 'Windows' },
          { name: 'Jalousie Aluminum', img: '/static/prod-jalousie.jpg', cat: 'Windows' },
          { name: 'Tilt and Turn Window', img: '/static/prod-tilt-turn.jpg', cat: 'Windows' },
          { name: 'Aluminum Awning Window', img: '/static/prod-awning.jpg', cat: 'Windows' },
          { name: 'Mosquito Net', img: '/static/prod-mosquito-net.jpg', cat: 'Windows' },
          { name: 'Aluminum Sliding Door (Double Glazing)', img: '/static/prod-sliding-door-2.jpg', cat: 'Doors' },
          { name: 'Aluminum Door with Georgian Bars', img: '/static/prod-door-georgian.jpg', cat: 'Doors' },
          { name: 'Bi-Fold Door System', img: '/static/product-bifold-door.jpg', cat: 'Doors' },
          { name: 'Electric Aluminum Roller Shutter', img: '/static/prod-electric-shutter.jpg', cat: 'Shutters' },
          { name: 'Aluminum Roller Shutter', img: '/static/roller-shutter-residential.jpg', cat: 'Shutters' }
        ]
      },
      partners: {
        title: 'Commercial Partners',
        subtitle: 'Trusted international suppliers',
        items: [
          {
            name: 'ACEBOND INTERNATIONAL LIMITED',
            address: '12/F San Toi Building, 137-139 Connaught Road Central, Hong Kong',
            website: 'www.acebond.net'
          },
          {
            name: 'ASSA ABLOY PORTUGAL, Unipessoal, LDA',
            address: 'Rua Cidade de Córdova, 3A, Zona Industrial de Alfragide Sul, 2610-038-Alfragide, Portugal',
            nif: 'PT500243700',
            website: 'www.assaabloy.pt'
          },
          {
            name: 'GEORGINA NETO DOS SANTOS LDA',
            address: 'Mourisca Do Vouga, Apartado 3007 - 901, Agueda, Portugal',
            website: 'ingns.com'
          }
        ]
      },
      projects: {
        title: 'Installation Examples',
        subtitle: 'Professional aluminium installations in Mauritius',
        items: [
          { title: 'Luxury Sliding Door Installation', desc: 'High-end residential project with ocean views', img: '/static/luxury-sliding-doors.jpg' },
          { title: 'Professional Workshop', desc: 'Expert craftsmanship and manufacturing', img: '/static/project-workshop.jpg' }
        ]
      },
      about: {
        title: 'Company Profile',
        text1: 'Menuiserie de l\'Océan Indien (MOI) is a leading aluminium fabricator and installer in Mauritius with 20+ years of excellence. We manufacture high-quality windows, doors, and architectural systems using European standards.',
        text2: 'SMEDA Grade MEDIUM II Contractor • Made in Moris Certified • 100M Rs Annual Capacity • Export Ready',
        certifications: 'Certifications & Standards',
        stats: { years: '20+', projects: '500+', capacity: '100M', team: '10+' },
        labels: { years: 'Years Experience', projects: 'Projects Completed', capacity: 'Rs Capacity', team: 'Expert Team' }
      },
      contact: {
        title: 'Contact Us',
        phone: '+230 5437 3025',
        mobile: '+230 5940 2190',
        email: 'moi.alu2012@gmail.com',
        email2: 'info.moialu@gmail.com',
        website: 'www.moialu.com',
        address: 'Unit 29 - Block 8, DBM SME Park, Vuillemin, Quartier Militaire',
        qrTitle: 'Scan to Visit Our Website',
        qrSubtitle: 'Scan this QR code with your phone camera'
      }
    },
    fr: {
      nav: { home: 'Accueil', showcase: 'Vitrine', products: 'Produits', partners: 'Partenaires', projects: 'Installation', about: 'Entreprise', contact: 'Contact' },
      hero: {
        title: 'Menuiserie de l\'Océan Indien',
        subtitle: 'Solutions Aluminium Premium pour Marchés Mondiaux',
        ciie: 'Exposant à CIIE 2025 - Foire Internationale des Importations de Chine',
        tagline: 'Votre Partenaire Aluminium de Confiance de Maurice',
        cta: 'Voir le Catalogue',
        scroll: 'DÉFILER',
        values: {
          experience: '20+ Ans d\'Expérience',
          certified: 'SMEDA Grade Moyen II',
          export: 'Prêt à l\'Export',
          quality: 'Normes Européennes',
          capacity: 'Capacité 100M Rs/An',
          madein: 'Fabriqué à Maurice'
        }
      },
      showcase: {
        title: 'Vitrine Produits',
        subtitle: 'Solutions aluminium haute qualité pour projets résidentiels et commerciaux',
        items: [
          { title: 'Portes Coulissantes Premium', desc: 'Systèmes cadre noir luxe avec technologie rupture thermique', img: '/static/luxury-sliding-doors.jpg' },
          { title: 'Fenêtres à Battant', desc: 'Fenêtres cadre noir moderne avec double vitrage', img: '/static/product-casement-window.jpg' },
          { title: 'Portes Pliantes', desc: 'Systèmes connexion intérieur-extérieur sans couture', img: '/static/product-bifold-door.jpg' }
        ]
      },
      products: {
        title: 'Catalogue Produits',
        subtitle: 'Gamme complète de fenêtres, portes et volets en aluminium',
        items: [
          { name: 'Fenêtre Coulissante', img: '/static/prod-sliding-window.jpg', cat: 'Fenêtres' },
          { name: 'Fenêtre Battant Supérieur', img: '/static/prod-top-hung.jpg', cat: 'Fenêtres' },
          { name: 'Fenêtre à Battant Finition Bois', img: '/static/prod-casement-wood.jpg', cat: 'Fenêtres' },
          { name: 'Jalousie Aluminium', img: '/static/prod-jalousie.jpg', cat: 'Fenêtres' },
          { name: 'Fenêtre Oscillo-Battant', img: '/static/prod-tilt-turn.jpg', cat: 'Fenêtres' },
          { name: 'Fenêtre Basculante Aluminium', img: '/static/prod-awning.jpg', cat: 'Fenêtres' },
          { name: 'Moustiquaire', img: '/static/prod-mosquito-net.jpg', cat: 'Fenêtres' },
          { name: 'Porte Coulissante Aluminium (Double Vitrage)', img: '/static/prod-sliding-door-2.jpg', cat: 'Portes' },
          { name: 'Porte Aluminium avec Barreaux Géorgiens', img: '/static/prod-door-georgian.jpg', cat: 'Portes' },
          { name: 'Système Porte Pliante', img: '/static/product-bifold-door.jpg', cat: 'Portes' },
          { name: 'Volet Roulant Électrique Aluminium', img: '/static/prod-electric-shutter.jpg', cat: 'Volets' },
          { name: 'Volet Roulant Aluminium', img: '/static/roller-shutter-residential.jpg', cat: 'Volets' }
        ]
      },
      partners: {
        title: 'Partenaires Commerciaux',
        subtitle: 'Fournisseurs internationaux de confiance',
        items: [
          {
            name: 'ACEBOND INTERNATIONAL LIMITED',
            address: '12/F San Toi Building, 137-139 Connaught Road Central, Hong Kong',
            website: 'www.acebond.net'
          },
          {
            name: 'ASSA ABLOY PORTUGAL, Unipessoal, LDA',
            address: 'Rua Cidade de Córdova, 3A, Zona Industrial de Alfragide Sul, 2610-038-Alfragide, Portugal',
            nif: 'PT500243700',
            website: 'www.assaabloy.pt'
          },
          {
            name: 'GEORGINA NETO DOS SANTOS LDA',
            address: 'Mourisca Do Vouga, Apartado 3007 - 901, Agueda, Portugal',
            website: 'ingns.com'
          }
        ]
      },
      projects: {
        title: 'Exemples d\'Installation',
        subtitle: 'Installations aluminium professionnelles à Maurice',
        items: [
          { title: 'Installation Porte Coulissante Luxe', desc: 'Projet résidentiel haut de gamme avec vue océan', img: '/static/luxury-sliding-doors.jpg' },
          { title: 'Atelier Professionnel', desc: 'Savoir-faire expert et fabrication', img: '/static/project-workshop.jpg' }
        ]
      },
      about: {
        title: 'Profil de l\'Entreprise',
        text1: 'Menuiserie de l\'Océan Indien (MOI) est un fabricant et installateur leader en aluminium à Maurice avec plus de 20 ans d\'excellence. Nous fabriquons des fenêtres, portes et systèmes architecturaux de haute qualité selon normes européennes.',
        text2: 'Entrepreneur SMEDA Grade MOYEN II • Certifié Made in Moris • Capacité 100M Rs/An • Prêt à l\'Export',
        certifications: 'Certifications & Normes',
        stats: { years: '20+', projects: '500+', capacity: '100M', team: '10+' },
        labels: { years: 'Ans d\'Expérience', projects: 'Projets Réalisés', capacity: 'Rs Capacité', team: 'Équipe Expert' }
      },
      contact: {
        title: 'Contactez-Nous',
        phone: '+230 5437 3025',
        mobile: '+230 5940 2190',
        email: 'moi.alu2012@gmail.com',
        email2: 'info.moialu@gmail.com',
        website: 'www.moialu.com',
        address: 'Unité 29 - Bloc 8, DBM SME Park, Vuillemin, Quartier Militaire',
        qrTitle: 'Scannez pour Visiter Notre Site',
        qrSubtitle: 'Scannez ce code QR avec votre appareil photo'
      }
    },
    zh: {
      nav: { home: '首页', showcase: '展示', products: '产品', partners: '合作伙伴', projects: '安装', about: '公司', contact: '联系' },
      hero: {
        title: '印度洋门窗公司',
        subtitle: '面向全球市场的高端铝合金解决方案',
        ciie: '参展CIIE 2025 - 中国国际进口博览会',
        tagline: '来自毛里求斯的可信赖铝合金合作伙伴',
        cta: '查看产品目录',
        scroll: '向下滚动',
        values: {
          experience: '20+年经验',
          certified: 'SMEDA中级II级认证',
          export: '出口就绪',
          quality: '欧洲标准',
          capacity: '年产能1亿卢比',
          madein: '毛里求斯制造'
        }
      },
      showcase: {
        title: '产品展示',
        subtitle: '高品质铝合金解决方案，适用于住宅和商业项目',
        items: [
          { title: '高端推拉门', desc: '豪华黑色边框系统，采用断桥技术', img: '/static/luxury-sliding-doors.jpg' },
          { title: '平开窗', desc: '现代黑色边框窗户，双层玻璃', img: '/static/product-casement-window.jpg' },
          { title: '折叠门', desc: '无缝室内外连接系统', img: '/static/product-bifold-door.jpg' }
        ]
      },
      products: {
        title: '产品目录',
        subtitle: '铝合金门窗和百叶窗完整系列',
        items: [
          { name: '推拉窗', img: '/static/prod-sliding-window.jpg', cat: '窗户' },
          { name: '上悬窗', img: '/static/prod-top-hung.jpg', cat: '窗户' },
          { name: '木纹平开窗', img: '/static/prod-casement-wood.jpg', cat: '窗户' },
          { name: '铝合金百叶窗', img: '/static/prod-jalousie.jpg', cat: '窗户' },
          { name: '内开内倒窗', img: '/static/prod-tilt-turn.jpg', cat: '窗户' },
          { name: '铝合金摇窗', img: '/static/prod-awning.jpg', cat: '窗户' },
          { name: '纱窗', img: '/static/prod-mosquito-net.jpg', cat: '窗户' },
          { name: '铝合金推拉门（双层玻璃）', img: '/static/prod-sliding-door-2.jpg', cat: '门' },
          { name: '带格鲁吉亚栏杆的铝合金门', img: '/static/prod-door-georgian.jpg', cat: '门' },
          { name: '折叠门系统', img: '/static/product-bifold-door.jpg', cat: '门' },
          { name: '电动铝合金卷帘', img: '/static/prod-electric-shutter.jpg', cat: '百叶窗' },
          { name: '铝合金卷帘', img: '/static/roller-shutter-residential.jpg', cat: '百叶窗' }
        ]
      },
      partners: {
        title: '商业合作伙伴',
        subtitle: '值得信赖的国际供应商',
        items: [
          {
            name: 'ACEBOND INTERNATIONAL LIMITED',
            address: '香港中环干诺道中137-139号三台大厦12楼',
            website: 'www.acebond.net'
          },
          {
            name: 'ASSA ABLOY PORTUGAL, Unipessoal, LDA',
            address: 'Rua Cidade de Córdova, 3A, Zona Industrial de Alfragide Sul, 2610-038-Alfragide, 葡萄牙',
            nif: 'PT500243700',
            website: 'www.assaabloy.pt'
          },
          {
            name: 'GEORGINA NETO DOS SANTOS LDA',
            address: 'Mourisca Do Vouga, Apartado 3007 - 901, Agueda, 葡萄牙',
            website: 'ingns.com'
          }
        ]
      },
      projects: {
        title: '安装示例',
        subtitle: '毛里求斯专业铝合金安装',
        items: [
          { title: '豪华推拉门安装', desc: '高端住宅项目，海景房', img: '/static/luxury-sliding-doors.jpg' },
          { title: '专业车间', desc: '专家工艺和制造', img: '/static/project-workshop.jpg' }
        ]
      },
      about: {
        title: '公司简介',
        text1: '印度洋门窗公司（MOI）是毛里求斯领先的铝合金制造和安装企业，拥有20多年的卓越经验。我们按照欧洲标准生产高质量的窗户、门和建筑系统。',
        text2: 'SMEDA中级II级承包商 • 毛里求斯认证 • 年产能1亿卢比 • 出口就绪',
        certifications: '认证和标准',
        stats: { years: '20+', projects: '500+', capacity: '100万', team: '10+' },
        labels: { years: '年经验', projects: '完成项目', capacity: '卢比产能', team: '专家团队' }
      },
      contact: {
        title: '联系我们',
        phone: '+230 5437 3025',
        mobile: '+230 5940 2190',
        email: 'moi.alu2012@gmail.com',
        email2: 'info.moialu@gmail.com',
        website: 'www.moialu.com',
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
              <img src="/static/logo.png" alt="Menuiserie de l'Océan Indien" class="h-12 w-12">
              <span class="font-bold text-lg text-gray-900">Menuiserie de l'Océan Indien</span>
            </div>
            <div class="hidden md:flex gap-8 items-center">
              <a href="#home" class="text-gray-700 hover:text-blue-600">${t.nav.home}</a>
              <a href="#showcase" class="text-gray-700 hover:text-blue-600">${t.nav.showcase}</a>
              <a href="#products" class="text-gray-700 hover:text-blue-600">${t.nav.products}</a>
              <a href="#partners" class="text-gray-700 hover:text-blue-600">${t.nav.partners}</a>
              <a href="#projects" class="text-gray-700 hover:text-blue-600">${t.nav.projects}</a>
              <a href="#about" class="text-gray-700 hover:text-blue-600">${t.nav.about}</a>
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

      <!-- Hero Section - Dynamic Parallax Design -->
      <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Parallax Background Image -->
        <div class="absolute inset-0 z-0 parallax-bg" data-speed="0.5">
          <img src="/static/hero-mauritius-2.jpg" alt="Luxury Villa in Mauritius" class="w-full h-full object-cover scale-110">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-black/40 to-blue-900/60"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>
        
        <!-- Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
          <!-- Logo Container with Door Opening Animation -->
          <div class="mb-8 animate-fade-in">
            <div class="inline-block p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl mb-8">
              <div class="hero-logo-container" id="heroLogo">
                <img src="/static/logo.png" alt="MOI Logo" class="h-28 w-28 mx-auto filter drop-shadow-2xl">
              </div>
            </div>
          </div>
          
          <!-- Title with Elegant Typography -->
          <div class="mb-12 animate-fade-in-up">
            <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              <span class="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl animate-gradient">
                ${t.hero.title}
              </span>
            </h1>
            
            <!-- Decorative Line with Pulse -->
            <div class="flex items-center justify-center my-6">
              <div class="h-px w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div class="mx-4 w-2 h-2 rounded-full bg-white/70 animate-pulse-glow"></div>
              <div class="h-px w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>
            
            <p class="text-2xl md:text-3xl text-white/95 font-light tracking-wide leading-relaxed max-w-3xl mx-auto mb-3">
              ${t.hero.subtitle}
            </p>
            
            <!-- CIIE Badge -->
            ${t.hero.ciie ? `
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-red-600/90 backdrop-blur-sm rounded-full border border-red-500/50 mt-4">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>
                </svg>
                <span class="text-sm font-medium text-white">${t.hero.ciie}</span>
              </div>
            ` : ''}
          </div>
          
          <!-- Key Value Propositions -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
            ${Object.values(t.hero.values).map(value => `
              <div class="bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <p class="text-sm md:text-base text-white font-medium text-center">${value}</p>
              </div>
            `).join('')}
          </div>
          
          <!-- CTA Button with Enhanced Hover -->
          <div class="animate-fade-in-up animation-delay-300">
            <a href="#showcase" class="group inline-flex items-center gap-3 bg-white/95 hover:bg-white text-blue-900 px-10 py-5 rounded-full text-lg font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 border-2 border-white/50">
              <span>${t.hero.cta}</span>
              <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </section>

      <!-- Product Showcase Section - Large Hero Images -->
      <section id="showcase" class="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 scroll-animate">
            <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">${t.showcase.title}</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">${t.showcase.subtitle}</p>
          </div>
          
          <div class="space-y-12">
            ${t.showcase.items.map((item, index) => `
              <div class="scroll-animate" style="animation-delay: ${index * 0.2}s">
                <div class="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <div class="grid md:grid-cols-2 gap-0">
                    <!-- Image Side -->
                    <div class="aspect-[4/3] md:aspect-auto overflow-hidden relative ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}">
                      <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                      <div class="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                    </div>
                    
                    <!-- Content Side -->
                    <div class="p-8 md:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}">
                      <div class="inline-flex items-center gap-2 text-blue-600 font-semibold mb-4">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Premium Quality</span>
                      </div>
                      
                      <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        ${item.title}
                      </h3>
                      
                      <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                        ${item.desc}
                      </p>
                      
                      <div class="flex flex-wrap gap-3">
                        <span class="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Thermal Break</span>
                        <span class="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">Double Glazing</span>
                        <span class="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">European Standards</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Featured Projects Section -->
      <section id="projects" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 scroll-animate">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">${t.projects.title}</h2>
            <p class="text-lg text-gray-600">${t.projects.subtitle}</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${t.projects.items.map((project, index) => `
              <div class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group scroll-animate cursor-pointer transform hover:-translate-y-2" style="animation-delay: ${index * 0.15}s">
                <div class="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                  <img src="${project.img}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                  <div class="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span class="text-white font-semibold text-lg">${project.title}</span>
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">${project.title}</h3>
                  <p class="text-gray-600">${project.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Products Section - Grid with Photos -->
      <section id="products" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 scroll-animate">
            <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">${t.products.title}</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">${t.products.subtitle}</p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            ${t.products.items.map((product, index) => `
              <div class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 scroll-animate hover:-translate-y-2" style="animation-delay: ${index * 0.05}s">
                <div class="aspect-square overflow-hidden bg-gray-100 relative">
                  <img src="${product.img}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div class="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ${product.cat}
                  </div>
                </div>
                <div class="p-4">
                  <h3 class="font-bold text-gray-900 text-sm md:text-base leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    ${product.name}
                  </h3>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Partners Section -->
      <section id="partners" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 scroll-animate">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">${t.partners.title}</h2>
            <p class="text-lg text-gray-600">${t.partners.subtitle}</p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            ${t.partners.items.map((partner, idx) => {
              const logos = ['/static/logo-acebond.png', '/static/logo-assa-abloy.png', '/static/logo-gns.png'];
              return `
              <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 scroll-animate">
                <div class="h-20 mb-6 flex items-center justify-center">
                  <img src="${logos[idx]}" alt="${partner.name}" class="max-h-full max-w-full object-contain">
                </div>
                <h3 class="text-lg font-bold text-gray-900 mb-4">${partner.name}</h3>
                <div class="space-y-3 text-sm text-gray-600 mb-6">
                  <p class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>${partner.address}</span>
                  </p>
                  ${partner.nif ? `
                    <p class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                      <span>NIF: ${partner.nif}</span>
                    </p>
                  ` : ''}
                </div>
                <a href="http://${partner.website}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                  <span class="group-hover:underline">${partner.website}</span>
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
              `;
            }).join('')}
          </div>
        </div>
      </section>

      <!-- About Section - Clean -->
      <section id="about" class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">${t.about.title}</h2>
          <p class="text-lg text-gray-700 mb-4 leading-relaxed">${t.about.text1}</p>
          <p class="text-md text-gray-600 mb-8">${t.about.text2}</p>
          
          <!-- Statistics -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 mb-12">
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-blue-600 mb-2">${t.about.stats.years}</div>
              <div class="text-gray-600 font-medium">${t.about.labels.years}</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-blue-600 mb-2">${t.about.stats.projects}</div>
              <div class="text-gray-600 font-medium">${t.about.labels.projects}</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-blue-600 mb-2">${t.about.stats.capacity}</div>
              <div class="text-gray-600 font-medium">${t.about.labels.capacity}</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-blue-600 mb-2">${t.about.stats.team}</div>
              <div class="text-gray-600 font-medium">${t.about.labels.team}</div>
            </div>
          </div>
          
          <!-- Certifications -->
          <div class="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">${t.about.certifications}</h3>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-white text-gray-800 rounded-lg text-sm font-medium shadow-sm">SMEDA Grade Medium II</span>
              <span class="px-4 py-2 bg-white text-gray-800 rounded-lg text-sm font-medium shadow-sm">Made in Moris Certified</span>
              <span class="px-4 py-2 bg-white text-gray-800 rounded-lg text-sm font-medium shadow-sm">European Standards</span>
              <span class="px-4 py-2 bg-white text-gray-800 rounded-lg text-sm font-medium shadow-sm">Export Ready</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section - Updated with Full Details -->
      <section id="contact" class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">${t.contact.title}</h2>
          
          <!-- Contact Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <!-- Phone -->
            <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow scroll-animate">
              <div class="text-3xl mb-3">📞</div>
              <div class="font-bold text-gray-900 mb-2">Phone</div>
              <a href="tel:+23054373025" class="block text-blue-600 hover:text-blue-700 text-sm mb-1">+230 5437 3025</a>
            </div>
            
            <!-- Mobile -->
            <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow scroll-animate">
              <div class="text-3xl mb-3">📱</div>
              <div class="font-bold text-gray-900 mb-2">Mobile</div>
              <a href="tel:+23059402190" class="block text-blue-600 hover:text-blue-700 text-sm">+230 5940 2190</a>
            </div>
            
            <!-- Email -->
            <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow scroll-animate">
              <div class="text-3xl mb-3">✉️</div>
              <div class="font-bold text-gray-900 mb-2">Email</div>
              <a href="mailto:${t.contact.email}" class="block text-blue-600 hover:text-blue-700 text-sm mb-1">${t.contact.email}</a>
              <a href="mailto:${t.contact.email2}" class="block text-blue-600 hover:text-blue-700 text-sm">${t.contact.email2}</a>
            </div>
            
            <!-- Location -->
            <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow scroll-animate">
              <div class="text-3xl mb-3">📍</div>
              <div class="font-bold text-gray-900 mb-2">Location</div>
              <p class="text-sm text-gray-600">${t.contact.address}</p>
            </div>
          </div>
          
          <!-- QR Code Section -->
          <div class="mt-16 text-center scroll-animate">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">${t.contact.qrTitle || 'Scan to Visit Our Website'}</h3>
            <p class="text-gray-600 mb-6">${t.contact.qrSubtitle || 'Scan this QR code with your phone camera'}</p>
            <div class="inline-block p-6 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/static/moi-website-qr.png" alt="MOI Website QR Code" class="w-48 h-48 mx-auto">
              <p class="mt-4 text-sm text-gray-500 font-medium">${t.contact.website}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src="/static/logo.png" alt="Menuiserie de l'Océan Indien" class="h-16 w-16 mx-auto mb-4 opacity-90">
          <p class="text-gray-400 mb-2">Menuiserie de l'Océan Indien Ltée</p>
          <p class="text-sm text-gray-500">© 2025 Menuiserie de l'Océan Indien Ltée. All rights reserved. | Made in Moris | Grade MEDIUM II Contractor</p>
        </div>
      </footer>
    `;
  }

  function setLang(lang) {
    currentLang = lang;
    render();
    initScrollAnimations();
    initParallax();
    initHeroLogoAnimation();
  }

  function initScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe all scroll-animate elements
    setTimeout(() => {
      document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
      });
    }, 100);
  }

  function initParallax() {
    // Parallax effect on scroll
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const parallaxBg = document.querySelector('.parallax-bg');
          
          if (parallaxBg) {
            const speed = parseFloat(parallaxBg.getAttribute('data-speed') || 0.5);
            parallaxBg.style.transform = `translateY(${scrolled * speed}px)`;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  function initSmoothScroll() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const offsetTop = target.offsetTop - 64; // Account for fixed nav
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

  function initScrollProgressBar() {
    // Create scroll progress bar
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = 'position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, #2563eb, #3b82f6); width: 0%; z-index: 9999; transition: width 0.2s ease;';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }

  function initHeroLogoAnimation() {
    // Trigger door opening animation on hero logo
    const heroLogo = document.getElementById('heroLogo');
    if (heroLogo) {
      console.log('Hero logo found! Starting animation...');
      
      // Loop the animation every 6 seconds
      setInterval(() => {
        // Reset animation by removing and re-adding class
        heroLogo.classList.remove('animate-loop');
        
        // Force reflow to restart animation
        void heroLogo.offsetWidth;
        
        // Add animation class
        setTimeout(() => {
          heroLogo.classList.add('animate-loop');
        }, 50);
      }, 6000); // Repeat every 6 seconds
    } else {
      console.log('Hero logo NOT found!');
    }
  }

  window.moiApp = { setLang };
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      render();
      setTimeout(() => {
        initScrollAnimations();
        initParallax();
        initSmoothScroll();
        initScrollProgressBar();
        initHeroLogoAnimation();
      }, 100);
    });
  } else {
    render();
    setTimeout(() => {
      initScrollAnimations();
      initParallax();
      initSmoothScroll();
      initScrollProgressBar();
      initHeroLogoAnimation();
    }, 100);
  }
})();
