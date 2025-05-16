import React from 'react';
import Partner from './Partner'; // Atau ganti ke Sponsor jika sudah diubah

const cardStyle = {
  background: '#2c003e',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(156, 39, 176, 0.5)',
  color: '#fff',
  flex: '1',
  margin: '10px',
  minWidth: '250px',
  textAlign: 'center',
};

const About = () => {
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
      <h1
        style={{
          fontSize: '2.5rem',
          marginBottom: '30px',
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, #ff6ec4, #7873f5)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        📦 About This Project
      </h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '40px',
        }}
      >
        <div style={cardStyle}>
          <h2>💡 Decentralized</h2>
          <p>
            Built on Ethereum blockchain for trustless and transparent transactions without intermediaries.
          </p>
        </div>

        <div style={cardStyle}>
          <h2>🔐 Secure</h2>
          <p>
            Smart contracts handle logic and funds automatically, minimizing risk of fraud or tampering.
          </p>
        </div>

        <div style={cardStyle}>
          <h2>⚙️ Open Source</h2>
          <p>
            Entire codebase is open and verifiable, making this marketplace fully auditable and community-driven.
          </p>
        </div>
      </div>

      {/* Sponsor/Partner Section */}
      <Partner />
      {/* Kalau pakai Sponsor, ganti saja <Partner /> jadi <Sponsor /> */}
    </div>
  );
};

export default About;
