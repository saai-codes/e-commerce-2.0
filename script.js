/* =========================================================
   NEXUS — PREMIUM SHOPPING | SCRIPT.JS
   Full featured: Cart, Wishlist, Search, Filter, Sort,
   Quick View, Checkout, Hero Slider, Animations
   ========================================================= */

'use strict';

/* =========================================================
   1. PRODUCT DATA
   ========================================================= */
const PRODUCTS = [
  {
    id: 1,
    name: 'Pro Smartphone X15',
    category: 'electronics',
    price: 64999,
    originalPrice: 89999,
    rating: 4.8,
    reviews: 2341,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80',
    badge: 'sale',
    desc: '6.7-inch AMOLED display, 200MP camera, 5000mAh battery, 256GB storage. The ultimate flagship smartphone experience with cutting-edge performance.',
  },
  {
    id: 2,
    name: 'Studio Pro Headphones',
    category: 'electronics',
    price: 17499,
    originalPrice: 24999,
    rating: 4.9,
    reviews: 1892,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    badge: 'best',
    desc: 'Active noise cancellation, 30-hour battery life, premium audio quality with hi-res audio support. Professional-grade sound for everyday use.',
  },
  {
    id: 3,
    name: 'Smart Watch Elite',
    category: 'accessories',
    price: 24500,
    originalPrice: 32000,
    rating: 4.7,
    reviews: 973,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
    badge: 'new',
    desc: 'Advanced health monitoring, GPS tracking, SpO2 & ECG, water resistant to 50m. Your ultimate fitness and lifestyle companion.',
  },
  {
    id: 4,
    name: 'Air Max Runners',
    category: 'shoes',
    price: 8999,
    originalPrice: 11999,
    rating: 4.6,
    reviews: 3421,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    badge: 'hot',
    desc: 'Lightweight breathable mesh upper, responsive Air cushioning, rubber outsole. Perfect for running, training, and everyday wear.',
  },
  {
    id: 5,
    name: 'Slim Fit T-Shirt',
    category: 'fashion',
    price: 899,
    originalPrice: 1499,
    rating: 4.3,
    reviews: 5201,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
    badge: 'sale',
    desc: '100% premium combed cotton, preshrunk fabric. Super soft feel, available in 12 colors. Machine washable, fade resistant.',
  },
  {
    id: 6,
    name: 'UltraBook Pro 14',
    category: 'gadgets',
    price: 89999,
    originalPrice: 109999,
    rating: 4.8,
    reviews: 1204,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80',
    badge: 'new',
    desc: 'Intel Core i7 12th Gen, 16GB LPDDR5 RAM, 512GB NVMe SSD, 14-inch 4K OLED display. Built for professionals who demand the best.',
  },
  {
    id: 7,
    name: 'Travel Backpack 45L',
    category: 'accessories',
    price: 3499,
    originalPrice: 4999,
    rating: 4.5,
    reviews: 2890,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
    badge: 'sale',
    desc: 'Water-resistant 600D polyester, anti-theft hidden pocket, integrated USB charging port, ergonomic padded straps. The perfect travel companion.',
  },
  {
    id: 8,
    name: 'Mirrorless Camera 4K',
    category: 'gadgets',
    price: 74999,
    originalPrice: 94999,
    rating: 4.9,
    reviews: 654,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80',
    badge: 'best',
    desc: '24.2MP full-frame sensor, 4K 60fps video, 5-axis in-body image stabilization, dual card slots. Capture every moment in stunning professional detail.',
  },
  {
    id: 9,
    name: 'Wireless Earbuds Pro',
    category: 'electronics',
    price: 7999,
    originalPrice: 12999,
    rating: 4.7,
    reviews: 4320,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80',
    badge: 'hot',
    desc: 'True wireless, adaptive ANC, 9hr + 27hr case battery, IPX5 water resistant, spatial audio. Crystal clear sound in every environment.',
  },
  {
    id: 10,
    name: 'Denim Jacket Classic',
    category: 'fashion',
    price: 2499,
    originalPrice: 3999,
    rating: 4.4,
    reviews: 1823,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80',
    badge: 'new',
    desc: 'Premium stonewashed denim, regular fit, multiple front pockets, contrast stitching. A timeless wardrobe essential for every season.',
  },
  {
    id: 11,
    name: 'Leather Sneakers',
    category: 'shoes',
    price: 5999,
    originalPrice: 7999,
    rating: 4.6,
    reviews: 2100,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80',
    badge: 'best',
    desc: 'Full-grain leather upper, cushioned memory foam insole, durable rubber sole. Where timeless style meets all-day comfort.',
  },
  {
    id: 12,
    name: 'Smart Tablet 11"',
    category: 'gadgets',
    price: 44999,
    originalPrice: 59999,
    rating: 4.8,
    reviews: 987,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80',
    badge: 'sale',
    desc: 'Snapdragon 8 Gen1, 128GB storage, 11-inch 120Hz AMOLED display, 13MP rear camera, 8000mAh battery. Work and play without limits.',
  },
  {
    id: 13,
    name: 'Floral Summer Dress',
    category: 'fashion',
    price: 1299,
    originalPrice: 2199,
    rating: 4.3,
    reviews: 3450,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80',
    badge: 'new',
    desc: 'Lightweight rayon floral print fabric, adjustable straps, side zip closure, knee length. A perfect dress for sunny days and summer outings.',
  },
  {
    id: 14,
    name: 'Gaming Mechanical Keyboard',
    category: 'gadgets',
    price: 9999,
    originalPrice: 13999,
    rating: 4.9,
    reviews: 1567,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80',
    badge: 'hot',
    desc: 'Per-key RGB lighting, Cherry MX Red switches, aircraft-grade aluminum body, TKL layout, USB-C passthrough. Elevate your gaming setup.',
  },
  {
    id: 15,
    name: 'Sports Running Shoes',
    category: 'shoes',
    price: 4599,
    originalPrice: 6499,
    rating: 4.5,
    reviews: 2654,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80',
    badge: 'sale',
    desc: 'Engineered mesh upper for maximum breathability, energy-return foam midsole, carbon fiber plate. Built for speed — run faster, go further.',
  },
  {
    id: 16,
    name: 'Stainless Steel Watch',
    category: 'accessories',
    price: 12999,
    originalPrice: 18999,
    rating: 4.6,
    reviews: 890,
    image: 'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400&q=80',
    badge: 'new',
    desc: '316L surgical stainless steel case, scratch-resistant sapphire crystal glass, Swiss quartz movement, 50m water resistance. Timeless elegance for every occasion.',
  },
];

