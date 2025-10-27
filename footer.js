class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #0f172a;
          color: white;
          padding: 3rem 1rem;
          text-align: center;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .social-links a {
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
        }
        .copyright {
          opacity: 0.7;
          font-size: 0.9rem;
        }
      </style>
      <footer>
        <div class="container">
          <div class="social-links">
            <a href="https://github.com/notArealdevv" target="_blank">
              <i data-feather="github"></i>
            </a>
            <a href="mailto:biraj.poudel@usm.edu">
              <i data-feather="mail"></i>
            </a>
            <a href="tel:9453355187">
              <i data-feather="phone"></i>
            </a>
          </div>
          <p class="copyright">© ${new Date().getFullYear()} Biraj Poudel. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);