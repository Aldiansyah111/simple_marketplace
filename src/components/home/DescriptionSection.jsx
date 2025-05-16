import React from 'react';

const sectionStyle = {
  backgroundColor: '#1b002a',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 4px 15px rgba(156, 39, 176, 0.4)',
  color: '#fff',
  marginTop: '60px',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const paragraphStyle = {
  fontSize: '1.05rem',
  lineHeight: '1.6',
  opacity: 0.9,
};

const DescriptionSection = () => {
  return (
    <div style={sectionStyle}>
      {/* Inject CSS animation */}
      <style>{`
        @keyframes shineText {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animated-gradient-text {
          font-size: 2rem;
          margin-bottom: 15px;
          background: linear-gradient(90deg, #ff6ec4, #7873f5, #52fff9, #ff6ec4);
          background-size: 400% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shineText 4s linear infinite;
        }
      `}</style>

      <h2 className="animated-gradient-text">🧠 Tentang Smart Marketplace</h2>
      <p style={paragraphStyle}>
        Smart Marketplace adalah platform jual beli berbasis teknologi blockchain yang menghadirkan sistem desentralisasi, 
        keamanan tinggi, dan transparansi menyeluruh. Setiap transaksi dicatat secara permanen di blockchain, 
        memberikan pengguna kendali penuh dan kepercayaan tanpa perlu pihak ketiga.
      </p>
    </div>
  );
};

export default DescriptionSection;