/* Hero Slides Data */
const HERO_SLIDES = [
  { id: 1, tag: '🔥 Hot Deal', img: PRODUCTS[0].image, name: PRODUCTS[0].name, price: PRODUCTS[0].price, originalPrice: PRODUCTS[0].originalPrice },
  { id: 2, tag: '⚡ New Arrival', img: PRODUCTS[1].image, name: PRODUCTS[1].name, price: PRODUCTS[1].price, originalPrice: PRODUCTS[1].originalPrice },
  { id: 3, tag: '💎 Premium', img: PRODUCTS[2].image, name: PRODUCTS[2].name, price: PRODUCTS[2].price, originalPrice: PRODUCTS[2].originalPrice },
];


/* =========================================================
   2. STATE
   ========================================================= */
let cart      = JSON.parse(localStorage.getItem('nexus-cart') || '[]');
let wishlist  = JSON.parse(localStorage.getItem('nexus-wishlist') || '[]');
let activeFilter    = 'all';
let sortValue       = 'default';
let displayedCount  = 8;
let currentSlide    = 0;
let heroAutoPlay    = null;
let qvProductId     = null;
let qvQty           = 1;
let isSearchMobileOpen = false;


/* =========================================================
   3. PERSISTENCE
   ========================================================= */
function saveCart()    { localStorage.setItem('nexus-cart', JSON.stringify(cart)); }
function saveWishlist(){ localStorage.setItem('nexus-wishlist', JSON.stringify(wishlist)); }


/* =========================================================
   4. LOADER
   ========================================================= */
(function initLoader() {
  const bar  = document.getElementById('loaderBar');
  const pct  = document.getElementById('loaderPercent');
  const loader = document.getElementById('loader');
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 18 + 4;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => loader.classList.add('hidden'), 400);
    }
    bar.style.width = progress + '%';
    pct.textContent = Math.round(progress) + '%';
  }, 90);
})();


/* =========================================================
   5. HERO SLIDER
   ========================================================= */
