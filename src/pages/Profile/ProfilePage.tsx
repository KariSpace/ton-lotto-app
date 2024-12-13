import React from 'react';
import { Link } from '@/components/Link/Link.tsx';

import arrowSvg from './arrow.svg';
import { Ticket } from '@/components/Ticket/Ticket';

import './ProfilePage.css';

const tickets = [
    {
        id: "1234",
        amount: "₴100",
        numbers: ["7", "11", "23", "42", "48"],
        status: "Active"
    },
    {
        id: "299482179034",
        amount: "$279,135",
        numbers: ["7", "11", "23", "42", "48"],
        status: "In progress"
    }


    // Додайте більше квитків за потреби
];

export const ProfilePage: React.FC = () => {
    return (
        <div>
            <div className="profile-container">
                <h1 className="profile-header">User Profile</h1>
                <div className="profile-info">
                    <div className="profile-field">
                        <label>ID: 1234.235.33.1157</label>
                    </div>
                    <Link to="/ton-connect">

                        <button className="editButton">
                            {/* Add Wallet */}
                            <span className="buttonText">Add Wallet</span>

                            <img src={arrowSvg} alt="Arrow" className="arrow" />
                        </button>
                    </Link>
                </div>

            </div>
            {tickets.map((ticket) => (
                <Ticket
                    key={ticket.id}
                    id={ticket.id}
                    amount={ticket.amount}
                    numbers={ticket.numbers}
                    status={ticket.status}
                />
            ))}
        </div>
    );
}; 