/* ── URBANCART · store.js ── */
'use strict';

// ── PRODUCT DATA ──────────────────────────────────────
window.PRODUCTS = [
  {
    id: 1, name: "Merino Wool Crewneck Sweater", category: "Clothing",
    price: 89.99, originalPrice: 129.99,
    badge: "sale", rating: 4.8, reviews: 312,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80"
    ],
    description: "Luxuriously soft merino wool crewneck. Temperature-regulating, itch-free, and built to last through every season. An essential wardrobe anchor.",
    features: ["100% Grade-A Merino Wool", "Machine washable on gentle cycle", "Available in 8 colorways", "Anti-pilling treatment", "Ribbed cuffs and hem"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Ivory", "Navy", "Charcoal", "Forest"],
    inStock: true, featured: true, trending: true
  },
  {
    id: 2, name: "Wireless Noise-Cancelling Headphones", category: "Electronics",
    price: 249.00, originalPrice: null,
    badge: "new", rating: 4.9, reviews: 874,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80"
    ],
    description: "Studio-grade audio meets all-day comfort. Industry-leading noise cancellation with 30-hour battery life and a foldable design for easy travel.",
    features: ["30-hour battery life", "Active noise cancellation (ANC)", "Bluetooth 5.2 + USB-C", "Foldable travel design", "Built-in voice assistant"],
    sizes: null,
    colors: ["Midnight Black", "Cloud White", "Slate Gray"],
    inStock: true, featured: true, trending: false
  },
  {
    id: 3, name: "Leather Minimal Wallet", category: "Accessories",
    price: 48.00, originalPrice: null,
    badge: null, rating: 4.7, reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80"
    ],
    description: "Slim Italian leather bifold with RFID blocking. Holds 6+ cards and cash without the bulk. Patina improves with every year of use.",
    features: ["Full-grain Italian leather", "RFID blocking technology", "6 card slots + billfold", "Less than 6mm slim profile", "Handcrafted finishing"],
    sizes: null,
    colors: ["Tan", "Brown", "Black"],
    inStock: true, featured: false, trending: true
  },
  {
    id: 4, name: "Retro Analog Watch", category: "Accessories",
    price: 179.00, originalPrice: 219.00,
    badge: "sale", rating: 4.6, reviews: 203,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80"
    ],
    description: "Swiss-inspired movement in a slim stainless steel case. A timeless design that transitions from boardroom to weekend without missing a beat.",
    features: ["Japanese quartz movement", "Stainless steel case & bracelet", "Sapphire crystal glass", "5ATM water resistance", "2-year warranty"],
    sizes: null,
    colors: ["Silver/White", "Gold/Black", "Rose Gold/Brown"],
    inStock: true, featured: true, trending: true
  },
  {
    id: 5, name: "Ultralight Running Sneakers", category: "Footwear",
    price: 125.00, originalPrice: null,
    badge: "hot", rating: 4.8, reviews: 521,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80"
    ],
    description: "260g of engineered mesh upper with responsive foam midsole. Designed for runners who demand performance without sacrificing everyday wearability.",
    features: ["Engineered mesh upper", "Responsive EVA foam midsole", "Rubber outsole with flex grooves", "Recycled laces and lining", "True-to-size fit"],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    colors: ["White/Gray", "Black/Neon", "Navy/White"],
    inStock: true, featured: false, trending: true
  },
  {
    id: 6, name: "Stainless Insulated Water Bottle", category: "Home & Kitchen",
    price: 34.99, originalPrice: null,
    badge: null, rating: 4.9, reviews: 1203,
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&q=80"
    ],
    description: "32oz double-wall vacuum insulated. Keeps beverages cold for 24 hours, hot for 12. Leak-proof lid, BPA-free, dishwasher safe — the last bottle you'll buy.",
    features: ["32oz / 950ml capacity", "24hr cold · 12hr hot retention", "Leak-proof lid with carry loop", "BPA-free Tritan + steel", "Dishwasher safe"],
    sizes: ["24oz", "32oz", "40oz"],
    colors: ["Slate", "Sage", "Coral", "Navy", "White"],
    inStock: true, featured: false, trending: false
  },
  {
    id: 7, name: "Hardcase Carry-On Luggage", category: "Travel",
    price: 189.00, originalPrice: 239.00,
    badge: "sale", rating: 4.7, reviews: 88,
    images: [
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=600&q=80",
      "https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?w=600&q=80"
    ],
    description: "TSA-approved combination lock, 360° silent spinner wheels, and expandable packing system. Built from polycarbonate shell that flexes without cracking.",
    features: ["Polycarbonate hardshell", "4 dual 360° spinner wheels", "TSA-approved combination lock", "Expandable packing system (+15%)", "USB-A charging port"],
    sizes: ["Carry-On (21in)", "Medium (25in)", "Large (29in)"],
    colors: ["Midnight", "Sand", "Blush", "Olive"],
    inStock: true, featured: false, trending: false
  },
  {
    id: 8, name: "Ceramic Pour-Over Coffee Set", category: "Home & Kitchen",
    price: 64.00, originalPrice: null,
    badge: "new", rating: 4.8, reviews: 142,
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80"
    ],
    description: "Hand-thrown ceramic dripper with a matte glaze that develops character over time. Includes 40 filters and a matching drip tray. Brews 1–4 cups.",
    features: ["Hand-thrown stoneware ceramic", "Fits most standard mugs", "Includes 40 unbleached filters", "Dishwasher safe", "Brews 1–4 cups"],
    sizes: null,
    colors: ["Matte White", "Matte Black", "Terracotta"],
    inStock: true, featured: true, trending: false
  }
];

