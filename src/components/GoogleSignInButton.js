import React from 'react';
import '../styles/components/GoogleSignInButton.css';

function GoogleSignInButton() {
  return (
    <button className="google-signin">
      <img src="google-icon.png" alt="Google Icon" className="google-icon" />
      Lanjutkan Dengan Google
    </button>
  );
}

export default GoogleSignInButton;
