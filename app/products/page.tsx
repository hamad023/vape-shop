import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Products - Cole Vape Store',
  description: 'Discover our premium vape flavor collections including Fruit, Menthol, Tobacco, and Dessert flavors.',
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Our Products</h1>
          <p>Discover our premium vape flavor collections</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Fruit Flavors</h2>
              <p>Experience the refreshing taste of nature with our fruit-inspired vape flavors. From tropical mangoes to crisp apples and sweet berries, each flavor is crafted to deliver authentic fruit taste.</p>
              <p>Made with high-quality ingredients for a satisfying vaping experience.</p>
              <h3>Popular Options:</h3>
              <ul className="mission-list">
                <li>Mango Blast - Sweet and tropical</li>
                <li>Berry Mix - Blend of strawberries, blueberries, and raspberries</li>
                <li>Apple Crisp - Fresh green apple</li>
                <li>Watermelon Splash - Cool and refreshing</li>
              </ul>
            </div>
            <div className="about-image">
              <img src="/images/fruit-vape.jpg" alt="Fruit Vape Products" className="about-img responsive-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-content" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="/images/menthol-flavors.jpg" alt="Menthol Vape Products" className="about-img responsive-img" />
            </div>
            <div className="about-text">
              <h2>Menthol Flavors</h2>
              <p>Experience a cool, crisp sensation with our menthol collection. Perfect for those who love a refreshing hit that delivers a clean, satisfying throat feel.</p>
              <p>Balanced cooling effect without being overpowering.</p>
              <h3>Popular Options:</h3>
              <ul className="mission-list">
                <li>Arctic Mint - Pure cooling mint</li>
                <li>Ice Berry - Menthol with sweet berries</li>
                <li>Cool Lemon - Lemon with icy twist</li>
                <li>Frozen Grape - Grape with menthol kick</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Tobacco Flavors</h2>
              <p>For those who appreciate the classic taste of tobacco, our traditional collection offers authentic flavors that capture the rich essence of premium tobacco leaves.</p>
              <p>Ideal for former smokers seeking a satisfying alternative.</p>
              <h3>Popular Options:</h3>
              <ul className="mission-list">
                <li>Classic Tobacco - Traditional taste</li>
                <li>Virginia Gold - Smooth Virginia</li>
                <li>Cedar Wood - Woody undertones</li>
                <li>Honey Tobacco - Hint of honey sweetness</li>
              </ul>
            </div>
            <div className="about-image">
              <img src="/images/tobacco-flavors.jpg" alt="Tobacco Vape Products" className="about-img responsive-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-content" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="/images/dessert-flavors.jpg" alt="Dessert Vape Products" className="about-img responsive-img" />
            </div>
            <div className="about-text">
              <h2>Dessert Flavors</h2>
              <p>Indulge your sweet tooth with our decadent dessert-inspired flavors. From creamy custards to rich chocolates and pastries, capture the essence of your favorite desserts.</p>
              <p>Satisfy cravings without the calories.</p>
              <h3>Popular Options:</h3>
              <ul className="mission-list">
                <li>Vanilla Custard - Creamy vanilla</li>
                <li>Chocolate Delight - Rich chocolate</li>
                <li>Caramel Swirl - Caramel with cream</li>
                <li>Cheesecake - New York style</li>
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
              <p className="stat-label">Flavor Options</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">4</h3>
              <p className="stat-label">Categories</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Quality Assured</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">24/7</h3>
              <p className="stat-label">Support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <div className="section-title">
            <h2>Our Commitments</h2>
            <p>What makes us different</p>
          </div>
          <div className="values-grid">
            <div className="value-card animate-on-scroll">
              <h3>Quality First</h3>
              <p>All products undergo rigorous testing for safety and satisfaction.</p>
            </div>
            <div className="value-card animate-on-scroll">
              <h3>Genuine Products</h3>
              <p>Only authentic products from trusted manufacturers.</p>
            </div>
            <div className="value-card animate-on-scroll">
              <h3>Expert Support</h3>
              <p>Knowledgeable team ready to help you find the perfect product.</p>
            </div>
            <div className="value-card animate-on-scroll">
              <h3>Fast Shipping</h3>
              <p>Quick delivery so you can enjoy your products soon.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
