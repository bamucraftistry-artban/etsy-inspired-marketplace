import { useMemo, useState } from 'react';

const categories = [
  'Jewelry',
  'Home',
  'Art',
  'Wedding',
  'Clothing',
  'Beauty',
  'Garden',
  'Gifts',
  'Vintage',
];

const featuredProducts = [
  {
    id: 1,
    name: 'Rose Gold Stack Ring Set',
    seller: 'Luna Atelier',
    price: 42,
    rating: 4.9,
    reviews: 286,
    tag: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Handwoven Wicker Basket',
    seller: 'Moss & Loom',
    price: 58,
    rating: 4.8,
    reviews: 132,
    tag: 'New',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Minimalist Ceramic Vase',
    seller: 'Field & Clay',
    price: 74,
    rating: 4.9,
    reviews: 420,
    tag: 'Top Rated',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Botanical Linen Throw',
    seller: 'Harbor Textiles',
    price: 88,
    rating: 4.7,
    reviews: 97,
    tag: 'Giftable',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    name: 'Custom Name Necklace',
    seller: 'North Pine Studio',
    price: 64,
    rating: 5.0,
    reviews: 230,
    tag: 'Popular',
    image:
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    name: 'Pressed Flower Frame',
    seller: 'Bloom & Co.',
    price: 36,
    rating: 4.8,
    reviews: 155,
    tag: 'Limited',
    image:
      'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80',
  },
];

const curatedCollections = [
  {
    title: 'Made for cozy corners',
    subtitle: 'Soft textures and warm home accents',
    tone: 'peach',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'For your everyday sparkle',
    subtitle: 'Jewelry with an artisan touch',
    tone: 'sage',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Gift-worthy finds',
    subtitle: 'Unique pieces for meaningful moments',
    tone: 'cream',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
  },
];

const navLinks = ['Sell on Market', 'Jewelry & Accessories', 'Home & Living', 'Art & Collectibles'];

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const cartItems = useMemo(
    () =>
      cart.reduce((total, item) => {
        total += item.quantity;
        return total;
      }, 0),
    [cart],
  );

  const addToCart = (product) => {
    setCartOpen(true);
    setCart((currentCart) => {
      const itemExists = currentCart.find((item) => item.id === product.id);

      if (itemExists) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="logo-wrap">
          <div className="brand-mark">M</div>
          <div>
            <p className="brand-name">Market</p>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </nav>

        <div className="toolbar">
          <button className="link-button">Sign in</button>
          <button className="cart-button" onClick={() => setCartOpen((open) => !open)}>
            Cart ({cartItems})
          </button>
        </div>
      </header>

      <div className="search-panel">
        <div className="search-field">
          <span aria-hidden="true">⌕</span>
          <input type="text" placeholder="Search for handmade, vintage, and home finds" />
        </div>
        <button className="primary-button">Search</button>
      </div>

      <main className="content">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Fresh finds from independent makers</p>
            <h1>Shop one-of-a-kind pieces made with heart.</h1>
            <p className="subtitle">
              Discover handcrafted gifts, cozy home accents, and everyday essentials created by
              small businesses around the world.
            </p>
            <div className="cta-row">
              <button className="primary-button">Shop best sellers</button>
              <button className="secondary-button">Explore gifts</button>
            </div>
          </div>

          <div className="hero-visual" aria-label="Featured marketplace items">
            <div className="card large-card">
              <img
                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
                alt="Featured textile product"
              />
              <div className="floating-badge">Handpicked this week</div>
            </div>
            <div className="mini-stack">
              <div className="card small-card">
                <img
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80"
                  alt="Jewelry design"
                />
              </div>
              <div className="stat-card">
                <strong>18k+</strong>
                <span>happy shoppers</span>
              </div>
            </div>
          </div>
        </section>

        <section className="category-strip" aria-label="Popular categories">
          {categories.map((category, index) => (
            <button key={category} className={index === 0 ? 'category-pill active' : 'category-pill'}>
              {category}
            </button>
          ))}
        </section>

        <section className="collections">
          {curatedCollections.map((collection) => (
            <article key={collection.title} className={`collection-card ${collection.tone}`}>
              <img src={collection.image} alt={collection.title} />
              <div className="collection-copy">
                <h3>{collection.title}</h3>
                <p>{collection.subtitle}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="section-heading">
          <div>
            <p className="eyebrow">Popular right now</p>
            <h2>Trending finds</h2>
          </div>
          <button className="link-button">See more</button>
        </section>

        <section className="product-grid" aria-label="Featured products">
          {featuredProducts.map((product) => (
            <article key={product.id} className="product-card">
              <div className="image-wrap">
                <img src={product.image} alt={product.name} />
                <button className="wish-button" aria-label={`Save ${product.name}`}>
                  ♡
                </button>
                <span className="tag">{product.tag}</span>
              </div>
              <div className="product-meta">
                <div className="product-topline">
                  <span>{product.seller}</span>
                  <span className="rating">★ {product.rating}</span>
                </div>
                <h3>{product.name}</h3>
                <div className="product-footer">
                  <strong>${product.price}</strong>
                  <button className="mini-button" onClick={() => addToCart(product)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <aside className={cartOpen ? 'cart-drawer open' : 'cart-drawer'} aria-label="Shopping cart">
        <div className="drawer-header">
          <h3>Your cart</h3>
          <button className="close-button" onClick={() => setCartOpen(false)} aria-label="Close cart">
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <span>Add a few handmade favorites to get started.</span>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>
                      {item.quantity} × ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="drawer-footer">
              <div className="total-row">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <button className="primary-button full-width">Checkout</button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default App;
