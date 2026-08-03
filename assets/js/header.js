document.addEventListener("DOMContentLoaded", function () {
  const servicesData = [
    { title: "Website Design & Development", icon: "fa-solid fa-code", href: "website-design-development.html", items: [
      ["Landing Page / Single Page Website", "landing-page-development.html"], ["Informative Website - Multiple Pages", "informative-website-development.html"], ["eCommerce Website - WordPress / Shopify", "wordpress-shopify.html"], ["Custom CMS Website", "custom-cms-development.html"], ["Website Redesign Services", "website-redesign-services.html"], ["Website Maintenance & Support", "website-maintenance-support.html"], ["Responsive Website Design", "responsive-website-design.html"], ["Dynamic Website Development", "dynamic-website-development.html"]
    ]},
    { title: "Software Development", icon: "fa-solid fa-laptop-code", href: "software-development.html", items: [
      ["ERP Software Development", "erp-software-development.html"], ["CRM Software Development", "crm-software-development.html"], ["School / College Management Software", "school-college-management-software.html"], ["Lead Management Software", "lead-management-software.html"], ["POS / Billing Software", "pos-billing-software.html"], ["Custom Software Development", "custom-software.html"], ["Hospital / Clinic Management Software", "hospital-clinic-management-software.html"], ["Hotel / Restaurant Management Software", "hotel-restaurant-management-software.html"], ["Accounting / Finance Software Development", "accounting-finance-software.html"]
    ]},
    { title: "Mobile App Development", icon: "fa-solid fa-mobile-screen-button", href: "mobile-application-development.html", items: [
      ["Grocery Website & Mobile App Development", "grocery-app-development.html"], ["Pharmacy Store Website & Mobile App Development", "pharmacy-app-development.html"], ["Service on Demand Website & Mobile App", "on-demand-app-development.html"], ["Food Delivery Website & Mobile App", "food-delivery-app-development.html"], ["Travel / Taxi Booking Website & Mobile App", "taxi-booking-app-development.html"], ["Doctor Appointment / Healthcare App", "healthcare-app-development.html"], ["Event Booking App Development", "event-booking-app-development.html"]
    ]},
    { title: "eCommerce Solutions", icon: "fa-solid fa-cart-shopping", href: "ecommerce-solutions.html", items: [
      ["Shopify Store Development", "shopify-store-development.html"], ["WooCommerce Development", "woocommerce-development.html"], ["Magento Development", "magento-development.html"], ["OpenCart Development", "opencart-development.html"], ["Multi Vendor Marketplace Development", "multi-vendor-marketplace.html"], ["B2B eCommerce Website", "b2b-ecommerce-website.html"], ["B2C eCommerce Website", "b2c-ecommerce-website.html"], ["Online Store Development", "online-store-development.html"], ["Payment Gateway Integration", "payment-gateway-integration.html"], ["Shopping Cart Development", "shopping-cart-development.html"], ["Product Catalog Management", "product-catalog-management.html"], ["Order Management System", "order-management-system.html"], ["Inventory Integration", "inventory-integration.html"], ["Shipping API Integration", "shipping-api-integration.html"], ["Amazon Flipkart Seller Store Setup", "amazon-flipkart-store-setup.html"]
    ]},
    { title: "UI / UX Design", icon: "fa-solid fa-pen-ruler", href: "ui-ux-design.html", items: [
      ["UI / UX Design", "ui-ux-design-services.html"], ["Mobile App UI Design", "mobile-app-ui-design.html"], ["Website UI Design", "website-ui-design.html"], ["Dashboard Design", "dashboard-design.html"], ["Admin Panel Design", "admin-panel-design.html"], ["Wireframing", "wireframing-services.html"], ["Prototyping", "prototyping-services.html"], ["Figma Design", "figma-design-services.html"], ["Adobe XD Design", "adobe-xd-design.html"], ["Landing Page UI Design", "landing-page-ui-design.html"], ["User Experience Optimization", "user-experience-optimization.html"]
    ]},
    { title: "Cloud & Hosting", icon: "fa-solid fa-cloud", href: "cloud-hosting.html", items: [
      ["Domain Registration", "domain-registration.html"], ["Web Hosting Services", "web-hosting-services.html"], ["VPS Hosting", "vps-hosting.html"], ["Cloud Hosting", "cloud-hosting-services.html"], ["Website Migration", "website-migration.html"], ["cPanel Management", "cpanel-management.html"], ["SSL Installation", "ssl-installation.html"], ["Email Hosting", "email-hosting.html"], ["Server Setup", "server-setup.html"], ["Hostinger Deployment", "hostinger-deployment.html"]
    ]},
    { title: "Search Engine Optimization (SEO)", icon: "fa-solid fa-magnifying-glass-chart", href: "seo.html", items: [
      ["Local SEO", "local-seo.html"], ["Technical SEO", "technical-seo.html"], ["On Page SEO", "on-page-seo.html"], ["Off Page SEO", "off-page-seo.html"], ["Ecommerce SEO", "ecommerce-seo.html"], ["WordPress SEO", "wordpress-seo.html"], ["Shopify SEO", "shopify-seo.html"], ["Google Business Profile Optimization", "google-business-profile-optimization.html"], ["Google Maps Ranking", "google-maps-ranking.html"], ["SEO Audit", "seo-audit.html"], ["Keyword Research", "keyword-research.html"], ["Competitor Analysis", "competitor-analysis.html"], ["Link Building", "link-building.html"], ["Content Optimization", "content-optimization.html"], ["Image SEO", "image-seo.html"], ["Schema Markup", "schema-markup.html"], ["Core Web Vitals Optimization", "core-web-vitals.html"], ["Website Speed Optimization", "website-speed-optimization.html"], ["International SEO", "international-seo.html"], ["Enterprise SEO", "enterprise-seo.html"]
    ]},
    { title: "Digital Marketing", icon: "fa-solid fa-bullhorn", href: "digital-marketing.html", items: [
      ["Google Ads", "google-ads.html"], ["Facebook Ads", "facebook-ads.html"], ["Instagram Ads", "instagram-ads.html"], ["LinkedIn Ads", "linkedin-ads.html"], ["YouTube Ads", "youtube-ads.html"], ["PPC Campaign Management", "ppc.html"], ["Display Advertising", "display-advertising.html"], ["Remarketing Campaigns", "remarketing-campaigns.html"], ["Conversion Rate Optimization (CRO)", "conversion-rate-optimization.html"], ["Social Media Marketing", "social-media-marketing.html"], ["Email Marketing", "email-marketing.html"], ["WhatsApp Marketing", "whatsapp-marketing.html"], ["Content Marketing", "content-marketing.html"], ["Influencer Marketing", "influencer-marketing.html"], ["Online Reputation Management", "online-reputation-management.html"], ["Lead Generation", "lead-generation.html"], ["Performance Marketing", "performance-marketing.html"]
    ]},
    { title: "Branding & Creative", icon: "fa-solid fa-wand-magic-sparkles", href: "branding-creative.html", items: [
      ["Logo Design", "logo-design.html"], ["Brand Identity Design", "brand-identity-design.html"], ["Business Card Design", "business-card-design.html"], ["Brochure Design", "brochure-design.html"], ["Flyer Design", "flyer-design.html"], ["Banner Design", "banner-design.html"], ["Social Media Post Design", "social-media-post-design.html"], ["Packaging Design", "packaging-design.html"], ["Company Profile Design", "company-profile-design.html"], ["Presentation Design", "presentation-design.html"], ["Motion Graphics", "motion-graphics.html"], ["Video Editing", "video-editing.html"], ["Promotional Videos", "promotional-videos.html"], ["Product Photography", "product-photography.html"]
    ]},
    { title: "AI & Automation", icon: "fa-solid fa-robot", href: "ai-automation.html", badge: "Trending", items: [
      ["AI Chatbot Development", "ai-chatbot-development.html"], ["AI Customer Support Bot", "ai-customer-support-bot.html"], ["WhatsApp Chatbot", "whatsapp-chatbot.html"], ["Voice Bot Development", "voice-bot-development.html"], ["AI Automation", "ai-automation-services.html"], ["OpenAI Integration", "openai-integration.html"], ["ChatGPT Integration", "chatgpt-integration.html"], ["Gemini AI Integration", "gemini-ai-integration.html"], ["AI Document Processing", "ai-document-processing.html"], ["AI Recommendation System", "ai-recommendation-system.html"], ["Workflow Automation", "workflow-automation.html"], ["Business Process Automation", "business-process-automation.html"]
    ]},
    { title: "API Integration", icon: "fa-solid fa-plug", href: "api-development.html", items: [
      ["Payment Gateway Integration", "payment-gateway-integration.html"], ["WhatsApp API Integration", "whatsapp-api.html"], ["SMS API Integration", "sms-api-integration.html"], ["Email API Integration", "email-api-integration.html"], ["Google Maps API", "google-maps-api.html"], ["Razorpay Integration", "razorpay-integration.html"], ["Stripe Integration", "stripe-integration.html"], ["PayPal Integration", "paypal-integration.html"], ["CRM Integration", "crm-integration.html"], ["ERP Integration", "erp-integration.html"], ["Third Party API Development", "third-party-api-development.html"], ["REST API Development", "rest-api-development.html"] ,["Truecaller Verification Integration","truecaller-verification-integration.html"]
    ]}
  ];

  const serviceCategoriesHTML = servicesData.map(function (service, index) {
    return `<li class="service-category-item">
      <button class="service-category-btn${index === 0 ? " active" : ""}" type="button" data-service-index="${index}" aria-expanded="${index === 0}">
        <span><i class="${service.icon}" aria-hidden="true"></i>${service.title}${service.badge ? `<small>${service.badge}</small>` : ""}</span>
        <i class="fa-solid fa-chevron-right service-chevron" aria-hidden="true"></i>
      </button>
      <div class="mobile-service-panel" data-mobile-panel="${index}"></div>
    </li>`;
  }).join("");

  const servicesMegaMenu = `<div class="dropdown-menu services-mega-menu" aria-labelledby="servicesDropdown">
    <div class="services-menu-layout">
      <ul class="service-categories" aria-label="Service categories">${serviceCategoriesHTML}</ul>
      <section class="service-detail-panel" id="serviceDetailPanel" aria-live="polite"></section>
    </div>
  </div>`;

  const headerHTML = `
<header>
  <div class="top-header text-white py-0 d-none d-sm-block" id="topHeader">
    <div class="container d-flex justify-content-between align-items-center flex-wrap">
      <div class="d-flex align-items-center flex-wrap left-info">
        <span class="me-3 d-flex align-items-center">
          <i class="fa-solid fa-envelope me-2" style="color:#ffffff;"></i>
          <a href="mailto:agilesolutions.co.in@gmail.com" class="text-white">agilesolutions.co.in@gmail.com</a>
        </span>
        <span class="divider"></span>
        <span class="ms-3 d-flex align-items-center">
          <i class="fas fa-phone me-2"></i>
          <a href="tel:+918005677079" class="text-white">+91-8005677079</a>
        </span>
      </div>

      <div class="d-flex align-items-center flex-wrap right-info">
        <span class="me-3 d-flex align-items-center">
          <i class="fas fa-map-marker-alt me-2"></i>
          <a href="https://share.google/3PNWcU0OhcmHhj2Ds" target="_blank" rel="noopener" class="text-white">Jagatpura, Jaipur</a>
        </span>
        <div class="social-icons">
          <a href="https://www.facebook.com/AgileSolutionz" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="https://wa.me/918005677079" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          <a href="https://www.instagram.com/AgileSolutionz" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/agilesolutions1/posts/?feedView=all" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://youtu.be/GQS1VVDfkLMGMB" target="_blank" rel="noopener" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  </div>

  <nav class="navbar navbar-expand-lg navbar-light bg-white" id="mainNavbar">
    <div class="container">
      <a class="navbar-brand" href="index.html" aria-label="Agile Edtech Solutions Home">
        <img src="assets/images/agile-edtech-solutions-logo.png" alt="Agile Edtech Solutions" height="80" loading="eager" decoding="async" fetchpriority="high">
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbarContent"
        aria-controls="mainNavbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNavbarContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" id="aboutNavLink" href="about-us.html">About</a></li>

          <li class="nav-item dropdown mega-dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-mobile-dropdown="services"
              aria-expanded="false">Services</a>

            ${servicesMegaMenu}
          </li>

          <li class="nav-item dropdown mega-dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="industriesDropdown" role="button" data-mobile-dropdown="industries"
              aria-expanded="false">Industries We Serve</a>

            <div class="dropdown-menu mega-menu p-4" aria-labelledby="industriesDropdown">
              <div class="row align-items-center">
                <div class="col-lg-9 col-md-12">
                  <div class="row">
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li><a href="digital-marketing-agency-grocery.html">➤ Grocery</a></li>
                        <li><a href="digital-marketing-agency-education.html">➤ Education</a></li>
                        <li><a href="digital-marketing-agency-ecommerce.html">➤ eCommerce</a></li>
                        <li><a href="digital-marketing-agency-healthcare.html">➤ Healthcare</a></li>
                        <li><a href="digital-marketing-agency-restaurant.html">➤ Restaurant</a></li>
                        <li><a href="digital-marketing-agency-real-estate.html">➤ Real Estate</a></li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li><a href="digital-marketing-agency-tour-travels.html">➤ Tour & Travels</a></li>
                        <li><a href="digital-marketing-agency-transport.html">➤ Transport</a></li>
                        <li><a href="digital-marketing-agency-event.html">➤ Event</a></li>
                        <li><a href="digital-marketing-agency-fintech.html">➤ Fintech</a></li>
                        <li><a href="digital-marketing-agency-on-demand.html">➤ On-Demand</a></li>
                        <li><a href="digital-marketing.html">➤ Digital Marketing Services</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 d-none d-lg-block">
                  <div class="service-box text-center p-4">
                    <h6 class="fw-bold text-white">INDUSTRY SEO PAGES</h6>
                    <h2 class="fw-bold">11+</h2>
                    <img src="assets/images/industry-marketing-showcase.jpg" alt="Industries Agile Edtech Solutions serves" class="img-fluid mt-3 rounded">
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item"><a class="nav-link" href="our-work.html">Our Work</a></li>
          <li class="nav-item"><a class="nav-link" href="job-opportunity.html">Join Our Team</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        </ul>

        <a href="tel:+918005677079" class="our-primary-btn contact-btn">
          <span>Talk To Us <img src="assets/images/right-arrow.png" alt=""></span>
        </a>
      </div>
    </div>
  </nav>
</header>
  `;

  const headerContainer = document.getElementById("dynamic-header");
  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;

    const renderServiceLinks = function (index) {
      const service = servicesData[index];
      if (!service) return "";
      return `<div class="service-detail-heading">
        <span class="service-detail-icon"><i class="${service.icon}" aria-hidden="true"></i></span>
        <div><p>Explore Services</p><h4>${service.title}</h4></div>
      </div>
      <ul class="service-links-list">
        ${service.items.map(function (item) {
          return `<li><a href="${item[1]}"><i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i><span>${item[0]}</span></a></li>`;
        }).join("")}
      </ul>
      <a class="service-overview-link" href="${service.href}">View ${service.title} Overview <i class="fa-solid fa-arrow-right"></i></a>`;
    };

    const serviceDetailPanel = headerContainer.querySelector("#serviceDetailPanel");
    const serviceCategoryButtons = Array.from(headerContainer.querySelectorAll(".service-category-btn"));
    const mobilePanels = Array.from(headerContainer.querySelectorAll(".mobile-service-panel"));

    if (serviceDetailPanel) serviceDetailPanel.innerHTML = renderServiceLinks(0);

    const activateServiceCategory = function (index, mobileToggle) {
      serviceCategoryButtons.forEach(function (button, buttonIndex) {
        const active = buttonIndex === index;
        button.classList.toggle("active", active);
        button.setAttribute("aria-expanded", active ? "true" : "false");
      });

      if (window.innerWidth >= 992) {
        if (serviceDetailPanel) serviceDetailPanel.innerHTML = renderServiceLinks(index);
        return;
      }

      mobilePanels.forEach(function (panel, panelIndex) {
        const shouldOpen = panelIndex === index && mobileToggle;
        panel.classList.toggle("open", shouldOpen);
        panel.innerHTML = shouldOpen ? renderServiceLinks(index) : "";
      });
    };

    // serviceCategoryButtons.forEach(function (button) {
    //   const index = Number(button.dataset.serviceIndex);
    //   button.addEventListener("mouseenter", function () {
    //     if (window.innerWidth >= 992) activateServiceCategory(index, false);
    //   });
    //   button.addEventListener("focus", function () {
    //     if (window.innerWidth >= 992) activateServiceCategory(index, false);
    //   });
    //   button.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     const panel = mobilePanels[index];
    //     const willOpen = window.innerWidth < 992 && !(panel && panel.classList.contains("open"));
    //     activateServiceCategory(index, willOpen);
    //   });
    // });
    serviceCategoryButtons.forEach(function (button) {

  const index = Number(button.dataset.serviceIndex);

  button.addEventListener("click", function (event) {

    event.preventDefault();
    event.stopPropagation();

    if (window.innerWidth >= 992) {

      activateServiceCategory(index, false);

      return;

    }

    const panel = mobilePanels[index];

    const willOpen =
      !(panel && panel.classList.contains("open"));

    activateServiceCategory(index, willOpen);

  });

});

    const normalizeFile = function (value) {
      let normalized = (value || "index.html")
        .replace(/^\/+/, "")
        .toLowerCase()
        .split("?")[0]
        .split("#")[0];
      if (!normalized || normalized === "/") {
        return "index";
      }
      normalized = normalized.replace(/\.html$/i, "");
      return normalized || "index";
    };

    const currentFile = normalizeFile(window.location.pathname.split("/").pop() || "index.html");
    const topNavLinks = Array.from(headerContainer.querySelectorAll("#mainNavbar .navbar-nav > .nav-item > .nav-link"));
    const servicesToggle = headerContainer.querySelector("#servicesDropdown");
    const industriesToggle = headerContainer.querySelector("#industriesDropdown");
    const serviceDropdownLinks = Array.from(
      headerContainer.querySelectorAll("#servicesDropdown + .dropdown-menu a[href$='.html']")
    );
    const industryDropdownLinks = Array.from(
      headerContainer.querySelectorAll("#industriesDropdown + .mega-menu a[href$='.html']")
    );

    topNavLinks.forEach(function (link) {
      link.classList.remove("active");
    });
    serviceDropdownLinks.forEach(function (link) {
      link.classList.remove("active-service-link");
    });
    industryDropdownLinks.forEach(function (link) {
      link.classList.remove("active-service-link");
    });
    if (servicesToggle) {
      servicesToggle.classList.remove("active");
    }
    if (industriesToggle) {
      industriesToggle.classList.remove("active");
    }

    let activeTopLink = null;
    let isServicePage = false;
    let isIndustryPage = false;

    serviceDropdownLinks.forEach(function (link) {
      const href = link.getAttribute("href");
      if (normalizeFile(href) === currentFile) {
        isServicePage = true;
        link.classList.add("active-service-link");
      }
    });
    industryDropdownLinks.forEach(function (link) {
      const href = link.getAttribute("href");
      if (normalizeFile(href) === currentFile) {
        isIndustryPage = true;
        link.classList.add("active-service-link");
      }
    });

    activeTopLink = topNavLinks.find(function (link) {
      const href = (link.getAttribute("href") || "").toLowerCase().trim();
      if (!href || href === "#" || href.startsWith("#")) {
        return false;
      }
      return normalizeFile(href) === currentFile;
    });

    if (activeTopLink) {
      activeTopLink.classList.add("active");
    } else if (isServicePage && servicesToggle) {
      servicesToggle.classList.add("active");
    } else if (isIndustryPage && industriesToggle) {
      industriesToggle.classList.add("active");
    }

    const navbarCollapse = headerContainer.querySelector("#mainNavbarContent");

    const hideNavbarCollapse = function () {
      if (!navbarCollapse || !navbarCollapse.classList.contains("show")) return;
      if (window.bootstrap && bootstrap.Collapse) {
        bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
      } else {
        navbarCollapse.classList.remove("show");
        const navbarToggler = headerContainer.querySelector(".navbar-toggler");
        if (navbarToggler) navbarToggler.setAttribute("aria-expanded", "false");
      }
    };

    const dropdownConfigs = [
      { toggle: servicesToggle, links: serviceDropdownLinks },
      { toggle: industriesToggle, links: industryDropdownLinks },
    ];

    dropdownConfigs.forEach(function (config) {
      const toggle = config.toggle;
      if (!toggle) {
        return;
      }

      const dropdown = toggle.closest(".dropdown");
      const menu = dropdown ? dropdown.querySelector(".dropdown-menu") : null;

      const closeMobileMenu = function () {
        if (!dropdown || !menu || window.innerWidth >= 992) {
          return;
        }
        dropdown.classList.remove("show");
        menu.classList.remove("show");
        toggle.setAttribute("aria-expanded", "false");
        if (toggle === servicesToggle) {
          mobilePanels.forEach(function (panel) {
            panel.classList.remove("open");
            panel.innerHTML = "";
          });
          serviceCategoryButtons.forEach(function (button) {
            button.classList.remove("active");
            button.setAttribute("aria-expanded", "false");
          });
        }
      };

      toggle.addEventListener("click", function (event) {
        if (!dropdown || !menu) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        if (typeof event.stopImmediatePropagation === "function") {
          event.stopImmediatePropagation();
        }
        const isOpen = menu.classList.contains("show");

        dropdownConfigs.forEach(function (otherConfig) {
          if (otherConfig.toggle === toggle) return;
          const otherDropdown = otherConfig.toggle && otherConfig.toggle.closest(".dropdown");
          const otherMenu = otherDropdown && otherDropdown.querySelector(".dropdown-menu");
          if (otherDropdown && otherMenu) {
            otherDropdown.classList.remove("show");
            otherMenu.classList.remove("show");
            otherConfig.toggle.setAttribute("aria-expanded", "false");
          }
        });

        dropdown.classList.toggle("show", !isOpen);
        menu.classList.toggle("show", !isOpen);
        toggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
      });

      document.addEventListener("click", function (event) {
        if (!dropdown) return;
        if (!dropdown.contains(event.target)) {
          if (window.innerWidth < 992) {
            closeMobileMenu();
          } else if (menu) {
            dropdown.classList.remove("show");
            menu.classList.remove("show");
            toggle.setAttribute("aria-expanded", "false");
          }
        }
      });

      menu.addEventListener("click", function (event) {
        const link = event.target.closest("a[href]");
        if (link) {
          closeMobileMenu();
          hideNavbarCollapse();
        }
      });

      window.addEventListener("resize", function () {
        if (window.innerWidth >= 992 && dropdown && menu) {
          dropdown.classList.remove("show");
          menu.classList.remove("show");
          toggle.setAttribute("aria-expanded", "false");
          mobilePanels.forEach(function (panel) {
            panel.classList.remove("open");
            panel.innerHTML = "";
          });
        }
      });
    });
  }
});