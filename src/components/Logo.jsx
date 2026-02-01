import React from 'react';
import { useTheme } from '../context/ThemeContext';
import logoBlack from '../assets/logo.jpg';
import logoWhite from '../assets/logo.jpg';

export default function Logo({ alt = 'Company logo', className = '' }) {
  const { theme } = useTheme();
  const src = theme === 'dark' ? logoWhite : logoBlack;
  return <img src={src} alt={alt} className={`logo ${className}`} />;
}