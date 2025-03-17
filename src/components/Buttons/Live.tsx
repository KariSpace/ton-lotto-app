import { FC } from 'react';
import LiveIcon from './live.svg';
import './buttons.css';


interface LiveButtonProps {
  link: string;
  isActive: boolean;
}

const LiveButton: FC<LiveButtonProps> = ({ link, isActive }) => {
  return (
    <a
      href={link}
      className={`button live-btn ${isActive ? 'btn--shockwave is-active' : ''}`}
    >
      <img className="live-icon" src={LiveIcon} alt="Live" />
      Live
    </a>
  );
};

export default LiveButton;