function buildHeroSlider() {
  const track = document.getElementById('heroTrack');
  const dotsEl = document.getElementById('showcaseDots');

  track.innerHTML = HERO_SLIDES.map((s, i) => `
    <div class="showcase-slide ${i === 0 ? 'active' : ''}" data-slide="${i}">
      <div class="showcase-card" onclick="openQuickview(${s.id})">
        <span class="showcase-tag">${s.tag}</span>
        <div class="showcase-img-wrap">
          <img src="${s.img}" alt="${s.name}" class="showcase-img" loading="lazy">
        </div>
        <div class="showcase-info">
          <div class="showcase-name">${s.name}</div>
          <div class="showcase-price">
            <span class="new-price">${fmt(s.price)}</span>
            <span class="old-price">${fmt(s.originalPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  dotsEl.innerHTML = HERO_SLIDES.map((_, i) => `
    <button class="showcase-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})" aria-label="Slide ${i+1}"></button>
  `).join('');

  startHeroAutoPlay();
}

function goToSlide(n) {
  const slides = document.querySelectorAll('.showcase-slide');
  const dots   = document.querySelectorAll('.showcase-dot');
  if (!slides.length) return;
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + HERO_SLIDES.length) % HERO_SLIDES.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function startHeroAutoPlay() {
  stopHeroAutoPlay();
  heroAutoPlay = setInterval(() => goToSlide(currentSlide + 1), 4500);
}
function stopHeroAutoPlay() {
  if (heroAutoPlay) { clearInterval(heroAutoPlay); heroAutoPlay = null; }
}

// Expose goToSlide globally for inline onclick
window.goToSlide = goToSlide;


/* =========================================================
   6. COUNTER ANIMATION (Hero Stats)
   ========================================================= */
function animateCounters() {
  document.querySelectorAll('.stat-value[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const duration = 1800;
    const start = performance.now();
    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(ease * target);
      el.textContent = val >= 1000000
        ? (val / 1000000).toFixed(1) + 'M+'
        : val >= 1000
        ? Math.round(val / 1000) + 'K+'
        : val;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}


/* =========================================================
   7. UTILITY FUNCTIONS
   ========================================================= */
function fmt(n) {
  return '₹' + n.toLocaleString('en-IN');
}
function discount(price, original) {
  return Math.round((1 - price / original) * 100);
}
function stars(rating) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) s += '★';
    else if (i - rating < 1) s += '½';
    else s += '☆';
  }
  return s;
}
function genOrderId() {
  return 'NXS' + Date.now().toString().slice(-6);
}
function isInWishlist(id) {
  return wishlist.some(w => w.id === id);
}


/* =========================================================
   8. PRODUCTS RENDERING
   ========================================================= */
function getFilteredProducts() {
  let prods = [...PRODUCTS];

  // Category/filter
  if (activeFilter !== 'all') {
    prods = prods.filter(p => p.category === activeFilter);
  }

  // Search
  const q = (document.getElementById('searchInput').value || '').trim().toLowerCase();
  const mq = (document.getElementById('mobileSearchInput').value || '').trim().toLowerCase();
  const searchTerm = q || mq;
  if (searchTerm) {
    prods = prods.filter(p =>
      p.name.toLowerCase().includes(searchTerm) ||
      p.category.includes(searchTerm) ||
      p.desc.toLowerCase().includes(searchTerm)
    );
  }

  // Sort
  switch (sortValue) {
    case 'price-low':  prods.sort((a, b) => a.price - b.price); break;
    case 'price-high': prods.sort((a, b) => b.price - a.price); break;
    case 'rating':     prods.sort((a, b) => b.rating - a.rating); break;
    case 'discount':   prods.sort((a, b) => discount(b.price, b.originalPrice) - discount(a.price, a.originalPrice)); break;
  }

  return prods;
}

function renderProducts() {
  const grid   = document.getElementById('productsGrid');
  const prods  = getFilteredProducts();
  const toShow = prods.slice(0, displayedCount);

  // Update count badge
  document.getElementById('productsCountBadge').textContent =
    `${prods.length} product${prods.length !== 1 ? 's' : ''}`;

  if (!toShow.length) {
    grid.innerHTML = `
      <div class="no-products-msg">
        <i class="fas fa-search"></i>
        <h3>No Products Found</h3>
        <p>Try a different search term or browse all categories.</p>
      </div>`;
    document.getElementById('loadMoreBtn').style.display = 'none';
    return;
  }

  grid.innerHTML = toShow.map((p, i) => {
    const disc = discount(p.price, p.originalPrice);
    const badge = p.badge
      ? `<span class="prod-badge badge-${p.badge}">${p.badge.toUpperCase()}</span>`
      : '';
    const liked = isInWishlist(p.id);

    return `
    <div class="product-card reveal" style="transition-delay:${(i % 4) * 0.06}s">
      <div class="product-img-zone" onclick="openQuickview(${p.id})" title="Quick View: ${p.name}">
        <img
          src="${p.image}"
          alt="${p.name}"
          class="product-img"
          loading="lazy"
          onerror="this.src='https://placehold.co/400x400/f4f4f0/ccc?text=No+Image'"
        >
        <div class="product-badges">${badge}</div>
        <div class="product-quick-actions">
          <button
            class="quick-action-btn ${liked ? 'liked' : ''}"
            onclick="event.stopPropagation(); toggleWishlist(${p.id})"
            title="${liked ? 'Remove from Wishlist' : 'Add to Wishlist'}"
            id="wishBtn-${p.id}"
          ><i class="fas fa-heart"></i></button>
          <button
            class="quick-action-btn"
            onclick="event.stopPropagation(); openQuickview(${p.id})"
            title="Quick View"
          ><i class="fas fa-eye"></i></button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-cat-label">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating-row">
          <span class="rating-stars">${stars(p.rating)}</span>
          <span class="rating-text">${p.rating} (${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price-row">
          <div>
            <span class="product-original-price">${fmt(p.originalPrice)}</span>
            <span class="product-price">${fmt(p.price)}</span>
          </div>
          <span class="product-discount-pct">-${disc}%</span>
        </div>
        <button
          class="product-add-btn"
          id="addBtn-${p.id}"
          onclick="addToCart(${p.id})"
        >
          <i class="fas fa-shopping-bag"></i>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>`;
  }).join('');

  // Show/hide load more
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  loadMoreBtn.style.display = prods.length > displayedCount ? 'inline-flex' : 'none';

  // Trigger reveal
  requestAnimationFrame(initReveal);
}


/* =========================================================
   9. FILTERING & SORTING
   ========================================================= */

// Filter pills click
document.getElementById('filterPills').addEventListener('click', e => {
  const pill = e.target.closest('.filter-pill');
  if (!pill) return;
  activeFilter = pill.dataset.filter;
  displayedCount = 8;

  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');

  document.querySelectorAll('.cat-card').forEach(c => {
    c.classList.toggle('active', c.dataset.cat === activeFilter);
  });
  renderProducts();
});

// Category cards click
document.getElementById('categoriesGrid').addEventListener('click', e => {
  const card = e.target.closest('.cat-card');
  if (!card) return;
  filterByCategory(card.dataset.cat);
});

function filterByCategory(cat) {
  activeFilter = cat;
  displayedCount = 8;
  document.querySelectorAll('.filter-pill').forEach(p => {
    p.classList.toggle('active', p.dataset.filter === cat);
  });
  document.querySelectorAll('.cat-card').forEach(c => {
    c.classList.toggle('active', c.dataset.cat === cat);
  });
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(renderProducts, 350);
}
window.filterByCategory = filterByCategory;

// Sort
document.getElementById('sortSelect').addEventListener('change', e => {
  sortValue = e.target.value;
  renderProducts();
});

// Grid toggle
document.querySelectorAll('.grid-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.grid-toggle').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cols = btn.dataset.cols;
    const grid = document.getElementById('productsGrid');
    grid.classList.remove('cols-4', 'cols-2');
    grid.classList.add('cols-' + cols);
  });
});

// Search inputs (debounced)
let searchTimer = null;
function onSearchInput() {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    displayedCount = 8;
    renderProducts();
    // Show/hide clear button
    const val = document.getElementById('searchInput').value;
    document.getElementById('searchClear').style.display = val ? 'block' : 'none';
  }, 280);
}
document.getElementById('searchInput').addEventListener('input', onSearchInput);
document.getElementById('mobileSearchInput').addEventListener('input', () => {
  // Sync to desktop search
  document.getElementById('searchInput').value = document.getElementById('mobileSearchInput').value;
  onSearchInput();
});
document.getElementById('searchClear').addEventListener('click', () => {
  document.getElementById('searchInput').value = '';
  document.getElementById('mobileSearchInput').value = '';
  document.getElementById('searchClear').style.display = 'none';
  renderProducts();
});

// Load more
document.getElementById('loadMoreBtn').addEventListener('click', () => {
  const btn = document.getElementById('loadMoreBtn');
  btn.classList.add('loading');
  btn.querySelector('span').textContent = 'Loading…';
  setTimeout(() => {
    displayedCount += 4;
    renderProducts();
    btn.classList.remove('loading');
    btn.querySelector('span').textContent = 'Load More Products';
  }, 500);
});

function scrollToProducts() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}
window.scrollToProducts = scrollToProducts;


/* =========================================================
   10. CART FUNCTIONS
   ========================================================= */
function addToCart(id, qty = 1) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id:       product.id,
      name:     product.name,
      price:    product.price,
      image:    product.image,
      category: product.category,
      qty,
    });
  }
  saveCart();
  updateBadges();
  renderCartItems();
  showAddedFeedback(id);
  showToast(`${product.name} added to bag`, 'success');
}
window.addToCart = addToCart;

function showAddedFeedback(id) {
  const btn = document.getElementById(`addBtn-${id}`);
  if (!btn) return;
  btn.classList.add('added');
  btn.innerHTML = '<i class="fas fa-check"></i><span>Added!</span>';
  setTimeout(() => {
    btn.classList.remove('added');
    btn.innerHTML = '<i class="fas fa-shopping-bag"></i><span>Add to Cart</span>';
  }, 2200);
}

function changeCartQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    saveCart();
    updateBadges();
    renderCartItems();
  }
}
window.changeCartQty = changeCartQty;

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateBadges();
  renderCartItems();
  showToast('Item removed from bag', 'info');
}
window.removeFromCart = removeFromCart;

function getCartTotal() {
  return cart.reduce((sum, c) => sum + c.price * c.qty, 0);
}

function updateBadges() {
  const cartTotal    = cart.reduce((s, c) => s + c.qty, 0);
  const wishTotal    = wishlist.length;

  // Cart badges
  ['cartBadge'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.textContent = cartTotal; el.classList.add('bump'); setTimeout(() => el.classList.remove('bump'), 350); }
  });
  // Mobile counts
  const mc = document.getElementById('mobileCartCount');
  if (mc) mc.textContent = cartTotal;

  // Wishlist badge
  const wb = document.getElementById('wishlistBadge');
  if (wb) { wb.textContent = wishTotal; wb.classList.add('bump'); setTimeout(() => wb.classList.remove('bump'), 350); }
  const mw = document.getElementById('mobileWishlistCount');
  if (mw) mw.textContent = wishTotal;
}

function renderCartItems() {
  const list   = document.getElementById('cartItemsList');
  const footer = document.getElementById('cartSidebarFooter');
  const countEl = document.getElementById('cartHeaderCount');

  const total = cart.reduce((s, c) => s + c.qty, 0);
  countEl.textContent = total + ' item' + (total !== 1 ? 's' : '');

  if (!cart.length) {
    list.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon"><i class="fas fa-shopping-bag"></i></div>
        <h3>Your bag is empty</h3>
        <p>Add products to get started on your order.</p>
      </div>`;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'block';
  list.innerHTML = cart.map(item => `
    <div class="cart-item" id="cartItem-${item.id}">
      <img
        src="${item.image}"
        alt="${item.name}"
        class="cart-item-img"
        onerror="this.src='https://placehold.co/80x80/f4f4f0/ccc?text=?'"
      >
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-cat">${item.category}</div>
        <div class="cart-item-footer">
          <div class="cart-item-price">${fmt(item.price * item.qty)}</div>
          <div style="display:flex;align-items:center;gap:6px">
            <div class="cart-qty-ctrl">
              <button class="cart-qty-btn" onclick="changeCartQty(${item.id}, -1)">−</button>
              <span class="cart-qty-num">${item.qty}</span>
              <button class="cart-qty-btn" onclick="changeCartQty(${item.id}, 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove"><i class="fas fa-trash"></i></button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = getCartTotal();
  document.getElementById('cartSubtotal').textContent  = fmt(subtotal);
  document.getElementById('cartGrandTotal').textContent = fmt(subtotal);
}

// Open / Close Cart
function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartItems();
}
function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}
window.openCart = openCart;
window.closeCart = closeCart;

document.getElementById('cartNavBtn').addEventListener('click', openCart);
document.getElementById('mobileCartOpenBtn').addEventListener('click', () => { closeMobileDrawer(); openCart(); });


/* =========================================================
   11. WISHLIST FUNCTIONS
   ========================================================= */
function toggleWishlist(id, fromBtn = false) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const inWish = isInWishlist(id);
  if (inWish) {
    wishlist = wishlist.filter(w => w.id !== id);
    showToast(`${product.name} removed from wishlist`, 'info');
  } else {
    wishlist.push({
      id:       product.id,
      name:     product.name,
      price:    product.price,
      image:    product.image,
      category: product.category,
    });
    showToast(`${product.name} added to wishlist ❤️`, 'success');
  }
  saveWishlist();
  updateBadges();

  // Update heart button on product card
  const btn = document.getElementById(`wishBtn-${id}`);
  if (btn) btn.classList.toggle('liked', !inWish);
  if (btn) btn.title = inWish ? 'Add to Wishlist' : 'Remove from Wishlist';

  // Update quickview wishlist button if open
  const qvBtn = document.getElementById('qvAddWishlistBtn');
  if (qvBtn && qvProductId === id) {
    qvBtn.classList.toggle('in-wishlist', !inWish);
  }

  renderWishlistItems();
}
window.toggleWishlist = toggleWishlist;

function renderWishlistItems() {
  const list   = document.getElementById('wishlistItemsList');
  const footer = document.getElementById('wishlistSidebarFooter');
  const countEl = document.getElementById('wishlistHeaderCount');

  countEl.textContent = wishlist.length + ' item' + (wishlist.length !== 1 ? 's' : '');

  if (!wishlist.length) {
    list.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon"><i class="fas fa-heart"></i></div>
        <h3>Your wishlist is empty</h3>
        <p>Save products you love to find them easily later.</p>
      </div>`;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'block';
  list.innerHTML = wishlist.map(item => `
    <div class="cart-item" id="wishItem-${item.id}">
      <img
        src="${item.image}"
        alt="${item.name}"
        class="cart-item-img"
        onerror="this.src='https://placehold.co/80x80/f4f4f0/ccc?text=?'"
      >
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-cat">${item.category}</div>
        <div class="cart-item-footer">
          <div class="cart-item-price">${fmt(item.price)}</div>
          <div style="display:flex;align-items:center;gap:6px">
            <button
              style="padding:6px 14px;background:var(--navy);color:var(--white);border-radius:var(--r-xs);font-size:0.75rem;font-weight:700;display:flex;align-items:center;gap:6px;transition:all 0.2s"
              onmouseover="this.style.background='var(--gold)';this.style.color='var(--navy)'"
              onmouseout="this.style.background='var(--navy)';this.style.color='var(--white)'"
              onclick="addFromWishlist(${item.id})"
            ><i class="fas fa-shopping-bag"></i> Add</button>
            <button class="cart-item-remove" onclick="removeFromWishlistById(${item.id})" title="Remove"><i class="fas fa-trash"></i></button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function addFromWishlist(id) {
  addToCart(id);
  // Optionally remove from wishlist after adding
}
window.addFromWishlist = addFromWishlist;

function removeFromWishlistById(id) {
  const product = PRODUCTS.find(p => p.id === id);
  wishlist = wishlist.filter(w => w.id !== id);
  saveWishlist();
  updateBadges();
  renderWishlistItems();
  // Update card heart button
  const btn = document.getElementById(`wishBtn-${id}`);
  if (btn) btn.classList.remove('liked');
  if (product) showToast(`${product.name} removed from wishlist`, 'info');
}
window.removeFromWishlistById = removeFromWishlistById;

function addAllWishlistToCart() {
  wishlist.forEach(item => addToCart(item.id));
  showToast('All wishlist items added to cart!', 'success');
}
window.addAllWishlistToCart = addAllWishlistToCart;

// Open / Close Wishlist
function openWishlist() {
  renderWishlistItems();
  document.getElementById('wishlistSidebar').classList.add('open');
  document.getElementById('wishlistBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeWishlist() {
  document.getElementById('wishlistSidebar').classList.remove('open');
  document.getElementById('wishlistBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}
window.openWishlist = openWishlist;
window.closeWishlist = closeWishlist;

document.getElementById('wishlistNavBtn').addEventListener('click', openWishlist);
document.getElementById('mobileWishlistOpenBtn').addEventListener('click', () => { closeMobileDrawer(); openWishlist(); });


/* =========================================================
   12. QUICK VIEW
   ========================================================= */
function openQuickview(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  qvProductId = id;
  qvQty = 1;

  const disc = discount(p.price, p.originalPrice);
  const inWish = isInWishlist(id);

  document.getElementById('qvImage').src = p.image;
  document.getElementById('qvImage').alt = p.name;
  document.getElementById('qvCat').textContent = p.category.toUpperCase();
  document.getElementById('qvName').textContent = p.name;
  document.getElementById('qvStars').textContent = stars(p.rating) + ` ${p.rating} (${p.reviews.toLocaleString()} reviews)`;
  document.getElementById('qvPrice').innerHTML = `<del>${fmt(p.originalPrice)}</del> ${fmt(p.price)} <span style="font-size:0.8rem;color:var(--green);font-weight:700;font-family:'DM Sans'"> -${disc}%</span>`;
  document.getElementById('qvDesc').textContent = p.desc;
  document.getElementById('qvQty').textContent = qvQty;

  const badge = p.badge
    ? `<span class="prod-badge badge-${p.badge}">${p.badge.toUpperCase()}</span>`
    : '';
  document.getElementById('qvBadgeWrap').innerHTML = badge;

  // Add to cart
  const addBtn = document.getElementById('qvAddCartBtn');
  addBtn.onclick = () => { addToCart(id, qvQty); closeQuickview(); };

  // Wishlist
  const wishBtn = document.getElementById('qvAddWishlistBtn');
  wishBtn.classList.toggle('in-wishlist', inWish);
  wishBtn.title = inWish ? 'Remove from Wishlist' : 'Add to Wishlist';
  wishBtn.onclick = () => toggleWishlist(id);

  openModal('quickviewBackdrop', 'quickviewModal');
}
window.openQuickview = openQuickview;

function closeQuickview() {
  closeModal('quickviewBackdrop', 'quickviewModal');
  qvProductId = null;
}
window.closeQuickview = closeQuickview;

function qvChangeQty(delta) {
  qvQty = Math.max(1, Math.min(10, qvQty + delta));
  document.getElementById('qvQty').textContent = qvQty;
}
window.qvChangeQty = qvChangeQty;


/* =========================================================
   13. CHECKOUT
   ========================================================= */
function openCheckout() {
  closeCart();
  const subtotal = getCartTotal();
  document.getElementById('checkoutSubtotal').textContent = fmt(subtotal);
  document.getElementById('checkoutTotal').textContent = fmt(subtotal);

  const list = document.getElementById('orderItemsList');
  list.innerHTML = cart.map(item => `
    <div class="order-summary-item">
      <span class="order-summary-item-name">${item.name}</span>
      <span class="order-summary-item-qty">×${item.qty}</span>
      <span class="order-summary-item-price">${fmt(item.price * item.qty)}</span>
    </div>
  `).join('');

  openModal('checkoutBackdrop', 'checkoutModal');
}
window.openCheckout = openCheckout;

function closeCheckout() {
  closeModal('checkoutBackdrop', 'checkoutModal');
}
window.closeCheckout = closeCheckout;

// Payment option select
document.getElementById('paymentOptions').addEventListener('click', e => {
  const opt = e.target.closest('.payment-option');
  if (!opt || opt.classList.contains('coming-soon')) return;
  document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
  opt.classList.add('selected');
  const radio = opt.querySelector('input[type=radio]');
  if (radio) radio.checked = true;
});

function validateCheckout() {
  const fields = [
    { id: 'fname',    label: 'Full Name' },
    { id: 'fphone',   label: 'Phone' },
    { id: 'femail',   label: 'Email' },
    { id: 'faddress', label: 'Address' },
  ];
  let valid = true;
  fields.forEach(f => {
    const input = document.getElementById(f.id);
    const val = input.value.trim();
    if (!val) {
      input.classList.add('error');
      valid = false;
    } else {
      input.classList.remove('error');
    }
  });

  const emailEl = document.getElementById('femail');
  if (emailEl.value && !emailEl.value.includes('@')) {
    emailEl.classList.add('error');
    valid = false;
  }
  if (!valid) showToast('Please fill all required fields correctly.', 'error');
  return valid;
}

function placeOrder() {
  if (!validateCheckout()) return;

  const orderId = genOrderId();
  closeCheckout();

  cart = [];
  saveCart();
  updateBadges();
  renderCartItems();

  document.getElementById('successOrderId').textContent = 'Order #' + orderId;
  openModal('successBackdrop', 'successModal');
  spawnConfetti();
}
window.placeOrder = placeOrder;

function closeSuccess() {
  closeModal('successBackdrop', 'successModal');
  ['fname','fphone','femail','faddress','fcity','fstate','fzip'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.value = ''; el.classList.remove('error'); }
  });
}
window.closeSuccess = closeSuccess;

function spawnConfetti() {
  const colors = ['#c9a84c', '#e4c06b', '#059669', '#2563eb', '#dc2626', '#f59e0b'];
  const modal = document.getElementById('successModal');
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.cssText = `
      left:${Math.random() * 100}%;
      top:${-10 + Math.random() * 20}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      animation: confettiFall ${2 + Math.random() * 2}s ease ${Math.random() * 0.6}s forwards;
      position:absolute;
      border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
    `;
    modal.style.position = 'relative';
    modal.style.overflow = 'hidden';
    modal.appendChild(piece);
    setTimeout(() => piece.remove(), 4500);
  }
}

// Inject confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
  @keyframes confettiFall {
    0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(400px) rotate(720deg); opacity: 0; }
  }
`;
document.head.appendChild(confettiStyle);


/* =========================================================
   14. NEWSLETTER
   ========================================================= */
function subscribeNewsletter() {
  const input = document.getElementById('newsletterEmail');
  const val = input.value.trim();
  if (!val || !val.includes('@')) {
    showToast('Please enter a valid email address.', 'error');
    input.style.borderColor = 'var(--red)';
    setTimeout(() => input.style.borderColor = '', 2000);
    return;
  }
  showToast('You\'re subscribed! Welcome to NEXUS. 🎉', 'success');
  input.value = '';
}
window.subscribeNewsletter = subscribeNewsletter;


/* =========================================================
   15. MODAL HELPERS
   ========================================================= */
function openModal(backdropId, modalId) {
  document.getElementById(backdropId).classList.add('open');
  document.getElementById(modalId).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(backdropId, modalId) {
  document.getElementById(backdropId).classList.remove('open');
  document.getElementById(modalId).classList.remove('open');
  document.body.style.overflow = '';
}

// Backdrop clicks for modals
document.getElementById('checkoutBackdrop').addEventListener('click', e => {
  if (e.target === document.getElementById('checkoutBackdrop')) closeCheckout();
});
document.getElementById('quickviewBackdrop').addEventListener('click', e => {
  if (e.target === document.getElementById('quickviewBackdrop')) closeQuickview();
});
document.getElementById('successBackdrop').addEventListener('click', e => {
  if (e.target === document.getElementById('successBackdrop')) closeSuccess();
});

// Keyboard ESC
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  closeCart();
  closeWishlist();
  closeCheckout();
  closeSuccess();
  closeQuickview();
  closeMobileDrawer();
});


/* =========================================================
   16. TOAST NOTIFICATIONS
   ========================================================= */
const TOAST_ICONS = {
  success: 'fa-check-circle',
  error:   'fa-times-circle',
  info:    'fa-info-circle',
  warning: 'fa-exclamation-triangle',
};

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fas ${TOAST_ICONS[type] || 'fa-info-circle'} toast-icon"></i>
    <span class="toast-text">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
  `;
  container.appendChild(toast);

  const timeout = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(30px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 320);
  }, 3500);

  toast.querySelector('.toast-close').addEventListener('click', () => clearTimeout(timeout));
}


/* =========================================================
   17. MOBILE DRAWER
   ========================================================= */
document.getElementById('hamburger').addEventListener('click', openMobileDrawer);
document.getElementById('mobileDrawerClose').addEventListener('click', closeMobileDrawer);
document.getElementById('mobileDrawerOverlay').addEventListener('click', closeMobileDrawer);
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', closeMobileDrawer);
});

function openMobileDrawer() {
  document.getElementById('mobileDrawer').classList.add('open');
  document.getElementById('mobileDrawerOverlay').classList.add('open');
  document.getElementById('hamburger').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileDrawer() {
  document.getElementById('mobileDrawer').classList.remove('open');
  document.getElementById('mobileDrawerOverlay').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow = '';
}


/* =========================================================
   18. SEARCH TOGGLE (mobile/small screens)
   ========================================================= */
document.getElementById('searchToggleBtn').addEventListener('click', () => {
  isSearchMobileOpen = !isSearchMobileOpen;
  const bar = document.getElementById('mobileSearchBar');
  bar.classList.toggle('visible', isSearchMobileOpen);
  document.getElementById('searchToggleBtn').classList.toggle('active', isSearchMobileOpen);
  if (isSearchMobileOpen) {
    setTimeout(() => document.getElementById('mobileSearchInput').focus(), 100);
  }
});


/* =========================================================
   19. SCROLL BEHAVIORS
   ========================================================= */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const navbar = document.getElementById('navbar');

  // Navbar scroll class
  navbar.classList.toggle('scrolled', scrollY > 40);

  // Back to top
  document.getElementById('backToTop').classList.toggle('visible', scrollY > 400);

  // Active nav link based on scroll position
  const sections = ['hero', 'categories', 'products', 'why-us', 'testimonials', 'footer'];
  let active = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && scrollY >= el.offsetTop - 100) active = id;
  });
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href').replace('#', '');
    a.classList.toggle('active', href === active);
  });
  document.querySelectorAll('.mobile-nav-link').forEach(a => {
    const href = a.getAttribute('href').replace('#', '');
    a.classList.toggle('active', href === active);
  });
}, { passive: true });


/* =========================================================
   20. INTERSECTION OBSERVER (Reveal Animations)
   ========================================================= */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// Counter animation trigger
let countersDone = false;
const heroObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && !countersDone) {
      countersDone = true;
      animateCounters();
    }
  });
}, { threshold: 0.4 });
const heroEl = document.getElementById('hero');
if (heroEl) heroObserver.observe(heroEl);


/* =========================================================
   21. INIT ON DOM READY
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  // Build hero
  buildHeroSlider();

  // Render products
  renderProducts();

  // Update initial state
  updateBadges();
  renderCartItems();
  renderWishlistItems();

  // Start reveal observer
  requestAnimationFrame(initReveal);

  // Lazy scroll reveal
  window.addEventListener('scroll', initReveal, { passive: true });
});
