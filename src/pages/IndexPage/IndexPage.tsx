import { FC } from 'react';
import { Page } from '@/components/Page.tsx';
import './IndexPage.css';
import { Link } from 'react-router-dom';
import CustomNumberInput from '@/components/Input/CustomNumberInput';
import LiveButton from '@/components/Buttons/Live';


export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <div className="main-container">
        <div className="row-flex header">
        <Link to='/rules'><button className="button">Rules</button></Link>          
        <Link to='/Profile'> <button className="button">ID Profile</button></Link>
        </div>
        <div className="row">
          <b>Next ticket draw</b>
          <div className="row-flex">
            <div>23.12.2024 17:00</div>
            <LiveButton link="https://example.com/live" isActive={false} />
          </div>
        </div>
        <hr style={{ margin: '20px 0' }}></hr>
        <div className="row">
          <div className="row-flex">
            <b>Winning combination today</b>
            <div>06.12.2024</div>
          </div>
          <div className="row-flex">
            <div className="numbers">
              {Array(6).fill(24).map((number, index) => (
                <span key={index} className="winning-number-box">{number}</span>
              ))}
            </div>
            <LiveButton link="https://example.com/live" isActive={true} />
          </div>
        </div>
        <div className="row jackpot">
          <div>JACKPOT</div>
          <div className="jackpot-amount">$20 000</div>
        </div>
        <div className="row number-selector">
          <span>Select numbers</span>
        </div>
        <CustomNumberInput />
        <div className="row">
          <button className="cta-button">BUY TICKET</button>
        </div>
      </div>
    </Page>
  );
};