window.CATEGORIES = [
  { name: "Clothing",      count: 1, img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&q=80" },
  { name: "Electronics",  count: 1, img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&q=80" },
  { name: "Accessories",  count: 2, img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80" },
  { name: "Footwear",     count: 1, img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&q=80" },
  { name: "Home & Kitchen", count: 2, img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80" },
  { name: "Travel",       count: 1, img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80" }
];

// ── CART MANAGER ─────────────────────────────────────
window.Cart = (() => {
  const STORAGE_KEY = 'urbancart_v1';

  function load() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch { return []; }
  }

  function save(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    _dispatch();
  }

  function _dispatch() {
    document.dispatchEvent(new CustomEvent('cart:updated', { detail: getItems() }));
  }

  function getItems() { return load(); }

  function getCount() { return load().reduce((s, i) => s + i.qty, 0); }

  function getSubtotal() { return load().reduce((s, i) => s + i.price * i.qty, 0); }

  function add(productId, qty = 1, variant = '') {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const items = load();
    const key = `${productId}-${variant}`;
    const existing = items.find(i => i.key === key);
    if (existing) {
      existing.qty = Math.min(existing.qty + qty, 10);
    } else {
      items.push({
        key, id: productId,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant,
        qty: Math.min(qty, 10),
        category: product.category
      });
    }
    save(items);
    return product;
  }

  function remove(key) {
    save(load().filter(i => i.key !== key));
  }

  function updateQty(key, qty) {
    const items = load();
    const item = items.find(i => i.key === key);
    if (!item) return;
    if (qty <= 0) { remove(key); return; }
    item.qty = Math.min(qty, 10);
    save(items);
  }

  function clear() { save([]); }

  return { getItems, getCount, getSubtotal, add, remove, updateQty, clear };
})();

// ── WISHLIST ──────────────────────────────────────────
window.Wishlist = (() => {
  const KEY = 'urbancart_wish';
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } }
  function save(ids) { localStorage.setItem(KEY, JSON.stringify(ids)); }
  function toggle(id) {
    const list = load();
    const idx = list.indexOf(id);
    if (idx > -1) list.splice(idx, 1);
    else list.push(id);
    save(list);
    return idx === -1;
  }
  function has(id) { return load().includes(id); }
  return { toggle, has };
})();

// ── TOAST ─────────────────────────────────────────────
window.showToast = function(message, type = 'default', duration = 3000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  const icons = { success: '✓', error: '✕', default: '🛍' };
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type] || icons.default}</span>${message}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toastOut .3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, duration);
};

// ── NAV CART BADGE ────────────────────────────────────
function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-count');
  const count = Cart.getCount();
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
    if (count > 0) {
      b.classList.remove('bump');
      void b.offsetWidth;
      b.classList.add('bump');
    }
  });
}

document.addEventListener('cart:updated', updateCartBadge);

