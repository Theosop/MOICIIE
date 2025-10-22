// MOI Aluminum Website Application
(function() {
  'use strict';

  // Language translations with natural, professional language
  const translations = {
    en: {
      nav: {
        home: 'Home',
        about: 'About Us',
        products: 'Products',
        gallery: 'Gallery',
        contact: 'Contact'
      },
      hero: {
        title: 'Quality Aluminum Windows & Doors',
        subtitle: 'Serving Mauritius Since 2005',
        description: 'Professional manufacturing and installation of aluminum windows, doors, and shutters for homes and businesses',
        cta: 'Get a Free Quote',
        learn: 'View Our Work'
      },
      about: {
        title: 'About Us',
        subtitle: 'Your Trusted Partner in Aluminum Solutions',
        text1: 'Since 2005, we\'ve been manufacturing and installing premium aluminum windows, doors, and shutters across Mauritius. As a registered Grade MEDIUM II contractor, we bring nearly 20 years of expertise to every project.',
        text2: 'Our experienced team of 10 professionals has completed projects ranging from residential homes to commercial buildings, with total project values exceeding Rs 100 million.',
        text3: 'We\'re proud members of the "Made in Moris" brand, showcasing our commitment to local craftsmanship and quality.',
        text4: 'From design to installation, we ensure every product meets the highest standards of durability and aesthetics.',
        stat1: 'Years in Business',
        stat2: 'Projects Completed',
        stat3: 'Happy Clients',
        stat4: 'Expert Team'
      },
      products: {
        title: 'Our Products',
        subtitle: 'Complete Range of Aluminum Solutions',
        windows: {
          title: 'Windows',
          desc: 'Energy-efficient aluminum windows in various styles',
          items: ['Sliding Windows', 'Casement Windows', 'Awning Windows', 'Fixed Windows', 'Bay Windows', 'Georgian Bar Windows']
        },
        doors: {
          title: 'Doors & Shutters',
          desc: 'Secure and stylish entrance solutions',
          items: ['Aluminum Doors', 'Sliding Doors', 'French Doors', 'Roller Shutters', 'Louvered Doors', 'Electric Shutters']
        },
        custom: {
          title: 'Custom Solutions',
          desc: 'Made-to-measure designs for any space',
          items: ['Color Options Available', 'Custom Sizes', 'Georgian Bars', 'Mosquito Nets', 'Wood Finish', 'Security Features']
        }
      },
      gallery: {
        title: 'Recent Projects',
        subtitle: 'See Our Quality Work'
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Ready to start your project? Contact us today',
        form: {
          name: 'Your Name',
          email: 'Email',
          phone: 'Phone',
          message: 'Tell us about your project',
          submit: 'Send Message',
          sending: 'Sending...',
          success: 'Thanks! We\'ll get back to you soon.',
          error: 'Something went wrong. Please call us instead.'
        },
        info: {
          address: 'Visit Us',
          addressLine1: 'Unit 29 - Block 8',
          addressLine2: 'DBM SME Park, Vuillemin',
          addressLine3: 'Quartier Militaire, Mauritius',
          phone: 'Call Us',
          email: 'Email Us',
          hours: 'Opening Hours',
          hoursText: 'Mon - Fri: 8:00 AM - 5:00 PM',
          saturday: 'Sat: 8:00 AM - 12:00 PM'
        }
      },
      footer: {
        company: 'Menuiserie de l\'Océan Indien Ltée',
        tagline: 'Quality Aluminum Products Since 2005',
        rights: 'All rights reserved',
        madeIn: 'Proudly Made in Moris',
        registered: 'Registered Contractor - Grade MEDIUM II'
      }
    },
    fr: {
      nav: {
        home: 'Accueil',
        about: 'À Propos',
        products: 'Produits',
        gallery: 'Galerie',
        contact: 'Contact'
      },
      hero: {
        title: 'Fenêtres et Portes en Aluminium',
        subtitle: 'À Maurice Depuis 2005',
        description: 'Fabrication et installation professionnelle de fenêtres, portes et volets en aluminium',
        cta: 'Demandez un Devis',
        learn: 'Voir Nos Travaux'
      },
      about: {
        title: 'À Propos',
        subtitle: 'Votre Partenaire de Confiance',
        text1: 'Depuis 2005, nous fabriquons et installons des fenêtres, portes et volets en aluminium de qualité supérieure à travers Maurice. En tant qu\'entrepreneur enregistré Grade MOYEN II, nous apportons près de 20 ans d\'expertise.',
        text2: 'Notre équipe expérimentée de 10 professionnels a réalisé des projets résidentiels et commerciaux d\'une valeur totale dépassant Rs 100 millions.',
        text3: 'Nous sommes fiers membres de la marque "Made in Moris", démontrant notre engagement envers l\'artisanat local et la qualité.',
        text4: 'De la conception à l\'installation, nous assurons que chaque produit répond aux plus hauts standards.',
        stat1: 'Années d\'Expérience',
        stat2: 'Projets Réalisés',
        stat3: 'Clients Satisfaits',
        stat4: 'Équipe Experte'
      },
      products: {
        title: 'Nos Produits',
        subtitle: 'Gamme Complète de Solutions',
        windows: {
          title: 'Fenêtres',
          desc: 'Fenêtres en aluminium économes en énergie',
          items: ['Fenêtres Coulissantes', 'Fenêtres à Battant', 'Fenêtres Auvent', 'Fenêtres Fixes', 'Bow Windows', 'Barreaux Géorgiens']
        },
        doors: {
          title: 'Portes & Volets',
          desc: 'Solutions d\'entrée sécurisées et élégantes',
          items: ['Portes Aluminium', 'Portes Coulissantes', 'Portes Françaises', 'Volets Roulants', 'Portes Persiennes', 'Volets Électriques']
        },
        custom: {
          title: 'Sur Mesure',
          desc: 'Conceptions adaptées à tout espace',
          items: ['Choix de Couleurs', 'Dimensions Sur Mesure', 'Barreaux Géorgiens', 'Moustiquaires', 'Finition Bois', 'Sécurité Renforcée']
        }
      },
      gallery: {
        title: 'Projets Récents',
        subtitle: 'Découvrez Notre Travail'
      },
      contact: {
        title: 'Contactez-Nous',
        subtitle: 'Prêt à démarrer votre projet?',
        form: {
          name: 'Votre Nom',
          email: 'Email',
          phone: 'Téléphone',
          message: 'Parlez-nous de votre projet',
          submit: 'Envoyer',
          sending: 'Envoi...',
          success: 'Merci! Nous vous recontacterons bientôt.',
          error: 'Erreur. Veuillez nous appeler.'
        },
        info: {
          address: 'Nous Rendre Visite',
          addressLine1: 'Unité 29 - Bloc 8',
          addressLine2: 'DBM SME Park, Vuillemin',
          addressLine3: 'Quartier Militaire, Maurice',
          phone: 'Appelez-Nous',
          email: 'Écrivez-Nous',
          hours: 'Heures d\'Ouverture',
          hoursText: 'Lun - Ven: 8h00 - 17h00',
          saturday: 'Sam: 8h00 - 12h00'
        }
      },
      footer: {
        company: 'Menuiserie de l\'Océan Indien Ltée',
        tagline: 'Produits en Aluminium de Qualité Depuis 2005',
        rights: 'Tous droits réservés',
        madeIn: 'Fièrement Made in Moris',
        registered: 'Entrepreneur Enregistré - Grade MOYEN II'
      }
    }
  };

  // State management
  let currentLang = 'en';
  let mobileMenuOpen = false;

  // Initialize application
  // Setup gallery filters
  function setupGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-tab');
    const galleryItems = document.querySelectorAll('[data-category]');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter gallery items with animation
        galleryItems.forEach(item => {
          const itemCategories = item.getAttribute('data-category').split(' ');
          
          if (category === 'all' || itemCategories.includes(category)) {
            item.style.display = '';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 10);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  function init() {
    renderApp();
    setupEventListeners();
    setupSmoothScroll();
    setupStickyNav();
    setupGalleryFilters();
  }

  // Render main application
  function renderApp() {
    const t = translations[currentLang];
    const app = document.getElementById('app');
    
    app.innerHTML = `
      <!-- Navigation -->
      <nav id="navbar" class="fixed w-full top-0 z-50 bg-white shadow-md transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <div class="flex items-center gap-3">
              <img src="/static/logo.png" alt="MOI Logo" class="h-14 w-14 object-contain">
              <div class="text-xl md:text-2xl font-bold text-blue-900">
                <div class="leading-tight">MENUISERIE</div>
                <div class="text-sm md:text-base font-normal text-gray-600">DE L'OCEAN INDIEN</div>
              </div>
            </div>
            
            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8">
              <a href="#home" class="nav-link text-gray-700 hover:text-blue-900 font-medium transition">${t.nav.home}</a>
              <a href="#about" class="nav-link text-gray-700 hover:text-blue-900 font-medium transition">${t.nav.about}</a>
              <a href="#products" class="nav-link text-gray-700 hover:text-blue-900 font-medium transition">${t.nav.products}</a>
              <a href="#gallery" class="nav-link text-gray-700 hover:text-blue-900 font-medium transition">${t.nav.gallery}</a>
              <a href="#contact" class="nav-link text-gray-700 hover:text-blue-900 font-medium transition">${t.nav.contact}</a>
              
              <!-- Language Switcher -->
              <div class="flex items-center gap-2 border-l pl-6">
                <i class="fas fa-globe text-gray-600"></i>
                <button onclick="window.moiApp.setLanguage('en')" class="lang-btn px-3 py-1 rounded ${currentLang === 'en' ? 'bg-blue-900 text-white' : 'text-gray-600 hover:bg-gray-100'}">
                  EN
                </button>
                <button onclick="window.moiApp.setLanguage('fr')" class="lang-btn px-3 py-1 rounded ${currentLang === 'fr' ? 'bg-blue-900 text-white' : 'text-gray-600 hover:bg-gray-100'}">
                  FR
                </button>
              </div>
            </div>

            <!-- Mobile menu button -->
            <button id="mobile-menu-btn" class="md:hidden p-2">
              <i class="fas fa-bars text-2xl text-gray-700"></i>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
          <div class="px-4 py-3 space-y-3">
            <a href="#home" class="block py-2 text-gray-700 mobile-nav-link">${t.nav.home}</a>
            <a href="#about" class="block py-2 text-gray-700 mobile-nav-link">${t.nav.about}</a>
            <a href="#products" class="block py-2 text-gray-700 mobile-nav-link">${t.nav.products}</a>
            <a href="#gallery" class="block py-2 text-gray-700 mobile-nav-link">${t.nav.gallery}</a>
            <a href="#contact" class="block py-2 text-gray-700 mobile-nav-link">${t.nav.contact}</a>
            <div class="flex gap-2 pt-2 border-t">
              <button onclick="window.moiApp.setLanguage('en')" class="flex-1 px-3 py-2 rounded ${currentLang === 'en' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-600'}">
                English
              </button>
              <button onclick="window.moiApp.setLanguage('fr')" class="flex-1 px-3 py-2 rounded ${currentLang === 'fr' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-600'}">
                Français
              </button>
            </div>
          </div>
        </div>
      </nav>

      <!-- Hero Section - Luxury -->
      <section id="home" class="relative pt-20 min-h-screen flex items-center gradient-bg luxury-pattern overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-900/70"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div class="text-center text-white space-y-8">
            <!-- Logo with premium animation -->
            <div class="flex justify-center mb-8 animate-fade-in">
              <div class="hero-logo bg-white/15 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/20">
                <img src="/static/logo.png" alt="MOI Logo" class="h-28 w-28 object-contain">
              </div>
            </div>
            
            <!-- Premium Badge -->
            <div class="flex justify-center animate-fade-in delay-100">
              <span class="premium-badge">✦ Est. 2005 ✦</span>
            </div>
            
            <!-- Main Heading with luxury font -->
            <h1 class="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in delay-200 text-shadow-lg leading-tight">
              ${t.hero.title}
            </h1>
            
            <!-- Subheading -->
            <p class="text-xl sm:text-2xl md:text-3xl font-light mb-4 animate-fade-in delay-300 text-shadow max-w-3xl mx-auto">
              ${t.hero.subtitle}
            </p>
            
            <!-- Description -->
            <p class="text-base sm:text-lg md:text-xl mb-12 text-blue-50 animate-fade-in delay-400 max-w-2xl mx-auto px-4">
              ${t.hero.description}
            </p>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in delay-400 px-4">
              <a href="#contact" class="group btn-primary text-lg">
                <i class="fas fa-phone-alt group-hover:rotate-12 transition-transform"></i>
                ${t.hero.cta}
              </a>
              <a href="#gallery" class="group btn-secondary text-lg">
                <i class="fas fa-images group-hover:scale-110 transition-transform"></i>
                ${t.hero.learn}
              </a>
            </div>
          </div>
        </div>
        
        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" class="text-white/70 hover:text-white transition">
            <i class="fas fa-chevron-down text-2xl"></i>
          </a>
        </div>
      </section>

      <!-- About Section - Luxury -->
      <section id="about" class="section-padding bg-gradient-to-b from-white to-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Section Header -->
          <div class="text-center mb-20">
            <div class="inline-block mb-4">
              <span class="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Since 2005</span>
            </div>
            <h2 class="text-4xl md:text-6xl font-display font-bold text-blue-900 mb-6">${t.about.title}</h2>
            <div class="premium-divider max-w-md mx-auto"></div>
            <p class="text-xl md:text-2xl text-gray-600 mt-6 max-w-3xl mx-auto">${t.about.subtitle}</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-16 items-center mb-20">
            <!-- Text Content -->
            <div class="space-y-luxury">
              <div class="space-y-4">
                <div class="flex items-start gap-4">
                  <div class="icon-circle bg-blue-900 text-white flex-shrink-0">
                    <i class="fas fa-award"></i>
                  </div>
                  <p class="text-lg text-gray-700 leading-relaxed">${t.about.text1}</p>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="icon-circle bg-cyan-600 text-white flex-shrink-0">
                    <i class="fas fa-users"></i>
                  </div>
                  <p class="text-lg text-gray-700 leading-relaxed">${t.about.text2}</p>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="icon-circle bg-blue-900 text-white flex-shrink-0">
                    <i class="fas fa-star"></i>
                  </div>
                  <p class="text-lg text-gray-700 leading-relaxed">${t.about.text3}</p>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="icon-circle bg-cyan-600 text-white flex-shrink-0">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <p class="text-lg text-gray-700 leading-relaxed">${t.about.text4}</p>
                </div>
              </div>
            </div>
            
            <!-- Year Card -->
            <div class="relative">
              <div class="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 rounded-3xl p-16 text-white shadow-2xl relative overflow-hidden">
                <div class="absolute inset-0 opacity-10">
                  <div class="luxury-pattern w-full h-full"></div>
                </div>
                <div class="relative text-center">
                  <div class="text-8xl md:text-9xl font-display font-bold mb-6 animate-fade-in">2005</div>
                  <div class="text-2xl font-light mb-4">Est. Mauritius</div>
                  <div class="mt-8 pt-8 border-t border-white/20">
                    <div class="grid grid-cols-2 gap-8 text-center">
                      <div>
                        <div class="text-4xl font-bold mb-2">20+</div>
                        <div class="text-sm text-blue-200">Years</div>
                      </div>
                      <div>
                        <div class="text-4xl font-bold mb-2">1000+</div>
                        <div class="text-sm text-blue-200">Projects</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Stats - Luxury Cards -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div class="luxury-card p-8 text-center group">
              <div class="icon-circle bg-gradient-to-br from-blue-900 to-blue-700 text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i class="fas fa-calendar-alt"></i>
              </div>
              <div class="stat-number text-5xl md:text-6xl font-display font-bold text-blue-900 mb-2">20+</div>
              <div class="text-gray-600 font-semibold">${t.about.stat1}</div>
            </div>
            <div class="luxury-card p-8 text-center group">
              <div class="icon-circle bg-gradient-to-br from-cyan-600 to-cyan-500 text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i class="fas fa-building"></i>
              </div>
              <div class="stat-number text-5xl md:text-6xl font-display font-bold text-cyan-600 mb-2">1000+</div>
              <div class="text-gray-600 font-semibold">${t.about.stat2}</div>
            </div>
            <div class="luxury-card p-8 text-center group">
              <div class="icon-circle bg-gradient-to-br from-blue-900 to-blue-700 text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i class="fas fa-smile"></i>
              </div>
              <div class="stat-number text-5xl md:text-6xl font-display font-bold text-blue-900 mb-2">500+</div>
              <div class="text-gray-600 font-semibold">${t.about.stat3}</div>
            </div>
            <div class="luxury-card p-8 text-center group">
              <div class="icon-circle bg-gradient-to-br from-cyan-600 to-cyan-500 text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i class="fas fa-user-friends"></i>
              </div>
              <div class="stat-number text-5xl md:text-6xl font-display font-bold text-cyan-600 mb-2">10</div>
              <div class="text-gray-600 font-semibold">${t.about.stat4}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Products Section -->
      <section id="products" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4">${t.products.title}</h2>
            <p class="text-xl text-gray-600">${t.products.subtitle}</p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Windows -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div class="bg-gradient-to-br from-blue-900 to-blue-700 p-8 text-white">
                <i class="fas fa-window-maximize text-5xl mb-4"></i>
                <h3 class="text-2xl font-bold mb-2">${t.products.windows.title}</h3>
                <p class="text-blue-100">${t.products.windows.desc}</p>
              </div>
              <div class="p-6">
                <ul class="space-y-3">
                  ${t.products.windows.items.map(item => `
                    <li class="flex items-start gap-2 text-gray-700">
                      <i class="fas fa-check text-cyan-600 mt-1"></i>
                      <span>${item}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>

            <!-- Doors & Shutters -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div class="bg-gradient-to-br from-cyan-600 to-cyan-500 p-8 text-white">
                <i class="fas fa-door-open text-5xl mb-4"></i>
                <h3 class="text-2xl font-bold mb-2">${t.products.doors.title}</h3>
                <p class="text-blue-100">${t.products.doors.desc}</p>
              </div>
              <div class="p-6">
                <ul class="space-y-3">
                  ${t.products.doors.items.map(item => `
                    <li class="flex items-start gap-2 text-gray-700">
                      <i class="fas fa-check text-blue-900 mt-1"></i>
                      <span>${item}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>

            <!-- Custom Solutions -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div class="bg-gradient-to-br from-blue-800 to-cyan-700 p-8 text-white">
                <i class="fas fa-cogs text-5xl mb-4"></i>
                <h3 class="text-2xl font-bold mb-2">${t.products.custom.title}</h3>
                <p class="text-blue-100">${t.products.custom.desc}</p>
              </div>
              <div class="p-6">
                <ul class="space-y-3">
                  ${t.products.custom.items.map(item => `
                    <li class="flex items-start gap-2 text-gray-700">
                      <i class="fas fa-check text-cyan-600 mt-1"></i>
                      <span>${item}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Gallery Section - Inspired by mgi.mg modular layout -->
      <section id="gallery" class="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Section Header -->
          <div class="text-center mb-20">
            <div class="inline-block mb-4">
              <span class="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Nos Réalisations</span>
            </div>
            <h2 class="text-4xl md:text-6xl font-display font-bold text-blue-900 mb-6">${t.gallery.title}</h2>
            <div class="premium-divider max-w-md mx-auto"></div>
            <p class="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">${t.gallery.subtitle}</p>
          </div>

          <!-- Category Filter Tabs (mgi.mg inspired) -->
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <button class="filter-tab active" data-category="all">
              <i class="fas fa-th mr-2"></i>
              ${currentLang === 'en' ? 'All Projects' : 'Tous les Projets'}
            </button>
            <button class="filter-tab" data-category="doors">
              <i class="fas fa-door-open mr-2"></i>
              ${currentLang === 'en' ? 'Doors' : 'Portes'}
            </button>
            <button class="filter-tab" data-category="shutters">
              <i class="fas fa-bars mr-2"></i>
              ${currentLang === 'en' ? 'Shutters' : 'Volets'}
            </button>
            <button class="filter-tab" data-category="glass">
              <i class="fas fa-border-all mr-2"></i>
              ${currentLang === 'en' ? 'Glass Work' : 'Vitrerie'}
            </button>
            <button class="filter-tab" data-category="windows">
              <i class="fas fa-window-maximize mr-2"></i>
              ${currentLang === 'en' ? 'Windows' : 'Fenêtres'}
            </button>
          </div>
          
          <!-- Gallery Grid with varied layout (mgi.mg style) -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
            
            <!-- Featured Large Project (spans 2 columns on large screens) -->
            <div class="luxury-card group lg:col-span-2 lg:row-span-2" data-category="doors">
              <div class="image-overlay aspect-ratio-box" style="padding-bottom: 60%;">
                <img src="/static/door-red.jpg" alt="Premium Aluminum Door" class="w-full h-full object-cover" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                  <div class="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span class="inline-block px-4 py-1 bg-cyan-500 rounded-full text-sm font-semibold mb-3">Featured Project</span>
                    <h3 class="text-3xl font-display font-bold mb-2">${currentLang === 'en' ? 'Modern Aluminum Door' : 'Porte Aluminium Moderne'}</h3>
                    <p class="text-blue-100">${currentLang === 'en' ? 'Premium design with red panel and glass combination' : 'Design premium avec panneau rouge et verre'}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Standard Project 1 -->
            <div class="luxury-card group" data-category="doors glass">
              <div class="image-overlay aspect-ratio-box">
                <img src="/static/door-red-glass.jpg" alt="Glass Aluminum Door" class="w-full h-full object-cover" loading="lazy">
                <div class="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div class="text-white text-center p-6">
                    <i class="fas fa-search-plus text-4xl mb-4"></i>
                    <h4 class="text-xl font-bold">${currentLang === 'en' ? 'View Details' : 'Voir Détails'}</h4>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <span class="premium-badge text-xs mb-2 inline-block">Elegant</span>
                <h3 class="text-xl font-display font-bold text-blue-900 mb-2">${currentLang === 'en' ? 'Glass & Panel Door' : 'Porte Verre & Panneau'}</h3>
                <p class="text-gray-600 text-sm">${currentLang === 'en' ? 'Elegant entrance with clear glass panel' : 'Entrée élégante avec panneau en verre'}</p>
              </div>
            </div>

            <!-- Standard Project 2 -->
            <div class="luxury-card group" data-category="doors shutters">
              <div class="image-overlay aspect-ratio-box">
                <img src="/static/door-frosted.jpg" alt="Louvered Door" class="w-full h-full object-cover" loading="lazy">
                <div class="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div class="text-white text-center p-6">
                    <i class="fas fa-search-plus text-4xl mb-4"></i>
                    <h4 class="text-xl font-bold">${currentLang === 'en' ? 'View Details' : 'Voir Détails'}</h4>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <span class="premium-badge text-xs mb-2 inline-block">Privacy</span>
                <h3 class="text-xl font-display font-bold text-blue-900 mb-2">${currentLang === 'en' ? 'Louvered Door' : 'Porte Persienne'}</h3>
                <p class="text-gray-600 text-sm">${currentLang === 'en' ? 'Privacy with style and ventilation' : 'Intimité avec style et ventilation'}</p>
              </div>
            </div>

            <!-- Wide Project (spans 2 columns) -->
            <div class="luxury-card group lg:col-span-2" data-category="windows">
              <div class="image-overlay aspect-ratio-box" style="padding-bottom: 40%;">
                <img src="/static/brochure1.jpg" alt="Window Range" class="w-full h-full object-cover" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center p-8">
                  <div class="text-white max-w-md">
                    <i class="fas fa-window-maximize text-5xl mb-4 text-cyan-400"></i>
                    <h3 class="text-2xl font-display font-bold mb-3">${currentLang === 'en' ? 'Complete Window Range' : 'Gamme Complète de Fenêtres'}</h3>
                    <p class="text-blue-100">${currentLang === 'en' ? 'Energy-efficient windows in various styles and colors' : 'Fenêtres écoénergétiques en divers styles et couleurs'}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Standard Project 3 -->
            <div class="luxury-card group" data-category="shutters">
              <div class="image-overlay aspect-ratio-box">
                <img src="/static/brochure2.jpg" alt="Shutters" class="w-full h-full object-cover" loading="lazy">
                <div class="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div class="text-white text-center p-6">
                    <i class="fas fa-search-plus text-4xl mb-4"></i>
                    <h4 class="text-xl font-bold">${currentLang === 'en' ? 'View Details' : 'Voir Détails'}</h4>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <span class="premium-badge text-xs mb-2 inline-block">Security</span>
                <h3 class="text-xl font-display font-bold text-blue-900 mb-2">${currentLang === 'en' ? 'Shutters & Accessories' : 'Volets & Accessoires'}</h3>
                <p class="text-gray-600 text-sm">${currentLang === 'en' ? 'Complete range of roller shutters' : 'Gamme complète de volets roulants'}</p>
              </div>
            </div>

            <!-- Info Card - Upload Your Photos -->
            <div class="luxury-card bg-gradient-to-br from-cyan-500 to-blue-600 p-8 flex flex-col justify-center items-center text-white lg:col-span-2" data-category="all">
              <div class="text-center">
                <div class="icon-circle bg-white/20 text-white mx-auto mb-6 w-20 h-20">
                  <i class="fas fa-images text-3xl"></i>
                </div>
                <h3 class="text-2xl font-display font-bold mb-4">${currentLang === 'en' ? 'More Projects Coming Soon' : 'Plus de Projets Bientôt'}</h3>
                <p class="text-lg text-cyan-50 mb-6 max-w-md">
                  ${currentLang === 'en' 
                    ? 'We\'re updating our gallery with recent installations. Check back soon or contact us to see our latest work!' 
                    : 'Nous mettons à jour notre galerie avec nos installations récentes. Revenez bientôt ou contactez-nous!'}
                </p>
                <div class="flex gap-4 justify-center">
                  <a href="#contact" class="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                    ${currentLang === 'en' ? 'Contact Us' : 'Contactez-Nous'}
                  </a>
                </div>
              </div>
            </div>

            <!-- Call to Action Card -->
            <div class="luxury-card bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 p-8 flex flex-col justify-center items-center text-white relative overflow-hidden" data-category="all">
              <div class="absolute inset-0 opacity-10 luxury-pattern"></div>
              <div class="relative z-10 text-center">
                <div class="icon-circle bg-white/20 text-white mx-auto mb-4 w-16 h-16">
                  <i class="fas fa-phone-volume text-2xl"></i>
                </div>
                <h3 class="text-2xl font-display font-bold mb-3">${currentLang === 'en' ? 'Get a Quote' : 'Demander un Devis'}</h3>
                <p class="text-blue-100 mb-6">${currentLang === 'en' ? 'Free consultation & quote' : 'Consultation gratuite'}</p>
                <a href="tel:+23057206020" class="btn-primary bg-white text-blue-900 hover:bg-gray-100 text-sm">
                  <i class="fas fa-phone mr-2"></i>
                  ${currentLang === 'en' ? 'Call Now' : 'Appelez'}
                </a>
              </div>
            </div>

          </div>

          <!-- Load More Button -->
          <div class="text-center mt-12">
            <button class="btn-secondary" onclick="alert('${currentLang === 'en' ? 'More projects coming soon!' : 'Plus de projets bientôt!'}')">
              <i class="fas fa-plus-circle mr-2"></i>
              ${currentLang === 'en' ? 'Load More Projects' : 'Voir Plus de Projets'}
            </button>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4">${t.contact.title}</h2>
            <p class="text-xl text-gray-600">${t.contact.subtitle}</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12">
            <!-- Contact Information -->
            <div class="space-y-8">
              <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-map-marker-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold text-xl text-blue-900 mb-2">${t.contact.info.address}</h3>
                    <p class="text-gray-700">${t.contact.info.addressLine1}</p>
                    <p class="text-gray-700">${t.contact.info.addressLine2}</p>
                    <p class="text-gray-700">${t.contact.info.addressLine3}</p>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 bg-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-phone text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold text-xl text-blue-900 mb-2">${t.contact.info.phone}</h3>
                    <a href="tel:+23054373025" class="text-gray-700 hover:text-blue-900 block">+230 543 730 25</a>
                    <a href="tel:+23059402190" class="text-gray-700 hover:text-blue-900 block">+230 594 021 90</a>
                    <p class="text-gray-600 text-sm mt-1">Fax: +230 697 0411</p>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-envelope text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold text-xl text-blue-900 mb-2">${t.contact.info.email}</h3>
                    <a href="mailto:moi.alu2012@gmail.com" class="text-gray-700 hover:text-blue-900 block">moi.alu2012@gmail.com</a>
                    <a href="mailto:info.moialu@gmail.com" class="text-gray-700 hover:text-blue-900 block">info.moialu@gmail.com</a>
                    <a href="http://www.moialu.com" class="text-gray-700 hover:text-blue-900 block mt-2">www.moialu.com</a>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 bg-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-clock text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold text-xl text-blue-900 mb-2">${t.contact.info.hours}</h3>
                    <p class="text-gray-700">${t.contact.info.hoursText}</p>
                    <p class="text-gray-700">${t.contact.info.saturday}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <form id="contact-form" class="space-y-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">${t.contact.form.name}</label>
                  <input type="text" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" placeholder="${currentLang === 'en' ? 'John Doe' : 'Jean Dupont'}">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">${t.contact.form.email}</label>
                  <input type="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" placeholder="${currentLang === 'en' ? 'john@example.com' : 'jean@exemple.com'}">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">${t.contact.form.phone}</label>
                  <input type="tel" name="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" placeholder="+230 XXX XXXX">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">${t.contact.form.message}</label>
                  <textarea name="message" rows="4" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" placeholder="${currentLang === 'en' ? 'Tell us about your project...' : 'Parlez-nous de votre projet...'}"></textarea>
                </div>
                <button type="submit" class="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 transition font-bold text-lg">
                  ${t.contact.form.submit}
                </button>
                <div id="form-message" class="hidden"></div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-blue-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <img src="/static/logo.png" alt="MOI Logo" class="h-16 w-16 object-contain bg-white/10 rounded-lg p-2">
                <div class="text-lg font-bold">
                  <div class="leading-tight">MENUISERIE</div>
                  <div class="text-sm font-normal text-blue-200">DE L'OCEAN INDIEN</div>
                </div>
              </div>
              <p class="text-blue-200 mb-4">${t.footer.tagline}</p>
              <div class="flex gap-4">
                <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 class="font-bold text-lg mb-4">${currentLang === 'en' ? 'Quick Links' : 'Liens Rapides'}</h4>
              <ul class="space-y-2">
                <li><a href="#home" class="text-blue-200 hover:text-white transition">${t.nav.home}</a></li>
                <li><a href="#about" class="text-blue-200 hover:text-white transition">${t.nav.about}</a></li>
                <li><a href="#products" class="text-blue-200 hover:text-white transition">${t.nav.products}</a></li>
                <li><a href="#gallery" class="text-blue-200 hover:text-white transition">${t.nav.gallery}</a></li>
                <li><a href="#contact" class="text-blue-200 hover:text-white transition">${t.nav.contact}</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-lg mb-4">${currentLang === 'en' ? 'Certifications' : 'Certifications'}</h4>
              <p class="text-blue-200 mb-2">${t.footer.registered}</p>
              <p class="text-cyan-400 font-bold">${t.footer.madeIn}</p>
            </div>
          </div>
          <div class="border-t border-blue-800 pt-8 text-center">
            <p class="text-blue-200">© 2025 ${t.footer.company}. ${t.footer.rights}.</p>
          </div>
        </div>
      </footer>
    `;

    setupFormHandler();
  }

  // Setup event listeners
  function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn?.addEventListener('click', () => {
      mobileMenuOpen = !mobileMenuOpen;
      mobileMenu.classList.toggle('hidden');
      
      const icon = mobileMenuBtn.querySelector('i');
      icon.className = mobileMenuOpen ? 'fas fa-times text-2xl text-gray-700' : 'fas fa-bars text-2xl text-gray-700';
    });

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuOpen = false;
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'fas fa-bars text-2xl text-gray-700';
      });
    });
  }

  // Setup form handler
  function setupFormHandler() {
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');
    const t = translations[currentLang];

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = t.contact.form.sending;
      submitBtn.disabled = true;

      const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value
      };

      try {
        const response = await axios.post('/api/contact', formData);
        
        if (response.data.success) {
          messageDiv.className = 'p-4 bg-green-100 text-green-700 rounded-lg';
          messageDiv.textContent = t.contact.form.success;
          messageDiv.classList.remove('hidden');
          form.reset();
        }
      } catch (error) {
        messageDiv.className = 'p-4 bg-red-100 text-red-700 rounded-lg';
        messageDiv.textContent = t.contact.form.error;
        messageDiv.classList.remove('hidden');
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        setTimeout(() => {
          messageDiv.classList.add('hidden');
        }, 5000);
      }
    });
  }

  // Setup smooth scroll
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const offset = 80;
          const targetPosition = target.offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Setup sticky navigation
  function setupStickyNav() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        navbar.classList.add('sticky-nav', 'shadow-xl');
      } else {
        navbar.classList.remove('sticky-nav', 'shadow-xl');
      }
      
      lastScroll = currentScroll;
    });
  }

  // Set language
  function setLanguage(lang) {
    currentLang = lang;
    renderApp();
  }

  // Expose public API
  window.moiApp = {
    setLanguage
  };

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
