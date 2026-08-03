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
