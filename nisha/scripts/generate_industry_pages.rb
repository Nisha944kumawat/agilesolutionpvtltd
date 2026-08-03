ROOT = File.expand_path("..", __dir__)

INDUSTRIES = [
  {
    slug: "digital-marketing-agency-grocery.html",
    name: "Grocery",
    short_name: "Grocery Stores",
    icon: "fa-basket-shopping",
    title: "Best Digital Marketing Agency for Grocery Stores, Supermarkets and Hyperlocal Grocery Brands",
    meta_title: "Best Digital Marketing Agency for Grocery Stores | Agile Edtech Solutions",
    meta_description: "Agile Edtech Solutions is a best digital marketing agency for grocery stores, supermarkets and online grocery brands with SEO, Google Ads, local SEO and hyperlocal growth strategies.",
    meta_keywords: "Best Digital Marketing Agency for Grocery Stores, Digital Marketing Company for Supermarkets, Grocery Store SEO Services, Local SEO for Grocery Business, Grocery Marketing Agency India",
    audience: "local grocery shops, supermarkets, organic food stores, hyperlocal delivery apps and multi-location grocery chains",
    intro: "We help grocery businesses win high-intent local demand through SEO, location pages, Google Ads, social promotions and repeat-order campaigns.",
    services: ["Local SEO", "Google Ads", "Social Promotions", "Hyperlocal Landing Pages", "WhatsApp Retention", "Analytics Setup"],
    challenges: ["Weak visibility for near-me searches", "Poor repeat purchase behaviour", "Low visibility for offers and categories", "Limited tracking between campaigns and orders"],
    faqs: [
      ["Why does a grocery business need local SEO?", "Because nearby searches and map visibility often influence walk-ins, calls and delivery enquiries immediately."],
      ["Can you market both offline stores and online grocery brands?", "Yes. We create separate strategies for footfall-led stores and delivery-first grocery businesses."],
      ["Do you support seasonal grocery campaigns?", "Yes. We plan campaigns for festive demand, subscriptions, category offers and recurring purchases."],
      ["How do you track results for grocery campaigns?", "We track calls, map actions, orders, enquiry intent and repeat-customer engagement."],
    ],
  },
  {
    slug: "digital-marketing-agency-education.html",
    name: "Education",
    short_name: "Educational Institutes",
    icon: "fa-graduation-cap",
    title: "Best Digital Marketing Agency for Educational Institutes, Schools, Colleges and Universities",
    meta_title: "Best Digital Marketing Agency for Educational Institutes | Agile Edtech Solutions",
    meta_description: "Agile Edtech Solutions is a best digital marketing agency for educational institutes, schools, colleges and universities with SEO, lead generation, Google Ads and admission marketing solutions.",
    meta_keywords: "Best Digital Marketing Agency for Educational Institutes, Best Digital Marketing Company for School Colleges and Universities, Education Marketing Agency, SEO for Schools, Admission Lead Generation Company",
    audience: "schools, colleges, universities, coaching centres, edtech brands and training institutes",
    intro: "We build admission-focused digital marketing systems that help educational institutes improve search visibility, trust and qualified enquiry flow.",
    services: ["Admission SEO", "Google Ads", "Course Landing Pages", "Social Media Campaigns", "Reputation Marketing", "Lead Funnel Tracking"],
    challenges: ["Low rankings for course and institute keywords", "Poor-quality admission leads", "Weak trust-building content", "No clear enquiry-to-admission funnel"],
    faqs: [
      ["Do you market schools, colleges and universities?", "Yes. We tailor campaigns for schools, higher education institutes, universities and coaching brands."],
      ["Can you help us rank for institute and course keywords?", "Yes. We optimize websites and landing pages for admissions, courses, campuses and location-specific searches."],
      ["How do you improve admission lead quality?", "We refine targeting, landing pages, messaging and follow-up journeys to attract more relevant prospects."],
      ["Do you support admission-season campaigns?", "Yes. We build campaigns around admissions open, scholarships, counselling and intake deadlines."],
    ],
  },
  {
    slug: "digital-marketing-agency-ecommerce.html",
    name: "eCommerce",
    short_name: "eCommerce Brands",
    icon: "fa-cart-shopping",
    title: "Best Digital Marketing Agency for eCommerce Websites, D2C Brands and Online Stores",
    meta_title: "Best Digital Marketing Agency for eCommerce Brands | Agile Edtech Solutions",
    meta_description: "Agile Edtech Solutions is a best digital marketing agency for eCommerce websites, online stores and D2C brands with SEO, shopping ads, performance marketing and conversion optimization.",
    meta_keywords: "Best Digital Marketing Agency for eCommerce, eCommerce SEO Company, Digital Marketing Company for Online Store, D2C Marketing Agency, Shopping Ads Agency India",
    audience: "D2C brands, online retailers, Shopify stores, WooCommerce stores and growing online marketplaces",
    intro: "We help eCommerce brands grow through category SEO, product-page optimization, shopping ads, conversion improvement and retention campaigns.",
    services: ["eCommerce SEO", "Shopping Ads", "Meta Ads", "Conversion Optimization", "Cart Recovery", "Revenue Analytics"],
    challenges: ["High traffic but low conversions", "Weak product and category visibility", "Rising acquisition cost", "Low repeat purchase rate"],
    faqs: [
      ["Do you provide both SEO and paid marketing for eCommerce stores?", "Yes. We combine organic SEO, shopping ads, search campaigns and remarketing to grow online sales."],
      ["Can you work with Shopify and WooCommerce?", "Yes. We support Shopify, WooCommerce and custom eCommerce websites."],
      ["Do you optimize product and category pages?", "Yes. We improve structure, metadata, content, trust signals and internal linking on key pages."],
      ["How do you measure eCommerce results?", "We track revenue, ROAS, conversion rate, cart recovery and repeat purchase behaviour."],
    ],
  },
  {
    slug: "digital-marketing-agency-healthcare.html",
    name: "Healthcare",
    short_name: "Healthcare Institutions",
    icon: "fa-heart-pulse",
    title: "Best Digital Marketing Agency for Doctors, Clinics, Hospitals and Healthcare Institutions",
    meta_title: "Best Digital Marketing Agency for Healthcare Institutions | Agile Edtech Solutions",
    meta_description: "Agile Edtech Solutions is a best digital marketing agency for doctors, clinics, hospitals and healthcare institutions with SEO, local SEO, Google Ads and patient lead generation solutions.",
    meta_keywords: "Best Digital Marketing Agency for Healthcare Institutions, Best Digital Marketing Agency for Doctors Clinic and Hospitals, Healthcare SEO Company, Hospital Marketing Agency, Clinic Lead Generation Company",
    audience: "doctors, clinics, hospitals, diagnostic centres, wellness brands and specialty healthcare providers",
    intro: "We create trust-focused healthcare marketing strategies that improve patient discovery, appointment enquiries and local search visibility.",
    services: ["Healthcare SEO", "Local SEO", "Patient Lead Ads", "Doctor and Service Pages", "Review Strategy", "Call Tracking"],
    challenges: ["Low visibility for specialty searches", "Weak patient trust signals", "Poor appointment lead quality", "Limited local presence across branches"],
    faqs: [
      ["Do you market doctors, clinics and hospitals?", "Yes. We tailor campaigns for individual practitioners, clinics, hospitals and diagnostic businesses."],
      ["Can you help my clinic rank locally on Google?", "Yes. We improve Google Business visibility, local pages and location-focused SEO."],
      ["Why do healthcare landing pages need special structure?", "Patients compare expertise, convenience, credibility and clarity before taking action."],
      ["How do you track healthcare results?", "We track calls, appointment forms, map actions and service-wise enquiry trends."],
    ],
  },
  {
    slug: "digital-marketing-agency-restaurant.html",
    name: "Restaurant",
    short_name: "Restaurants and Cafes",
    icon: "fa-utensils",
    title: "Best Digital Marketing Agency for Restaurants, Cafes, Cloud Kitchens and Food Brands",
    meta_title: "Best Digital Marketing Agency for Restaurants | Agile Edtech Solutions",
    meta_description: "Agile Edtech Solutions is a best digital marketing agency for restaurants, cafes, cloud kitchens and food brands with local SEO, social media marketing, Google Ads and growth campaigns.",
    meta_keywords: "Best Digital Marketing Agency for Restaurants, Restaurant Marketing Agency, Digital Marketing Company for Cafes, Local SEO for Restaurants, Cloud Kitchen Marketing Agency",
    audience: "restaurants, cafes, cloud kitchens, QSR brands and multi-location food businesses",
    intro: "We help restaurant brands increase local discovery, direct orders, table bookings and repeat visits through SEO, content and paid campaigns.",
    services: ["Restaurant SEO", "Maps Visibility", "Social Media", "Offer Landing Pages", "Review Marketing", "Repeat Visit Campaigns"],
    challenges: ["Low nearby search visibility", "High dependence on aggregators", "Weak promotion of events and offers", "Poor tracking from campaigns to bookings"],
    faqs: [
      ["Can you market both dine-in restaurants and cloud kitchens?", "Yes. We build separate growth strategies for dine-in brands, cafes, QSR chains and delivery-first kitchens."],
      ["Do restaurants benefit from local SEO?", "Yes. Restaurant decisions are highly local and map visibility has a major effect on demand."],
      ["Can you promote menu launches and special nights?", "Yes. We run campaigns for brunches, events, festive menus and new launches."],
      ["How do you track restaurant marketing performance?", "We track calls, directions, bookings, order intent and campaign response."],
    ],
  },
  {
    slug: "digital-marketing-agency-real-estate.html",
    name: "Real Estate",
    short_name: "Real Estate Businesses",
    icon: "fa-building",
    title: "Best Digital Marketing Agency for Real Estate Developers, Builders, Brokers and Property Consultants",
    meta_title: "Best Digital Marketing Agency for Real Estate | Agile Edtech Solutions",
    meta_description: "Agile Edtech Solutions is a best digital marketing agency for real estate developers, builders and brokers with SEO, lead generation, project landing pages and paid campaigns.",
    meta_keywords: "Best Digital Marketing Agency for Real Estate, Real Estate Marketing Agency, Property Lead Generation Company, SEO for Real Estate Developers, Digital Marketing Company for Builders",
    audience: "real estate developers, builders, brokers, channel partners and property consultants",
    intro: "We create lead-focused digital marketing for real estate brands with project landing pages, local SEO and performance campaigns.",
    services: ["Project SEO", "Property Lead Ads", "Location Pages", "Remarketing", "Developer Branding", "Lead Quality Reporting"],
    challenges: ["High lead volume but poor quality", "Weak project discoverability", "Long sales-cycle drop-offs", "Generic campaigns without project differentiation"],
    faqs: [
      ["Do you market builders and developers?", "Yes. We work with developers, brokers, consultants and project marketers."],
      ["Can you run campaigns for multiple projects?", "Yes. We create separate landing pages and campaign structures for each project or location."],
      ["How do you improve real estate lead quality?", "We refine targeting, messaging, project pages and remarketing to attract more serious buyers."],
      ["Do you support local property SEO?", "Yes. We optimize for city, locality, project and property-type search demand."],
    ],
  },
  {
    slug: "digital-marketing-agency-tour-travels.html",
    name: "Tour & Travels",
    short_name: "Travel Businesses",
    icon: "fa-plane-departure",
    title: "Best Digital Marketing Agency for Tour and Travel Companies, Travel Agents and Holiday Brands",
    meta_title: "Best Digital Marketing Agency for Tour and Travel Companies | Agile Edtech Solutions",
    meta_description: "Agile Edtech Solutions is a best digital marketing agency for tour and travel companies, travel agents and holiday brands with SEO, lead generation and paid campaigns.",
    meta_keywords: "Best Digital Marketing Agency for Tour and Travel Companies, Travel Marketing Agency, SEO for Travel Agents, Holiday Package Lead Generation, Digital Marketing Company for Travel Business",
    audience: "tour operators, travel agencies, holiday planners, travel consultants and destination management companies",
    intro: "We help travel brands win more package enquiries through destination SEO, package pages, paid campaigns and remarketing.",
    services: ["Destination SEO", "Package Landing Pages", "Travel Ads", "Social Promotions", "Remarketing", "Lead Tracking"],
    challenges: ["Seasonal demand volatility", "Low conversion from package pages", "Weak trust and differentiation", "Poor visibility across multiple destinations"],
    faqs: [
      ["Can you market domestic and international travel packages?", "Yes. We support domestic tours, international packages, group trips and niche travel offerings."],
      ["Do travel companies benefit from SEO?", "Yes. Destination and package searches are highly intent-driven, which makes SEO very valuable."],
      ["Can you run seasonal travel campaigns?", "Yes. We plan campaigns around holidays, summers, winters and festival travel periods."],
      ["How do you track travel lead quality?", "We track calls, forms, WhatsApp chats and package-specific enquiry trends."],
    ],
  },
  {
    slug: "digital-marketing-agency-transport.html",
    name: "Transport",
    short_name: "Transport and Logistics",
    icon: "fa-truck-fast",
    title: "Best Digital Marketing Agency for Transport Companies, Logistics Services and Fleet Businesses",
    meta_title: "Best Digital Marketing Agency for Transport Companies | Agile Edtech Solutions",
    meta_description: "Agile Edtech Solutions is a best digital marketing agency for transport companies, logistics services and fleet businesses with SEO, lead generation and B2B growth campaigns.",
    meta_keywords: "Best Digital Marketing Agency for Transport Companies, Logistics Marketing Agency, SEO for Transport Business, Lead Generation for Logistics Company, Digital Marketing Company for Fleet Services",
    audience: "transport companies, logistics providers, cargo businesses, fleet operators and delivery services",
    intro: "We help transport and logistics brands improve discoverability, trust and commercial enquiry quality through SEO and B2B lead generation.",
    services: ["Transport SEO", "B2B Lead Ads", "Route and Service Pages", "Trust Messaging", "Remarketing", "Quote Tracking"],
    challenges: ["Low rankings for service and route keywords", "Weak capability messaging", "Poor-quality B2B leads", "No structured quote funnel"],
    faqs: [
      ["Do you market logistics and transport companies?", "Yes. We support transport firms, cargo businesses and logistics providers with SEO and lead generation."],
      ["Can you generate B2B leads for transport services?", "Yes. We design campaigns around route, industry, load type and commercial enquiry intent."],
      ["Do transport companies benefit from SEO?", "Yes. Buyers often search by route, city and service requirement, which makes SEO highly relevant."],
      ["How do you measure transport campaign results?", "We track calls, quote requests, form submissions and enquiry quality by service line."],
    ],
  },
  {
    slug: "digital-marketing-agency-event.html",
    name: "Event",
    short_name: "Event Businesses",
    icon: "fa-calendar-check",
    title: "Best Digital Marketing Agency for Event Management Companies, Wedding Planners and Corporate Event Brands",
    meta_title: "Best Digital Marketing Agency for Event Management Companies | Agile Edtech Solutions",
    meta_description: "Agile Edtech Solutions is a best digital marketing agency for event management companies, wedding planners and event brands with SEO, lead generation and social media campaigns.",
    meta_keywords: "Best Digital Marketing Agency for Event Management Companies, Event Marketing Agency, Wedding Planner Marketing Company, SEO for Event Planner, Event Lead Generation Agency",
    audience: "event planners, wedding planners, decorators, corporate event agencies and experiential brands",
    intro: "We help event businesses generate premium enquiries through SEO, social storytelling, project-showcase pages and paid campaigns.",
    services: ["Event SEO", "Portfolio Landing Pages", "Lead Generation Ads", "Social Media", "Remarketing", "Consultation Tracking"],
    challenges: ["Strong portfolio but weak search visibility", "Difficulty attracting premium clients", "Uneven lead quality", "Low conversion from inspiration traffic"],
    faqs: [
      ["Do you provide digital marketing for wedding and event planners?", "Yes. We support wedding planners, event agencies, decorators and corporate event brands."],
      ["Can you help event businesses get premium enquiries?", "Yes. We improve targeting, landing pages and positioning to attract better-fit clients."],
      ["Do event businesses need social media marketing?", "Yes. Events are highly visual, so social content is a major discovery and trust channel."],
      ["How do you track event marketing performance?", "We track calls, quote forms, consultation requests and campaign-level enquiry quality."],
    ],
  },
  {
    slug: "digital-marketing-agency-fintech.html",
    name: "Fintech",
    short_name: "Fintech Brands",
    icon: "fa-wallet",
    title: "Best Digital Marketing Agency for Fintech Startups, Financial Platforms and Digital Finance Brands",
    meta_title: "Best Digital Marketing Agency for Fintech Startups | Agile Edtech Solutions",
    meta_description: "Agile Edtech Solutions is a best digital marketing agency for fintech startups, financial platforms and digital finance brands with SEO, paid growth and conversion-focused landing pages.",
    meta_keywords: "Best Digital Marketing Agency for Fintech Startups, Fintech Marketing Agency, SEO for Finance Company, Digital Marketing Company for Financial Services, Fintech Lead Generation Company",
    audience: "fintech startups, lending platforms, payment brands, insurtech companies and digital finance services",
    intro: "We create trust-first fintech marketing strategies that combine product education, SEO, performance marketing and conversion-friendly landing pages.",
    services: ["Fintech SEO", "Paid Acquisition", "Explainer Pages", "Trust Content", "Funnel Optimization", "Growth Analytics"],
    challenges: ["Low trust in new financial brands", "Complex offerings that are hard to explain", "Weak signup quality", "Limited rankings for finance problem-solving keywords"],
    faqs: [
      ["Do you provide digital marketing for fintech startups?", "Yes. We work with fintech, insurtech, lending, payments and financial platform businesses."],
      ["Can you help explain complex fintech products better?", "Yes. We create clear landing pages and educational content that improve conversion confidence."],
      ["Does fintech SEO help growth?", "Yes. Users search for financial solutions, comparisons and educational content before they convert."],
      ["How do you measure fintech marketing results?", "We track qualified signups, demos, lead quality and onboarding-related conversion trends."],
    ],
  },
  {
    slug: "digital-marketing-agency-on-demand.html",
    name: "On-Demand",
    short_name: "On-Demand Services",
    icon: "fa-bolt",
    title: "Best Digital Marketing Agency for On-Demand Apps, Service Aggregators and Instant Booking Platforms",
    meta_title: "Best Digital Marketing Agency for On-Demand Apps | Agile Edtech Solutions",
    meta_description: "Agile Edtech Solutions is a best digital marketing agency for on-demand apps, service aggregators and instant booking platforms with SEO, app growth and lead generation campaigns.",
    meta_keywords: "Best Digital Marketing Agency for On-Demand Apps, On-Demand App Marketing Agency, SEO for Service Aggregator Platform, App Growth Company for On Demand Services, Lead Generation for Booking Platform",
    audience: "on-demand apps, service aggregators, booking platforms, home-service startups and instant-demand marketplaces",
    intro: "We build acquisition and retention systems for on-demand businesses that need installs, bookings, activation and repeat usage.",
    services: ["App Acquisition", "Local SEO", "Category Pages", "Retention Campaigns", "Conversion Optimization", "Growth Reporting"],
    challenges: ["High installs but low activation", "Weak visibility for urgent-intent searches", "Poor landing-page to booking conversion", "Limited retention reporting"],
    faqs: [
      ["Do you market on-demand apps and booking platforms?", "Yes. We support on-demand startups, aggregator businesses and instant-booking platforms."],
      ["Can you help improve app installs and first bookings?", "Yes. We work on acquisition and activation together so installs turn into platform usage."],
      ["Do on-demand businesses need local SEO?", "Yes. Local discovery and service-area visibility are major drivers of bookings."],
      ["How do you track on-demand growth results?", "We track installs, signups, activation, bookings, repeat usage and campaign efficiency."],
    ],
  }
]

