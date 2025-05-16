import React from 'react';
import { AiFillBank } from "react-icons/ai";
import { IoIosAirplane } from "react-icons/io";
import { GiMoneyStack } from 'react-icons/gi';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { FaBlockchain } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import DescriptionSection from './DescriptionSection';
import FeaturesSection from './FeaturesSection';
import PromoBanner from './PromoBanner';
import CallToAction from './CallToAction';

const Home = () => {
  return (
    <div
      style={{
        maxWidth: 700,
        margin: '100px auto',
        padding: '40px',
        backgroundColor: '#2c003e',
        borderRadius: 20,
        boxShadow: '0 0 20px rgba(156, 39, 176, 0.6)',
        color: '#fff',
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        textAlign: 'center',
      }}
    >
      {/* Hero Section */}
      <div style={{ marginBottom: 30 }}>
        <h1 style={{ fontSize: '3rem', marginBottom: 10, fontWeight: 'bold', background: 'linear-gradient(90deg, #ff6ec4, #7873f5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          🚀 Smart Marketplace
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: 500, margin: '0 auto' }}>
          Jual beli dengan aman dan cepat menggunakan teknologi blockchain terkini. Nikmati transaksi tanpa batas dan penuh kepercayaan.
        </p>
      </div>


      {/* Icon Animation */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          flexWrap: 'wrap',
          marginTop: '30px',
        }}
      >
        {[...Array(7)].map((_, i) => (
          <GiMoneyStack
            key={i}
            style={{
              fontSize: '2.5rem',
              color: '#a78bfa',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        ))}
      </div>

      {/* Powered by */}
      <div style={{ marginTop: 40 }}>
        <MdOutlineShoppingCart style={{ fontSize: '2.5rem', color: '#a78bfa' }} />
        <p style={{ marginTop: 10, fontSize: '0.9rem', opacity: 0.8 }}>
          Powered by Web3 ✈️
        </p>
      </div>

      {/* Modular Components */}
      <CallToAction />
      <DescriptionSection />
      <FeaturesSection />
      <PromoBanner />
    </div>
  );
};

export default Home;
