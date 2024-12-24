import React, { useState } from 'react';
import '../styles/components/Footer.css'; // Ensure you have a CSS file for styling
import ChatActive from '../assets/Vector-active.svg'; // Path to active chat icon
import { useNavigate } from 'react-router-dom';
import ChatInactive from '../assets/chat.svg'; // Path to inactive chat icon
import GearActive from '../assets/Gear-active.svg'; // Path to active gear icon
import GearInactive from '../assets/GearSix.svg'; // Path to inactive gear icon

function Footer() {
  // State to track active icon
  const [activeIcon, setActiveIcon] = useState('chat'); 

  const navigate = useNavigate();

 
  const handleIconClick = (iconName, path) => {
    setActiveIcon(iconName); 
    navigate(path); 
  };

  return (
    <footer className="footer">
      <div
        className={`icon-container ${activeIcon === 'chat' ? 'active' : ''}`}
        onClick={() => handleIconClick('chat')}
      >
        <img
          src={activeIcon === 'chat' ? ChatActive : ChatInactive} // Conditionally render active/inactive icon
          alt="Chat"
          className="icon"
          onClick={() => handleIconClick('chat', '/chats')}
        />
        <p className="icon-text">Chat</p>
      </div>
      <div
        className={`icon-container ${activeIcon === 'settings' ? 'active' : ''}`}
        onClick={() => handleIconClick('settings', '/settings')}
      >
        <img
          src={activeIcon === 'settings' ? GearActive : GearInactive} // Conditionally render active/inactive icon
          alt="Settings"
          className="icon"
        />
        <p className="icon-text">Settings</p>
      </div>
    </footer>
  );
}

export default Footer;
