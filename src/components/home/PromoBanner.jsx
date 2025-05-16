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

const PromoBanner = () => {
  return (
    <div style={sectionStyle}>
      {/* Inject CSS animation */}
      <style>{`
        @keyframes shineText {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .animated-title {
          font-size: 1.5rem;
          margin-bottom: 15px;
          background: linear-gradient(90deg, #ff9a9e, #fad0c4, #fad0c4, #ff9a9e);
          background-size: 400% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shineText 4s linear infinite;
        }

        .promo-text {
          font-size: 1rem;
          margin-bottom: 5px;
          opacity: 0.95;
        }

        .promo-subtext {
          font-size: 0.95rem;
          opacity: 0.8;
        }
      `}</style>

      <h3 className="animated-title">🎁 Promo Spesial!</h3>
      <p className="promo-text">
        Dapatkan <strong>0% biaya transaksi</strong> untuk 100 pengguna pertama setiap hari!
      </p>
      <p className="promo-subtext">
        Berlaku hingga akhir bulan ini. Yuk, mulai jual/beli sekarang! 🚀
      </p>
    </div>
  );
};

export default PromoBanner;
