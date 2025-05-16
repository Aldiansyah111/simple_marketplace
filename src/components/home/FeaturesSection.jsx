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

const FeaturesSection = () => {
  return (
    <div style={sectionStyle}>
      {/* Inject CSS animation */}
      <style>{`
        @keyframes shineText {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .animated-title {
          font-size: 1.75rem;
          margin-bottom: 15px;
          background: linear-gradient(90deg, #f093fb, #f5576c, #29ffc6, #f093fb);
          background-size: 400% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shineText 5s linear infinite;
        }

        .features-list {
          text-align: left;
          line-height: 1.9;
          padding-left: 20px;
          font-size: 1.05rem;
          opacity: 0.9;
          list-style: none;
        }

        .features-list li {
          position: relative;
          padding-left: 28px;
          margin-bottom: 12px;
        }

        .features-list li::before {
          content: '✔️';
          position: absolute;
          left: 0;
          top: 0;
          color: #84fab0;
          font-size: 1.1rem;
        }
      `}</style>

      <h3 className="animated-title">🔍 Kenapa Memilih Kami?</h3>
      <ul className="features-list">
        <li>Keamanan transaksi tingkat tinggi</li>
        <li>Transparansi penuh melalui teknologi blockchain</li>
        <li>Tanpa pihak ketiga atau perantara</li>
        <li>Proses listing dan pembelian instan</li>
      </ul>
    </div>
  );
};

export default FeaturesSection;
