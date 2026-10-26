
import React, { useState } from 'react';
import './Happy.css';

import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaShippingFast,
  FaShieldAlt,
  FaUndoAlt,
  FaHeadset,
} from 'react-icons/fa';

const categories = [
  {
    id: 1,
    name: 'Mobiles & Tablets',
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=85',
    bg: '#f3e5ff',
  },
  {
    id: 2,
    name: 'Laptops & Computers',
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=300&q=85',
    bg: '#e3f2fd',
  },
  {
    id: 3,
    name: 'Audio & Accessories',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=85',
    bg: '#fff0d6',
  },
  {
    id: 4,
    name: 'Watches',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=85',
    bg: '#e7f6d5',
  },
  {
    id: 5,
    name: 'Fashion',
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=300&q=85',
    bg: '#ffe5ed',
  },
  {
    id: 6,
    name: 'Home & Kitchen',
    img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=300&q=85',
    bg: '#dff6f1',
  },
  {
    id: 7,
    name: 'Beauty & Personal Care',
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=300&q=85',
    bg: '#f4e5ff',
  },
  {
    id: 8,
    name: 'Toys & Games',
    img: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=300&q=85',
    bg: '#fff0d9',
  },
  {
    id: 9,
    name: 'Sports & Fitness',
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=300&q=85',
    bg: '#ffe6e1',
  },
];

const perks = [
  {
    id: 1,
    title: 'Free Shipping',
    subtitle: 'On orders above ₹499',
    icon: <FaShippingFast />,
  },
  {
    id: 2,
    title: 'Secure Payments',
    subtitle: 'UPI, Card & More',
    icon: <FaShieldAlt />,
  },
  {
    id: 3,
    title: 'Easy Returns',
    subtitle: 'Within 7 Days',
    icon: <FaUndoAlt />,
  },
  {
    id: 4,
    title: '24/7 Support',
    subtitle: "We're here to help",
    icon: <FaHeadset />,
  },
];

const slides = [
  {
    script: 'This Diwali',
    title: 'Bring Home Happiness',
    description:
      'Premium Products | Great Offers | Trusted Shopping',
    code: 'DIWALI15',
    background:
      'https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=2000&q=90',
    product:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=90',
    diya:
      'https://i.pinimg.com/1200x/21/ab/36/21ab36ab72375dc7b0c32b7659fbc61b.jpg',
    tagline: 'Light Up Your Celebrations',
    button: 'Shop Now',
  },
  {
    script: 'Festive Specials',
    title: 'Upgrade Your Lifestyle',
    description:
      'Latest Gadgets | Amazing Deals | Extra Savings',
    code: 'FESTIVE20',
    background:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=90',
    product:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=90',
    diya:
      'https://i.pinimg.com/1200x/da/5b/50/da5b50f25f68df465189343c677c251a.jpg',
    tagline: 'Celebrate in Style',
    button: 'Explore Deals',
  },
  {
    script: 'Special Offers',
    title: 'Make Every Moment Shine',
    description:
      'Shop Your Favorites | Save More | Celebrate More',
    code: 'HAPPY10',
    background:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=2000&q=90',
    product:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=90',
    diya:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=700&q=85',
    tagline: 'Gifts Full of Joy',
    button: 'Shop Gifts',
  },
];

const Happy = () => {
  const [activeCat, setActiveCat] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);

  const slide = slides[activeSlide];

  const changeSlide = (direction) => {
    setActiveSlide((current) => {
      return (current + direction + slides.length) % slides.length;
    });
  };

  const handleShopNow = () => {
    document.getElementById('categories')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="happy-wrapper">
      <div
        className="diwali-banner-container"
        style={{
          '--hero-image': `url("${slide.background}")`,
        }}
      >
        <div className="banner-overlay" />

        <button
          type="button"
          className="banner-arrow left"
          onClick={() => changeSlide(-1)}
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </button>

        <button
          type="button"
          className="banner-arrow right"
          onClick={() => changeSlide(1)}
          aria-label="Next slide"
        >
          <FaChevronRight />
        </button>

        <div className="sparkle sparkle-1">✦</div>
        <div className="sparkle sparkle-2">✧</div>
        <div className="sparkle sparkle-3">✦</div>
        <div className="sparkle sparkle-4">✧</div>

        <div className="banner-inner-content" key={activeSlide}>
          <div className="banner-left-text">
            <h3 className="diwali-script-text">{slide.script}</h3>

            <h1 className="banner-heading">
              {slide.title}
            </h1>

            <p className="banner-subtext">
              {slide.description.split(' | ').map((text, index) => (
                <React.Fragment key={text}>
                  {index > 0 && <span className="text-divider">|</span>}
                  {text}
                </React.Fragment>
              ))}
            </p>

            <button
              type="button"
              className="shop-now-btn"
              onClick={handleShopNow}
            >
              {slide.button}
              <FaArrowRight className="btn-arrow" />
            </button>
          </div>

          <div className="banner-center-promo">
            <div className="diwali-coupon-arch">
              <span className="coupon-use">Use Code</span>
              <span className="coupon-code-box">{slide.code}</span>
              <span className="coupon-discount">Special Festive Offers</span>
            </div>

            <div className="gadgets-image-wrapper">
              <img
                src={slide.product}
                alt="Featured shopping product"
                className="gadgets-img"
              />

              <div className="product-image-glow" />
            </div>
          </div>

          <div className="banner-right-diya">
            <div className="diya-glow-container">
              <div className="diya-glow" />

              <img
                src={slide.diya}
                alt="Festive celebration"
                className="diya-image"
              />
            </div>

            <div className="diwali-tagline">
              <span>Light Up Your</span>
              <strong>{slide.tagline.replace('Light Up Your ', '')}</strong>
              <span className="tagline-heart">♥</span>
            </div>
          </div>
        </div>

        <div className="banner-dots">
          {slides.map((item, index) => (
            <button
              key={item.code}
              type="button"
              className={`banner-dot ${
                activeSlide === index ? 'active' : ''
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={activeSlide === index}
            />
          ))}
        </div>
      </div>

      <div className="categories-section" id="categories">
        <div className="categories-heading">
          <span>EXPLORE OUR COLLECTION</span>
          <h2>Shop by Category</h2>
        </div>

        <div className="categories-row-bar">
          {categories.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`category-item-card ${
                activeCat === item.id ? 'active' : ''
              }`}
              onClick={() => setActiveCat(item.id)}
              aria-pressed={activeCat === item.id}
            >
              <div
                className="cat-img-wrapper"
                style={{ '--category-bg': item.bg }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="cat-icon-img"
                  loading="lazy"
                />
              </div>

              <span className="cat-label">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="perks-footer-bar">
        {perks.map((perk) => (
          <div className="perk-box" key={perk.id}>
            <div className="perk-icon-circle">{perk.icon}</div>

            <div className="perk-info">
              <h4>{perk.title}</h4>
              <p>{perk.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Happy;
