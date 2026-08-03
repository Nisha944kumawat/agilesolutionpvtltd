document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  const footerHTML = `
  <footer class="footer footer-bg pt-5 pb-3">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-3 col-md-6">
          <a href="index.html" class="d-inline-block mb-3" aria-label="Agile Edtech Solutions Home">
            <img src="assets/images/agile-edtech-solutions-logo.png" alt="Agile Edtech Solutions" height="40">
          </a>
          <p>
            Agile Edtech Solutions Pvt Ltd is a Jaipur-based website development and digital marketing company delivering performance-driven growth across SEO, Google Ads, Facebook Ads, and lead generation.
          </p>
          <div class="d-flex gap-3 mt-3">
            <a href="https://www.facebook.com/AgileSolutionz" target="_blank" rel="noopener" class="fs-5" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://wa.me/918005677079" target="_blank" rel="noopener" class="fs-5" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            <a href="https://www.instagram.com/AgileSolutionz" target="_blank" rel="noopener" class="fs-5" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/agilesolutions1/posts/?feedView=all" target="_blank" rel="noopener" class="fs-5" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://youtu.be/GQS1VVDfkLMGMB" target="_blank" rel="noopener" class="fs-5" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-links">
          <h5 class="mb-4 fw-bold">Our Services</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="https://agilesolutions.co.in/website-design-development.html" class="text-decoration-none"><i class="fa-solid fa-arrow-right"></i> Website Design & Development</a></li>
            <li class="mb-2"><a href="https://agilesolutions.co.in/digital-marketing.html" class="text-decoration-none"><i class="fa-solid fa-arrow-right"></i> Digital Marketing</a></li>
            <li class="mb-2"><a href="https://agilesolutions.co.in/mobile-application-development.html" class="text-decoration-none"><i class="fa-solid fa-arrow-right"></i> Mobile App Development</a></li>
            <li class="mb-2"><a href="https://agilesolutions.co.in/paid-advertising.html" class="text-decoration-none"><i class="fa-solid fa-arrow-right"></i> Paid Advertising</a></li>
            <li class="mb-2"><a href="https://agilesolutions.co.in/rcs-service.html" class="text-decoration-none"><i class="fa-solid fa-arrow-right"></i> RCS Service</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 footer-links">
          <h5 class="mb-4 fw-bold">Industries We Serve</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="https://agilesolutions.co.in/digital-marketing-agency-education.html" class="text-decoration-none"><i class="fa-solid fa-arrow-right"></i> Education</a></li>
            <li class="mb-2"><a href="https://agilesolutions.co.in/digital-marketing-agency-healthcare.html" class="text-decoration-none"><i class="fa-solid fa-arrow-right"></i> Healthcare</a></li>
            <li class="mb-2"><a href="https://agilesolutions.co.in/digital-marketing-agency-ecommerce.html" class="text-decoration-none"><i class="fa-solid fa-arrow-right"></i> eCommerce</a></li>
            <li class="mb-2"><a href="https://agilesolutions.co.in/digital-marketing-agency-real-estate.html" class="text-decoration-none"><i class="fa-solid fa-arrow-right"></i> Real Estate</a></li>
            <li class="mb-2"><a href="https://agilesolutions.co.in/digital-marketing-agency-fintech.html" class="text-decoration-none"><i class="fa-solid fa-arrow-right"></i> Fintech</a></li>
            <li class="mb-2"><a href="https://agilesolutions.co.in/digital-marketing-agency-on-demand.html" class="text-decoration-none"><i class="fa-solid fa-arrow-right"></i> On-Demand</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 footer-links">
          <h5 class="mb-4 fw-bold">Contact Us</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><i class="fas fa-map-marker-alt me-2"></i> Shop - 17, Green Commercial Park, C-2SF, Jagatpura, Jaipur, Rajasthan 302017</li>
            <li class="mb-2"><i class="fas fa-phone me-2"></i><a href="tel:+918005677079" class="text-decoration-none">+91-8005677079</a></li>
            <li class="mb-2"><i class="fas fa-envelope me-2"></i><a href="mailto:agilesolutions.co.in@gmail.com" class="text-decoration-none">agilesolutions.co.in@gmail.com</a></li>
            <li class="mb-2"><i class="fab fa-whatsapp me-2"></i><a href="https://wa.me/918005677079" target="_blank" rel="noopener" class="text-decoration-none">WhatsApp Us</a></li>
            <li class="mb-2"><i class="fa-brands fa-google me-2"></i><a href="https://share.google/3PNWcU0OhcmHhj2Ds" target="_blank" rel="noopener" class="text-decoration-none">Google Business Profile</a></li>
          </ul>
        </div>
      </div>

      <hr class="border-secondary my-4">
      <div class="row align-items-center">
        <div class="col-md-4 text-center text-md-start">
          <span>Copyright © ${currentYear} Agile Edtech Solutions Pvt Ltd. All Rights Reserved.</span>
        </div>

        <div class="col-md-4 d-flex justify-content-center align-items-center footer-links">
          <a href="https://agilesolutions.co.in/terms-and-conditions.html" class="text-decoration-none">Terms &amp; Conditions</a>
          <span class="mx-2">|</span>
          <a href="https://agilesolutions.co.in/privacy-policy.html" class="text-decoration-none">Privacy Policy</a>
        </div>

        <div class="col-md-4 text-center text-md-end">
          <span>Made with <i class="fa fa-heart text-danger"></i> in Jaipur</span>
        </div>
      </div>
    </div>
  </footer>
  `;

  const footerContainer = document.getElementById("dynamic-footer");
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }
});
