import React from 'react';
import './Event.css';
import { FaArrowRight } from 'react-icons/fa';

const Event = () => {
  return (
    <section className="event-section">
      <div className="event-grid">

        <div className="event-card event-purple">
          <div className="event-content">
            <h3>Perfect Gifts<br />for Your Loved Ones</h3>
            <p>Thoughtful gifts for every occasion</p>
            <a href="https://www.flipkart.com/hmd-vibe2-5g-nordic-blue-128-gb/p/itm71c3ae6df2a26?pid=MOBHN6XYNGZQCBWB&marketplace=FLIPKART&lid=LSTMOBHN6XYNGZQCBWBVAYNRE&hl_lid=LSTMOBHN6XYNGZQCBWB336QJL&pageUID=1792814137196&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=B3E4E3WZBC6J_AD" target='_blank'><button className="event-btn" >
              Explore Gifts <FaArrowRight className="event-icon" />
            </button></a>
          </div>
          <div className="event-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=500&q=80"
              alt="Perfect Gifts"
            />
          </div>
        </div>

        <div className="event-card event-red">
          <div className="event-content">
            <h3>Festive Fashion</h3>
            <h2>Upto 50% OFF</h2>
            <a href="https://www.flipkart.com/big-shopping-utsav-sale-at-store?param=098109897987" target='_blank'>
              <button className="event-btn">
                Shop Now <FaArrowRight className="event-icon" />
              </button>
            </a>
          </div>
          <div className="event-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80"
              alt="Festive Fashion"
            />
          </div>
        </div>

        <div className="event-card event-blue">
          <div className="event-content">
            <h3>Top Electronics</h3>
            <p className="event-subtitle">Best Deals4</p>
            <h2>Up to 40% OFF</h2>
            <a href="https://www.flipkart.com/?affid=rohanpouri&affExtParam1=ENKR20261021A2244145742&affExtParam2=5685423&gad_source=1&gad_campaignid=24133603126&gbraid=0AAAABEfXRVLZFuJV53cuH2kkCcyzkkaws&gclid=EAIaIQobChMIq6OnxeHRlwMVV6pLBR0FHydDEAAYASAAEgJqOvD_BwE " target='_blank'>
              <button className="event-btn">
                Shop Now <FaArrowRight className="event-icon" />
              </button>
            </a>
          </div>
          <div className="event-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=500&q=80"
              alt="Top Electronics"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Event;