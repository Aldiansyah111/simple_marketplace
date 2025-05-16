import React from 'react';

const Sponsor = () => {
  const sponsors = [
    { name: 'Chainlink', icon: '🤝' },
    { name: 'IPFS', icon: '🚀' },
    { name: 'ENS', icon: '🌐' },
    { name: 'Polygon', icon: '🔷' },
    { name: 'Uniswap', icon: '🦄' },
    { name: 'Arbitrum', icon: '⚡' },
    { name: 'Arbitrum', icon: '⚡' },
    { name: 'Arbitrum', icon: '⚡' },
    { name: 'Arbitrum', icon: '⚡' },
  ];

  const boxStyle = {
    maxWidth: 700,
    margin: '80px auto',
    padding: '40px',
    backgroundColor: '#2c003e',
    borderRadius: 20,
    boxShadow: '0 0 20px rgba(156, 39, 176, 0.6)',
    color: '#fff',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    textAlign: 'center',
  };

  const containerStyle = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    background: '#1a0030',
    padding: '20px 0',
    borderRadius: '12px',
    marginTop: '30px',
  };

  const sliderStyle = {
    display: 'inline-block',
    animation: 'scroll 25s linear infinite',
  };

  const itemStyle = {
    display: 'inline-block',
    color: '#fff',
    padding: '0 40px',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  return (
    <div style={boxStyle}>
      <h2 style={{ marginBottom: '20px' }}>🎯 Our Sponsors</h2>
      <div style={containerStyle}>
        <div style={sliderStyle}>
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <span key={index} style={itemStyle}>
              {sponsor.icon} {sponsor.name}
            </span>
          ))}
        </div>
      </div>

      {/* Inline CSS animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default Sponsor;
