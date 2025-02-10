import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';



interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ 
  icon, 
  label, 
  to,
  isActive, 
  onClick 
}) => {
  return (
    <Link to={to} className={`menu-item ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="icon-container" style={{ width: '64px', height: '36px' }}>
        <div className="badge" />
        {icon}
      </div>
      <span className="tab-label">{label}</span>
    </Link>
  );
}; 