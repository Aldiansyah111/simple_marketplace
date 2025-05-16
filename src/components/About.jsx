import React from 'react';

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
        maxWidth: '1100px',
        margin: '40px auto',
        padding: '20px',
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        color: '#fff',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>About This Project</h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <div style={cardStyle}>
          <h2>💡 Decentralized</h2>
          <p>
            Built on Ethereum blockchain for trustless and transparent transactions without
            intermediaries.
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
    </div>
  );
};

export default About;
