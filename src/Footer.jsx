import React from 'react';
import './Footer.css';
import { 
  FaShoppingBag, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaTwitter 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-col footer-brand">
          <div className="brand-logo-icon">
            <FaShoppingBag />
          </div>
          <div className="brand-text">
            <h2>Varun <span>Express</span></h2>
            <p>Shop More · Live Better</p>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Customer Service</h4>
          <ul className="footer-links">
            <li><a href="#track">Track Order</a></li>
            <li><a href="#returns">Return Policy</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/"target='_blank'><FaFacebookF /></a>
            <a href="https://www.instagram.com/?hl=en" target='_blank'><FaInstagram /></a>
            <a href="https://www.youtube.com/" target='_blank'><FaYoutube /></a>
            <a href="https://x.com/" target='_blank'><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-col footer-newsletter">
          <h4 className="footer-col-title">Subscribe to Our Newsletter</h4>
          <p className="newsletter-desc">Get updates on new arrivals and special offers.</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="newsletter-input" 
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright-text">
          © 2026 Varun Express. All rights reserved.
        </p>
        <div className="festive-text">
          <span>Happy Diwali <span>✨</span> Shop with Joy <span>✨</span></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  