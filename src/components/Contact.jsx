import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

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

const iconStyle = {
  fontSize: '2rem',
  marginBottom: '10px',
  color: '#fff',
};

const Contact = () => {
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
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Contact Me</h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <div style={cardStyle}>
          <FaEnvelope style={iconStyle} />
          <h2>Email</h2>
          <p>youremail@example.com</p>
        </div>

        <div style={cardStyle}>
          <FaLinkedin style={iconStyle} />
          <h2>LinkedIn</h2>
          <p>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
            >
              linkedin.com/in/yourusername
            </a>
          </p>
        </div>

        <div style={cardStyle}>
          <FaGithub style={iconStyle} />
          <h2>GitHub</h2>
          <p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
            >
              github.com/yourusername
            </a>
          </p>
        </div>

        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '10px' }}>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaInstagram style={iconStyle} />
            </a>
            <a href="https://tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer">
              <FaTiktok style={iconStyle} />
            </a>
            <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
              <FaYoutube style={iconStyle} />
            </a>
          </div>
          <h2>Social Media</h2>
          <p>Follow me for updates and content!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
