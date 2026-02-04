import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cole Vape Store - Premium Vape Flavors & Products',
  description: 'Discover premium vape products with exceptional flavors. Shop Fruit, Menthol, Tobacco, and Dessert flavors with fast delivery and quality assurance.',
};

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Premium Quality Vapes</span>
          <h1>Discover Your Perfect Vaping Experience</h1>
          <p>Explore our curated collection of premium vape flavors. From tropical fruits to classic tobacco, find your ideal taste today.</p>
          <div className="hero-buttons">
            <a href="/products" className="btn btn-lg">
              Shop Now
            </a>
            <a href="/products" className="btn btn-outline btn-lg">
              Explore Flavors
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">50+</span>
              <span className="hero-stat-label">Flavors</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">4</span>
              <span className="hero-stat-label">Categories</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Quality</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img src="/images/fruit-vape.jpg" alt="Premium Vape Products" className="hero-img" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Cole Vape Store</h2>
            <p>Experience premium quality and exceptional service</p>
          </div>
          <div className="features-grid">
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3>Premium Quality</h3>
              <p>Carefully curated products from the best brands in the industry.</p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping to get your products fast.</p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Quality Assured</h3>
              <p>All products are tested and verified for quality and safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item animate-on-scroll">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="stat-content">
                <span className="stat-number">50+</span>
                <span className="stat-label">Flavors</span>
              </div>
            </div>
            <div className="stat-item animate-on-scroll">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </div>
              <div className="stat-content">
                <span className="stat-number">4</span>
                <span className="stat-label">Categories</span>
              </div>
            </div>
            <div className="stat-item animate-on-scroll">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="stat-content">
                <span className="stat-number">100%</span>
                <span className="stat-label">Quality</span>
              </div>
            </div>
            <div className="stat-item animate-on-scroll">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="stat-content">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Stay Updated</h2>
              <p>Subscribe to our newsletter for exclusive deals, new flavors, and vaping tips.</p>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" className="newsletter-input" />
              <button type="submit" className="btn">
                Subscribe
              </button>
            </form>
            <p className="newsletter-note">Get 10% off your first order!</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Vape?</h2>
            <p>Explore our collection and find your perfect flavor today.</p>
            <div className="cta-buttons">
              <a href="/products" className="btn btn-lg">
                Shop Now
              </a>
              <a href="/contact" className="btn btn-outline btn-lg">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
