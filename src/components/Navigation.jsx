// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useWallet } from '../context/wallet';

// const Navbar = () => {
//     const { account, setAccount } = useWallet();

//     const handleConnect = async () => {
//         try {
//             if (window.ethereum) {
//                 const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//                 setAccount(accounts[0]);
//             } else {
//                 throw new Error("Metamask tidak ditemukan");
//             }
//         } catch (err) {
//             console.error("Gagal connect wallet:", err.message);
//         }
//     };

//     // 🚀 Listen for account change (switch account without reload)
//     useEffect(() => {
//         if (window.ethereum) {
//             window.ethereum.on('accountsChanged', (accounts) => {
//                 if (accounts.length > 0) {
//                     setAccount(accounts[0]);
//                 } else {
//                     setAccount(null);
//                 }
//             });

//             // optional: clean up listener saat komponen unmount
//             return () => {
//                 window.ethereum.removeListener('accountsChanged', () => { });
//             };
//         }
//     }, [setAccount]);

//     return (
//         <nav
//             style={{
//                 background: 'rgba(0,0,0,0.4)',
//                 backdropFilter: 'blur(8px)',
//                 WebkitBackdropFilter: 'blur(8px)',
//                 padding: '1rem 2rem',
//                 color: '#fff',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 backdropFilter: 'blur(8px)', // efek blur buat kerenin bg
//                 position: 'sticky',
//                 top: 0,
//                 zIndex: 1000,
//             }}
//         >
//             <div>
//                 <Link
//                     to="/"
//                     style={{
//                         color: '#fff',
//                         fontSize: '1.5rem',
//                         fontWeight: 'bold',
//                         textDecoration: 'none',
//                     }}
//                 >
//                     SimpleMarketplace
//                 </Link>
//             </div>

//             <div style={{ display: 'flex', alignItems: 'center', paddingRight: '20px' }}>
//                 {['/', '/marketplace', '/about', '/contact'].map((path, idx) => {
//                     const labels = ['Home', 'Marketplace', 'About', 'Contact'];
//                     return (
//                         <Link
//                             key={path}
//                             to={path}
//                             style={{
//                                 marginRight: idx !== 3 ? '20px' : '0',
//                                 color: '#fff',
//                                 textDecoration: 'none',
//                                 fontWeight: '500',
//                                 transition: 'color 0.3s ease',
//                             }}
//                             onMouseEnter={e => (e.target.style.color = '#9c27b0')}
//                             onMouseLeave={e => (e.target.style.color = '#fff')}
//                         >
//                             {labels[idx]}
//                         </Link>
//                     );
//                 })}

//                 {account ? (
//                     <span
//                         style={{
//                             color: '#0f0',
//                             fontWeight: '600',
//                             userSelect: 'text',
//                             fontFamily: 'monospace',
//                         }}
//                         title={account}
//                     >
//                         🟢 {account.slice(0, 6)}...{account.slice(-4)}
//                     </span>
//                 ) : (
//                     <button
//                         onClick={handleConnect}
//                         style={{
//                             backgroundColor: '#9c27b0',
//                             border: 'none',
//                             color: '#fff',
//                             padding: '8px 16px',
//                             cursor: 'pointer',
//                             borderRadius: '6px',
//                             fontWeight: 'bold',
//                             transition: 'background-color 0.3s ease',
//                             userSelect: 'none',
//                             marginLeft: '30px', // ini biar agak ke tengah
//                         }}
//                         onMouseEnter={e => (e.target.style.backgroundColor = '#7b1fa2')}
//                         onMouseLeave={e => (e.target.style.backgroundColor = '#9c27b0')}
//                     >
//                         Connect Wallet
//                     </button>
//                 )}
//             </div>
//         </nav>
//     );

// };

// export default Navbar;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useWallet } from '../context/wallet';

const Navbar = () => {
  const { account, setAccount } = useWallet();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) setMenuOpen(false); // close menu if resizing to desktop
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleConnect = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } else {
        throw new Error("Metamask tidak ditemukan");
      }
    } catch (err) {
      console.error("Gagal connect wallet:", err.message);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        setAccount(accounts.length > 0 ? accounts[0] : null);
      });

      return () => {
        window.ethereum.removeListener('accountsChanged', () => {});
      };
    }
  }, [setAccount]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/marketplace', label: 'Marketplace' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const navStyle = {
    background: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    padding: '1rem 2rem',
    color: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
  };

  return (
    <nav style={navStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Link to="/" style={{ ...linkStyle, fontSize: '1.5rem', fontWeight: 'bold' }}>
          SimpleMarketplace
        </Link>

        {/* Hamburger Button */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: '1.5rem',
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            ☰
          </button>
        )}

        {/* Desktop Links */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = '#9c27b0')}
                onMouseLeave={(e) => (e.target.style.color = '#fff')}
              >
                {label}
              </Link>
            ))}

            {account ? (
              <span
                style={{
                  color: '#0f0',
                  fontWeight: '600',
                  fontFamily: 'monospace',
                }}
              >
                🟢 {account.slice(0, 6)}...{account.slice(-4)}
              </span>
            ) : (
              <button
                onClick={handleConnect}
                style={{
                  backgroundColor: '#9c27b0',
                  border: 'none',
                  color: '#fff',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#7b1fa2')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#9c27b0')}
              >
                Connect Wallet
              </button>
            )}
          </div>
        )}
      </div>

      {/* Mobile Dropdown */}
      {isMobile && menuOpen && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '10px',
            gap: '10px',
          }}
        >
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              style={{
                ...linkStyle,
                backgroundColor: '#320047',
                padding: '10px',
                borderRadius: '8px',
              }}
            >
              {label}
            </Link>
          ))}

          {account ? (
            <span
              style={{
                color: '#0f0',
                fontWeight: '600',
                fontFamily: 'monospace',
                padding: '8px',
              }}
            >
              🟢 {account.slice(0, 6)}...{account.slice(-4)}
            </span>
          ) : (
            <button
              onClick={handleConnect}
              style={{
                backgroundColor: '#9c27b0',
                border: 'none',
                color: '#fff',
                padding: '10px',
                borderRadius: '8px',
                fontWeight: 'bold',
              }}
            >
              Connect Wallet
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

