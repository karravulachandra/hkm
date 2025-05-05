import React from 'react';

const TempleLogo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="150" viewBox="0 0 300 150">
      {/* Temple Base */}
      <rect x="75" y="120" width="150" height="30" fill="#f5f5f5" stroke="#800020" strokeWidth="2"/>
      
      {/* Temple Main Structure */}
      <rect x="90" y="70" width="120" height="50" fill="#f5f5f5" stroke="#800020" strokeWidth="2"/>
      
      {/* Temple Towers */}
      <polygon points="100,70 130,30 160,70" fill="#f5f5f5" stroke="#800020" strokeWidth="2"/>
      <polygon points="140,70 170,30 200,70" fill="#f5f5f5" stroke="#800020" strokeWidth="2"/>
      
      {/* Temple Domes */}
      <ellipse cx="115" cy="30" rx="15" ry="10" fill="#FFD700" stroke="#800020" strokeWidth="2"/>
      <ellipse cx="170" cy="30" rx="15" ry="10" fill="#FFD700" stroke="#800020" strokeWidth="2"/>
      
      {/* Temple Entrance */}
      <rect x="130" y="100" width="40" height="20" fill="#800020" stroke="#800020" strokeWidth="1"/>
      
      {/* Temple Steps */}
      <rect x="120" y="120" width="60" height="5" fill="#d3d3d3" stroke="#800020" strokeWidth="1"/>
      <rect x="125" y="125" width="50" height="5" fill="#d3d3d3" stroke="#800020" strokeWidth="1"/>
      <rect x="130" y="130" width="40" height="5" fill="#d3d3d3" stroke="#800020" strokeWidth="1"/>
      
      {/* Temple Windows */}
      <rect x="100" y="80" width="15" height="20" fill="#87CEEB" stroke="#800020" strokeWidth="1"/>
      <rect x="185" y="80" width="15" height="20" fill="#87CEEB" stroke="#800020" strokeWidth="1"/>
      
      {/* Om Symbol */}
      <text x="150" y="60" fontFamily="Arial" fontSize="20" textAnchor="middle" fill="#800020">ॐ</text>
    </svg>
  );
};

export default TempleLogo;
