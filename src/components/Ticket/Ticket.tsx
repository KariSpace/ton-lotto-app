import React from 'react';
import './Ticket.css';

interface TicketProps {
  id: string;
  amount: string;
  numbers: string[];
  status: string;
}

export const Ticket: React.FC<TicketProps> = ({ id, amount, numbers, status }) => {
  return (
    <div className="ticket ">
      <div className="ticket-background">
        <div className="ticket-circles">
          <div className="circle top" />
          <div className="divider" />
          <div className="circle bottom" />
        </div>
        
        <div className="ticket-label">TICKET</div>
        
        <div className="ticket-divider" />
        
        <div className="ticket-content">
          <div className="ticket-header">
            <span className="ticket-id">ID:{id}</span>
            <span className="ticket-amount">{amount}</span>
          </div>
          
          <div className="ticket-numbers">
            <div className="numbers-combination">
              {numbers.map((number, index) => (
                <div key={index} className="number-box">
                  {number}
                </div>
              ))}
            </div>
            <div className="ticket-status">{status}</div>
          </div>
        </div>
      </div>
    </div>
  );
}; 