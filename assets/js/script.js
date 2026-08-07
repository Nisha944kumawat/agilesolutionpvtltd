(function () {
  const PHONE_NUMBER = "8005677079";

  if (!window.phoneNumber) {
    window.phoneNumber = PHONE_NUMBER;
  }

  const initVivus = function () {
    if (typeof Vivus === "undefined") {
      return;
    }

    document.querySelectorAll(".service-card").forEach(function (serviceCard) {
      const svg = serviceCard.querySelector("svg");
      if (!svg) {
        return;
      }

      const vivusInstance = new Vivus(svg, {
        type: "delayed",
        duration: 100,
        start: "manual",
      });

      window.addEventListener("load", function () {
        vivusInstance.stop().reset().play();
      });

      serviceCard.addEventListener("mouseenter", function () {
        vivusInstance.stop().reset().play();
      });
    });
  };

  const initCarousels = function () {
    if (typeof window.jQuery === "undefined" || typeof jQuery.fn.owlCarousel !== "function") {
      return;
    }

    jQuery(".owl-carousel.service-carousel").owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
      },
    });

    jQuery(".owl-carousel.brand-carousel").owlCarousel({
      loop: true,
      margin: 16,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      nav: false,
      dots: true,
      responsive: {
        0: { items: 2 },
        600: { items: 4 },
        1000: { items: 6 },
      },
    });

    jQuery(".owl-carousel.testimonial-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
      },
    });

    jQuery(".owl-carousel.s-page-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      smartSpeed: 1000,
      responsive: {
        0: { items: 1 },
        600: { items: 3 },
        1000: { items: 4 },
      },
    });
  };

  const initGoToTop = function () {
    if (typeof window.jQuery === "undefined") {
      return;
    }

    const $button = jQuery("#go-to-top");
    const $icon = jQuery("#go-to-top-icon");

    if (!$button.length || !$icon.length) {
      return;
    }

    let atBottom = false;

    $button.on("click", function (e) {
      e.preventDefault();

      if (atBottom) {
        jQuery("html, body").animate({ scrollTop: 0 }, 700);
        $icon.removeClass("fa-arrow-down").addClass("fa-arrow-up");
        atBottom = false;
      } else {
        jQuery("html, body").animate({ scrollTop: jQuery(document).height() }, 700);
        $icon.removeClass("fa-arrow-up").addClass("fa-arrow-down");
        atBottom = true;
      }
    });

    jQuery(window).on("scroll", function () {
      if (jQuery(window).scrollTop() + jQuery(window).height() >= jQuery(document).height() - 10) {
        $icon.removeClass("fa-arrow-up").addClass("fa-arrow-down");
        atBottom = true;
      } else if (jQuery(window).scrollTop() <= 0) {
        $icon.removeClass("fa-arrow-down").addClass("fa-arrow-up");
        atBottom = false;
      }
    });
  };

  const initCounters = function () {
    const counters = document.querySelectorAll(".counter");
    if (!counters.length || typeof IntersectionObserver === "undefined") {
      return;
    }

    const speed = 200;

    counters.forEach(function (counter) {
      const animate = function () {
        const target = Number(counter.getAttribute("data-target"));
        const count = Number(counter.innerText.replace("+", ""));
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment) + "+";
          setTimeout(animate, 20);
        } else {
          counter.innerText = target + "+";
        }
      };

      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animate();
              observer.unobserve(counter);
            }
          });
        },
        { threshold: 1 }
      );

      observer.observe(counter);
    });
  };

  const initStickyHeader = function () {
    const header = document.querySelector("header");
    const topHeader = document.getElementById("topHeader");
    const mainNavbar = document.getElementById("mainNavbar");

    if (!header || !topHeader || !mainNavbar) {
      return;
    }

    const syncHeaderOffset = function () {
      if (mainNavbar.classList.contains("fixed")) {
        document.body.style.paddingTop = Math.max(mainNavbar.offsetHeight, 0) + "px";
      } else {
        document.body.style.paddingTop = "0px";
      }
    };

    syncHeaderOffset();
    window.addEventListener("load", syncHeaderOffset);
    window.addEventListener("resize", syncHeaderOffset);

    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        topHeader.classList.add("hide");
        mainNavbar.classList.add("fixed");
      } else {
        topHeader.classList.remove("hide");
        mainNavbar.classList.remove("fixed");
      }
      window.requestAnimationFrame(syncHeaderOffset);
    });
  };

  document.addEventListener("DOMContentLoaded", function () {
    initVivus();
    initCarousels();
    initGoToTop();
    initCounters();
    initStickyHeader();
  });
})();
