// ── CART SIDEBAR ──────────────────────────────────────
function renderCartSidebar() {
  const sidebar = document.getElementById('cartSidebar');
  if (!sidebar) return;
  const itemsEl = sidebar.querySelector('.cart-items');
  const items = Cart.getItems();
  const subtotalEl = sidebar.querySelector('.cart-subtotal-value');
  if (subtotalEl) subtotalEl.textContent = '$' + Cart.getSubtotal().toFixed(2);
  if (!itemsEl) return;
  if (items.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><h4>Your cart is empty</h4><p>Add items to get started</p><a href="shop.html" class="btn btn-primary" style="margin-top:.5rem">Browse Products</a></div>`;
    return;
  }
  itemsEl.innerHTML = items.map(item => `
    <div class="cart-item" data-key="${item.key}">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        ${item.variant ? `<div class="cart-item-variant">${item.variant}</div>` : ''}
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="Cart.updateQty('${item.key}', ${item.qty - 1});renderCartSidebar()">−</button>
          <span class="qty-display">${item.qty}</span>
          <button class="qty-btn" onclick="Cart.updateQty('${item.key}', ${item.qty + 1});renderCartSidebar()">+</button>
          <button class="cart-item-remove" onclick="Cart.remove('${item.key}');renderCartSidebar();showToast('Item removed')">Remove</button>
        </div>
      </div>
    </div>
  `).join('');
}

function openCart() {
  const overlay = document.getElementById('cartOverlay');
  const sidebar = document.getElementById('cartSidebar');
  renderCartSidebar();
  if (overlay) overlay.classList.add('open');
  if (sidebar) sidebar.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const overlay = document.getElementById('cartOverlay');
  const sidebar = document.getElementById('cartSidebar');
  if (overlay) overlay.classList.remove('open');
  if (sidebar) sidebar.classList.remove('open');
  document.body.style.overflow = '';
}

window.openCart = openCart;
window.closeCart = closeCart;
window.renderCartSidebar = renderCartSidebar;

// ── COOKIE BANNER ─────────────────────────────────────
window.initCookieBanner = function() {
  if (localStorage.getItem('uc_cookies')) return;
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;
  setTimeout(() => banner.classList.add('show'), 1200);
  const accept = banner.querySelector('.cookie-accept');
  const decline = banner.querySelector('.cookie-decline');
  accept?.addEventListener('click', () => { localStorage.setItem('uc_cookies', 'accepted'); banner.classList.remove('show'); });
  decline?.addEventListener('click', () => { localStorage.setItem('uc_cookies', 'declined'); banner.classList.remove('show'); });
};

// ── SCROLL REVEAL ─────────────────────────────────────
window.initReveal = function() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
};

// ── NAV SCROLL ────────────────────────────────────────
window.initNav = function() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile hamburger
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.getElementById('mobileNav');
  hamburger?.addEventListener('click', () => {
    mobileNav?.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    const isOpen = mobileNav?.classList.contains('open');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Cart buttons
  document.querySelectorAll('[data-cart-open]').forEach(btn => btn.addEventListener('click', openCart));
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);

  updateCartBadge();
  document.addEventListener('cart:updated', () => {
    renderCartSidebar();
    updateCartBadge();
  });
};

// ── ANNOUNCEMENT BAR ──────────────────────────────────
window.initAnnounce = function() {
  document.querySelector('.announce-close')?.addEventListener('click', e => {
    e.currentTarget.closest('.announce-bar')?.remove();
  });
};

// ── ACCORDION ────────────────────────────────────────
window.initAccordions = function() {
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const body = item.querySelector('.accordion-body');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item.open').forEach(open => {
        open.classList.remove('open');
        open.querySelector('.accordion-body').style.maxHeight = '0';
      });
      if (!isOpen) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
};

// ── PRODUCT CARD BUILDER ──────────────────────────────
window.buildProductCard = function(product, baseUrl = '') {
  const save = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
  const stars = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating));
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-img-wrap">
        <a href="${baseUrl}pages/product.html?id=${product.id}">
          <img src="${product.images[0]}" alt="${product.name}" class="product-img" loading="lazy">
        </a>
        ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'hot' ? '🔥 Hot' : product.badge.toUpperCase()}</span>` : ''}
        <button class="product-wishlist ${Wishlist.has(product.id) ? 'active' : ''}" 
          onclick="toggleWish(this,${product.id})" aria-label="Add to wishlist">
          ${Wishlist.has(product.id) ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="product-body">
        <div class="product-category">${product.category}</div>
        <div class="product-name">
          <a href="${baseUrl}pages/product.html?id=${product.id}">${product.name}</a>
        </div>
        <div class="product-rating">
          <span class="product-stars">${stars}</span>
          <span class="product-reviews">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price-row">
          <div>
            <span class="product-price">$${product.price.toFixed(2)}</span>
            ${product.originalPrice ? `<span class="product-price-orig">$${product.originalPrice.toFixed(2)}</span>` : ''}
          </div>
          <button class="product-add" onclick="addToCartCard(this,${product.id})" aria-label="Add to cart">+</button>
        </div>
      </div>
    </div>
  `;
};

window.toggleWish = function(btn, id) {
  const added = Wishlist.toggle(id);
  btn.innerHTML = added ? '❤️' : '🤍';
  btn.classList.toggle('active', added);
  showToast(added ? 'Added to wishlist' : 'Removed from wishlist');
};

window.addToCartCard = function(btn, id) {
  Cart.add(id);
  btn.textContent = '✓';
  btn.classList.add('added');
  showToast('Added to cart ✓', 'success');
  setTimeout(() => { btn.textContent = '+'; btn.classList.remove('added'); }, 1800);
};

// ── INIT ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initCookieBanner();
  initAnnounce();
  initAccordions();
});
