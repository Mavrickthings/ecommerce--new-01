/* ── shared-ui.js : injects nav, cart drawer, footer, cookie banner ── */

function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/pages/') || path.includes('/blog/')) return '../';
  return '';
}

function renderSharedUI() {
  const base = getBasePath();

  // ── NAV ──
  const navEl = document.getElementById('mainNav');
  if (navEl) {
    navEl.innerHTML = `
      <div class="announce-bar" id="announceBar">
        Free shipping on orders over $75 · Use code <strong>URBAN10</strong> for 10% off your first order
        <a href="${base}pages/shop.html">Shop Now</a>
        <button class="announce-close" aria-label="Close">×</button>
      </div>
      <nav class="nav" role="navigation" aria-label="Main navigation">
        <div class="nav-inner">
          <a href="${base}index.html" class="nav-logo">
            <div class="nav-logo-icon">UC</div>
            UrbanCart
          </a>
          <ul class="nav-links">
            <li><a href="${base}index.html" ${location.pathname.endsWith('index.html') || location.pathname.endsWith('/') ? 'class="active"' : ''}>Home</a></li>
            <li><a href="${base}pages/shop.html" ${location.pathname.includes('shop') ? 'class="active"' : ''}>Shop</a></li>
            <li><a href="${base}pages/about.html" ${location.pathname.includes('about') ? 'class="active"' : ''}>About</a></li>
            <li><a href="${base}blog/index.html" ${location.pathname.includes('blog') ? 'class="active"' : ''}>Blog</a></li>
            <li><a href="${base}pages/contact.html" ${location.pathname.includes('contact') ? 'class="active"' : ''}>Contact</a></li>
          </ul>
          <div class="nav-actions">
            <button class="cart-btn" data-cart-open aria-label="Open cart">
              🛍 Cart
              <span class="cart-count" style="display:none">0</span>
            </button>
            <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
      <div class="mobile-nav" id="mobileNav">
        <a href="${base}index.html">Home</a>
        <a href="${base}pages/shop.html">Shop</a>
        <a href="${base}pages/about.html">About Us</a>
        <a href="${base}blog/index.html">Blog</a>
        <a href="${base}pages/contact.html">Contact</a>
        <a href="${base}pages/cart.html">🛍 View Cart</a>
      </div>
    `;
  }

  // ── CART SIDEBAR ──
  const cartEl = document.getElementById('cartDrawer');
  if (cartEl) {
    cartEl.innerHTML = `
      <div class="cart-overlay" id="cartOverlay"></div>
      <div class="cart-sidebar" id="cartSidebar">
        <div class="cart-header">
          <h3>Your Cart</h3>
          <button class="cart-close" id="cartClose" aria-label="Close cart">×</button>
        </div>
        <div class="cart-items" id="cartItemsList"></div>
        <div class="cart-footer">
          <div class="cart-promo">
            <input type="text" class="promo-input" placeholder="Promo code" aria-label="Promo code">
            <button class="promo-btn">Apply</button>
          </div>
          <div class="cart-subtotal">
            <span class="cart-subtotal-label">Subtotal</span>
            <span class="cart-subtotal-value">$0.00</span>
          </div>
          <p class="cart-shipping-note">✓ Free shipping on orders over $75</p>
          <div class="cart-cta-stack">
            <a href="${base}pages/cart.html" class="btn btn-outline btn-full" onclick="closeCart()">View Cart</a>
            <a href="${base}pages/checkout.html" class="btn btn-primary btn-full">Checkout →</a>
          </div>
        </div>
      </div>
    `;
  }

  // ── COOKIE BANNER ──
  const cookieEl = document.getElementById('cookieMount');
  if (cookieEl) {
    cookieEl.innerHTML = `
      <div class="cookie-banner" id="cookieBanner" role="dialog" aria-label="Cookie consent">
        <p class="cookie-text">
          We use cookies to improve your shopping experience and analyze traffic.
          <a href="${base}pages/privacy.html">Learn more</a>
        </p>
        <div class="cookie-btns">
          <button class="cookie-accept">Accept All</button>
          <button class="cookie-decline">Decline</button>
        </div>
      </div>
    `;
  }

  // ── FOOTER ──
  const footerEl = document.getElementById('mainFooter');
  if (footerEl) {
    footerEl.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-top">
            <div class="footer-brand">
              <a href="${base}index.html" class="footer-logo">
                <div class="footer-logo-icon">UC</div>
                UrbanCart
              </a>
              <p>Modern essentials for modern living. Premium products curated for quality, style, and everyday usefulness.</p>
              <div class="footer-social">
                <a href="#" class="social-btn" aria-label="Instagram">📸</a>
                <a href="#" class="social-btn" aria-label="Twitter">🐦</a>
                <a href="#" class="social-btn" aria-label="Facebook">📘</a>
                <a href="#" class="social-btn" aria-label="Pinterest">📌</a>
              </div>
            </div>
            <div>
              <div class="footer-col-title">Shop</div>
              <ul class="footer-links">
                <li><a href="${base}pages/shop.html">All Products</a></li>
                <li><a href="${base}pages/shop.html?cat=Clothing">Clothing</a></li>
                <li><a href="${base}pages/shop.html?cat=Electronics">Electronics</a></li>
                <li><a href="${base}pages/shop.html?cat=Accessories">Accessories</a></li>
                <li><a href="${base}pages/shop.html?cat=Footwear">Footwear</a></li>
                <li><a href="${base}pages/shop.html">Sale Items</a></li>
              </ul>
            </div>
            <div>
              <div class="footer-col-title">Company</div>
              <ul class="footer-links">
                <li><a href="${base}pages/about.html">About Us</a></li>
                <li><a href="${base}blog/index.html">Blog</a></li>
                <li><a href="${base}pages/contact.html">Contact Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            <div>
              <div class="footer-col-title">Support</div>
              <ul class="footer-links">
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Returns & Exchanges</a></li>
                <li><a href="#">Track Your Order</a></li>
                <li><a href="${base}pages/privacy.html">Privacy Policy</a></li>
                <li><a href="${base}pages/terms.html">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>© 2025 UrbanCart, LLC. All rights reserved. 1247 Market Street, Suite 400, San Francisco, CA 94103</p>
            <div class="footer-legal">
              <a href="${base}pages/privacy.html">Privacy</a>
              <a href="${base}pages/terms.html">Terms</a>
              <a href="${base}pages/contact.html">Contact</a>
            </div>
            <div class="payment-icons">
              <span class="payment-icon">VISA</span>
              <span class="payment-icon">MC</span>
              <span class="payment-icon">AMEX</span>
              <span class="payment-icon">PAYPAL</span>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

document.addEventListener('DOMContentLoaded', renderSharedUI);
