import React, { useState } from 'react';
import '../styles/pages/SettingsPage.css';
import Profile from '../assets/profile.jpg';
import Arrow from '../assets/arrow.png';
import Footer from '../components/Footer';

function SettingsPage() {

  return (
    <div className="chats-page">
      <h2>Settings</h2>
      <div className="user-info">
        <img src={Profile} alt="Profile" className="profile" />
        <div className="info">
          <h3>Nusatech</h3>
          <p>nusatech@company.co.id</p>
        </div>

        <img src={Arrow} alt="detail-user" className="detail-user" />
      </div>
      <div className='setting-content' >
        <div className="user-info">
          <div style={{display: 'flex', alignItems: 'center', flexGrow: 1}}>
          <img src={Profile} alt="Profile" className="profile" />
          <h3>Change Username</h3>
          </div>
          <img src={Arrow} alt="detail-user" className="detail-user" />
        </div>
        <div className="user-info">
          <div style={{display: 'flex', alignItems: 'center', flexGrow: 1}}>
          <img src={Profile} alt="Profile" className="profile" />
          <h3>Change Password</h3>
          </div>
          <img src={Arrow} alt="detail-user" className="detail-user" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SettingsPage;
