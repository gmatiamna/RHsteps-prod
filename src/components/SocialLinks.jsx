import React from 'react';

export default function SocialLinks({ className = '', size = 20 }) {
  // Replace these href values with your real profile URLs
  const profiles = {
    facebook: 'https://www.facebook.com/profile.php?id=61573060680959',
    instagram: 'https://www.instagram.com/your-profile',
  };

  return (
    <div className={`social-links ${className}`} aria-label="Social links">
      <a
        className="social-link"
        href={profiles.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook (opens in new tab)"
      >
        {/* Facebook SVG (simple mark) */}
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M22 12a10 10 0 1 0-11.5 9.9v-7H8.9v-2.9h1.6V9.4c0-1.6 1-2.6 2.5-2.6.7 0 1.4.1 1.4.1v1.6h-.8c-.8 0-1 0-1 1v1.3h1.8l-.3 2.9h-1.5v7A10 10 0 0 0 22 12z" />
        </svg>
      </a>

      <a
        className="social-link"
        href={profiles.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram (opens in new tab)"
      >
        {/* Instagram SVG (rounded camera) */}
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.3-.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1zM12 15.4A3.4 3.4 0 1 1 15.4 12 3.4 3.4 0 0 1 12 15.4z" />
        </svg>
      </a>
    </div>
  );
}