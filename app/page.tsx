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
