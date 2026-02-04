import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us - Cole Vape Store',
  description: 'Discover our story and commitment to quality premium vape products.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>About Us</h1>
          <p>Discover our story and commitment to quality</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>Cole Vape Store was founded with a simple mission: to provide premium vape products with exceptional flavors to enthusiasts worldwide. What started as a small passion project has grown into a trusted destination for vapers seeking quality and variety.</p>
              <p>We believe that vaping should be an enjoyable experience, which is why we carefully curate our collection to offer only the finest products from reputable manufacturers. Our team consists of dedicated professionals who share a love for vaping and a commitment to customer satisfaction.</p>
              <p>From beginners to experienced vapers, we welcome everyone to explore our diverse range of flavors and find the perfect match for their taste preferences.</p>
            </div>
            <div className="about-image">
              <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                <defs>
                  <linearGradient id="storyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#1d1d1f', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3d3d3f', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <rect x="50" y="50" width="300" height="200" rx="20" fill="url(#storyGrad)"/>
                <circle cx="200" cy="150" r="60" fill="#2997ff" opacity="0.2"/>
                <text x="200" y="140" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="bold">Cole Vape</text>
                <text x="200" y="170" textAnchor="middle" fill="#fff" fontSize="14">Since 2020</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                <defs>
                  <linearGradient id="missionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#2997ff', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#1d4ed8', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <rect x="50" y="50" width="300" height="200" rx="20" fill="url(#missionGrad)"/>
                <path d="M150 120 L200 100 L250 120 L250 200 L150 200 Z" fill="#fff" opacity="0.3"/>
                <path d="M175 120 L200 110 L225 120 L225 180 L175 180 Z" fill="#fff" opacity="0.5"/>
                <circle cx="200" cy="80" r="30" fill="#fff" opacity="0.2"/>
              </svg>
            </div>
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>At Cole Vape Store, our mission is to deliver an unparalleled vaping experience through premium products, exceptional service, and continuous innovation. We strive to be more than just a retailer – we aim to be a community of vapers who share knowledge and passion.</p>
              <p>We are committed to:</p>
              <ul className="mission-list">
                <li>Providing only authentic, quality-checked products</li>
                <li>Offering competitive prices without compromising on quality</li>
                <li>Delivering outstanding customer support and guidance</li>
                <li>Promoting responsible vaping practices</li>
                <li>Continuously expanding our flavor collection to meet diverse preferences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Premium Flavors</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">4</h3>
              <p className="stat-label">Flavor Categories</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">5000+</h3>
              <p className="stat-label">Happy Customers</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">24/7</h3>
              <p className="stat-label">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <div className="section-title">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-card animate-on-scroll">
              <h3>Quality First</h3>
              <p>We never compromise on quality. Every product in our collection is carefully tested and verified to ensure it meets our high standards.</p>
            </div>
            <div className="value-card animate-on-scroll">
              <h3>Customer Focus</h3>
              <p>Our customers are at the heart of everything we do. We listen, learn, and continuously improve to better serve your needs.</p>
            </div>
            <div className="value-card animate-on-scroll">
              <h3>Authenticity</h3>
              <p>We guarantee 100% authentic products sourced directly from reputable manufacturers. No counterfeits, no compromises.</p>
            </div>
            <div className="value-card animate-on-scroll">
              <h3>Community</h3>
              <p>We're building a community of vaping enthusiasts who share knowledge, experiences, and a passion for quality products.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Explore?</h2>
          <p>Discover our premium collection of vape flavors and find your perfect match.</p>
          <a href="/products" className="btn">Browse Products</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