// services section home page
const categories = [
  { icon: "<i class=\"fa-solid fa-globe\"></i>", name: "Website Design & Development", overview: "website-design-development.html", services: [
    ["Landing Page / Single Page Website", "landing-page-development.html"], ["Informative Website - Multiple Pages", "informative-website-development.html"], ["eCommerce Website - WordPress / Shopify", "wordpress-shopify.html"], ["Custom CMS Website", "custom-cms-development.html"], ["Website Redesign Services", "website-redesign-services.html"], ["Website Maintenance & Support", "website-maintenance-support.html"] ] },
  { icon: "<i class=\"fa-solid fa-laptop-code\"></i>", name: "Software Development", overview: "software-development.html", services: [
    ["ERP Software Development", "erp-software-development.html"], ["CRM Software Development", "crm-software-development.html"], ["School / College Management Software", "school-college-management-software.html"], ["Lead Management Software", "lead-management-software.html"], ["POS / Billing Software", "pos-billing-software.html"], ["Custom Software Development", "custom-software.html"] ] },
  { icon: "<i class=\"fa-solid fa-mobile-screen-button\"></i>", name: "Mobile App Development", overview: "mobile-application-development.html", services: [
    ["Grocery Website & Mobile App", "grocery-app-development.html"], ["Pharmacy Store Website & Mobile App", "pharmacy-app-development.html"], ["Service on Demand Website & App", "on-demand-app-development.html"], ["Food Delivery Website & App", "food-delivery-app-development.html"], ["Travel / Taxi Booking App", "taxi-booking-app-development.html"], ["Healthcare Appointment App", "healthcare-app-development.html"] ] },
  { icon: "<i class=\"fa-solid fa-cart-shopping\"></i>", name: "eCommerce Solutions", overview: "ecommerce-solutions.html", services: [
    ["Shopify Store Development", "shopify-store-development.html"], ["WooCommerce Development", "woocommerce-development.html"], ["Multi Vendor Marketplace", "multi-vendor-marketplace.html"], ["B2B eCommerce Website", "b2b-ecommerce-website.html"], ["Online Store Development", "online-store-development.html"], ["Payment Gateway Integration", "payment-gateway-integration.html"] ] },
  { icon: "<i class=\"fa-solid fa-paint-brush\"></i>", name: "UI / UX Design", overview: "ui-ux-design.html", services: [
    ["UI / UX Design", "ui-ux-design-services.html"], ["Mobile App UI Design", "mobile-app-ui-design.html"], ["Website UI Design", "website-ui-design.html"], ["Dashboard Design", "dashboard-design.html"], ["Wireframing", "wireframing-services.html"], ["Figma Design", "figma-design-services.html"] ] },
  { icon: "<i class=\"fa-solid fa-cloud\"></i>", name: "Cloud & Hosting", overview: "cloud-hosting.html", services: [
    ["Domain Registration", "domain-registration.html"], ["Web Hosting Services", "web-hosting-services.html"], ["VPS Hosting", "vps-hosting.html"], ["Cloud Hosting", "cloud-hosting-services.html"], ["Website Migration", "website-migration.html"], ["SSL Installation", "ssl-installation.html"] ] },
  { icon: "<i class=\"fa-solid fa-magnifying-glass\"></i>", name: "Search Engine Optimization", overview: "seo.html", services: [
    ["Local SEO", "local-seo.html"], ["Technical SEO", "technical-seo.html"], ["On Page SEO", "on-page-seo.html"], ["Off Page SEO", "off-page-seo.html"], ["Ecommerce SEO", "ecommerce-seo.html"], ["SEO Audit", "seo-audit.html"] ] },
  { icon: "<i class=\"fa-solid fa-chart-line\"></i>", name: "Digital Marketing", overview: "digital-marketing.html", services: [
    ["Google Ads", "google-ads.html"], ["Facebook Ads", "facebook-ads.html"], ["Instagram Ads", "instagram-ads.html"], ["PPC Campaign Management", "ppc.html"], ["Social Media Marketing", "social-media-marketing.html"], ["Lead Generation", "lead-generation.html"] ] },
  { icon: "<i class=\"fa-solid fa-palette\"></i>", name: "Branding & Creative", overview: "branding-creative.html", services: [
    ["Logo Design", "logo-design.html"], ["Brand Identity Design", "brand-identity-design.html"], ["Business Card Design", "business-card-design.html"], ["Brochure Design", "brochure-design.html"], ["Social Media Post Design", "social-media-post-design.html"], ["Video Editing", "video-editing.html"] ] },
  { icon: "<i class=\"fa-solid fa-robot\"></i>", name: "AI & Automation", overview: "ai-automation.html", services: [
    ["AI Chatbot Development", "ai-chatbot-development.html"], ["AI Customer Support Bot", "ai-customer-support-bot.html"], ["WhatsApp Chatbot", "whatsapp-chatbot.html"], ["AI Automation", "ai-automation-services.html"], ["OpenAI Integration", "openai-integration.html"], ["Workflow Automation", "workflow-automation.html"] ] },
  { icon: "<i class=\"fa-solid fa-link\"></i>", name: "API Integration", overview: "api-development.html", services: [
    ["Payment Gateway Integration", "payment-gateway-integration.html"], ["WhatsApp API Integration", "whatsapp-api.html"], ["SMS API Integration", "sms-api-integration.html"], ["Google Maps API", "google-maps-api.html"], ["Razorpay Integration", "razorpay-integration.html"], ["REST API Development", "rest-api-development.html"] ] },
  { icon: "<i class=\"fa-solid fa-bullhorn\"></i>", name: "Bulk Marketing", overview: "bulk-marketing.html", services: [
    ["WhatsApp Marketing", "whatsapp-marketing.html"], ["Email Marketing", "email-marketing.html"], ["RCS Messaging", "rcs-messaging.html"], ["Bulk Voice Calls", "bulk-voice-calls.html"], ["SMS Marketing", "sms-marketing.html"], ["Lead Generation", "lead-generation.html"] ] }
];

