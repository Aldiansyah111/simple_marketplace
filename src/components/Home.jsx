import React from 'react';
import { AiFillBank } from "react-icons/ai";
import { IoIosAirplane } from "react-icons/io";

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
      <div style={{ marginBottom: 30 }}>
        <h1 style={{ fontSize: '3rem', marginBottom: 10 }}>🚀 Smart Marketplace</h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
          Buy and sell securely with blockchain technology.
        </p>
      </div>

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
          <AiFillBank
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

      <div style={{ marginTop: 40 }}>
        <IoIosAirplane style={{ fontSize: '2.5rem', color: '#a78bfa' }} />
        <p style={{ marginTop: 10, fontSize: '0.9rem', opacity: 0.8 }}>
          Powered by Web3 ✈️
        </p>
      </div>
    </div>
  );
};

export default Home;