def link_grid(current_slug)
  INDUSTRIES.reject { |item| item[:slug] == current_slug }.map do |item|
    %Q(        <div class="col-lg-3 col-md-4 col-sm-6"><a class="industry-mini-link" href="#{item[:slug]}">#{item[:name]}</a></div>)
  end.join("\n")
end

def card_rows(items, css_class, industry)
  items.map do |item|
    %Q(        <div class="col-lg-4 col-md-6"><div class="#{css_class} h-100"><h3>#{item}</h3><p>Focused execution for #{industry[:short_name].downcase} that improves discoverability, enquiry quality and conversion performance.</p></div></div>)
  end.join("\n")
end

def challenge_rows(items)
  items.map do |item|
    %Q(              <li><i class="fa-solid fa-circle-check"></i><span>#{item}</span></li>)
  end.join("\n")
end

def process_rows
  [
    ["Research and positioning", "We define search intent, audience behaviour, competitor gaps and conversion priorities."],
    ["Landing page and content planning", "We shape keyword-rich pages and campaign messaging around your business model."],
    ["Campaign launch and testing", "We run SEO, Google Ads, Meta Ads and remarketing with clear performance checkpoints."],
    ["Optimization and scaling", "We improve lead quality, conversion flow and reporting based on real performance data."],
  ].each_with_index.map do |(title, text), index|
    %Q(        <div class="col-lg-3 col-md-6"><div class="process-step-card p-4 h-100"><span class="industry-step-number">0#{index + 1}</span><h3 class="h5 fw-bold">#{title}</h3><p class="mb-0">#{text}</p></div></div>)
  end.join("\n")
end

def benefit_rows(industry)
  [
    ["Higher visibility for high-intent keywords", "Rank more strongly for the searches that matter most to #{industry[:short_name].downcase}."],
    ["Stronger enquiry or booking quality", "Improve the relevance of leads, bookings or signups generated through digital channels."],
    ["Better conversion from traffic to action", "Turn more visitors into calls, forms, bookings, demos or admissions with cleaner landing-page structure."],
    ["More measurable and scalable growth", "Use reporting that connects channel activity with real business outcomes and smarter optimization."]
  ].map do |item, desc|
    %Q(        <div class="col-lg-3 col-md-6"><div class="industry-benefit-card h-100"><h3>#{item}</h3><p>#{desc}</p></div></div>)
  end.join("\n")
end

def faq_rows(industry)
  base = industry[:slug].sub(".html", "").gsub("-", "")
  industry[:faqs].each_with_index.map do |(q, a), index|
    expanded = index.zero? ? "true" : "false"
    collapsed = index.zero? ? "" : " collapsed"
    show = index.zero? ? " show" : ""
    %Q(              <div class="accordion-item mb-3 border-0 shadow-sm"><h2 class="accordion-header" id="#{base}Q#{index + 1}"><button class="accordion-button fw-semibold#{collapsed}" type="button" data-bs-toggle="collapse" data-bs-target="##{base}A#{index + 1}" aria-expanded="#{expanded}" aria-controls="#{base}A#{index + 1}">#{q}</button></h2><div id="#{base}A#{index + 1}" class="accordion-collapse collapse#{show}" aria-labelledby="#{base}Q#{index + 1}" data-bs-parent="##{base}Accordion"><div class="accordion-body">#{a}</div></div></div>)
  end.join("\n")
end

INDUSTRIES.each do |industry|
  slug_without_ext = industry[:slug].sub(".html", "")
  accordion_id = industry[:slug].sub(".html", "").gsub("-", "")
  html = <<~HTML
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>#{industry[:meta_title]}</title>
      <meta name="description" content="#{industry[:meta_description]}">
      <meta name="keywords" content="#{industry[:meta_keywords]}">
      <meta name="robots" content="index, follow">
      <meta name="revisit-after" content="1 day">
      <meta name="language" content="English">
      <meta name="author" content="Agile Edtech Solutions Pvt Ltd">
      <meta property="og:title" content="#{industry[:meta_title]}">
      <meta property="og:type" content="website">
      <meta property="og:url" content="https://agilesolutions.co.in/#{slug_without_ext}">
      <meta property="og:image" content="https://agilesolutions.co.in/assets/images/logo.png">
      <meta property="og:site_name" content="Agile Edtech Solutions Pvt Ltd">
      <meta property="og:description" content="#{industry[:meta_description]}">
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="#{industry[:meta_title]}">
      <meta name="twitter:description" content="#{industry[:meta_description]}">
      <meta name="twitter:image" content="https://agilesolutions.co.in/assets/images/logo.png">
      <link rel="canonical" href="https://agilesolutions.co.in/#{slug_without_ext}">
      <link rel="icon" type="image/x-icon" href="assets/images/favicon.ico">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
      <link rel="stylesheet" href="assets/css/style.css">
      <link rel="stylesheet" href="assets/css/responsive.css">
    </head>
    <body>
      <div class="floating-buttons">
        <a href="https://wa.me/918005677079" target="_blank" rel="noopener" class="float-btn whatsapp"><i class="fab fa-whatsapp"></i></a>
        <a href="tel:+918005677079" class="float-btn call"><i class="fas fa-phone"></i></a>
        <a href="https://maps.app.goo.gl/vPH27tsbpZQjQtXQ6" target="_blank" class="float-btn location"><i class="fas fa-map-marker-alt"></i></a>
      </div>
      <div id="dynamic-header"></div>

      <section class="industry-landing-hero py-5">
        <div class="container">
          <div class="row align-items-center g-4">
            <div class="col-lg-7">
              <span class="industry-hero-kicker">#{industry[:name]} Industry Marketing</span>
              <h1>#{industry[:title]}</h1>
              <p class="industry-hero-copy">#{industry[:intro]}</p>
              <div class="industry-hero-actions">
                <a href="https://wa.me/918005677079" target="_blank" rel="noopener" class="our-primary-btn contact-btn me-2"><span>Talk To Us <img loading="lazy" decoding="async" src="assets/images/right-arrow.png" alt="Arrow"></span></a>
                <a href="digital-marketing.html" class="our-secondary-btn"><span>Explore Services <img loading="lazy" decoding="async" src="assets/images/right-arrow.png" alt="Arrow"></span></a>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="industry-hero-panel">
                <div class="industry-panel-icon"><i class="fa-solid #{industry[:icon]}"></i></div>
                <h2>Growth strategy for #{industry[:short_name]}</h2>
                <p>We build SEO-friendly, conversion-ready digital marketing systems for #{industry[:audience]}.</p>
                <ul class="industry-panel-list">
                  <li>Keyword-rich landing pages aligned with search intent</li>
                  <li>Google Ads, Meta Ads and remarketing built for quality leads</li>
                  <li>Reporting that connects rankings, traffic, enquiries and growth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about-secation py-5">
        <div class="container">
          <div class="row align-items-center g-4">
            <div class="col-lg-6">
              <div class="industry-content-panel">
                <h6>#{industry[:name]} Growth Focus</h6>
                <h2 class="fw-bold">SEO-friendly digital marketing for #{industry[:short_name]}</h2>
                <p>#{industry[:intro]}</p>
                <p class="mb-0">Our team combines search engine optimization, paid media, landing-page strategy, local visibility and remarketing so your business can attract the right audience at the right time. The goal is not just more clicks, but stronger enquiry quality, clearer positioning and sustainable growth.</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="industry-content-panel industry-content-highlight">
                <h3>Common growth challenges we solve</h3>
                <p>Every #{industry[:name].downcase} business faces a different mix of competition, trust barriers and conversion friction. We plan around those realities instead of using generic campaigns.</p>
                <ul class="industry-challenge-list">
    #{challenge_rows(industry[:challenges])}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="features development-services py-5 industry-service-section">
        <div class="container">
          <div class="heading-tittle text-center">
            <h6>#{industry[:name]} Marketing Services</h6>
            <h2 class="fw-bold">Campaigns built for #{industry[:short_name]}</h2>
            <p>We create content-rich pages and channel strategies that help businesses rank for relevant search terms and convert that visibility into measurable business outcomes.</p>
          </div>
          <div class="row g-4 justify-content-center">
    #{card_rows(industry[:services], "industry-solution-card", industry)}
          </div>
        </div>
      </section>

      <section class="our-process py-5 industry-process-section">
        <div class="container">
          <div class="heading-tittle text-center">
            <h6>Our Process</h6>
            <h2 class="fw-bold">How we build performance for #{industry[:name]} businesses</h2>
            <p>We balance discoverability, conversion quality and long-term growth with a structured workflow that fits your business goals.</p>
          </div>
          <div class="row g-4 justify-content-center mt-1">
    #{process_rows}
          </div>
        </div>
      </section>

      <section class="why-choose-us py-5">
        <div class="overlay"></div>
        <div class="container">
          <div class="heading-tittle">
            <h6 class="text-white">Growth Outcomes</h6>
            <h2 class="fw-bold text-white">What stronger digital marketing can unlock</h2>
            <p class="text-white">Our campaigns are designed to improve discoverability, trust and conversion performance for #{industry[:short_name].downcase}.</p>
          </div>
          <div class="row g-4 justify-content-center">
    #{benefit_rows(industry)}
          </div>
        </div>
      </section>

      <section class="industry-cross-links py-5">
        <div class="container">
          <div class="heading-tittle text-center">
            <h6>More Industries</h6>
            <h2 class="fw-bold">Explore other industries we work with</h2>
            <p>We have created dedicated digital marketing pages for multiple business categories to strengthen relevance, internal linking and search visibility.</p>
          </div>
          <div class="row g-3 justify-content-center">
    #{link_grid(industry[:slug])}
          </div>
        </div>
      </section>

      <section class="accordion-info py-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="service-accordion-section">
                <div class="heading-tittle text-center mb-4">
                  <h6 class="text-primary">#{industry[:name]} Marketing FAQs</h6>
                  <h2 class="fw-bold text-dark">Frequently Asked Questions</h2>
                  <p class="mb-0">Quick answers about our digital marketing approach for #{industry[:audience]}.</p>
                </div>
                <div class="accordion" id="#{accordion_id}Accordion">
    #{faq_rows(industry)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="industry-cta-band py-5">
        <div class="container">
          <div class="industry-cta-inner">
            <div>
              <span class="industry-cta-kicker">Need an industry-specific strategy?</span>
              <h2>Let us create a growth plan for your #{industry[:name].downcase} business</h2>
              <p>We can build an SEO roadmap, landing-page structure and campaign plan aligned with your business goals.</p>
            </div>
            <div class="industry-cta-actions">
              <a href="contact.html" class="our-primary-btn"><span>Get a Proposal <img loading="lazy" decoding="async" src="assets/images/right-arrow.png" alt="Arrow"></span></a>
            </div>
          </div>
        </div>
      </section>

      <div id="dynamic-footer"></div>
      <a href="#" id="go-to-top" class="go-to-top" aria-label="Go to top or bottom"><i id="go-to-top-icon" class="fa-solid fa-arrow-up"></i></a>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/vivus@latest/dist/vivus.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
      <script>const phoneNumber = "8005677079";</script>
      <script src="assets/js/header.js"></script>
      <script src="assets/js/footer.js"></script>
      <script src="assets/js/seo-manager.js"></script>
      <script src="assets/js/script.js"></script>
    </body>
    </html>
  HTML

  File.write(File.join(ROOT, industry[:slug]), html)
  puts "generated #{industry[:slug]}"
end
