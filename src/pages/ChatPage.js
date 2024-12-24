import React, { useState } from 'react';
import Header from '../components/Header';
import ChatList from '../components/Chatlists';
import TabMenu from '../components/TabMenu';
import '../styles/pages/ChatPage.css';
import Profile from '../assets/profile.jpg';
import Add from '../assets/add.png';
import Footer from '../components/Footer';

function ChatsPage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="chats-page">
        <h2>Chats</h2>
      <div className="user-info">
        <img src={Profile} alt="Profile" className="profile" />
        <div className="info">
          <h3>Nusatech</h3>
          <p>nusatech@company.co.id</p>
        </div>
        <img src={Add} alt="Add" className="add-icon" />
      </div>
      <TabMenu activeTab={activeTab} onTabChange={setActiveTab} />
      <ChatList />
        <Footer />
    </div>
  );
}

export default ChatsPage;