const grid = document.querySelector("#servicesGrid");
const dots = document.querySelector("#sliderDots");
const prev = document.querySelector(".slider-btn--prev");
const next = document.querySelector(".slider-btn--next");
const backTop = document.querySelector(".back-top");

grid.innerHTML = categories.map((category) => `
  <article class="service-card">
    <div class="card-head">
      <span class="card-icon" aria-hidden="true">${category.icon}</span>
      <div><a class="card-kicker" href="${category.overview}">Explore Services</a><a class="card-title" href="${category.overview}">${category.name}</a></div>
      <a class="card-arrow" href="${category.overview}" aria-label="View ${category.name}">&#8594;</a>
    </div>
    <ul class="service-list">${category.services.map(([label, url]) => `<li><a href="${url}">${label}</a></li>`).join("")}</ul>
    <a class="card-cta" href="${category.overview}">Get Started <span aria-hidden="true">&#8594;</span></a>
  </article>`).join("");

const pageSize = () => innerWidth >= 1500 ? 6 : innerWidth > 700 ? 3 : 1;
const cardStep = () => grid.querySelector(".service-card").getBoundingClientRect().width + 16;
const pageCount = () => Math.ceil(categories.length / pageSize());

function renderDots() {
  if (innerWidth <= 700) return dots.innerHTML = "";
  const current = Math.round(grid.scrollLeft / (cardStep() * pageSize()));
  dots.innerHTML = Array.from({ length: pageCount() }, (_, i) => `<button class="slider-dot ${i === current ? "active" : ""}" type="button" data-page="${i}" aria-label="Go to service page ${i + 1}"></button>`).join("");
  prev.disabled = grid.scrollLeft < 5;
  next.disabled = grid.scrollLeft >= grid.scrollWidth - grid.clientWidth - 5;
}
function go(direction) { grid.scrollBy({ left: direction * cardStep() * pageSize(), behavior: "smooth" }); }
prev.addEventListener("click", () => go(-1));
next.addEventListener("click", () => go(1));
dots.addEventListener("click", (event) => { const dot = event.target.closest("[data-page]"); if (dot) grid.scrollTo({ left: Number(dot.dataset.page) * cardStep() * pageSize(), behavior: "smooth" }); });
grid.addEventListener("scroll", () => requestAnimationFrame(renderDots), { passive: true });
grid.addEventListener("keydown", (event) => { if (event.key === "ArrowRight") go(1); if (event.key === "ArrowLeft") go(-1); });
addEventListener("resize", renderDots);
addEventListener("scroll", () => backTop.style.opacity = scrollY > 350 ? "1" : ".55", { passive: true });
backTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
renderDots();
