// MOI Aluminum - MGI-Inspired Clean Layout
(function() {
  'use strict';

  const translations = {
    en: {
      nav: { home: 'Home', about: 'Company', showcase: 'Showcase', products: 'Products', partners: 'Partners', inquiry: 'Inquiry', contact: 'Contact' },
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
          { title: 'Commercial Office Tower', desc: 'Large-scale aluminum curtain wall systems for commercial buildings', img: '/static/commercial-tower-2.jpg' },
          { title: 'Casement Windows', desc: 'Modern black frame windows with double glazing', img: '/static/product-casement-window.jpg' },
          { title: 'Bi-Fold Doors', desc: 'Seamless indoor-outdoor connection systems', img: '/static/product-bifold-door.jpg' },
          { title: 'Professional Workshop', desc: 'Expert craftsmanship and manufacturing facility', img: '/static/project-workshop.jpg' }
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
        gateway: '🌍 Your Strategic Gateway to Africa',
        gatewayDesc: 'Mauritius-based manufacturing excellence connecting international suppliers with expanding African markets through premium aluminium architectural solutions',
        text1: 'Menuiserie de l\'Océan Indien (MOI) is a SMEDA-certified aluminium manufacturer strategically positioned in Mauritius—the ideal bridge between European suppliers and African markets. With 20+ years of proven excellence, we deliver European-standard architectural systems to residential, commercial, and infrastructure projects across the Indian Ocean region.',
        text2: 'Investment Highlights: SMEDA Grade MEDIUM II Certified • 100M Rs Annual Production Capacity • ISO-Compliant Manufacturing • Export-Ready Infrastructure • Established Supply Chain Network • Government-Backed Trade Credentials',
        investorHighlights: 'Why Partner with MOI',
        investorPoints: [
          'Strategic Location: Mauritius offers preferential trade access to African, Asian, and European markets',
          'Proven Track Record: 500+ successful installations across commercial and residential sectors',
          'Quality Assurance: European-standard manufacturing with certified materials and processes',
          'Scalable Operations: Modern facility with expansion-ready infrastructure and skilled workforce',
          'Market Expertise: Deep understanding of African market requirements and regulatory compliance',
          'Reliable Partnership: Long-term relationships with international suppliers (Hong Kong, Portugal, EU)'
        ],
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
      },
      inquiry: {
        title: 'Get In Touch',
        subtitle: 'Whether you are a potential client, supplier, or partner — we would love to hear from you.',
        roleLabel: 'I am a...',
        roles: { client: 'Client', supplier: 'Supplier', partner: 'Partner' },
        common: { name: 'Full Name', email: 'Email Address', phone: 'Phone Number', company: 'Company Name', message: 'Message', submit: 'Submit Inquiry', sending: 'Sending...', required: '* Required' },
        client: {
          sectionTitle: 'Project Details',
          projectType: 'Project Type',
          projectTypes: { residential: 'Residential', commercial: 'Commercial', industrial: 'Industrial' },
          location: 'Project Location',
          locationPlaceholder: 'City / Region / Country',
          budget: 'Estimated Budget (MUR)',
          budgets: { under500k: 'Under Rs 500,000', '500k1m': 'Rs 500,000 – 1,000,000', '1m3m': 'Rs 1,000,000 – 3,000,000', '3m5m': 'Rs 3,000,000 – 5,000,000', above5m: 'Above Rs 5,000,000', undisclosed: 'Prefer not to say' },
          timeline: 'Timeline / Urgency',
          timelines: { urgent: 'Urgent (< 1 month)', short: '1 – 3 months', medium: '3 – 6 months', long: '6+ months', flexible: 'Flexible' },
          quantity: 'Approximate Quantities',
          quantityPlaceholder: 'e.g. 12 windows, 3 sliding doors, 2 roller shutters'
        },
        supplier: {
          sectionTitle: 'Supplier Details',
          products: 'Products / Services Offered',
          productsPlaceholder: 'Describe the products or services you supply',
          country: 'Country of Origin',
          countryPlaceholder: 'e.g. China, Portugal, France'
        },
        partner: {
          sectionTitle: 'Partnership Details',
          interest: 'Type of Partnership',
          interests: { distribution: 'Distribution / Reseller', joint: 'Joint Venture', technical: 'Technical Collaboration', investment: 'Investment', other: 'Other' }
        }
      }
    },
    fr: {
      nav: { home: 'Accueil', about: 'Entreprise', showcase: 'Vitrine', products: 'Produits', partners: 'Partenaires', inquiry: 'Demande', contact: 'Contact' },
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
          { title: 'Tour de Bureaux Commerciale', desc: 'Systèmes de murs-rideaux en aluminium à grande échelle pour bâtiments commerciaux', img: '/static/commercial-tower-2.jpg' },
          { title: 'Fenêtres à Battant', desc: 'Fenêtres cadre noir moderne avec double vitrage', img: '/static/product-casement-window.jpg' },
          { title: 'Portes Pliantes', desc: 'Systèmes connexion intérieur-extérieur sans couture', img: '/static/product-bifold-door.jpg' },
          { title: 'Atelier Professionnel', desc: 'Savoir-faire expert et installation de fabrication', img: '/static/project-workshop.jpg' }
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
        gateway: '🌍 Votre Passerelle Stratégique vers l\'Afrique',
        gatewayDesc: 'Excellence manufacturière basée à Maurice reliant fournisseurs internationaux aux marchés africains en expansion via solutions architecturales aluminium premium',
        text1: 'Menuiserie de l\'Océan Indien (MOI) est un fabricant d\'aluminium certifié SMEDA, stratégiquement positionné à Maurice—pont idéal entre fournisseurs européens et marchés africains. Avec 20+ ans d\'excellence prouvée, nous livrons systèmes architecturaux aux normes européennes pour projets résidentiels, commerciaux et infrastructures dans l\'océan Indien.',
        text2: 'Atouts Investissement: Certifié SMEDA Grade MOYEN II • Capacité Production 100M Rs/An • Fabrication Conforme ISO • Infrastructure Export-Ready • Réseau Approvisionnement Établi • Accréditations Commerciales Gouvernementales',
        investorHighlights: 'Pourquoi S\'Associer avec MOI',
        investorPoints: [
          'Position Stratégique: Maurice offre accès commercial préférentiel aux marchés africains, asiatiques et européens',
          'Historique Prouvé: 500+ installations réussies dans secteurs commercial et résidentiel',
          'Assurance Qualité: Fabrication standard européen avec matériaux et processus certifiés',
          'Opérations Évolutives: Installation moderne avec infrastructure prête à expansion et main-d\'œuvre qualifiée',
          'Expertise Marché: Compréhension approfondie des exigences marchés africains et conformité réglementaire',
          'Partenariat Fiable: Relations long-terme avec fournisseurs internationaux (Hong Kong, Portugal, UE)'
        ],
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
      },
      inquiry: {
        title: 'Contactez-Nous',
        subtitle: 'Que vous soyez client, fournisseur ou partenaire potentiel — nous serions ravis de vous entendre.',
        roleLabel: 'Je suis un(e)...',
        roles: { client: 'Client', supplier: 'Fournisseur', partner: 'Partenaire' },
        common: { name: 'Nom complet', email: 'Adresse e-mail', phone: 'Téléphone', company: 'Nom de l\'entreprise', message: 'Message', submit: 'Envoyer la demande', sending: 'Envoi en cours...', required: '* Obligatoire' },
        client: {
          sectionTitle: 'Détails du Projet',
          projectType: 'Type de projet',
          projectTypes: { residential: 'Résidentiel', commercial: 'Commercial', industrial: 'Industriel' },
          location: 'Localisation du projet',
          locationPlaceholder: 'Ville / Région / Pays',
          budget: 'Budget estimé (MUR)',
          budgets: { under500k: 'Moins de Rs 500 000', '500k1m': 'Rs 500 000 – 1 000 000', '1m3m': 'Rs 1 000 000 – 3 000 000', '3m5m': 'Rs 3 000 000 – 5 000 000', above5m: 'Plus de Rs 5 000 000', undisclosed: 'Préfère ne pas dire' },
          timeline: 'Délai / Urgence',
          timelines: { urgent: 'Urgent (< 1 mois)', short: '1 – 3 mois', medium: '3 – 6 mois', long: '6+ mois', flexible: 'Flexible' },
          quantity: 'Quantités approximatives',
          quantityPlaceholder: 'ex. 12 fenêtres, 3 portes coulissantes, 2 volets roulants'
        },
        supplier: {
          sectionTitle: 'Détails Fournisseur',
          products: 'Produits / Services proposés',
          productsPlaceholder: 'Décrivez les produits ou services que vous fournissez',
          country: 'Pays d\'origine',
          countryPlaceholder: 'ex. Chine, Portugal, France'
        },
        partner: {
          sectionTitle: 'Détails du Partenariat',
          interest: 'Type de partenariat',
          interests: { distribution: 'Distribution / Revendeur', joint: 'Coentreprise', technical: 'Collaboration technique', investment: 'Investissement', other: 'Autre' }
        }
      }
    },
    zh: {
      nav: { home: '首页', about: '公司', showcase: '展示', products: '产品', partners: '合作伙伴', inquiry: '询价', contact: '联系' },
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
          { title: '商业办公大楼', desc: '商业建筑大型铝合金幕墙系统', img: '/static/commercial-tower-2.jpg' },
          { title: '平开窗', desc: '现代黑色边框窗户，双层玻璃', img: '/static/product-casement-window.jpg' },
          { title: '折叠门', desc: '无缝室内外连接系统', img: '/static/product-bifold-door.jpg' },
          { title: '专业车间', desc: '专家工艺和制造设施', img: '/static/project-workshop.jpg' }
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
        gateway: '🌍 您的非洲战略门户',
        gatewayDesc: '毛里求斯制造卓越企业，通过优质铝合金建筑解决方案连接国际供应商与不断扩大的非洲市场',
        text1: '印度洋门窗公司（MOI）是获SMEDA认证的铝合金制造商，战略性地位于毛里求斯——连接欧洲供应商与非洲市场的理想桥梁。凭借20多年的卓越业绩，我们为印度洋地区的住宅、商业和基础设施项目提供符合欧洲标准的建筑系统。',
        text2: '投资亮点：SMEDA中级II级认证 • 年产能1亿卢比 • ISO合规制造 • 出口就绪基础设施 • 成熟供应链网络 • 政府支持的贸易资质',
        investorHighlights: '为何与MOI合作',
        investorPoints: [
          '战略位置：毛里求斯提供进入非洲、亚洲和欧洲市场的优惠贸易通道',
          '成熟记录：在商业和住宅领域成功完成500+安装项目',
          '质量保证：采用认证材料和工艺的欧洲标准制造',
          '可扩展运营：现代化设施配备可扩展基础设施和熟练劳动力',
          '市场专长：深入了解非洲市场需求和监管合规要求',
          '可靠合作：与国际供应商（香港、葡萄牙、欧盟）建立长期关系'
        ],
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
      },
      inquiry: {
        title: '联系我们',
        subtitle: '无论您是潜在客户、供应商还是合作伙伴——我们期待您的来信。',
        roleLabel: '我是...',
        roles: { client: '客户', supplier: '供应商', partner: '合作伙伴' },
        common: { name: '姓名', email: '电子邮件', phone: '电话号码', company: '公司名称', message: '留言', submit: '提交询价', sending: '发送中...', required: '* 必填' },
        client: {
          sectionTitle: '项目详情',
          projectType: '项目类型',
          projectTypes: { residential: '住宅', commercial: '商业', industrial: '工业' },
          location: '项目地点',
          locationPlaceholder: '城市 / 地区 / 国家',
          budget: '预算估算 (MUR)',
          budgets: { under500k: '50万卢比以下', '500k1m': '50万 – 100万卢比', '1m3m': '100万 – 300万卢比', '3m5m': '300万 – 500万卢比', above5m: '500万卢比以上', undisclosed: '不便透露' },
          timeline: '时间要求',
          timelines: { urgent: '紧急 (< 1个月)', short: '1 – 3个月', medium: '3 – 6个月', long: '6个月以上', flexible: '灵活' },
          quantity: '大致数量',
          quantityPlaceholder: '例如: 12扇窗, 3扇推拉门, 2个卷帘'
        },
        supplier: {
          sectionTitle: '供应商详情',
          products: '供应产品/服务',
          productsPlaceholder: '请描述您供应的产品或服务',
          country: '原产国',
          countryPlaceholder: '例如: 中国, 葡萄牙, 法国'
        },
        partner: {
          sectionTitle: '合作详情',
          interest: '合作类型',
          interests: { distribution: '分销/经销商', joint: '合资企业', technical: '技术合作', investment: '投资', other: '其他' }
        }
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
              <span class="font-sans font-semibold text-lg text-gray-900 hidden sm:inline">Menuiserie de l'Océan Indien</span>
            </div>
            
            <!-- Mobile Language Selector -->
            <div class="flex md:hidden gap-1.5">
              <button onclick="window.moiApp.setLang('en')" class="px-2.5 py-1.5 text-xs font-sans font-semibold ${currentLang==='en'?'bg-blue-600 text-white':'bg-gray-100 text-gray-700'} rounded-md">EN</button>
              <button onclick="window.moiApp.setLang('fr')" class="px-2.5 py-1.5 text-xs font-sans font-semibold ${currentLang==='fr'?'bg-blue-600 text-white':'bg-gray-100 text-gray-700'} rounded-md">FR</button>
              <button onclick="window.moiApp.setLang('zh')" class="px-2.5 py-1.5 text-xs font-sans font-semibold ${currentLang==='zh'?'bg-blue-600 text-white':'bg-gray-100 text-gray-700'} rounded-md">中文</button>
            </div>
            
            <div class="hidden md:flex gap-8 items-center">
              <a href="#home" class="font-sans font-medium text-sm text-gray-700 hover:text-blue-600 transition-colors">${t.nav.home}</a>
              <a href="#about" class="font-sans font-medium text-sm text-gray-700 hover:text-blue-600 transition-colors">${t.nav.about}</a>
              <a href="#showcase" class="font-sans font-medium text-sm text-gray-700 hover:text-blue-600 transition-colors">${t.nav.showcase}</a>
              <a href="#products" class="font-sans font-medium text-sm text-gray-700 hover:text-blue-600 transition-colors">${t.nav.products}</a>
              <a href="#partners" class="font-sans font-medium text-sm text-gray-700 hover:text-blue-600 transition-colors">${t.nav.partners}</a>
              <a href="#inquiry" class="font-sans font-medium text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-full transition-colors">${t.nav.inquiry}</a>
              <a href="#contact" class="font-sans font-medium text-sm text-gray-700 hover:text-blue-600 transition-colors">${t.nav.contact}</a>
              <div class="flex gap-2 ml-4 border-l pl-4 items-center">
                <span class="text-xs font-sans font-medium text-gray-500 mr-1">Language:</span>
                <button onclick="window.moiApp.setLang('en')" class="px-3 py-1.5 text-sm font-sans font-semibold ${currentLang==='en'?'bg-blue-600 text-white shadow-md':'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-lg transition-all">EN</button>
                <button onclick="window.moiApp.setLang('fr')" class="px-3 py-1.5 text-sm font-sans font-semibold ${currentLang==='fr'?'bg-blue-600 text-white shadow-md':'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-lg transition-all">FR</button>
                <button onclick="window.moiApp.setLang('zh')" class="px-3 py-1.5 text-sm font-sans font-semibold ${currentLang==='zh'?'bg-blue-600 text-white shadow-md':'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-lg transition-all">中文</button>
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
            <h1 class="text-5xl md:text-7xl font-display font-bold text-white mb-4 tracking-tight">
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
            
            <p class="text-2xl md:text-3xl font-sans font-light text-white/95 tracking-wide leading-relaxed max-w-3xl mx-auto mb-3 font-sans">
              ${t.hero.subtitle}
            </p>
            
            <!-- CIIE Badge -->
            ${t.hero.ciie ? `
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-red-600/90 backdrop-blur-sm rounded-full border border-red-500/50 mt-4">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>
                </svg>
                <span class="text-sm font-sans font-medium text-white">${t.hero.ciie}</span>
              </div>
            ` : ''}
          </div>
          
          <!-- Key Value Propositions -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
            ${Object.values(t.hero.values).map(value => `
              <div class="bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <p class="text-sm md:text-base font-sans font-medium text-white text-center font-sans">${value}</p>
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

      <!-- About Section - Clean -->
      <section id="about" class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">${t.about.title}</h2>
          
          <!-- Gateway to Africa - Visual Metaphor with Opening Doors -->
          <div class="mb-12 py-12 px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl shadow-2xl relative overflow-hidden">
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-10">
              <div class="absolute top-0 left-0 w-full h-full" style="background-image: radial-gradient(circle at 30% 40%, #fbbf24 0%, transparent 50%), radial-gradient(circle at 70% 60%, #dc2626 0%, transparent 50%);"></div>
            </div>
            
            <div class="relative z-10">
              <h3 class="text-3xl md:text-4xl font-display font-bold text-white mb-6">${t.about.gateway}</h3>
              <p class="text-xl text-white/90 font-sans mb-8 max-w-2xl mx-auto">${t.about.gatewayDesc}</p>
              
              <!-- Visual: Africa Continent with Opening Doors Logo -->
              <div class="relative max-w-4xl mx-auto mt-8" style="perspective: 1000px;">
                <!-- Large Africa Continent Background -->
                <div class="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
                  <img src="/static/africa-satellite-hq.jpg" alt="Africa Continent" class="absolute inset-0 w-full h-full object-contain opacity-40 filter brightness-110">
                  
                  <!-- Small MOI Logo with Opening Doors in Center -->
                  <div class="relative z-20" style="width: 120px; height: 120px;">
                    <div class="logo-gateway-container" style="position: relative; width: 100%; height: 100%; border-radius: 50%; background: white; padding: 15px; box-shadow: 0 20px 60px rgba(251, 191, 36, 0.6); border: 4px solid #fbbf24; overflow: hidden;">
                      <!-- Logo Image -->
                      <img src="/static/logo.png" alt="MOI Logo" style="position: relative; z-index: 0; width: 100%; height: 100%; object-fit: contain;">
                      
                      <!-- Animated Opening Doors (White M shape) -->
                      <div class="logo-door-left" style="content: ''; position: absolute; top: 0; left: 0; width: 50%; height: 100%; background: white; z-index: 1; transform-origin: left center; animation: doorOpenLeftGateway 4s ease-in-out infinite;"></div>
                      <div class="logo-door-right" style="content: ''; position: absolute; top: 0; right: 0; width: 50%; height: 100%; background: white; z-index: 1; transform-origin: right center; animation: doorOpenRightGateway 4s ease-in-out infinite;"></div>
                    </div>
                  </div>
                  
                  <!-- Golden Rays Emanating from Logo -->
                  <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div style="width: 600px; height: 600px; background: radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%); animation: pulse 3s ease-in-out infinite;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <style>
            @keyframes doorOpenLeftGateway {
              0%, 100% { transform: perspective(600px) rotateY(0deg); }
              50% { transform: perspective(600px) rotateY(-85deg); opacity: 0.3; }
            }
            
            @keyframes doorOpenRightGateway {
              0%, 100% { transform: perspective(600px) rotateY(0deg); }
              50% { transform: perspective(600px) rotateY(85deg); opacity: 0.3; }
            }
            
            @keyframes pulse {
              0%, 100% { transform: scale(1); opacity: 0.3; }
              50% { transform: scale(1.1); opacity: 0.5; }
            }
          </style>
          
          <p class="text-lg text-gray-700 mb-4 leading-relaxed font-sans">${t.about.text1}</p>
          <p class="text-md text-gray-600 mb-8 font-sans">${t.about.text2}</p>
          
          <!-- Investment & Partnership Highlights -->
          ${t.about.investorHighlights ? `
          <div class="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200 mt-8 mb-8 shadow-lg">
            <h3 class="text-2xl font-display font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              ${t.about.investorHighlights}
            </h3>
            <div class="grid md:grid-cols-2 gap-4 text-left">
              ${t.about.investorPoints.map((point, index) => `
                <div class="flex gap-3 items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                    ${index + 1}
                  </div>
                  <p class="text-sm text-gray-700 font-sans leading-relaxed">${point}</p>
                </div>
              `).join('')}
            </div>
          </div>
          ` : ''}
          
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
            <h3 class="text-xl font-sans font-bold text-gray-900 mb-4">${t.about.certifications}</h3>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-white text-gray-800 rounded-lg text-sm font-medium shadow-sm">SMEDA Grade Medium II</span>
              <span class="px-4 py-2 bg-white text-gray-800 rounded-lg text-sm font-medium shadow-sm">Made in Moris Certified</span>
              <span class="px-4 py-2 bg-white text-gray-800 rounded-lg text-sm font-medium shadow-sm">European Standards</span>
              <span class="px-4 py-2 bg-white text-gray-800 rounded-lg text-sm font-medium shadow-sm">Export Ready</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Product Showcase Section - Large Hero Images -->
      <section id="showcase" class="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 scroll-animate">
            <h2 class="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">${t.showcase.title}</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto font-sans">${t.showcase.subtitle}</p>
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
                      
                      <h3 class="text-2xl md:text-3xl font-sans font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        ${item.title}
                      </h3>
                      
                      <p class="text-lg text-gray-600 mb-6 leading-relaxed font-sans">
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

      <!-- Products Section - Grid with Photos -->
      <section id="products" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 scroll-animate">
            <h2 class="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">${t.products.title}</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto font-sans">${t.products.subtitle}</p>
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
                  <h3 class="font-sans font-bold text-gray-900 text-sm md:text-base leading-tight group-hover:text-blue-600 transition-colors duration-300">
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
            <h2 class="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">${t.partners.title}</h2>
            <p class="text-lg text-gray-600 font-sans">${t.partners.subtitle}</p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            ${t.partners.items.map((partner, idx) => {
              const logos = ['/static/logo-acebond.png', '/static/logo-assa-abloy.png', '/static/logo-gns.png'];
              return `
              <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 scroll-animate">
                <div class="h-20 mb-6 flex items-center justify-center">
                  <img src="${logos[idx]}" alt="${partner.name}" class="max-h-full max-w-full object-contain">
                </div>
                <h3 class="text-lg font-sans font-bold text-gray-900 mb-4">${partner.name}</h3>
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

      <!-- Inquiry Section -->
      <section id="inquiry" class="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4 text-center">${t.inquiry.title}</h2>
          <p class="text-gray-600 text-center mb-10 font-sans max-w-2xl mx-auto">${t.inquiry.subtitle}</p>
          
          <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10">
            <!-- Role Selector -->
            <div class="mb-8">
              <label class="block text-sm font-semibold text-gray-700 mb-3">${t.inquiry.roleLabel}</label>
              <div class="grid grid-cols-3 gap-3">
                <button type="button" onclick="selectInquiryRole('client')" id="role-client" class="inquiry-role-btn px-4 py-3 rounded-xl border-2 border-blue-600 bg-blue-50 text-blue-700 font-semibold text-sm transition-all duration-200 hover:shadow-md">
                  <span class="block text-xl mb-1">🏠</span>${t.inquiry.roles.client}
                </button>
                <button type="button" onclick="selectInquiryRole('supplier')" id="role-supplier" class="inquiry-role-btn px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-600 font-semibold text-sm transition-all duration-200 hover:shadow-md hover:border-gray-300">
                  <span class="block text-xl mb-1">🏭</span>${t.inquiry.roles.supplier}
                </button>
                <button type="button" onclick="selectInquiryRole('partner')" id="role-partner" class="inquiry-role-btn px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-600 font-semibold text-sm transition-all duration-200 hover:shadow-md hover:border-gray-300">
                  <span class="block text-xl mb-1">🤝</span>${t.inquiry.roles.partner}
                </button>
              </div>
            </div>

            <!-- Common Fields -->
            <div class="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">${t.inquiry.common.name} *</label>
                <input type="text" id="inq-name" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm font-sans" placeholder="${t.inquiry.common.name}">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">${t.inquiry.common.email} *</label>
                <input type="email" id="inq-email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm font-sans" placeholder="${t.inquiry.common.email}">
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">${t.inquiry.common.phone}</label>
                <input type="tel" id="inq-phone" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm font-sans" placeholder="+230 XXXX XXXX">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">${t.inquiry.common.company}</label>
                <input type="text" id="inq-company" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm font-sans" placeholder="${t.inquiry.common.company}">
              </div>
            </div>

            <!-- CLIENT Fields -->
            <div id="fields-client" class="role-fields">
              <div class="border-t border-gray-200 pt-6 mb-4">
                <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">📋 ${t.inquiry.client.sectionTitle}</h3>
              </div>
              <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">${t.inquiry.client.projectType}</label>
                  <select id="inq-projectType" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm font-sans bg-white">
                    <option value="">&mdash;</option>
                    <option value="residential">${t.inquiry.client.projectTypes.residential}</option>
                    <option value="commercial">${t.inquiry.client.projectTypes.commercial}</option>
                    <option value="industrial">${t.inquiry.client.projectTypes.industrial}</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">${t.inquiry.client.location}</label>
                  <input type="text" id="inq-location" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm font-sans" placeholder="${t.inquiry.client.locationPlaceholder}">
                </div>
              </div>
              <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">${t.inquiry.client.budget}</label>
                  <select id="inq-budget" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm font-sans bg-white">
                    <option value="">&mdash;</option>
                    <option value="under500k">${t.inquiry.client.budgets.under500k}</option>
                    <option value="500k1m">${t.inquiry.client.budgets['500k1m']}</option>
                    <option value="1m3m">${t.inquiry.client.budgets['1m3m']}</option>
                    <option value="3m5m">${t.inquiry.client.budgets['3m5m']}</option>
                    <option value="above5m">${t.inquiry.client.budgets.above5m}</option>
                    <option value="undisclosed">${t.inquiry.client.budgets.undisclosed}</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">${t.inquiry.client.timeline}</label>
                  <select id="inq-timeline" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm font-sans bg-white">
                    <option value="">&mdash;</option>
                    <option value="urgent">${t.inquiry.client.timelines.urgent}</option>
                    <option value="short">${t.inquiry.client.timelines.short}</option>
                    <option value="medium">${t.inquiry.client.timelines.medium}</option>
                    <option value="long">${t.inquiry.client.timelines.long}</option>
                    <option value="flexible">${t.inquiry.client.timelines.flexible}</option>
                  </select>
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">${t.inquiry.client.quantity}</label>
                <input type="text" id="inq-quantity" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm font-sans" placeholder="${t.inquiry.client.quantityPlaceholder}">
              </div>
            </div>

            <!-- SUPPLIER Fields -->
            <div id="fields-supplier" class="role-fields hidden">
              <div class="border-t border-gray-200 pt-6 mb-4">
                <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">🏭 ${t.inquiry.supplier.sectionTitle}</h3>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">${t.inquiry.supplier.products}</label>
                <textarea id="inq-supplierProducts" rows="3" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm font-sans resize-vertical" placeholder="${t.inquiry.supplier.productsPlaceholder}"></textarea>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">${t.inquiry.supplier.country}</label>
                <input type="text" id="inq-supplierCountry" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm font-sans" placeholder="${t.inquiry.supplier.countryPlaceholder}">
              </div>
            </div>

            <!-- PARTNER Fields -->
            <div id="fields-partner" class="role-fields hidden">
              <div class="border-t border-gray-200 pt-6 mb-4">
                <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">🤝 ${t.inquiry.partner.sectionTitle}</h3>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">${t.inquiry.partner.interest}</label>
                <select id="inq-partnerInterest" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm font-sans bg-white">
                  <option value="">&mdash;</option>
                  <option value="distribution">${t.inquiry.partner.interests.distribution}</option>
                  <option value="joint">${t.inquiry.partner.interests.joint}</option>
                  <option value="technical">${t.inquiry.partner.interests.technical}</option>
                  <option value="investment">${t.inquiry.partner.interests.investment}</option>
                  <option value="other">${t.inquiry.partner.interests.other}</option>
                </select>
              </div>
            </div>

            <!-- Message (all roles) -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-1">${t.inquiry.common.message} *</label>
              <textarea id="inq-message" rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm font-sans resize-vertical" placeholder="${t.inquiry.common.message}..."></textarea>
            </div>

            <!-- Submit -->
            <button id="inq-submit" onclick="submitInquiryForm()" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-sm">
              ${t.inquiry.common.submit}
            </button>
            <div id="inq-status" class="hidden text-center py-3 px-4 rounded-lg text-sm font-sans mt-4"></div>
            <p class="text-xs text-gray-400 text-center mt-3 font-sans">${t.inquiry.common.required}</p>
          </div>
        </div>
      </section>

      <!-- Contact Section - Updated with Full Details -->
      <section id="contact" class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-12 text-center">${t.contact.title}</h2>
          
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
              <p class="text-sm text-gray-600 font-sans">${t.contact.address}</p>
            </div>
          </div>
          
          <!-- Google Maps Embedded Location -->
          <div class="mt-12 scroll-animate">
            <h3 class="text-2xl font-sans font-bold text-gray-900 mb-6 text-center">📍 Our Location</h3>
            <div class="rounded-xl overflow-hidden shadow-2xl border-4 border-blue-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.8!2d57.550!3d-20.250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5b7e6b7e6b7e%3A0x0!2zMjDCsDE1JzAwLjAiUyA1N8KwMzMnMDAuMCJF!5e0!3m2!1sen!2smu!4v1699999999999" 
                width="100%" 
                height="450" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="MOI Location - DBM SME Park, Quartier Militaire, Mauritius">
              </iframe>
            </div>
            <p class="text-center mt-4 text-sm text-gray-600 font-sans">
              <strong class="text-gray-900">Unit 29 - Block 8, DBM SME Park</strong><br>
              Vuillemin, Quartier Militaire, Mauritius<br>
              <span class="text-xs text-gray-500">Coordinates: 20°15'S 57°33'E</span>
            </p>
          </div>
          
          <!-- QR Code Section -->
          <div class="mt-16 text-center scroll-animate">
            <h3 class="text-2xl font-sans font-bold text-gray-900 mb-4">${t.contact.qrTitle || 'Scan to Visit Our Website'}</h3>
            <p class="text-gray-600 mb-6 font-sans">${t.contact.qrSubtitle || 'Scan this QR code with your phone camera'}</p>
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
          <p class="text-gray-400 mb-2 font-sans">Menuiserie de l'Océan Indien Ltée</p>
          <p class="text-sm text-gray-500 font-sans">© 2025 Menuiserie de l'Océan Indien Ltée. All rights reserved. | Made in Moris | Grade MEDIUM II Contractor</p>
        </div>
      </footer>
      
      <!-- Floating WhatsApp Button -->
      <a href="https://wa.me/23059402190?text=Hello%20MOI%20Aluminium%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." target="_blank" class="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center gap-2 pl-4 pr-5 py-3">
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.331 0-4.502-.726-6.289-1.964l-.438-.312-2.65.888.888-2.65-.312-.438A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
        <span class="text-sm font-semibold hidden sm:inline">WhatsApp Us</span>
      </a>

      <!-- Floating Language Indicator (Mobile) -->
      <div class="fixed bottom-6 right-6 md:hidden z-40 bg-white rounded-full shadow-2xl border-2 border-blue-600 p-1">
        <div class="flex gap-1">
          <button onclick="window.moiApp.setLang('en')" class="w-10 h-10 flex items-center justify-center text-xs font-bold ${currentLang==='en'?'bg-blue-600 text-white':'bg-white text-gray-700'} rounded-full transition-all">EN</button>
          <button onclick="window.moiApp.setLang('fr')" class="w-10 h-10 flex items-center justify-center text-xs font-bold ${currentLang==='fr'?'bg-blue-600 text-white':'bg-white text-gray-700'} rounded-full transition-all">FR</button>
          <button onclick="window.moiApp.setLang('zh')" class="w-10 h-10 flex items-center justify-center text-xs font-bold ${currentLang==='zh'?'bg-blue-600 text-white':'bg-white text-gray-700'} rounded-full transition-all">中文</button>
        </div>
      </div>
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

  // Inquiry form - role selection
  let currentRole = 'client';
  window.selectInquiryRole = function(role) {
    currentRole = role;
    // Update button styles
    document.querySelectorAll('.inquiry-role-btn').forEach(btn => {
      btn.className = 'inquiry-role-btn px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-600 font-semibold text-sm transition-all duration-200 hover:shadow-md hover:border-gray-300';
    });
    const activeBtn = document.getElementById('role-' + role);
    if (activeBtn) {
      activeBtn.className = 'inquiry-role-btn px-4 py-3 rounded-xl border-2 border-blue-600 bg-blue-50 text-blue-700 font-semibold text-sm transition-all duration-200 hover:shadow-md';
    }
    // Show/hide role-specific fields
    document.querySelectorAll('.role-fields').forEach(el => el.classList.add('hidden'));
    const fields = document.getElementById('fields-' + role);
    if (fields) fields.classList.remove('hidden');
  };

  // Inquiry form - submission
  window.submitInquiryForm = async function() {
    const name = document.getElementById('inq-name').value.trim();
    const email = document.getElementById('inq-email').value.trim();
    const phone = document.getElementById('inq-phone').value.trim();
    const company = document.getElementById('inq-company').value.trim();
    const message = document.getElementById('inq-message').value.trim();
    const btn = document.getElementById('inq-submit');
    const status = document.getElementById('inq-status');

    if (!name || !email || !message) {
      status.className = 'text-center py-3 px-4 rounded-lg text-sm font-sans bg-red-50 text-red-700 border border-red-200 mt-4';
      status.textContent = 'Please fill in all required fields (Name, Email, Message).';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.className = 'text-center py-3 px-4 rounded-lg text-sm font-sans bg-red-50 text-red-700 border border-red-200 mt-4';
      status.textContent = 'Please enter a valid email address.';
      return;
    }

    // Gather role-specific data
    let roleData = {};
    if (currentRole === 'client') {
      roleData = {
        projectType: document.getElementById('inq-projectType')?.value || '',
        location: document.getElementById('inq-location')?.value?.trim() || '',
        budget: document.getElementById('inq-budget')?.value || '',
        timeline: document.getElementById('inq-timeline')?.value || '',
        quantity: document.getElementById('inq-quantity')?.value?.trim() || ''
      };
    } else if (currentRole === 'supplier') {
      roleData = {
        products: document.getElementById('inq-supplierProducts')?.value?.trim() || '',
        country: document.getElementById('inq-supplierCountry')?.value?.trim() || ''
      };
    } else if (currentRole === 'partner') {
      roleData = {
        interest: document.getElementById('inq-partnerInterest')?.value || ''
      };
    }

    btn.disabled = true;
    btn.textContent = btn.textContent.includes('Sending') ? btn.textContent : 'Sending...';
    btn.classList.add('opacity-60', 'cursor-not-allowed');
    status.className = 'hidden';

    try {
      // Build details text
      let details = '';
      if (currentRole === 'client') {
        details += 'Project Type: ' + (roleData.projectType || '-') + ', ';
        details += 'Location: ' + (roleData.location || '-') + ', ';
        details += 'Budget: ' + (roleData.budget || '-') + ', ';
        details += 'Timeline: ' + (roleData.timeline || '-') + ', ';
        details += 'Quantities: ' + (roleData.quantity || '-');
      } else if (currentRole === 'supplier') {
        details += 'Products/Services: ' + (roleData.products || '-') + ', ';
        details += 'Country: ' + (roleData.country || '-');
      } else if (currentRole === 'partner') {
        details += 'Partnership Interest: ' + (roleData.interest || '-');
      }

      // Send to Google Apps Script (sends email)
      var params = new URLSearchParams({
        role: currentRole,
        name: name,
        email: email,
        phone: phone || '-',
        company: company || '-',
        details: details.trim(),
        message: message
      });
      var img = new Image();
      img.src = 'https://script.google.com/macros/s/AKfycbxWIthws62Xr8a13g5J6u3izoNaWLRXdVVerbHVF4mRKQB-hL7LzL2oTAuylRSVP6a0gw/exec?' + params.toString();

      var data = { success: true };

      if (data.success) {
        status.className = 'text-center py-3 px-4 rounded-lg text-sm font-sans bg-green-50 text-green-700 border border-green-200 mt-4';
        status.textContent = 'Thank you! Your inquiry has been sent. We will get back to you soon.';
        // Clear all fields
        ['inq-name','inq-email','inq-phone','inq-company','inq-message','inq-projectType','inq-location','inq-budget','inq-timeline','inq-quantity','inq-supplierProducts','inq-supplierCountry','inq-partnerInterest'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = '';
        });
      } else {
        status.className = 'text-center py-3 px-4 rounded-lg text-sm font-sans bg-red-50 text-red-700 border border-red-200 mt-4';
        status.textContent = data.message || 'Something went wrong. Please try again.';
      }
    } catch (err) {
      status.className = 'text-center py-3 px-4 rounded-lg text-sm font-sans bg-red-50 text-red-700 border border-red-200 mt-4';
      status.textContent = 'Network error. Please check your connection and try again.';
    }

    btn.disabled = false;
    btn.textContent = translations[currentLang]?.inquiry?.common?.submit || 'Submit Inquiry';
    btn.classList.remove('opacity-60', 'cursor-not-allowed');
  };
  
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
