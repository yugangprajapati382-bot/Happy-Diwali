import React, { useState } from 'react';
import './Pro.css';
import { FaHeart, FaRegHeart, FaStar, FaShoppingCart, FaArrowRight } from 'react-icons/fa';

const products = [
  {
    id: 1,
    title: 'Samsung Galaxy S24',
    discount: '-12%',
    rating: 4.6,
    price: '₹62,999',
    oldPrice: '₹71,999',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 2,
    title: 'Dell Inspiron 15',
    discount: '-10%',
    rating: 4.5,
    price: '₹98,965',
    oldPrice: '₹60,990',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 3,
    title: 'Sony WH-CH720N',
    discount: '-18%',
    rating: 4.4,
    price: '₹8,999',
    oldPrice: '₹10,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 4,
    title: 'Fire-Boltt Ninja Pro',
    discount: '-15%',
    rating: 4.3,
    price: '₹4,999',
    oldPrice: '₹5,899',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 5,
    title: "Women's Ethnic Kurta",
    discount: '-20%',
    rating: 4.2,
    price: '₹1,599',
    oldPrice: '₹1,999',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 6,
    title: 'Philips Air Fryer',
    discount: '-25%',
    rating: 4.5,
    price: '₹9,999',
    oldPrice: '₹13,499',
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=300&q=80',
  },
];

const Pro = () => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="pro-section">
      <div className="pro-header">
        <div className="pro-title-wrap">
          <h2>Featured Products</h2>
          <span className="pro-title-line"></span>
        </div>
        <a href="#view-all" className="pro-view-all">
          View All <FaArrowRight />
        </a>
      </div>

      <div className="pro-grid">
        {products.map((item) => (
          <div className="pro-card" key={item.id}>
            <div className="pro-card-top">
              <span className="pro-discount">{item.discount}</span>
              <button 
                className="pro-wishlist-btn" 
                onClick={() => toggleWishlist(item.id)}
                aria-label="Wishlist"
              >
                {wishlist.includes(item.id) ? (
                  <FaHeart className="pro-heart active" />
                ) : (
                  <FaRegHeart className="pro-heart" />
                )}
              </button>
            </div>

            <div className="pro-img-box">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="pro-content">
              <h3 className="pro-name">{item.title}</h3>
              
              <div className="pro-rating-row">
                <div className="pro-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <span className="pro-rating-count">({item.rating})</span>
              </div>

              <div className="pro-price-row">
                <span className="pro-current-price">{item.price}</span>
                <span className="pro-old-price">{item.oldPrice}</span>
              </div>

              <button className="pro-cart-btn">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pro;