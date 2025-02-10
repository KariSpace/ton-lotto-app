import { FC } from 'react';
import { Page } from '@/components/Page.tsx';
import './IndexPage.css';
import LiveIcon from './live.svg';
import { Link } from 'react-router-dom';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <div className="main-container">
        <div className="row-flex header">
          <button className="button">Rules</button>
          <Link to='/Profile'> <button className="button">ID Profile</button></Link>
        </div>
        <div className="row">
          <div>Next ticket draw</div>
          <div className="row-flex">
            <div>23.12.2024 17:00</div>
            <button className="button live-btn">
              <img className="live-icon" src={LiveIcon} alt="Live" />
              Live
            </button>
          </div>
        </div>
        <hr style={{ margin: '20px 0' }}></hr>
        <div className="row">
          <div className="row-flex">
            <div>Winning combination today</div>
            <div>06.12.2024</div>
          </div>
          <div className="row-flex">
            <div className="numbers">
              {Array(6).fill(24).map((number, index) => (
                <span key={index} className="winning-number-box">{number}</span>
              ))}
            </div>
            <button className="button live-btn">
              <img className="live-icon" src={LiveIcon} alt="Live" />
              Live
            </button>
          </div>
        </div>
        <div className="row jackpot">
          <div>JACKPOT</div>
          <div className="jackpot-amount">$20 000</div>
        </div>
        <div className="row number-selector">
          <span>Select numbers</span>

          <input type="text" placeholder="Input numbers" className="input-numbers" />

        </div>
        <div className="row">
          <button className="cta-button">BUY TICKET</button>
        </div>
      </div>
    </Page>
  );
};
