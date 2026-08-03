(function () {
  const siteName = "Agile Edtech Solutions Pvt Ltd";
  const siteUrl = window.location.origin;
  const ogImage = "https://agilesolutionpvtltd.vercel.app/assets/images/agile-edtech-solutions-logo.png";

  const defaultTitle =
    "Web Development & Digital Marketing Company Jaipur";
  const defaultDescription =
    "Jaipur web development and digital marketing company for SEO, Google Ads, custom software and mobile apps. Call Agile Solutions for a free consultation.";
  const defaultKeywords =
    "Website Development Company in Jaipur, Website Designer in Jaipur, Digital Marketing Company Jaipur, SEO Company Jaipur, Google Ads Jaipur, Facebook Ads Jaipur, Agile Edtech Solutions Pvt Ltd";

  const seoMap = {
    "index.html": {
      title: defaultTitle,
      description: defaultDescription,
      keywords: defaultKeywords,
    },
    "android-app-development.html": {
      title: "Android App Development Company in Jaipur | Agile Edtech Solutions",
      description:
        "Build high-performance Android apps with Agile Edtech Solutions Pvt Ltd in Jaipur, from UI/UX and coding to testing, launch, and ongoing support.",
      keywords:
        "Android App Development Company Jaipur, Android App Developer Jaipur, Mobile App Development Jaipur, Kotlin App Development, Agile Edtech Solutions",
    },
    "about-us.html": {
      title: "About Us | Agile Edtech Solutions Pvt Ltd Jaipur",
      description:
        "Know more about Agile Edtech Solutions Pvt Ltd, a Jaipur-based website development and digital marketing company focused on SEO, Google Ads, Facebook Ads, apps, and software solutions.",
      keywords:
        "About Agile Edtech Solutions, Digital Marketing Company Jaipur, Website Development Company Jaipur, SEO and Google Ads Jaipur",
    },
    "api-development.html": {
      title: "API Development & Integration Services in Jaipur | Agile Edtech Solutions",
      description:
        "Secure API development and third-party integration services in Jaipur for websites, apps, CRM, ERP, and automation workflows.",
      keywords:
        "API Development Company Jaipur, API Integration Services Jaipur, REST API Development Jaipur, Third Party API Integration, Agile Edtech Solutions",
    },
    "app-store-optimization.html": {
      title: "App Store Optimization (ASO) Services in Jaipur | Agile Edtech Solutions",
      description:
        "Increase app visibility and installs with ASO services in Jaipur including keyword optimization, creative testing, and conversion-focused listing updates.",
      keywords:
        "ASO Services Jaipur, App Store Optimization Jaipur, Increase App Downloads, Play Store Optimization, App Marketing Jaipur",
    },
    "bulk-services.html": {
      title: "Bulk SMS, Calls & WhatsApp Marketing in Jaipur | Agile Edtech Solutions",
      description:
        "Run bulk communication campaigns with SMS, voice calls, and WhatsApp marketing solutions in Jaipur to improve reach, response, and lead generation.",
      keywords:
        "Bulk SMS Jaipur, Bulk WhatsApp Marketing Jaipur, Voice Call Services Jaipur, Bulk Marketing Services Jaipur, Lead Generation Jaipur",
    },
    "rcs-service.html": {
      title: "RCS Service Provider in Jaipur | RCS Business Messaging",
      description:
        "Agile Edtech Solutions provides RCS business messaging services in Jaipur for verified brand messages, rich media campaigns, carousels, buttons, analytics, and SMS fallback workflows.",
      keywords:
        "RCS Service Provider Jaipur, RCS Business Messaging Jaipur, RCS Marketing Services, Rich Communication Services for Business, RCS API Integration, Verified Business Messaging Jaipur",
    },
    "contact.html": {
      title: "Contact Agile Edtech Solutions Pvt Ltd | Website Designer in Jaipur",
      description:
        "Contact Agile Edtech Solutions Pvt Ltd, Jaipur for website design, SEO, Google Ads, Facebook Ads, and digital marketing services. Call +91-8005677079 or WhatsApp now.",
      keywords:
        "Contact Agile Edtech Solutions, Website Designer Jaipur Contact, Digital Marketing Agency Jaipur Contact, +91-8005677079, Jagatpura Jaipur",
    },
    "crm-solutions.html": {
      title: "CRM Development Company in Jaipur | Custom CRM Solutions",
      description:
        "Get custom CRM development services in Jaipur to streamline sales, automate follow-ups, track leads, and improve customer lifecycle management.",
      keywords:
        "CRM Development Company Jaipur, Custom CRM Software Jaipur, Sales CRM Jaipur, Lead Management Software Jaipur, Agile Edtech Solutions",
    },
    "custom-software.html": {
      title: "Custom Software Development Company in Jaipur | Agile Edtech Solutions",
      description:
        "End-to-end custom software development in Jaipur for startups and enterprises, including planning, architecture, development, deployment, and support.",
      keywords:
        "Custom Software Development Jaipur, Software Company Jaipur, Enterprise Software Jaipur, Business Software Development Jaipur, Agile Edtech Solutions",
    },
    "digital-marketing.html": {
      title: "Digital Marketing Company in Jaipur | Agile Edtech Solutions Pvt Ltd",
      description:
        "Performance-focused digital marketing in Jaipur including SEO, Google Ads, Facebook Ads, and lead generation campaigns for startups and growing businesses.",
      keywords:
        "Digital Marketing Company Jaipur, SEO Services Jaipur, Google Ads Agency Jaipur, Facebook Ads Agency Jaipur, Performance Marketing Jaipur",
    },
    "ecommerce.html": {
      title: "E-Commerce Website Development in Jaipur | Agile Edtech Solutions",
      description:
        "Launch and scale your online store with e-commerce website development in Jaipur, including payment gateway integration and conversion-driven design.",
      keywords:
        "Ecommerce Website Development Jaipur, Online Store Development Jaipur, Shopify Development Jaipur, WooCommerce Development Jaipur, Ecommerce Company Jaipur",
    },
    "facebook-ads.html": {
      title: "Facebook & Instagram Ads Agency in Jaipur | Agile Edtech Solutions",
      description:
        "Drive qualified leads and sales with Facebook and Instagram ads services in Jaipur, including targeting strategy, creatives, and performance optimization.",
      keywords:
        "Facebook Ads Jaipur, Instagram Ads Jaipur, Meta Ads Agency Jaipur, Social Media Ads Jaipur, Lead Ads Jaipur",
    },
    "google-business.html": {
      title: "Google Business Profile Optimization in Jaipur | Agile Edtech Solutions",
      description:
        "Improve local visibility with Google Business Profile setup and optimization in Jaipur, including profile updates, categories, posts, and local ranking support.",
      keywords:
        "Google Business Profile Jaipur, Google My Business Optimization Jaipur, Local Business Listing Jaipur, GBP Optimization Jaipur, Maps Ranking Jaipur",
    },
    "ios-app-development.html": {
      title: "iOS App Development Company in Jaipur | Agile Edtech Solutions",
      description:
        "Professional iOS app development services in Jaipur for iPhone and iPad apps with robust performance, intuitive UX, and App Store-ready delivery.",
      keywords:
        "iOS App Development Company Jaipur, iPhone App Development Jaipur, Swift App Development Jaipur, Mobile App Developer Jaipur, Agile Edtech Solutions",
    },
    "job-opportunity.html": {
      title: "Join Our Team | Job Opportunities at Agile Edtech Solutions Jaipur",
      description:
        "Explore current job openings at Agile Edtech Solutions Pvt Ltd in Jaipur across development, sales, marketing, design, SEO, and content roles. Apply now.",
      keywords:
        "Jobs in Jaipur IT Company, Web Developer Jobs Jaipur, Digital Marketing Jobs Jaipur, SEO Jobs Jaipur, Sales Executive Jobs Jaipur, Agile Edtech Solutions Careers",
    },
    "lead-generation.html": {
      title: "Lead Generation Company in Jaipur | Agile Edtech Solutions",
      description:
        "Generate high-quality business leads through multi-channel campaigns in Jaipur using landing pages, paid ads, retargeting, and conversion optimization.",
      keywords:
        "Lead Generation Company Jaipur, B2B Leads Jaipur, Digital Lead Generation Jaipur, Performance Lead Campaigns Jaipur, Sales Leads Jaipur",
    },
    "local-seo.html": {
      title: "Local SEO Services in Jaipur | Rank on Google Maps",
      description:
        "Boost local search rankings in Jaipur with local SEO services including Google Business optimization, citation building, review strategy, and local content.",
      keywords:
        "Local SEO Jaipur, Google Maps SEO Jaipur, Local SEO Services Jaipur, GMB Ranking Jaipur, Near Me SEO Jaipur",
    },
    "mobile-application-development.html": {
      title: "Mobile App Development Company in Jaipur | Android & iOS Apps",
      description:
        "Agile Edtech Solutions offers mobile app development in Jaipur for Android and iOS, focused on user experience, speed, scalability, and business goals.",
      keywords:
        "Mobile App Development Jaipur, Android iOS App Development Jaipur, App Development Company Jaipur, Custom Mobile Apps Jaipur, Agile Edtech Solutions",
    },
    "our-work.html": {
      title: "Our Work Portfolio | Agile Edtech Solutions Pvt Ltd Jaipur",
      description:
        "Explore completed website development, app development, and digital marketing projects delivered by Agile Edtech Solutions across multiple industries.",
      keywords:
        "Agile Edtech Solutions Portfolio, Website Development Work Jaipur, Digital Marketing Case Studies Jaipur, App Development Portfolio Jaipur",
    },
    "paid-advertising.html": {
      title: "Paid Advertising Agency in Jaipur | Google & Meta Ads",
      description:
        "Maximize ROI with paid advertising services in Jaipur across Google Ads, Meta Ads, and remarketing campaigns managed for measurable growth.",
      keywords:
        "Paid Advertising Jaipur, Google Ads Services Jaipur, Meta Ads Services Jaipur, PPC Advertising Jaipur, Performance Advertising Jaipur",
    },
    "ppc.html": {
      title: "PPC Management Company in Jaipur | Agile Edtech Solutions",
      description:
        "Get result-driven PPC management in Jaipur with campaign setup, keyword strategy, ad copy testing, bid optimization, and conversion tracking.",
      keywords:
        "PPC Company Jaipur, Pay Per Click Services Jaipur, Google Ads PPC Jaipur, PPC Management Jaipur, Search Ads Jaipur",
    },
    "privacy-policy.html": {
      title: "Privacy Policy | Agile Edtech Solutions Pvt Ltd",
      description:
        "Read the Privacy Policy of Agile Edtech Solutions Pvt Ltd to understand how we collect, use, store, and protect your personal information.",
      keywords:
        "Privacy Policy Agile Edtech Solutions, Data Privacy Policy Jaipur, Personal Data Policy",
    },
    "website-design-development.html": {
      title: "Website Design & Development Company in Jaipur | Agile Edtech Solutions",
      description:
        "Professional website design and development services in Jaipur for business websites, custom portals, and conversion-focused landing pages.",
      keywords:
        "Website Design Company Jaipur, Website Development Company Jaipur, Web Designer Jaipur, Business Website Jaipur, Responsive Website Jaipur",
    },
    "shopping-ads.html": {
      title: "Google Shopping Ads Services in Jaipur | Agile Edtech Solutions",
      description:
        "Scale e-commerce sales with Google Shopping Ads management in Jaipur, including product feed optimization, campaign setup, and smart bidding strategies.",
      keywords:
        "Google Shopping Ads Jaipur, Shopping Campaign Management Jaipur, Product Feed Optimization Jaipur, Ecommerce Ads Jaipur, PLA Ads Jaipur",
    },
    "smo.html": {
      title: "Social Media Management Company in Jaipur | Agile Edtech Solutions",
      description:
        "Build your brand with social media management services in Jaipur for content planning, audience growth, engagement, and platform-wise optimization.",
      keywords:
        "Social Media Management Jaipur, SMO Services Jaipur, Social Media Marketing Jaipur, Instagram Marketing Jaipur, Facebook Marketing Jaipur",
    },
    "terms-and-conditions.html": {
      title: "Terms and Conditions | Agile Edtech Solutions Pvt Ltd",
      description:
        "Read the Terms and Conditions for using Agile Edtech Solutions Pvt Ltd website and services, including usage policies and legal obligations.",
      keywords:
        "Terms and Conditions Agile Edtech Solutions, Website Terms Jaipur, Service Terms",
    },
    "web-development.html": {
      title: "Web Development Company in Jaipur | Agile Edtech Solutions Pvt Ltd",
      description:
        "Build fast, scalable, SEO-friendly websites with Agile Edtech Solutions Pvt Ltd, a trusted web development company in Jaipur.",
      keywords:
        "Web Development Company Jaipur, Custom Website Development Jaipur, Website Developer Jaipur, Web Application Development Jaipur, Agile Edtech Solutions",
    },
    "whatsapp-api.html": {
      title: "WhatsApp API Solutions in Jaipur | Agile Edtech Solutions",
      description:
        "Enable automated customer communication with WhatsApp API solutions in Jaipur for notifications, support, marketing journeys, and business workflows.",
      keywords:
        "WhatsApp API Provider Jaipur, WhatsApp Business API Jaipur, WhatsApp Automation Jaipur, WhatsApp Marketing Jaipur, Meta API Jaipur",
    },
    "wordpress-shopify.html": {
      title: "WordPress & Shopify Development in Jaipur | Agile Edtech Solutions",
      description:
        "Custom WordPress and Shopify development in Jaipur for fast, SEO-friendly, conversion-focused websites and e-commerce stores.",
      keywords:
        "WordPress Development Jaipur, Shopify Development Jaipur, CMS Website Jaipur, Ecommerce Shopify Jaipur, WooCommerce Developer Jaipur",
    },
    "seo.html": {
      title: "SEO Company in Jaipur | Local SEO & Organic Growth Services",
      description:
        "Grow organic traffic with Agile Edtech Solutions SEO services in Jaipur, including on-page SEO, technical SEO, local SEO, and content strategy.",
      keywords:
        "SEO Company Jaipur, SEO Services Jaipur, Local SEO Jaipur, Technical SEO Jaipur, Organic Ranking Jaipur",
    },
  };

  const faqMap = {
    "contact.html": [
      {
        q: "How can I contact Agile Edtech Solutions Pvt Ltd in Jaipur?",
        a: "You can call us at +91-8005677079, send a WhatsApp message at https://wa.me/918005677079, or visit our office at Shop - 17, Green Commercial Park, C-2SF, Jagatpura, Jaipur, Rajasthan 302017.",
      },
      {
        q: "What services can I discuss with your team?",
        a: "You can discuss website design and development, SEO, Google Ads, Facebook Ads, custom software, mobile app development, WhatsApp marketing, and lead generation services.",
      },
      {
        q: "Do you work with startups and established businesses?",
        a: "Yes. We work with startups, local businesses, and established brands looking to improve their digital presence and generate more leads.",
      },
      {
        q: "Where is your office located?",
        a: "Our office is located in Jagatpura, Jaipur at Shop - 17, Green Commercial Park, C-2SF, Rajasthan 302017.",
      },
    ],
    "our-work.html": [
      {
        q: "What kind of projects are included in your portfolio?",
        a: "Our portfolio includes website development, e-commerce websites, mobile applications, and digital marketing campaigns delivered across multiple industries.",
      },
      {
        q: "Can I request a similar design or feature set for my business?",
        a: "Yes. We can build a custom project inspired by your preferred portfolio examples, aligned with your brand and business goals.",
      },
      {
        q: "Do portfolio projects include SEO-ready development?",
        a: "Yes. We follow SEO-friendly development practices including clean structure, mobile responsiveness, speed optimization, and metadata implementation.",
      },
      {
        q: "How do I start a project with Agile Edtech Solutions?",
        a: "You can contact our team through phone, WhatsApp, or the contact form to schedule a consultation and share your requirements.",
      },
    ],
    "website-design-development.html": [
      {
        q: "Do you provide responsive website design in Jaipur?",
        a: "Yes. We build mobile-first, responsive websites that work smoothly across desktop, tablet, and smartphone devices.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Yes. We offer website redesign services to improve user experience, visual quality, performance, and conversion rates.",
      },
      {
        q: "Do you create SEO-friendly websites?",
        a: "Yes. We build SEO-ready websites with optimized structure, metadata, internal linking, and performance best practices.",
      },
      {
        q: "How long does website development usually take?",
        a: "Delivery timeline depends on project scope, but most business websites are completed in a few weeks after final requirements are approved.",
      },
    ],
    "web-development.html": [
      {
        q: "What type of web development services do you offer?",
        a: "We offer custom website development, business websites, landing pages, web portals, and feature-rich web applications.",
      },
      {
        q: "Is your web development process SEO-friendly?",
        a: "Yes. Our development process includes clean code structure, fast loading, mobile responsiveness, and technical SEO fundamentals.",
      },
      {
        q: "Do you support maintenance after launch?",
        a: "Yes. We provide post-launch maintenance, bug fixes, updates, and performance monitoring support.",
      },
      {
        q: "Can you integrate third-party tools and APIs?",
        a: "Yes. We can integrate CRMs, payment gateways, chat systems, analytics tools, and other third-party APIs.",
      },
    ],
    "ecommerce.html": [
      {
        q: "Do you build e-commerce websites with payment gateway integration?",
        a: "Yes. We develop e-commerce stores with secure payment gateway integration, product management, and order workflows.",
      },
      {
        q: "Which platforms do you support for e-commerce development?",
        a: "We support custom e-commerce builds and platform-based stores such as Shopify, WooCommerce, and other business-ready stacks.",
      },
      {
        q: "Can you optimize my store for conversions?",
        a: "Yes. We focus on conversion-friendly UX, fast checkout flow, trust signals, and product page optimization.",
      },
      {
        q: "Do you provide SEO for e-commerce websites?",
        a: "Yes. We implement SEO best practices for product pages, category structure, metadata, and technical performance.",
      },
    ],
    "wordpress-shopify.html": [
      {
        q: "Do you provide both WordPress and Shopify development in Jaipur?",
        a: "Yes. We develop business websites on WordPress and e-commerce stores on Shopify based on your goals and budget.",
      },
      {
        q: "Can you migrate an existing site to WordPress or Shopify?",
        a: "Yes. We provide migration support with data transfer, URL handling, and layout recreation while preserving essential content.",
      },
      {
        q: "Do you build custom themes and features?",
        a: "Yes. We build custom themes, templates, and feature modules to match your business processes and branding.",
      },
      {
        q: "Will my WordPress or Shopify site be SEO-ready?",
        a: "Yes. We configure SEO basics such as metadata, heading hierarchy, schema setup, and performance optimization.",
      },
    ],
    "crm-solutions.html": [
      {
        q: "What benefits do custom CRM solutions provide?",
        a: "Custom CRM solutions help manage leads, automate follow-ups, improve sales visibility, and streamline customer lifecycle workflows.",
      },
      {
        q: "Can you integrate CRM with my website and marketing tools?",
        a: "Yes. We integrate CRM with websites, forms, WhatsApp, email platforms, and ad lead systems for unified operations.",
      },
      {
        q: "Do you offer cloud-based CRM development?",
        a: "Yes. We build secure, scalable cloud-based CRM systems with role-based access and reporting dashboards.",
      },
      {
        q: "Can CRM modules be customized for my business process?",
        a: "Yes. We customize modules for sales, support, follow-ups, reminders, reporting, and workflow automation.",
      },
    ],
    "custom-software.html": [
      {
        q: "Do you build custom software for specific business workflows?",
        a: "Yes. We develop custom software tailored to your operations, team processes, and reporting requirements.",
      },
      {
        q: "Which industries do you serve for software development?",
        a: "We serve multiple industries including education, retail, services, and other SMEs with scalable software solutions.",
      },
      {
        q: "Do you provide ongoing support after deployment?",
        a: "Yes. We provide support, updates, and optimization after launch based on your maintenance plan.",
      },
      {
        q: "Can the software integrate with existing systems?",
        a: "Yes. We can integrate your software with APIs, payment systems, CRMs, and third-party platforms.",
      },
    ],
    "api-development.html": [
      {
        q: "What API services do you provide?",
        a: "We provide API architecture, custom API development, third-party API integration, and secure API lifecycle support.",
      },
      {
        q: "Do you work with REST APIs and webhook integrations?",
        a: "Yes. We work with REST APIs, webhook-based workflows, and system-to-system data synchronization.",
      },
      {
        q: "Can you integrate payment and communication APIs?",
        a: "Yes. We integrate payment gateways, WhatsApp APIs, SMS gateways, and other communication platforms.",
      },
      {
        q: "Do you ensure API security and performance?",
        a: "Yes. We implement authentication, rate limiting, validation, and optimization for secure and reliable API performance.",
      },
    ],
    "whatsapp-api.html": [
      {
        q: "What can I do with WhatsApp Business API integration?",
        a: "You can automate notifications, order updates, lead nurturing, customer support, and marketing communication on WhatsApp.",
      },
      {
        q: "Do you help with WhatsApp API setup for businesses?",
        a: "Yes. We assist with setup, template management, campaign workflows, and integration with your CRM or website.",
      },
      {
        q: "Can WhatsApp API be connected with lead forms and ads?",
        a: "Yes. We can connect lead sources and automate response journeys to improve conversion speed and quality.",
      },
      {
        q: "Is WhatsApp marketing compliant and trackable?",
        a: "Yes. We follow platform-friendly practices and implement tracking where possible for campaign and response analytics.",
      },
    ],
    "rcs-service.html": [
      {
        q: "What is RCS business messaging?",
        a: "RCS business messaging is an upgraded mobile messaging experience that can support verified sender identity, rich media, buttons, carousels, quick replies, and analytics inside supported messaging apps.",
      },
      {
        q: "How is RCS different from SMS?",
        a: "SMS is mostly text-based, while RCS can support branded profiles, images, videos, product cards, interactive actions, and more detailed engagement insights where supported.",
      },
      {
        q: "Can RCS be connected with CRM or website forms?",
        a: "Yes. We can help plan RCS workflows with CRM systems, website forms, lead generation campaigns, e-commerce processes, and support journeys.",
      },
      {
        q: "Do RCS campaigns support fallback messaging?",
        a: "Yes. We can plan fallback journeys so customers on unsupported devices or networks can still receive important updates through SMS or another suitable channel.",
      },
    ],
    "android-app-development.html": [
      {
        q: "Do you build custom Android apps for businesses in Jaipur?",
        a: "Yes. We develop custom Android applications aligned with your business goals, user flows, and growth plans.",
      },
      {
        q: "Which technologies do you use for Android app development?",
        a: "We use modern Android development technologies such as Kotlin and related frameworks based on project requirements.",
      },
      {
        q: "Do you provide Play Store deployment support?",
        a: "Yes. We support testing, optimization, listing setup, and Play Store deployment for Android applications.",
      },
      {
        q: "Can you maintain and update existing Android apps?",
        a: "Yes. We provide app maintenance, bug fixing, feature enhancement, and performance improvements.",
      },
    ],
    "ios-app-development.html": [
      {
        q: "Do you develop iOS apps for iPhone and iPad?",
        a: "Yes. We develop custom iOS apps for iPhone and iPad with a focus on performance, usability, and business outcomes.",
      },
      {
        q: "Do you provide App Store launch support?",
        a: "Yes. We support app preparation, compliance checks, metadata setup, and App Store submission workflows.",
      },
      {
        q: "Can you create cross-platform app strategy with iOS first?",
        a: "Yes. We can plan iOS-first or parallel rollout strategies based on audience, budget, and launch priorities.",
      },
      {
        q: "Do you provide ongoing iOS app support?",
        a: "Yes. We offer support for updates, maintenance, and iterative feature releases.",
      },
    ],
    "mobile-application-development.html": [
      {
        q: "Do you offer both Android and iOS app development services?",
        a: "Yes. We provide end-to-end mobile app development for both Android and iOS platforms.",
      },
      {
        q: "Can you help from idea to app launch?",
        a: "Yes. We handle planning, UI/UX, development, testing, launch, and post-launch support.",
      },
      {
        q: "Do you build scalable apps for growing businesses?",
        a: "Yes. We design app architecture and backend integration for scalability and long-term growth.",
      },
      {
        q: "Will the app be optimized for performance?",
        a: "Yes. Performance optimization, usability, and device compatibility are part of our standard app delivery process.",
      },
    ],
    "app-store-optimization.html": [
      {
        q: "What is included in your ASO service?",
        a: "Our ASO service includes keyword research, title and description optimization, visual assets guidance, and conversion improvement recommendations.",
      },
      {
        q: "Can ASO help increase app installs?",
        a: "Yes. Effective ASO can improve app visibility and listing conversion, resulting in more quality installs.",
      },
      {
        q: "Do you optimize both Play Store and App Store listings?",
        a: "Yes. We optimize listings for both major app stores based on platform-specific best practices.",
      },
      {
        q: "How long does ASO take to show results?",
        a: "Results vary by niche and competition, but visibility and conversion improvements are typically tracked over multiple optimization cycles.",
      },
    ],
    "digital-marketing.html": [
      {
        q: "What digital marketing services do you provide in Jaipur?",
        a: "We provide SEO, Google Ads, Facebook Ads, lead generation, social media marketing, and local business growth services.",
      },
      {
        q: "Do you create performance-focused campaigns?",
        a: "Yes. We build campaigns with measurable KPIs, conversion tracking, and continuous optimization for ROI.",
      },
      {
        q: "Can you manage both organic and paid growth?",
        a: "Yes. We combine organic channels like SEO with paid campaigns for balanced and scalable growth.",
      },
      {
        q: "Do you share regular marketing reports?",
        a: "Yes. We provide periodic reports with traffic, leads, ad performance, and actionable recommendations.",
      },
    ],
    "paid-advertising.html": [
      {
        q: "Which paid advertising platforms do you manage?",
        a: "We manage campaigns on Google Ads, Facebook Ads, Instagram Ads, and related performance advertising channels.",
      },
      {
        q: "Do you optimize ad spend for better ROI?",
        a: "Yes. We use data-driven optimization, audience refinement, and conversion tracking to improve campaign ROI.",
      },
      {
        q: "Can you run remarketing campaigns?",
        a: "Yes. We create remarketing strategies to re-engage visitors and improve conversion rates.",
      },
      {
        q: "Do you provide ad creatives and copy support?",
        a: "Yes. We support ad messaging, creative direction, and variation testing for stronger performance.",
      },
    ],
    "google-business.html": [
      {
        q: "Do you optimize Google Business Profile for local rankings?",
        a: "Yes. We optimize categories, business details, posts, photos, and profile structure to improve local discoverability.",
      },
      {
        q: "Can GBP optimization improve calls and visits?",
        a: "Yes. A well-optimized profile can improve map visibility and increase calls, direction requests, and local inquiries.",
      },
      {
        q: "Do you help with Google reviews strategy?",
        a: "Yes. We provide practical review strategy guidance to improve profile trust and engagement.",
      },
      {
        q: "Is this useful for service-area businesses?",
        a: "Yes. GBP optimization supports both storefront and service-area businesses for stronger local reach.",
      },
    ],
    "seo.html": [
      {
        q: "What is included in your SEO services in Jaipur?",
        a: "Our SEO services include technical audits, on-page optimization, local SEO, content strategy, and ranking performance tracking.",
      },
      {
        q: "Do you provide local SEO for Jaipur businesses?",
        a: "Yes. We provide local SEO including Google Business optimization, local keywords, and location-focused content strategy.",
      },
      {
        q: "How long does SEO take to show measurable results?",
        a: "SEO timelines depend on competition and website health, with meaningful improvements generally tracked over several months.",
      },
      {
        q: "Do you follow white-hat SEO practices?",
        a: "Yes. We follow sustainable, guideline-friendly SEO practices focused on long-term organic growth.",
      },
    ],
    "smo.html": [
      {
        q: "What does your social media management service include?",
        a: "Our SMO service includes content planning, posting, audience engagement, profile optimization, and performance tracking.",
      },
      {
        q: "Which social platforms do you manage?",
        a: "We manage key platforms such as Facebook and Instagram, with strategy tailored to your audience and goals.",
      },
      {
        q: "Can social media management help generate leads?",
        a: "Yes. With the right strategy, social media can improve brand reach, engagement, and lead flow.",
      },
      {
        q: "Do you provide monthly content and reporting?",
        a: "Yes. We deliver planned content calendars and periodic reports to track growth and campaign impact.",
      },
    ],
    "local-seo.html": [
      {
        q: "What is local SEO and why is it important?",
        a: "Local SEO helps your business appear in local search and map results, improving visibility for nearby customers.",
      },
      {
        q: "Do you optimize for near-me and city-based searches?",
        a: "Yes. We optimize pages, business profiles, and local content for high-intent local keywords.",
      },
      {
        q: "Can local SEO improve Google Maps ranking?",
        a: "Yes. We implement map-focused optimization tactics including profile consistency, content relevance, and local signals.",
      },
      {
        q: "Is local SEO suitable for multi-location businesses?",
        a: "Yes. We can plan local SEO structures for single-location and multi-location business models.",
      },
    ],
    "bulk-services.html": [
      {
        q: "What bulk marketing services do you offer?",
        a: "We offer bulk SMS, voice call campaigns, and WhatsApp marketing solutions for customer outreach and lead nurturing.",
      },
      {
        q: "Can I use bulk services for promotions and updates?",
        a: "Yes. Bulk services can be used for promotions, reminders, alerts, and campaign updates with proper targeting.",
      },
      {
        q: "Do you provide campaign setup and execution support?",
        a: "Yes. We support setup, message planning, targeting, and campaign performance monitoring.",
      },
      {
        q: "Is WhatsApp bulk communication integrated with business workflows?",
        a: "Yes. We can align WhatsApp communication flows with your lead and customer management process.",
      },
    ],
    "ppc.html": [
      {
        q: "Do you provide PPC campaign management in Jaipur?",
        a: "Yes. We provide full PPC campaign management including setup, targeting, bidding, and conversion optimization.",
      },
      {
        q: "Can you optimize existing Google Ads accounts?",
        a: "Yes. We audit and optimize existing campaigns to improve quality score, lead quality, and return on ad spend.",
      },
      {
        q: "Do you track conversions and lead quality?",
        a: "Yes. We implement conversion tracking and performance analysis to improve campaign outcomes.",
      },
      {
        q: "Which businesses benefit most from PPC?",
        a: "PPC works well for businesses seeking quick, targeted visibility and measurable lead generation.",
      },
    ],
    "facebook-ads.html": [
      {
        q: "Do you run Facebook and Instagram ad campaigns?",
        a: "Yes. We create and manage Facebook and Instagram campaigns for leads, sales, remarketing, and brand growth.",
      },
      {
        q: "Can you help reduce ad cost per lead?",
        a: "Yes. We optimize audience targeting, creatives, and funnel flow to improve lead quality and reduce CPL.",
      },
      {
        q: "Do you provide creative and copy support for Meta Ads?",
        a: "Yes. We support ad copy, visual direction, and testing of multiple creative variants.",
      },
      {
        q: "Can Facebook Ads help local Jaipur businesses?",
        a: "Yes. Local targeting options make Facebook Ads effective for Jaipur-based lead generation and awareness.",
      },
    ],
    "shopping-ads.html": [
      {
        q: "Do you manage Google Shopping Ads for e-commerce stores?",
        a: "Yes. We manage Google Shopping campaigns including feed setup, optimization, and bidding strategies.",
      },
      {
        q: "Can you optimize product feeds for better visibility?",
        a: "Yes. We optimize product titles, attributes, and feed quality to improve relevance and performance.",
      },
      {
        q: "Do Shopping Ads work for new online stores?",
        a: "Yes. With the right setup and product data quality, Shopping Ads can help new stores gain qualified traffic.",
      },
      {
        q: "Do you provide reporting for Shopping campaign performance?",
        a: "Yes. We share campaign insights on impressions, clicks, conversions, and return-focused metrics.",
      },
    ],
    "lead-generation.html": [
      {
        q: "What lead generation services do you provide?",
        a: "We provide multi-channel lead generation using landing pages, paid ads, retargeting, and conversion-focused strategy.",
      },
      {
        q: "Do you deliver leads for local and national businesses?",
        a: "Yes. We design lead generation campaigns for both local Jaipur businesses and broader target markets.",
      },
      {
        q: "How do you improve lead quality?",
        a: "We improve lead quality with better targeting, qualification steps, conversion tracking, and ongoing optimization.",
      },
      {
        q: "Can lead generation campaigns be scaled over time?",
        a: "Yes. We scale campaigns based on validated channels, budget efficiency, and conversion performance.",
      },
    ],
    "job-opportunity.html": [
      {
        q: "How can I apply for a job at Agile Edtech Solutions?",
        a: "You can apply directly through our Apply Now form and share your latest profile details with our hiring team.",
      },
      {
        q: "Which job roles are currently open?",
        a: "Current openings include Web Developer, Business Developer, Technical Sales Executive, Field Sales Executive, Digital Marketer, Graphics Designer, Content Writer, Video Editor, Content Creator, UI/UX Designer, SEO, and other profiles.",
      },
      {
        q: "Where is the company located?",
        a: "Our office is located at Shop - 17, Green Commercial Park, C-2SF, Jagatpura, Jaipur, Rajasthan 302017.",
      },
      {
        q: "Can freshers apply for suitable profiles?",
        a: "Yes. Candidates can apply for relevant roles based on their skills and experience, and our team will evaluate applications accordingly.",
      },
    ],
  };

  const serviceSchemaMap = {
    "website-design-development.html": "Website Design and Development",
    "web-development.html": "Web Development",
    "ecommerce.html": "E-Commerce Website Development",
    "wordpress-shopify.html": "WordPress and Shopify Development",
    "custom-software.html": "Custom Software Development",
    "crm-solutions.html": "CRM Development and Integration",
    "api-development.html": "API Development and Integration",
    "whatsapp-api.html": "WhatsApp API Integration",
    "rcs-service.html": "RCS Business Messaging Services",
    "mobile-application-development.html": "Mobile App Development",
    "android-app-development.html": "Android App Development",
    "ios-app-development.html": "iOS App Development",
    "app-store-optimization.html": "App Store Optimization",
    "digital-marketing.html": "Digital Marketing Services",
    "paid-advertising.html": "Paid Advertising Services",
    "google-business.html": "Google Business Profile Optimization",
    "seo.html": "Search Engine Optimization Services",
    "smo.html": "Social Media Management Services",
    "local-seo.html": "Local SEO Services",
    "bulk-services.html": "Bulk SMS, Calls and WhatsApp Marketing",
    "ppc.html": "PPC Management Services",
    "facebook-ads.html": "Facebook and Instagram Ads Management",
    "shopping-ads.html": "Google Shopping Ads Management",
    "lead-generation.html": "Lead Generation Services",
  };

  const industryPageConfigs = {
    "digital-marketing-agency-grocery.html": {
      title: "Best Digital Marketing Agency for Grocery Stores | Agile Edtech Solutions",
      description:
        "Agile Edtech Solutions is a best digital marketing agency for grocery stores, supermarkets and online grocery brands with SEO, Google Ads, local SEO and hyperlocal growth strategies.",
      keywords:
        "Best Digital Marketing Agency for Grocery Stores, Digital Marketing Company for Supermarkets, Grocery Store SEO Services, Local SEO for Grocery Business, Grocery Marketing Agency India",
      service: "Grocery Industry Digital Marketing Services",
      faqs: [
        { q: "Why does a grocery business need local SEO?", a: "Nearby searches and map visibility strongly influence walk-ins, calls, and grocery delivery enquiries." },
        { q: "Can you market both offline stores and online grocery brands?", a: "Yes. We create separate strategies for footfall-led stores and delivery-first grocery businesses." },
        { q: "Do you support seasonal grocery campaigns?", a: "Yes. We plan campaigns for festive demand, subscriptions, category offers, and recurring purchases." },
        { q: "How do you track results for grocery campaigns?", a: "We track calls, map actions, orders, enquiry intent, and repeat-customer engagement." },
      ],
    },
    "digital-marketing-agency-education.html": {
      title: "Best Digital Marketing Agency for Educational Institutes | Agile Edtech Solutions",
      description:
        "Agile Edtech Solutions is a best digital marketing agency for educational institutes, schools, colleges and universities with SEO, lead generation, Google Ads and admission marketing solutions.",
      keywords:
        "Best Digital Marketing Agency for Educational Institutes, Best Digital Marketing Company for School Colleges and Universities, Education Marketing Agency, SEO for Schools, Admission Lead Generation Company",
      service: "Education Industry Digital Marketing Services",
      faqs: [
        { q: "Do you market schools, colleges and universities?", a: "Yes. We tailor campaigns for schools, higher education institutes, universities, and coaching brands." },
        { q: "Can you help us rank for institute and course keywords?", a: "Yes. We optimize websites and landing pages for admissions, courses, campuses, and location-specific searches." },
        { q: "How do you improve admission lead quality?", a: "We refine targeting, landing pages, messaging, and follow-up journeys to attract more relevant prospects." },
        { q: "Do you support admission-season campaigns?", a: "Yes. We build campaigns around admissions open, scholarships, counselling, and intake deadlines." },
      ],
    },
    "digital-marketing-agency-ecommerce.html": {
      title: "Best Digital Marketing Agency for eCommerce Brands | Agile Edtech Solutions",
      description:
        "Agile Edtech Solutions is a best digital marketing agency for eCommerce websites, online stores and D2C brands with SEO, shopping ads, performance marketing and conversion optimization.",
      keywords:
        "Best Digital Marketing Agency for eCommerce, eCommerce SEO Company, Digital Marketing Company for Online Store, D2C Marketing Agency, Shopping Ads Agency India",
      service: "eCommerce Industry Digital Marketing Services",
      faqs: [
        { q: "Do you provide both SEO and paid marketing for eCommerce stores?", a: "Yes. We combine organic SEO, shopping ads, search campaigns, and remarketing to grow online sales." },
        { q: "Can you work with Shopify and WooCommerce?", a: "Yes. We support Shopify, WooCommerce, and custom eCommerce websites." },
        { q: "Do you optimize product and category pages?", a: "Yes. We improve structure, metadata, content, trust signals, and internal linking on key pages." },
        { q: "How do you measure eCommerce results?", a: "We track revenue, ROAS, conversion rate, cart recovery, and repeat purchase behaviour." },
      ],
    },
    "digital-marketing-agency-healthcare.html": {
      title: "Best Digital Marketing Agency for Healthcare Institutions | Agile Edtech Solutions",
      description:
        "Agile Edtech Solutions is a best digital marketing agency for doctors, clinics, hospitals and healthcare institutions with SEO, local SEO, Google Ads and patient lead generation solutions.",
      keywords:
        "Best Digital Marketing Agency for Healthcare Institutions, Best Digital Marketing Agency for Doctors Clinic and Hospitals, Healthcare SEO Company, Hospital Marketing Agency, Clinic Lead Generation Company",
      service: "Healthcare Industry Digital Marketing Services",
      faqs: [
        { q: "Do you market doctors, clinics and hospitals?", a: "Yes. We tailor campaigns for individual practitioners, clinics, hospitals, and diagnostic businesses." },
        { q: "Can you help my clinic rank locally on Google?", a: "Yes. We improve Google Business visibility, local pages, and location-focused SEO." },
        { q: "Why do healthcare landing pages need special structure?", a: "Patients compare expertise, convenience, credibility, and clarity before taking action." },
        { q: "How do you track healthcare results?", a: "We track calls, appointment forms, map actions, and service-wise enquiry trends." },
      ],
    },
    "digital-marketing-agency-restaurant.html": {
      title: "Best Digital Marketing Agency for Restaurants | Agile Edtech Solutions",
      description:
        "Agile Edtech Solutions is a best digital marketing agency for restaurants, cafes, cloud kitchens and food brands with local SEO, social media marketing, Google Ads and growth campaigns.",
      keywords:
        "Best Digital Marketing Agency for Restaurants, Restaurant Marketing Agency, Digital Marketing Company for Cafes, Local SEO for Restaurants, Cloud Kitchen Marketing Agency",
      service: "Restaurant Industry Digital Marketing Services",
      faqs: [
        { q: "Can you market both dine-in restaurants and cloud kitchens?", a: "Yes. We build separate growth strategies for dine-in brands, cafes, QSR chains, and delivery-first kitchens." },
        { q: "Do restaurants benefit from local SEO?", a: "Yes. Restaurant decisions are highly local and map visibility has a major effect on demand." },
        { q: "Can you promote menu launches and special nights?", a: "Yes. We run campaigns for brunches, events, festive menus, and new launches." },
        { q: "How do you track restaurant marketing performance?", a: "We track calls, directions, bookings, order intent, and campaign response." },
      ],
    },
    "digital-marketing-agency-real-estate.html": {
      title: "Best Digital Marketing Agency for Real Estate | Agile Edtech Solutions",
      description:
        "Agile Edtech Solutions is a best digital marketing agency for real estate developers, builders and brokers with SEO, lead generation, project landing pages and paid campaigns.",
      keywords:
        "Best Digital Marketing Agency for Real Estate, Real Estate Marketing Agency, Property Lead Generation Company, SEO for Real Estate Developers, Digital Marketing Company for Builders",
      service: "Real Estate Industry Digital Marketing Services",
      faqs: [
        { q: "Do you market builders and developers?", a: "Yes. We work with developers, brokers, consultants, and project marketers." },
        { q: "Can you run campaigns for multiple projects?", a: "Yes. We create separate landing pages and campaign structures for each project or location." },
        { q: "How do you improve real estate lead quality?", a: "We refine targeting, messaging, project pages, and remarketing to attract more serious buyers." },
        { q: "Do you support local property SEO?", a: "Yes. We optimize for city, locality, project, and property-type search demand." },
      ],
    },
    "digital-marketing-agency-tour-travels.html": {
      title: "Best Digital Marketing Agency for Tour and Travel Companies | Agile Edtech Solutions",
      description:
        "Agile Edtech Solutions is a best digital marketing agency for tour and travel companies, travel agents and holiday brands with SEO, lead generation and paid campaigns.",
      keywords:
        "Best Digital Marketing Agency for Tour and Travel Companies, Travel Marketing Agency, SEO for Travel Agents, Holiday Package Lead Generation, Digital Marketing Company for Travel Business",
      service: "Travel Industry Digital Marketing Services",
      faqs: [
        { q: "Can you market domestic and international travel packages?", a: "Yes. We support domestic tours, international packages, group trips, and niche travel offerings." },
        { q: "Do travel companies benefit from SEO?", a: "Yes. Destination and package searches are highly intent-driven, which makes SEO very valuable." },
        { q: "Can you run seasonal travel campaigns?", a: "Yes. We plan campaigns around holidays, summers, winters, and festival travel periods." },
        { q: "How do you track travel lead quality?", a: "We track calls, forms, WhatsApp chats, and package-specific enquiry trends." },
      ],
    },
    "digital-marketing-agency-transport.html": {
      title: "Best Digital Marketing Agency for Transport Companies | Agile Edtech Solutions",
      description:
        "Agile Edtech Solutions is a best digital marketing agency for transport companies, logistics services and fleet businesses with SEO, lead generation and B2B growth campaigns.",
      keywords:
        "Best Digital Marketing Agency for Transport Companies, Logistics Marketing Agency, SEO for Transport Business, Lead Generation for Logistics Company, Digital Marketing Company for Fleet Services",
      service: "Transport Industry Digital Marketing Services",
      faqs: [
        { q: "Do you market logistics and transport companies?", a: "Yes. We support transport firms, cargo businesses, and logistics providers with SEO and lead generation." },
        { q: "Can you generate B2B leads for transport services?", a: "Yes. We design campaigns around route, industry, load type, and commercial enquiry intent." },
        { q: "Do transport companies benefit from SEO?", a: "Yes. Buyers often search by route, city, and service requirement, which makes SEO highly relevant." },
        { q: "How do you measure transport campaign results?", a: "We track calls, quote requests, form submissions, and enquiry quality by service line." },
      ],
    },
    "digital-marketing-agency-event.html": {
      title: "Best Digital Marketing Agency for Event Management Companies | Agile Edtech Solutions",
      description:
        "Agile Edtech Solutions is a best digital marketing agency for event management companies, wedding planners and event brands with SEO, lead generation and social media campaigns.",
      keywords:
        "Best Digital Marketing Agency for Event Management Companies, Event Marketing Agency, Wedding Planner Marketing Company, SEO for Event Planner, Event Lead Generation Agency",
      service: "Event Industry Digital Marketing Services",
      faqs: [
        { q: "Do you provide digital marketing for wedding and event planners?", a: "Yes. We support wedding planners, event agencies, decorators, and corporate event brands." },
        { q: "Can you help event businesses get premium enquiries?", a: "Yes. We improve targeting, landing pages, and positioning to attract better-fit clients." },
        { q: "Do event businesses need social media marketing?", a: "Yes. Events are highly visual, so social content is a major discovery and trust channel." },
        { q: "How do you track event marketing performance?", a: "We track calls, quote forms, consultation requests, and campaign-level enquiry quality." },
      ],
    },
    "digital-marketing-agency-fintech.html": {
      title: "Best Digital Marketing Agency for Fintech Startups | Agile Edtech Solutions",
      description:
        "Agile Edtech Solutions is a best digital marketing agency for fintech startups, financial platforms and digital finance brands with SEO, paid growth and conversion-focused landing pages.",
      keywords:
        "Best Digital Marketing Agency for Fintech Startups, Fintech Marketing Agency, SEO for Finance Company, Digital Marketing Company for Financial Services, Fintech Lead Generation Company",
      service: "Fintech Industry Digital Marketing Services",
      faqs: [
        { q: "Do you provide digital marketing for fintech startups?", a: "Yes. We work with fintech, insurtech, lending, payments, and financial platform businesses." },
        { q: "Can you help explain complex fintech products better?", a: "Yes. We create clear landing pages and educational content that improve conversion confidence." },
        { q: "Does fintech SEO help growth?", a: "Yes. Users search for financial solutions, comparisons, and educational content before they convert." },
        { q: "How do you measure fintech marketing results?", a: "We track qualified signups, demos, lead quality, and onboarding-related conversion trends." },
      ],
    },
    "digital-marketing-agency-on-demand.html": {
      title: "Best Digital Marketing Agency for On-Demand Apps | Agile Edtech Solutions",
      description:
        "Agile Edtech Solutions is a best digital marketing agency for on-demand apps, service aggregators and instant booking platforms with SEO, app growth and lead generation campaigns.",
      keywords:
        "Best Digital Marketing Agency for On-Demand Apps, On-Demand App Marketing Agency, SEO for Service Aggregator Platform, App Growth Company for On Demand Services, Lead Generation for Booking Platform",
      service: "On-Demand Industry Digital Marketing Services",
      faqs: [
        { q: "Do you market on-demand apps and booking platforms?", a: "Yes. We support on-demand startups, aggregator businesses, and instant-booking platforms." },
        { q: "Can you help improve app installs and first bookings?", a: "Yes. We work on acquisition and activation together so installs turn into platform usage." },
        { q: "Do on-demand businesses need local SEO?", a: "Yes. Local discovery and service-area visibility are major drivers of bookings." },
        { q: "How do you track on-demand growth results?", a: "We track installs, signups, activation, bookings, repeat usage, and campaign efficiency." },
      ],
    },
  };

  Object.keys(industryPageConfigs).forEach(function (file) {
    seoMap[file] = {
      title: industryPageConfigs[file].title,
      description: industryPageConfigs[file].description,
      keywords: industryPageConfigs[file].keywords,
    };
    faqMap[file] = industryPageConfigs[file].faqs;
    serviceSchemaMap[file] = industryPageConfigs[file].service;
  });

  const keywordLandingConfigs = {
    "advertising-agency-jaipur.html": {
      title: "Advertising Agency in Jaipur | Google Ads and Creative Campaigns",
      description: "Agile Edtech Solutions is an advertising agency in Jaipur offering Google Ads, Meta Ads, creative strategy, and performance-led campaign management for business growth.",
      keywords: "advertising agency in jaipur, ad agency in jaipur, advertisement agency near me, google ads agency jaipur, creative advertising company jaipur",
      service: "Advertising Agency Services in Jaipur",
      faqs: [
        { q: "What does your advertising agency in Jaipur help with?", a: "We help with Google Ads, Meta Ads, campaign strategy, creative planning, landing pages, and conversion-focused advertising." },
        { q: "Do you manage both ad creatives and ad performance?", a: "Yes. We support both campaign strategy and the messaging or creative needed to improve response quality." },
        { q: "Can you run local Jaipur business campaigns?", a: "Yes. We run local, regional, and broader campaigns based on your business goals and service areas." },
      ],
    },
    "android-app-development-company-jaipur.html": {
      title: "Android App Development Company in Jaipur | Agile Edtech Solutions",
      description: "Looking for an Android app development company in Jaipur? Agile Edtech Solutions builds scalable Android apps with UI, API integration, testing, and launch support.",
      keywords: "android app development company jaipur, android app developer jaipur, mobile app development company jaipur, android application development jaipur",
      service: "Android App Development Company in Jaipur",
      faqs: [
        { q: "Do you build custom Android apps for Jaipur businesses?", a: "Yes. We develop custom Android applications for startups, SMEs, and growing brands based on business use case and scale." },
        { q: "Do you support Play Store launch?", a: "Yes. We help with testing, listing setup, screenshots, and launch readiness for the Play Store." },
        { q: "Can you integrate APIs and admin panels?", a: "Yes. We support API integration, dashboards, notifications, and backend workflows as part of app delivery." },
      ],
    },
    "app-development-company-jaipur.html": {
      title: "App Development Company in Jaipur | Android, iOS and Custom Apps",
      description: "Agile Edtech Solutions is an app development company in Jaipur delivering Android, iOS, and custom mobile apps with modern UX, backend integration, and post-launch support.",
      keywords: "app development company jaipur, mobile app development jaipur, android ios app developer jaipur, custom app development company jaipur",
      service: "App Development Company in Jaipur",
      faqs: [
        { q: "Do you build both Android and iOS applications?", a: "Yes. We provide app development services for Android, iOS, and custom business app requirements." },
        { q: "Can you build business apps from idea to launch?", a: "Yes. We handle planning, UI/UX, development, testing, deployment, and ongoing support." },
        { q: "Do you develop apps for specific industries?", a: "Yes. We work across healthcare, education, eCommerce, on-demand, logistics, and other business domains." },
      ],
    },
    "best-digital-marketing-company-jaipur.html": {
      title: "Best Digital Marketing Company in Jaipur | Agile Edtech Solutions",
      description: "Searching for the best digital marketing company in Jaipur? Agile Edtech Solutions delivers SEO, PPC, social media, lead generation, and performance campaigns with measurable ROI.",
      keywords: "best digital marketing company in jaipur, best digital marketing agency in jaipur, top digital marketing company jaipur, performance marketing company jaipur",
      service: "Best Digital Marketing Company in Jaipur",
      faqs: [
        { q: "Why do businesses choose your digital marketing company in Jaipur?", a: "Businesses choose us for SEO, paid ads, lead generation, transparent reporting, and conversion-focused campaign execution." },
        { q: "Do you provide both organic and paid marketing?", a: "Yes. We combine SEO, local SEO, paid ads, social media, and remarketing based on your goals." },
        { q: "Can you create an ROI-focused growth plan?", a: "Yes. We define channel strategy, landing-page needs, tracking setup, and optimization priorities around measurable outcomes." },
      ],
    },
    "best-ppc-agency-jaipur.html": {
      title: "Best PPC Agency in Jaipur | Google Ads and Paid Campaign Experts",
      description: "Agile Edtech Solutions is a best PPC agency in Jaipur managing Google Ads, search campaigns, display advertising, remarketing, and conversion optimization for stronger ROI.",
      keywords: "best ppc agency in jaipur, ppc company jaipur, google ads agency jaipur, pay per click management jaipur, paid ads company jaipur",
      service: "Best PPC Agency in Jaipur",
      faqs: [
        { q: "What does your PPC agency manage?", a: "We manage Google Ads strategy, search campaigns, display ads, remarketing, conversion tracking, and ongoing optimization." },
        { q: "Can you improve cost per lead?", a: "Yes. We refine keywords, audience targeting, landing pages, and bidding strategy to improve lead quality and efficiency." },
        { q: "Do you work with local and national campaigns?", a: "Yes. We manage local Jaipur campaigns as well as broader regional and national paid campaigns." },
      ],
    },
    "best-seo-company-jaipur.html": {
      title: "Best SEO Company in Jaipur | Local SEO and Organic Growth Experts",
      description: "Agile Edtech Solutions is a best SEO company in Jaipur helping businesses with on-page SEO, technical SEO, local SEO, content strategy, and long-term organic growth.",
      keywords: "best seo company in jaipur, seo company jaipur, local seo services jaipur, organic seo company jaipur, technical seo experts jaipur",
      service: "Best SEO Company in Jaipur",
      faqs: [
        { q: "What SEO services do you provide in Jaipur?", a: "We provide technical SEO, on-page SEO, local SEO, content optimization, and ranking performance improvements." },
        { q: "Can you help local Jaipur businesses rank on Google?", a: "Yes. We improve map visibility, location relevance, service-page structure, and local keyword targeting." },
        { q: "How long does SEO usually take?", a: "SEO takes time, but we structure work around sustainable organic visibility and measurable progress." },
      ],
    },
    "best-smo-service-jaipur.html": {
      title: "Best SMO Service in Jaipur | Social Media Marketing and Brand Growth",
      description: "Agile Edtech Solutions offers the best SMO service in Jaipur with social media strategy, content planning, platform optimization, audience growth, and campaign support.",
      keywords: "best smo service jaipur, social media company jaipur, social media marketing jaipur, social media optimization service jaipur",
      service: "Best SMO Service in Jaipur",
      faqs: [
        { q: "What is included in your SMO service in Jaipur?", a: "We provide profile optimization, content strategy, audience engagement, posting plans, and growth-focused social media support." },
        { q: "Do you support Instagram and Facebook marketing?", a: "Yes. We support major social platforms including Instagram and Facebook with content and campaign planning." },
        { q: "Can social media support lead generation?", a: "Yes. Social content and paid social campaigns can improve brand trust, engagement, and qualified enquiry flow." },
      ],
    },
    "best-software-company-jaipur.html": {
      title: "Best Software Company in Jaipur | Custom Software Development Experts",
      description: "Agile Edtech Solutions is a best software company in Jaipur delivering custom software, business automation tools, CRM systems, portals, and scalable web solutions.",
      keywords: "best software company in jaipur, software development company jaipur, custom software company jaipur, business software developer jaipur",
      service: "Best Software Company in Jaipur",
      faqs: [
        { q: "What type of software solutions do you build?", a: "We build CRM systems, business portals, automation tools, dashboards, and custom workflow-driven software." },
        { q: "Can software be customized for my process?", a: "Yes. We tailor software modules to your operations, roles, reporting needs, and business logic." },
        { q: "Do you provide support after launch?", a: "Yes. We support updates, maintenance, enhancements, and performance improvements after deployment." },
      ],
    },
    "best-web-design-agency-jaipur.html": {
      title: "Best Web Design Agency in Jaipur | Responsive Website Design Experts",
      description: "Agile Edtech Solutions is a best web design agency in Jaipur creating responsive business websites, landing pages, eCommerce interfaces, and SEO-friendly website experiences.",
      keywords: "best web design agency jaipur, website design company jaipur, best web design agency near me, responsive website design jaipur",
      service: "Best Web Design Agency in Jaipur",
      faqs: [
        { q: "Do you design responsive websites for businesses in Jaipur?", a: "Yes. We design responsive websites for business websites, service pages, landing pages, and eCommerce use cases." },
        { q: "Can you redesign an existing website?", a: "Yes. We improve design quality, UX clarity, mobile experience, and conversion flow during redesign projects." },
        { q: "Are your websites SEO-friendly?", a: "Yes. We follow SEO-friendly structure, mobile responsiveness, and metadata best practices in our website builds." },
      ],
    },
    "digital-marketing-agency-jaipur.html": {
      title: "Digital Marketing Agency in Jaipur | SEO, Ads and Lead Growth",
      description: "Agile Edtech Solutions is a digital marketing agency in Jaipur helping businesses grow through SEO, PPC, social media marketing, lead generation, and measurable performance campaigns.",
      keywords: "digital marketing agency in jaipur, digital marketing company jaipur, seo and ppc agency jaipur, lead generation company jaipur, marketing agency jaipur",
      service: "Digital Marketing Agency in Jaipur",
      faqs: [
        { q: "What services do you offer as a digital marketing agency in Jaipur?", a: "We provide SEO, paid ads, social media marketing, lead generation, local SEO, and campaign optimization." },
        { q: "Do you support Jaipur-based local businesses?", a: "Yes. We work with local businesses, startups, and multi-location brands in Jaipur and beyond." },
        { q: "Can you manage both leads and brand visibility?", a: "Yes. We balance performance marketing with long-term brand visibility and organic growth." },
      ],
    },
    "graphic-design-company-jaipur.html": {
      title: "Graphic Design Company in Jaipur | Creative Branding and Marketing Design",
      description: "Agile Edtech Solutions is a graphic design company in Jaipur offering branding, social media creatives, ad design, marketing collateral, and visual design support for growing businesses.",
      keywords: "graphic design company jaipur, graphic designer jaipur, branding design company jaipur, marketing creatives jaipur, social media design company jaipur",
      service: "Graphic Design Company in Jaipur",
      faqs: [
        { q: "What graphic design services do you offer?", a: "We provide branding graphics, social media creatives, ad designs, marketing collateral, and digital design support." },
        { q: "Do you design creatives for paid campaigns and social media?", a: "Yes. We create graphics for paid ads, social media promotions, and broader brand communication." },
        { q: "Can you align designs with brand identity?", a: "Yes. We design according to your brand tone, audience, and campaign goals." },
      ],
    },
    "it-companies-jaipur.html": {
      title: "IT Companies in Jaipur | Website, Software and Digital Growth Services",
      description: "Agile Edtech Solutions ranks among trusted IT companies in Jaipur for website development, software solutions, mobile apps, SEO, Google Ads, and digital business growth.",
      keywords: "it companies in jaipur, it company jaipur, software and web development company jaipur, digital services company jaipur",
      service: "IT Company Services in Jaipur",
      faqs: [
        { q: "What services do you offer as an IT company in Jaipur?", a: "We offer website development, software solutions, app development, SEO, paid ads, and digital growth services." },
        { q: "Do you work with startups and SMEs?", a: "Yes. We work with startups, SMEs, and growth-focused businesses across different industries." },
        { q: "Can one company handle both development and marketing?", a: "Yes. Our team covers development, design, and digital marketing under one roof." },
      ],
    },
    "lead-generation-landing-page.html": {
      title: "Lead Generation Services in Jaipur | Landing Pages and Performance Campaigns",
      description: "Generate better leads with Agile Edtech Solutions through high-converting landing pages, paid ads, remarketing, and funnel optimization tailored to your business goals.",
      keywords: "lead generation services jaipur, lead generation company jaipur, landing page agency jaipur, performance lead campaigns jaipur",
      service: "Lead Generation Landing Page Services",
      faqs: [
        { q: "What channels do you use for lead generation?", a: "We use landing pages, Google Ads, Meta Ads, remarketing, and conversion-focused funnel planning." },
        { q: "Can you improve lead quality as well as volume?", a: "Yes. We focus on landing-page relevance, targeting, qualification flow, and reporting to improve lead quality." },
        { q: "Do you support different industries?", a: "Yes. We tailor lead generation campaigns by industry, offer type, geography, and customer intent." },
      ],
    },
    "logo-designers-jaipur.html": {
      title: "Logo Designers in Jaipur | Brand Identity and Logo Design Services",
      description: "Agile Edtech Solutions offers logo design services in Jaipur for startups, SMEs, and established brands looking for memorable, market-ready visual identity systems.",
      keywords: "logo designers in jaipur, logo design company jaipur, branding agency jaipur, business logo designer jaipur",
      service: "Logo Design Services in Jaipur",
      faqs: [
        { q: "Do you create custom logo concepts?", a: "Yes. We create original logo concepts based on brand positioning, market fit, and usage requirements." },
        { q: "Can you also help with brand identity design?", a: "Yes. We support broader brand identity work including colours, typography, and design consistency." },
        { q: "Do you design logos for startups and established businesses?", a: "Yes. We work with both new brands and businesses looking to refresh existing identity." },
      ],
    },
    "performance-marketing-agency-jaipur.html": {
      title: "Performance Marketing Agency in Jaipur | ROI-Focused Growth Campaigns",
      description: "Agile Edtech Solutions is a performance marketing agency in Jaipur delivering ROI-focused Google Ads, Meta Ads, remarketing, and lead generation strategies for scalable growth.",
      keywords: "performance marketing agency jaipur, performance marketing company jaipur, roi marketing agency jaipur, paid growth agency jaipur",
      service: "Performance Marketing Agency in Jaipur",
      faqs: [
        { q: "What does a performance marketing agency help with?", a: "We help with paid acquisition, conversion tracking, remarketing, lead quality, and ROI-focused campaign scaling." },
        { q: "Do you optimize campaigns for sales and leads?", a: "Yes. We build campaigns around revenue, lead generation, and measurable acquisition outcomes." },
        { q: "Can you manage Google and Meta together?", a: "Yes. We create channel-specific and blended strategies across Google Ads and Meta Ads." },
      ],
    },
    "software-company-jaipur.html": {
      title: "Software Company in Jaipur | Custom Software and Business Solutions",
      description: "Agile Edtech Solutions is a software company in Jaipur building custom software, CRM systems, portals, automation workflows, and scalable business applications.",
      keywords: "software company jaipur, software development company jaipur, custom software jaipur, business software company jaipur",
      service: "Software Company in Jaipur",
      faqs: [
        { q: "What business software do you develop?", a: "We build custom software, CRM solutions, portals, business dashboards, and workflow automation platforms." },
        { q: "Can you build software for specific departments or workflows?", a: "Yes. We align software modules with sales, operations, reporting, and internal process requirements." },
        { q: "Do you provide maintenance and support?", a: "Yes. We support software updates, bug fixes, enhancements, and long-term improvements after launch." },
      ],
    },
    "ui-ux-design-agency.html": {
      title: "UI UX Design Agency in Jaipur | Product Design and User Experience Services",
      description: "Agile Edtech Solutions is a UI UX design agency in Jaipur offering user interface design, UX strategy, wireframes, design systems, and product-focused digital experiences.",
      keywords: "ui ux design agency jaipur, ui ux company jaipur, product design agency jaipur, user interface design jaipur, ux design services jaipur",
      service: "UI UX Design Agency in Jaipur",
      faqs: [
        { q: "What does your UI UX design agency provide?", a: "We provide user experience planning, wireframes, interface design, design systems, and product usability improvements." },
        { q: "Do you design for websites and apps?", a: "Yes. We design user experiences for business websites, mobile apps, portals, and software products." },
        { q: "Can UX design improve conversions?", a: "Yes. Better UX can improve clarity, reduce friction, and increase conversion rate across digital journeys." },
      ],
    },
    "website-developer-jaipur.html": {
      title: "Website Developer in Jaipur | Business Websites and SEO-Friendly Portals",
      description: "Hire a website developer in Jaipur from Agile Edtech Solutions for responsive business websites, eCommerce stores, custom portals, and SEO-friendly web platforms.",
      keywords: "website developer in jaipur, web development company jaipur, website designer jaipur, seo friendly website developer jaipur, business website developer jaipur",
      service: "Website Developer in Jaipur",
      faqs: [
        { q: "What kind of websites do you develop?", a: "We develop business websites, service websites, eCommerce stores, landing pages, and custom web portals." },
        { q: "Do you create SEO-friendly websites?", a: "Yes. We structure websites for speed, mobile responsiveness, crawlability, and metadata readiness." },
        { q: "Can you redesign or rebuild an existing website?", a: "Yes. We can redesign outdated sites or rebuild them with improved performance and better conversion flow." },
      ],
    },
  };

  Object.keys(keywordLandingConfigs).forEach(function (file) {
    seoMap[file] = {
      title: keywordLandingConfigs[file].title,
      description: keywordLandingConfigs[file].description,
      keywords: keywordLandingConfigs[file].keywords,
    };
    faqMap[file] = keywordLandingConfigs[file].faqs;
    serviceSchemaMap[file] = keywordLandingConfigs[file].service;
  });

  const relatedLinksMap = {
    "advertising-agency-jaipur.html": [
      { href: "paid-advertising.html", label: "Paid Advertising Services" },
      { href: "ppc.html", label: "PPC Management" },
      { href: "facebook-ads.html", label: "Facebook and Instagram Ads" },
      { href: "performance-marketing-agency-jaipur.html", label: "Performance Marketing Agency Jaipur" },
    ],
    "android-app-development-company-jaipur.html": [
      { href: "android-app-development.html", label: "Android App Development" },
      { href: "mobile-application-development.html", label: "Mobile App Development" },
      { href: "api-development.html", label: "API Development" },
      { href: "app-development-company-jaipur.html", label: "App Development Company Jaipur" },
    ],
    "app-development-company-jaipur.html": [
      { href: "mobile-application-development.html", label: "Mobile App Development" },
      { href: "android-app-development.html", label: "Android App Development" },
      { href: "ios-app-development.html", label: "iOS App Development" },
      { href: "api-development.html", label: "API Development" },
    ],
    "best-digital-marketing-company-jaipur.html": [
      { href: "digital-marketing-agency-jaipur.html", label: "Digital Marketing Agency Jaipur" },
      { href: "seo.html", label: "SEO Services" },
      { href: "lead-generation.html", label: "Lead Generation Services" },
      { href: "performance-marketing-agency-jaipur.html", label: "Performance Marketing Agency Jaipur" },
    ],
    "best-ppc-agency-jaipur.html": [
      { href: "ppc.html", label: "PPC Management Services" },
      { href: "paid-advertising.html", label: "Paid Advertising" },
      { href: "facebook-ads.html", label: "Meta Ads Services" },
      { href: "shopping-ads.html", label: "Shopping Ads" },
    ],
    "best-seo-company-jaipur.html": [
      { href: "seo.html", label: "SEO Services" },
      { href: "local-seo.html", label: "Local SEO Services" },
      { href: "digital-marketing.html", label: "Digital Marketing Services" },
      { href: "best-digital-marketing-company-jaipur.html", label: "Best Digital Marketing Company Jaipur" },
    ],
    "best-smo-service-jaipur.html": [
      { href: "smo.html", label: "Social Media Management" },
      { href: "facebook-ads.html", label: "Facebook and Instagram Ads" },
      { href: "digital-marketing.html", label: "Digital Marketing Services" },
      { href: "best-digital-marketing-company-jaipur.html", label: "Best Digital Marketing Company Jaipur" },
    ],
    "best-software-company-jaipur.html": [
      { href: "software-company-jaipur.html", label: "Software Company Jaipur" },
      { href: "custom-software.html", label: "Custom Software Development" },
      { href: "crm-solutions.html", label: "CRM Solutions" },
      { href: "website-design-development.html", label: "Website Design and Development" },
    ],
    "best-web-design-agency-jaipur.html": [
      { href: "website-design-development.html", label: "Website Design and Development" },
      { href: "website-developer-jaipur.html", label: "Website Developer Jaipur" },
      { href: "web-development.html", label: "Web Development" },
      { href: "ui-ux-design-agency.html", label: "UI UX Design Agency" },
    ],
    "digital-marketing-agency-jaipur.html": [
      { href: "digital-marketing.html", label: "Digital Marketing Services" },
      { href: "seo.html", label: "SEO Services" },
      { href: "ppc.html", label: "PPC Management" },
      { href: "best-digital-marketing-company-jaipur.html", label: "Best Digital Marketing Company Jaipur" },
    ],
    "graphic-design-company-jaipur.html": [
      { href: "logo-designers-jaipur.html", label: "Logo Designers Jaipur" },
      { href: "ui-ux-design-agency.html", label: "UI UX Design Agency" },
      { href: "website-design-development.html", label: "Website Design and Development" },
      { href: "advertising-agency-jaipur.html", label: "Advertising Agency Jaipur" },
    ],
    "it-companies-jaipur.html": [
      { href: "software-company-jaipur.html", label: "Software Company Jaipur" },
      { href: "website-developer-jaipur.html", label: "Website Developer Jaipur" },
      { href: "digital-marketing-agency-jaipur.html", label: "Digital Marketing Agency Jaipur" },
      { href: "app-development-company-jaipur.html", label: "App Development Company Jaipur" },
    ],
    "lead-generation-landing-page.html": [
      { href: "lead-generation.html", label: "Lead Generation Services" },
      { href: "paid-advertising.html", label: "Paid Advertising" },
      { href: "ppc.html", label: "PPC Management" },
      { href: "digital-marketing.html", label: "Digital Marketing Services" },
    ],
    "logo-designers-jaipur.html": [
      { href: "graphic-design-company-jaipur.html", label: "Graphic Design Company Jaipur" },
      { href: "ui-ux-design-agency.html", label: "UI UX Design Agency" },
      { href: "website-design-development.html", label: "Website Design and Development" },
      { href: "advertising-agency-jaipur.html", label: "Advertising Agency Jaipur" },
    ],
    "performance-marketing-agency-jaipur.html": [
      { href: "paid-advertising.html", label: "Paid Advertising" },
      { href: "ppc.html", label: "PPC Management" },
      { href: "lead-generation.html", label: "Lead Generation Services" },
      { href: "best-ppc-agency-jaipur.html", label: "Best PPC Agency Jaipur" },
    ],
    "software-company-jaipur.html": [
      { href: "custom-software.html", label: "Custom Software Development" },
      { href: "crm-solutions.html", label: "CRM Solutions" },
      { href: "api-development.html", label: "API Development" },
      { href: "best-software-company-jaipur.html", label: "Best Software Company Jaipur" },
    ],
    "ui-ux-design-agency.html": [
      { href: "website-design-development.html", label: "Website Design and Development" },
      { href: "graphic-design-company-jaipur.html", label: "Graphic Design Company Jaipur" },
      { href: "logo-designers-jaipur.html", label: "Logo Designers Jaipur" },
      { href: "website-developer-jaipur.html", label: "Website Developer Jaipur" },
    ],
    "website-developer-jaipur.html": [
      { href: "website-design-development.html", label: "Website Design and Development" },
      { href: "web-development.html", label: "Web Development" },
      { href: "ecommerce.html", label: "E-Commerce Website Development" },
      { href: "best-web-design-agency-jaipur.html", label: "Best Web Design Agency Jaipur" },
    ],
  };

  const ensureMeta = function (selector, attrs) {
    let node = document.head.querySelector(selector);
    if (!node) {
      node = document.createElement("meta");
      Object.keys(attrs).forEach(function (key) {
        if (key !== "content") {
          node.setAttribute(key, attrs[key]);
        }
      });
      document.head.appendChild(node);
    }
    node.setAttribute("content", attrs.content);
    return node;
  };

  const removeDuplicateMetaTags = function () {
    const seen = {};
    document.head.querySelectorAll("meta[name], meta[property]").forEach(function (meta) {
      const key = meta.getAttribute("name")
        ? `name:${meta.getAttribute("name").toLowerCase()}`
        : `property:${meta.getAttribute("property").toLowerCase()}`;

      if (seen[key]) {
        meta.remove();
      } else {
        seen[key] = true;
      }
    });
  };

  const ensureCanonical = function (href) {
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
      canonical.setAttribute("href", href);
      return href;
    }
    return canonical.getAttribute("href") || href;
  };

  const getPathInfo = function () {
    const file = window.location.pathname.split("/").pop() || "index.html";
    const isIndex = file === "" || file === "index.html";
    const normalizedPath = isIndex ? "/" : `/${file}`;
    return { file: isIndex ? "index.html" : file, normalizedPath };
  };

  const addBusinessSchema = function (pageUrl) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          name: "Agile Edtech Solutions Pvt Ltd",
          url: siteUrl,
          image: ogImage,
          telephone: "+91-8005677079",
          description: defaultDescription,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop - 17, Green Commercial Park, C-2SF, Jagatpura",
            addressLocality: "Jaipur",
            addressRegion: "Rajasthan",
            postalCode: "302017",
            addressCountry: "IN",
          },
          areaServed: "Jaipur",
          sameAs: [
            "https://www.facebook.com/AgileSolutionz",
            "https://www.instagram.com/AgileSolutionz",
            "https://www.linkedin.com/company/agilesolutions1/posts/?feedView=all",
            "https://youtu.be/GQS1VVDfkLMGMB",
            "https://share.google/3PNWcU0OhcmHhj2Ds",
          ],
        },
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          name: siteName,
          url: siteUrl,
          inLanguage: "en-IN",
          potentialAction: {
            "@type": "SearchAction",
            target: `${siteUrl}/?s={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        },
        {
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: document.title,
          isPartOf: { "@id": `${siteUrl}/#website` },
          about: { "@id": `${siteUrl}/#localbusiness` },
          inLanguage: "en-IN",
        },
      ],
    });

    const existing = document.getElementById("agile-business-schema");
    if (existing) {
      existing.remove();
    }
    script.id = "agile-business-schema";
    document.head.appendChild(script);
  };

  const hasExistingSchemaType = function (typeName) {
    const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
    for (let i = 0; i < schemaScripts.length; i += 1) {
      const text = schemaScripts[i].textContent || "";
      if (text.indexOf(`"@type":"${typeName}"`) > -1 || text.indexOf(`"@type": "${typeName}"`) > -1) {
        return true;
      }
    }
    return false;
  };

  const getPageCrumbName = function (title) {
    return (title || "")
      .split("|")[0]
      .replace(/\s+/g, " ")
      .trim();
  };

  const addBreadcrumbSchema = function (pageUrl, file, title) {
    if (file === "index.html" || hasExistingSchemaType("BreadcrumbList")) {
      return;
    }

    const pageName = getPageCrumbName(title) || "Page";
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "agile-breadcrumb-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: pageName,
          item: pageUrl,
        },
      ],
    });
    document.head.appendChild(script);
  };

  const addServiceSchema = function (pageUrl, file, pageSeo) {
    const serviceName = serviceSchemaMap[file];
    if (!serviceName || hasExistingSchemaType("Service")) {
      return;
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "agile-service-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: serviceName,
      description: pageSeo.description || defaultDescription,
      provider: {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        name: siteName,
        url: siteUrl,
        telephone: "+91-8005677079",
      },
      areaServed: {
        "@type": "City",
        name: "Jaipur",
      },
      serviceType: serviceName,
      url: pageUrl,
    });
    document.head.appendChild(script);
  };

  const hasExistingFaqSchema = function () {
    return hasExistingSchemaType("FAQPage");
  };

  const addFaqSchema = function (pageUrl, file) {
    const faqItems = faqMap[file];
    if (!faqItems || !faqItems.length || hasExistingFaqSchema()) {
      return;
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "agile-faq-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      url: pageUrl,
      mainEntity: faqItems.map(function (item) {
        return {
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        };
      }),
    });
    document.head.appendChild(script);
  };

  const injectRelatedLinks = function (file) {
    const links = relatedLinksMap[file];
    if (!links || !links.length || document.getElementById("agile-related-links")) {
      return;
    }

    const footerContainer = document.getElementById("dynamic-footer");
    if (!footerContainer) {
      return;
    }

    const section = document.createElement("section");
    section.className = "keyword-hub py-5";
    section.id = "agile-related-links";
    section.innerHTML = `
      <div class="container">
        <div class="heading-tittle">
          <h6>Related Pages</h6>
          <h2 class="fw-bold">Explore Related Services and Jaipur Growth Pages</h2>
          <p>Helpful internal links to closely related service pages and keyword-focused landing pages for stronger topic relevance.</p>
        </div>
        <div class="row g-4">
          ${links
            .map(function (item) {
              return `
                <div class="col-lg-3 col-md-6">
                  <a class="keyword-hub-card" href="${item.href}">
                    <h3>${item.label}</h3>
                    <p>Explore how this page connects with your broader website, software, SEO, or lead generation goals.</p>
                  </a>
                </div>`;
            })
            .join("")}
        </div>
      </div>
    `;

    footerContainer.parentNode.insertBefore(section, footerContainer);
  };

  const makeImagesAccessible = function () {
    document.querySelectorAll("img").forEach(function (img, index) {
      if (!img.hasAttribute("alt")) {
        img.alt = `${siteName} image ${index + 1}`;
      }

      const isHeaderLogo = Boolean(img.closest("header"));
      if (isHeaderLogo) {
        img.setAttribute("loading", "eager");
        img.setAttribute("fetchpriority", "high");
      } else if (!img.hasAttribute("loading")) {
        img.setAttribute("loading", "lazy");
      }

      img.setAttribute("decoding", "async");
    });
  };

  document.addEventListener("DOMContentLoaded", function () {
    removeDuplicateMetaTags();
    const { file, normalizedPath } = getPathInfo();
    const existingDescription =
      (document.head.querySelector('meta[name="description"]') || {}).content || defaultDescription;
    const existingKeywords = (document.head.querySelector('meta[name="keywords"]') || {}).content || defaultKeywords;
    const pageSeo = seoMap[file] || {
      title: document.title.replace(/\s+/g, " ").trim() || defaultTitle,
      description: existingDescription,
      keywords: existingKeywords,
    };

    const generatedUrl = `${siteUrl}${normalizedPath}`;
    const pageUrl = ensureCanonical(generatedUrl);

    const staticTitle = document.title.replace(/\s+/g, " ").trim() || pageSeo.title;
    const staticDescription = existingDescription || pageSeo.description;
    document.title = staticTitle;
    ensureMeta('meta[name="description"]', { name: "description", content: staticDescription });
    ensureMeta('meta[name="keywords"]', { name: "keywords", content: pageSeo.keywords || defaultKeywords });
    ensureMeta('meta[name="robots"]', { name: "robots", content: "index, follow, max-image-preview:large" });
    ensureMeta('meta[name="author"]', { name: "author", content: siteName });
    ensureMeta('meta[property="og:title"]', { property: "og:title", content: staticTitle });
    ensureMeta('meta[property="og:description"]', { property: "og:description", content: staticDescription });
    ensureMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    ensureMeta('meta[property="og:url"]', { property: "og:url", content: pageUrl });
    ensureMeta('meta[property="og:image"]', { property: "og:image", content: ogImage });
    ensureMeta('meta[property="og:site_name"]', { property: "og:site_name", content: siteName });
    ensureMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: staticTitle });
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description", content: staticDescription });
    ensureMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage });
    ensureMeta('meta[name="geo.region"]', { name: "geo.region", content: "IN-RJ" });
    ensureMeta('meta[name="geo.placename"]', { name: "geo.placename", content: "Jaipur" });
    addBusinessSchema(pageUrl);
    addBreadcrumbSchema(pageUrl, file, pageSeo.title);
    addServiceSchema(pageUrl, file, pageSeo);
    addFaqSchema(pageUrl, file);
    injectRelatedLinks(file);
    makeImagesAccessible();
  });
})();
