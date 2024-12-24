import React from 'react';
import '../styles/components/Header.css';

function Header() {
  return (
    <div className="header">
      <p className="time">09:41</p>
      <div className="status-bar">
        <span className="signal" />
        <span className="wifi" />
        <span className="battery" />
      </div>
    </div>
  );
}

export default Header;
