import React from 'react';
import '../styles/components/UserCard.css';

function UserCard({ name, email, lastMessageTime, profilePic }) {
  return (
    <div className="user-card">
      <img src={profilePic} alt="profile" className="profile-pic" />
      <div className="recipient-info">
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
      <span className="last-time">{lastMessageTime}</span>
    </div>
  );
}

export default UserCard;
