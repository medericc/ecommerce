import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200 text-gray-600 text-center">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Logo */}
        <div className="text-2xl font-bold">ESSENTIALS <span className="text-black">FIFTY</span></div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <FaInstagram size={24} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <FaTiktok size={24} />
          </a>
        </div>

        {/* Copyright and Links */}
        <div className="text-sm">
          <p>© 2024 Essentials Fifty. Tous droits réservés.</p>
          <a href="https://webxpansion.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">
            Site réalisé par WebXpansion.com
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex space-x-4 text-sm text-gray-600">
          <a href="/mentions-legales" className="hover:underline">Mentions Légales</a>
          <a href="/politique-de-confidentialite" className="hover:underline">Politique de confidentialité</a>
          <a href="/cgv" className="hover:underline">CGV</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
