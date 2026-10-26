
import React, { useState } from 'react';
import './Nav.css';

import {
  FaGift,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaShoppingBag,
  FaTimes,
} from 'react-icons/fa';

const Nav = () => {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    { name: 'Home', href: '#home' },
    { name: 'Electronics', href: '#electronics' },
    { name: 'Fashion', href: '#fashion' },
    { name: 'Home & Living', href: '#home-living' },
    { name: 'Beauty', href: '#beauty' },
    { name: 'Toys & Games', href: '#toys' },
    { name: 'Offers', href: '#offers' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    console.log('Searching for:', search.trim());
  };

  return (
    <header className="navbar-container">
      {/* Top offer banner */}
      <div className="nav-top-banner">
        <div className="banner-content">
          <span className="banner-offer">
            <FaGift className="banner-icon" />
            Diwali Special: Get <strong>15% OFF</strong> on all products
          </span>

          <span className="banner-divider">|</span>

          <span className="banner-code">
            Use Code: <strong className="highlight-code">DIWALI15</strong>
          </span>
        </div>

        <div className="nav-top-links">
          <a href="#track" className="top-link">
            <FaHeart className="top-link-icon" />
            Track Order
          </a>

          <span className="banner-divider">|</span>

          <a href="#help" className="top-link">Help</a>

          <span className="banner-divider">|</span>

          <a href="#login" className="top-link">
            Login / Sign Up
          </a>

          <span className="banner-divider">|</span>

          <a href="#cart" className="top-link cart-top-link">
            <FaShoppingCart />
            Cart (0)
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="nav-main-section">
        <a href="#home" className="nav-brand">
          <div className="brand-logo-icon">
            <FaShoppingBag />
          </div>

          <div className="brand-text">
            <h1>
              Varun <span>Express</span>
            </h1>
            <p>Shop More · Live Better</p>
          </div>
        </a>

        {/* Thin search bar */}
        <form
          className="nav-search-container"
          onSubmit={handleSearch}
        >
          <input
            type="search"
            className="nav-search-input"
            placeholder="Search for products, brands and more..."
            aria-label="Search products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            type="submit"
            className="nav-search-btn"
            aria-label="Search"
          >
            <FaSearch />
          </button>
        </form>

        {/* Mobile menu button */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Categories navigation */}
      <nav
        className={`nav-categories-bar ${menuOpen ? 'menu-open' : ''}`}
        aria-label="Main navigation"
      >
        <button
          type="button"
          className="categories-dropdown-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
          <span>All Categories</span>
        </button>

        <ul className="nav-links-list">
          {categories.map((category, index) => (
            <li key={category.href}>
              <a
                href={category.href}
                className={`nav-link ${index === 0 ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
