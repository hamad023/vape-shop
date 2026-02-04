import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Cole Vape Store</h3>
            <p>Premium vape products and flavors.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Store</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: coleprice646@yahoo.com</p>
            <p>Phone: (720) 276-2068</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2024 Cole Vape Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
