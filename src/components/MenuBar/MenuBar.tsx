import React from 'react';
import { useLocation } from 'react-router-dom';
import { MenuItem } from './MenuItem';
import './MenuBar.css';
import profileSvg from './profile.svg';
import ticketSvg from './ticket.svg';
import homeSvg from './home.svg';

export const MenuBar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="menu-bar">
      <div className="menu-layout">
        <MenuItem 
          icon={<img src={profileSvg} style={{ backgroundColor: '' }} alt="Profile" />}
          label="Profile"
          to="/profile"
          isActive={location.pathname === '/profile'}
        />
        <MenuItem 
          icon={<img src={homeSvg} style={{ backgroundColor: '' }} alt="Home" />}
          label="Home"
          to="/"
          isActive={location.pathname === '/home'}
        />
        <MenuItem 
          icon={<img src={ticketSvg} style={{ backgroundColor: '' }} alt="Tickets" />}
          label="Tickets"
          to="/tickets"
          isActive={location.pathname === '/tickets'}
        />
      </div>
      <div className="navigation-bar">
        {/* <div className="handle" /> */}
      </div>
    </div>
  );
}; 