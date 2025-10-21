// MOI Aluminum Website Application
(function() {
  'use strict';

  // Language translations
  const translations = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        products: 'Products',
        gallery: 'Gallery',
        contact: 'Contact'
      },
      hero: {
        title: 'Expert in Aluminum Joinery',
        subtitle: 'Manufacturing & Installation',
        description: 'Quality aluminum windows, doors and shutters in Mauritius since 2005',
        cta: 'Request a Quote',
        learn: 'Learn More'
      },
      about: {
        title: 'About MOI',
        subtitle: 'Excellence and Innovation Since 2005',
        text1: 'Menuiserie de l\'Océan Indien Ltée specializes in the manufacturing, supply, and installation of high-quality aluminum joinery in Mauritius.',
        text2: 'We are a Grade MEDIUM II Contractor registered with the Construction Industry Authority, with nearly 20 years of experience.',
        text3: 'Our team of 10 skilled professionals has successfully completed projects worth up to Rs 100 million.',
        text4: 'Proud members of the "Made in Moris" collective brand since 2022.',
        stat1: 'Years Experience',
        stat2: 'Projects Completed',
        stat3: 'Satisfied Clients',
        stat4: 'Team Members'
      },
      products: {
        title: 'Our Products',
        subtitle: 'Comprehensive Range of Aluminum Solutions',
        windows: {
          title: 'Windows',
          items: ['Strong window', 'Sliding window wooden finish', 'Opening', 'Casement window', 'Aluminum door with Georgian bars', 'Awning']
        },
        doors: {
          title: 'Doors & Shutters',
          items: ['Tilt and turn', 'Aluminum', 'Aluminum rockets', 'Mosquito net', 'Roller shutter with Georgian bars', 'Electric window roller shutter', 'Aluminum louvered door', 'Casement aluminum/mosquito/net shutters', 'Aluminum roller shutter']
        },
        custom: {
          title: 'Custom Solutions',
          desc: 'We offer fully customizable solutions for residential and commercial projects'
        }
      },
      gallery: {
        title: 'Our Work',
        subtitle: 'Showcase of Quality Projects'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in Touch for Your Next Project',
        form: {
          name: 'Full Name',
          email: 'Email Address',
          phone: 'Phone Number',
          message: 'Your Message',
          submit: 'Send Message',
          sending: 'Sending...',
          success: 'Thank you! We will contact you soon.',
          error: 'Failed to send. Please try again.'
        },
        info: {
          address: 'Address',
          addressLine1: 'Unit 29 - Block 8',
          addressLine2: 'DBM SME Park, Vuillemin',
          addressLine3: 'Quartier Militaire, Mauritius',
          phone: 'Phone',
          email: 'Email',
          hours: 'Business Hours',
          hoursText: 'Monday - Friday: 8:00 AM - 5:00 PM',
          saturday: 'Saturday: 8:00 AM - 12:00 PM'
        }
      },
      footer: {
        company: 'Menuiserie de l\'Océan Indien Ltée',
        tagline: 'Quality Aluminum Joinery Since 2005',
        rights: 'All rights reserved',
        madeIn: 'Made in Moris',
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
        title: 'Expert en Menuiserie Aluminium',
        subtitle: 'Fabrication & Installation',
        description: 'Fenêtres, portes et volets en aluminium de qualité à Maurice depuis 2005',
        cta: 'Demander un Devis',
        learn: 'En Savoir Plus'
      },
      about: {
        title: 'À Propos de MOI',
        subtitle: 'Excellence et Innovation Depuis 2005',
        text1: 'Menuiserie de l\'Océan Indien Ltée est spécialisée dans la fabrication, la fourniture et l\'installation de menuiserie aluminium de haute qualité à Maurice.',
        text2: 'Nous sommes un entrepreneur de grade MOYEN II enregistré auprès de l\'Autorité de l\'industrie de la construction, avec près de 20 ans d\'expérience.',
        text3: 'Notre équipe de 10 professionnels qualifiés a réalisé avec succès des projets d\'une valeur allant jusqu\'à 100 millions de roupies.',
        text4: 'Fiers membres de la marque collective "Made in Moris" depuis 2022.',
        stat1: 'Ans d\'Expérience',
        stat2: 'Projets Réalisés',
        stat3: 'Clients Satisfaits',
        stat4: 'Membres d\'Équipe'
      },
      products: {
        title: 'Nos Produits',
        subtitle: 'Gamme Complète de Solutions en Aluminium',
        windows: {
          title: 'Fenêtres',
          items: ['Fenêtre robuste', 'Fenêtre coulissante finition bois', 'Ouverture', 'Fenêtre à battant', 'Porte aluminium avec barreaux géorgiens', 'Auvent']
        },
        doors: {
          title: 'Portes & Volets',
          items: ['Oscillo-battant', 'Aluminium', 'Roquets aluminium', 'Moustiquaire', 'Volet roulant avec barreaux géorgiens', 'Volet roulant électrique', 'Porte persienne aluminium', 'Volets aluminium/moustiquaire', 'Volet roulant aluminium']
        },
        custom: {
          title: 'Solutions Sur Mesure',
          desc: 'Nous offrons des solutions entièrement personnalisables pour projets résidentiels et commerciaux'
        }
      },
      gallery: {
        title: 'Nos Réalisations',
        subtitle: 'Vitrine de Projets de Qualité'
      },
      contact: {
        title: 'Contactez-Nous',
        subtitle: 'Prenez Contact Pour Votre Prochain Projet',
        form: {
          name: 'Nom Complet',
          email: 'Adresse Email',
          phone: 'Numéro de Téléphone',
          message: 'Votre Message',
          submit: 'Envoyer',
          sending: 'Envoi...',
          success: 'Merci! Nous vous contactons bientôt.',
          error: 'Échec de l\'envoi. Veuillez réessayer.'
        },
        info: {
          address: 'Adresse',
          addressLine1: 'Unité 29 - Bloc 8',
          addressLine2: 'DBM SME Park, Vuillemin',
          addressLine3: 'Quartier Militaire, Maurice',
          phone: 'Téléphone',
          email: 'Email',
          hours: 'Heures d\'Ouverture',
          hoursText: 'Lundi - Vendredi: 8h00 - 17h00',
          saturday: 'Samedi: 8h00 - 12h00'
        }
      },
      footer: {
        company: 'Menuiserie de l\'Océan Indien Ltée',
        tagline: 'Menuiserie Aluminium de Qualité Depuis 2005',
        rights: 'Tous droits réservés',
        madeIn: 'Made in Moris',
        registered: 'Entrepreneur Enregistré - Grade MOYEN II'
      }
    }
  };

  // State management
  let currentLang = 'en';
  let mobileMenuOpen = false;

  // Initialize application
  function init() {
    renderApp();
    setupEventListeners();
    setupSmoothScroll();
    setupStickyNav();
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

      <!-- Hero Section -->
      <section id="home" class="pt-20 gradient-bg hero-pattern">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div class="text-center text-white">
            <div class="flex justify-center mb-8 section-fade">
              <img src="/static/logo.png" alt="MOI Logo" class="h-32 w-32 object-contain bg-white/10 rounded-2xl p-4 shadow-2xl">
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-6 section-fade">
              ${t.hero.title}
            </h1>
            <p class="text-2xl md:text-3xl font-light mb-4 section-fade">${t.hero.subtitle}</p>
            <p class="text-xl md:text-2xl mb-12 text-blue-100 section-fade">${t.hero.description}</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4 section-fade">
              <a href="#contact" class="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2">
                <i class="fas fa-phone"></i>
                ${t.hero.cta}
              </a>
              <a href="#about" class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition flex items-center justify-center gap-2">
                <i class="fas fa-info-circle"></i>
                ${t.hero.learn}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4">${t.about.title}</h2>
            <p class="text-xl text-gray-600">${t.about.subtitle}</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div class="space-y-6">
              <p class="text-lg text-gray-700">${t.about.text1}</p>
              <p class="text-lg text-gray-700">${t.about.text2}</p>
              <p class="text-lg text-gray-700">${t.about.text3}</p>
              <p class="text-lg text-gray-700 font-semibold text-blue-900">${t.about.text4}</p>
            </div>
            <div class="bg-gradient-to-br from-blue-900 to-cyan-600 rounded-2xl p-12 text-white shadow-2xl">
              <div class="text-center">
                <div class="text-8xl font-bold mb-4">2005</div>
                <div class="text-2xl font-light">Est. Mauritius</div>
              </div>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl card-hover">
              <div class="text-5xl font-bold text-blue-900 mb-2">20+</div>
              <div class="text-gray-600 font-medium">${t.about.stat1}</div>
            </div>
            <div class="text-center p-6 bg-gradient-to-br from-cyan-50 to-white rounded-xl card-hover">
              <div class="text-5xl font-bold text-cyan-600 mb-2">1000+</div>
              <div class="text-gray-600 font-medium">${t.about.stat2}</div>
            </div>
            <div class="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl card-hover">
              <div class="text-5xl font-bold text-blue-900 mb-2">500+</div>
              <div class="text-gray-600 font-medium">${t.about.stat3}</div>
            </div>
            <div class="text-center p-6 bg-gradient-to-br from-cyan-50 to-white rounded-xl card-hover">
              <div class="text-5xl font-bold text-cyan-600 mb-2">10</div>
              <div class="text-gray-600 font-medium">${t.about.stat4}</div>
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
                <h3 class="text-2xl font-bold">${t.products.windows.title}</h3>
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
                <h3 class="text-2xl font-bold">${t.products.doors.title}</h3>
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
                <h3 class="text-2xl font-bold">${t.products.custom.title}</h3>
              </div>
              <div class="p-6">
                <p class="text-gray-700 mb-6">${t.products.custom.desc}</p>
                <div class="space-y-4">
                  <div class="flex items-center gap-3 text-gray-700">
                    <i class="fas fa-palette text-cyan-600"></i>
                    <span>${currentLang === 'en' ? 'Color customization' : 'Personnalisation couleur'}</span>
                  </div>
                  <div class="flex items-center gap-3 text-gray-700">
                    <i class="fas fa-ruler-combined text-cyan-600"></i>
                    <span>${currentLang === 'en' ? 'Custom dimensions' : 'Dimensions sur mesure'}</span>
                  </div>
                  <div class="flex items-center gap-3 text-gray-700">
                    <i class="fas fa-building text-cyan-600"></i>
                    <span>${currentLang === 'en' ? 'Commercial projects' : 'Projets commerciaux'}</span>
                  </div>
                  <div class="flex items-center gap-3 text-gray-700">
                    <i class="fas fa-home text-cyan-600"></i>
                    <span>${currentLang === 'en' ? 'Residential projects' : 'Projets résidentiels'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Gallery Section -->
      <section id="gallery" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4">${t.gallery.title}</h2>
            <p class="text-xl text-gray-600">${t.gallery.subtitle}</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${generateGalleryItems()}
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
                    <p class="text-gray-700">+230 543 730 25</p>
                    <p class="text-gray-700">+230 594 021 90</p>
                    <p class="text-gray-600 text-sm mt-1">${currentLang === 'en' ? 'Fax: +230 697 0411' : 'Fax: +230 697 0411'}</p>
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
                    <p class="text-gray-700">moi.alu2012@gmail.com</p>
                    <p class="text-gray-700">info.moialu@gmail.com</p>
                    <p class="text-gray-700 mt-2">www.moialu.com</p>
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

  // Generate gallery items
  function generateGalleryItems() {
    const items = [
      { color: 'from-red-500 to-red-700', icon: 'fa-door-closed', label: currentLang === 'en' ? 'Red Panel Door' : 'Porte Panneau Rouge' },
      { color: 'from-gray-600 to-gray-800', icon: 'fa-window-restore', label: currentLang === 'en' ? 'Frosted Glass Door' : 'Porte Verre Dépoli' },
      { color: 'from-blue-500 to-blue-700', icon: 'fa-border-all', label: currentLang === 'en' ? 'Georgian Bar Windows' : 'Fenêtres Barreaux' },
      { color: 'from-cyan-500 to-cyan-700', icon: 'fa-th-large', label: currentLang === 'en' ? 'Sliding Windows' : 'Fenêtres Coulissantes' },
      { color: 'from-indigo-500 to-indigo-700', icon: 'fa-bars', label: currentLang === 'en' ? 'Louvered Shutters' : 'Volets Persienne' },
      { color: 'from-teal-500 to-teal-700', icon: 'fa-columns', label: currentLang === 'en' ? 'Custom Facades' : 'Façades Sur Mesure' }
    ];

    return items.map(item => `
      <div class="product-image bg-gradient-to-br ${item.color} rounded-2xl h-64 flex flex-col items-center justify-center text-white shadow-lg card-hover">
        <i class="fas ${item.icon} text-6xl mb-4"></i>
        <p class="text-xl font-bold">${item.label}</p>
      </div>
    `).join('');
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
