document.addEventListener("DOMContentLoaded", function () {
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
          <li class="nav-item"><a class="nav-link" href="https://agilesolutions.co.in/index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" id="aboutNavLink" href="https://agilesolutions.co.in/about-us.html">About</a></li>

          <li class="nav-item dropdown mega-dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">Services</a>

            <div class="dropdown-menu mega-menu p-4" aria-labelledby="servicesDropdown">
              <div class="row align-items-center">
                <div class="col-lg-9 col-md-12">
                  <div class="row">
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li><a href="https://agilesolutions.co.in/website-design-development.html">➤ Website Design & Development</a></li>
                        <li><a href="https://agilesolutions.co.in/web-development.html">➤ Web Development</a></li>
                        <li><a href="https://agilesolutions.co.in/ecommerce.html">➤ E-Commerce Website</a></li>
                        <li><a href="https://agilesolutions.co.in/wordpress-shopify.html">➤ WordPress / Shopify</a></li>
                        <li><a href="https://agilesolutions.co.in/crm-solutions.html">➤ CRM Solutions</a></li>
                        <li><a href="https://agilesolutions.co.in/custom-software.html">➤ Custom Software Development</a></li>
                        <li><a href="https://agilesolutions.co.in/api-development.html">➤ API Development</a></li>
                        <li><a href="https://agilesolutions.co.in/whatsapp-api.html">➤ WhatsApp API (Meta API)</a></li>
                        <li><a href="https://agilesolutions.co.in/rcs-service.html">➤ RCS Service</a></li>
                        <li><a href="https://agilesolutions.co.in/mobile-application-development.html">➤ Mobile App Development</a></li>
                        <li><a href="https://agilesolutions.co.in/android-app-development.html">➤ Android App Development</a></li>
                        <li><a href="https://agilesolutions.co.in/ios-app-development.html">➤ iOS App Development</a></li>
                        <li><a href="https://agilesolutions.co.in/app-store-optimization.html">➤ App Store Optimization (ASO)</a></li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li><a href="https://agilesolutions.co.in/digital-marketing.html">➤ Digital Marketing Services</a></li>
                        <li><a href="https://agilesolutions.co.in/google-business.html">➤ Google Business Listing</a></li>
                        <li><a href="https://agilesolutions.co.in/seo.html">➤ Search Engine Optimization</a></li>
                        <li><a href="https://agilesolutions.co.in/smo.html">➤ Social Media Management</a></li>
                        <li><a href="https://agilesolutions.co.in/local-seo.html">➤ Local SEO Services</a></li>
                        <li><a href="https://agilesolutions.co.in/bulk-services.html">➤ Bulk Call, SMS & WA</a></li>
                        <li><a href="https://agilesolutions.co.in/ppc.html">➤ Pay Per Click (PPC) Management</a></li>
                        <li><a href="https://agilesolutions.co.in/facebook-ads.html">➤ Facebook / Instagram Ads</a></li>
                        <li><a href="https://agilesolutions.co.in/paid-advertising.html">➤ Google Ads (Search & Display)</a></li>
                        <li><a href="https://agilesolutions.co.in/shopping-ads.html">➤ Shopping Ads</a></li>
                        <li><a href="https://agilesolutions.co.in/lead-generation.html">➤ Lead Generation Campaigns</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 d-none d-lg-block">
                  <div class="service-box text-center p-4">
                    <h6 class="fw-bold text-white">CLIENT SATISFACTION</h6>
                    <h2 class="fw-bold">100%</h2>
                    <img src="assets/images/industry-marketing-showcase.png" alt="Client Work" class="img-fluid mt-3 rounded">
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item dropdown mega-dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="industriesDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">Industries We Serve</a>

            <div class="dropdown-menu mega-menu p-4" aria-labelledby="industriesDropdown">
              <div class="row align-items-center">
                <div class="col-lg-9 col-md-12">
                  <div class="row">
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li><a href="https://agilesolutions.co.in/digital-marketing-agency-grocery.html">➤ Grocery</a></li>
                        <li><a href="https://agilesolutions.co.in/digital-marketing-agency-education.html">➤ Education</a></li>
                        <li><a href="https://agilesolutions.co.in/digital-marketing-agency-ecommerce.html">➤ eCommerce</a></li>
                        <li><a href="https://agilesolutions.co.in/digital-marketing-agency-healthcare.html">➤ Healthcare</a></li>
                        <li><a href="https://agilesolutions.co.in/digital-marketing-agency-restaurant.html">➤ Restaurant</a></li>
                        <li><a href="https://agilesolutions.co.in/digital-marketing-agency-real-estate.html">➤ Real Estate</a></li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li><a href="https://agilesolutions.co.in/digital-marketing-agency-tour-travels.html">➤ Tour & Travels</a></li>
                        <li><a href="https://agilesolutions.co.in/digital-marketing-agency-transport.html">➤ Transport</a></li>
                        <li><a href="https://agilesolutions.co.in/digital-marketing-agency-event.html">➤ Event</a></li>
                        <li><a href="https://agilesolutions.co.in/digital-marketing-agency-fintech.html">➤ Fintech</a></li>
                        <li><a href="https://agilesolutions.co.in/digital-marketing-agency-on-demand.html">➤ On-Demand</a></li>
                        <li><a href="https://agilesolutions.co.in/digital-marketing.html">➤ Digital Marketing Services</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 d-none d-lg-block">
                  <div class="service-box text-center p-4">
                    <h6 class="fw-bold text-white">INDUSTRY SEO PAGES</h6>
                    <h2 class="fw-bold">11+</h2>
                    <img src="assets/images/industry-marketing-showcase.png" alt="Industries Agile Edtech Solutions serves" class="img-fluid mt-3 rounded">
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item"><a class="nav-link" href="https://agilesolutions.co.in/whatsapp-api.html">WhatsApp API</a></li>
          <li class="nav-item"><a class="nav-link" href="https://agilesolutions.co.in/our-work.html">Our Work</a></li>
          <li class="nav-item"><a class="nav-link" href="https://agilesolutions.co.in/job-opportunity.html">Join Our Team</a></li>
          <li class="nav-item"><a class="nav-link" href="https://agilesolutions.co.in/contact.html">Contact</a></li>
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
      headerContainer.querySelectorAll("#servicesDropdown + .mega-menu a[href$='.html']")
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
      };

      toggle.addEventListener("click", function (event) {
        if (window.innerWidth >= 992 || !dropdown || !menu) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        if (typeof event.stopImmediatePropagation === "function") {
          event.stopImmediatePropagation();
        }
        const isOpen = menu.classList.contains("show");
        dropdown.classList.toggle("show", !isOpen);
        menu.classList.toggle("show", !isOpen);
        toggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
      });

      document.addEventListener("click", function (event) {
        if (window.innerWidth >= 992 || !dropdown) {
          return;
        }
        if (!dropdown.contains(event.target)) {
          closeMobileMenu();
        }
      });

      config.links.forEach(function (link) {
        link.addEventListener("click", function () {
          closeMobileMenu();
          if (navbarCollapse && navbarCollapse.classList.contains("show")) {
            const collapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
            collapse.hide();
          }
        });
      });

      window.addEventListener("resize", function () {
        if (window.innerWidth >= 992 && dropdown && menu) {
          dropdown.classList.remove("show");
          menu.classList.remove("show");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }
});
