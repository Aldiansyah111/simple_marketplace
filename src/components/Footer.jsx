// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer
            style={{
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                color: '#fff',
                textAlign: 'center',
                padding: '1.5rem 1rem',
                backdropFilter: 'blur(8px)',
                bottom: 0,
                width: '100%',
                fontSize: '0.9rem',
                userSelect: 'none',
            }}
        >
            <p>© 2025 Smart Marketplace | Powered by Blockchain</p>
        </footer>
    );
};

export default Footer;
