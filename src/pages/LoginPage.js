import React from 'react';
import '../styles/pages/LoginPage.css';
import Header from '../components/Header';
import Logo from '../assets/Feather.png';
import GoogleSignInButton from '../components/GoogleSignInButton';

function LoginPage() {
  const handleLogin = () => {
    // Handle login logic
    window.location.href = '/chats'; // Redirect to chats page after login
  };
  return (
    <div className="login-page">
        <Header />
      <img src={Logo} alt="Logo" className="logo"/> {/* Replace with your logo */}
      <h1 className="app-name">Were Chatting</h1>
      <p className="welcome-message">
        Selamat datang di Aplikasi <br /> Were Chatting
      </p>
      <GoogleSignInButton />
    </div>
  );
}

export default LoginPage;
