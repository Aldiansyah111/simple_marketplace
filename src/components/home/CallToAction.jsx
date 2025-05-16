import React from 'react';
import { Link } from 'react-router-dom';

const sectionStyle = {
    marginTop: 60,
    padding: 30,
    backgroundColor: '#2a004d',
    borderRadius: 12,
    boxShadow: '0 4px 15px rgba(156, 39, 176, 0.4)',
    color: '#fff',
    textAlign: 'center',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const buttonStyle = {
    marginTop: 20,
    padding: '12px 30px',
    fontSize: '1.1rem',
    color: '#fff',
    background:
        'linear-gradient(90deg, #ff6ec4, #7873f5, #52fff9, #ff6ec4)',
    backgroundSize: '400% 100%',
    border: 'none',
    borderRadius: 30,
    cursor: 'pointer',
    animation: 'shineButton 4s linear infinite',
    transition: 'transform 0.3s ease',
};

const CallToAction = () => {
    return (
        <div style={sectionStyle}>
            <style>{`
        @keyframes shineText {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes shineButton {
          0% { background-position: 0% 0; }
          100% { background-position: 400% 0; }
        }
        .animated-title {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(90deg, #ff6ec4, #7873f5, #52fff9, #ff6ec4);
          background-size: 400% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shineText 4s linear infinite;
          margin-bottom: 10px;
        }
        button:hover {
          transform: scale(1.05);
        }
      `}</style>

            <h2 className="animated-title">🚀 Mulai Jualanmu Sekarang!</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                Bergabunglah dengan Smart Marketplace dan rasakan kemudahan jual beli berbasis teknologi blockchain.
            </p>
            <br />
            <Link to="/marketplace" style={buttonStyle} className="cta-button">
                Daftar Sekarang
            </Link>
        </div>
    );
};

export default CallToAction;
