import React from 'react';
import UserCard from './UserCard';
import profilePic from '../assets/profile.jpg'; // Example profile picture
import '../styles/components/Chatlists.css';

function ChatList() {
  const users = [
    { name: 'Giffard Kennedy', email: 'giffardkennedy@gmail.com', lastMessageTime: 'Yesterday', profilePic },
    { name: 'Garland Allyn', email: 'garlandallyn@gmail.com', lastMessageTime: 'Yesterday', profilePic },
    { name: 'Avice Rain', email: 'avicerain@gmail.com', lastMessageTime: 'Yesterday', profilePic },
    { name: 'Deeann Ashton', email: 'deeannashton@gmail.com', lastMessageTime: 'Yesterday', profilePic },
    { name: 'Bethney Lizbeth', email: 'bethneylizbeth@gmail.com', lastMessageTime: 'Yesterday', profilePic },
  ];

  return (
    <div className="chat-list">
      {users.map((user, index) => (
        <UserCard key={index} {...user} />
      ))}
    </div>
  );
}

export default ChatList;
