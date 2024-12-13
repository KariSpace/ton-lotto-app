import { Ticket } from '@/components/Ticket/Ticket';
import styles from './TicketsPage.module.css';

export function TicketsPage() {
  const tickets = [
    {
      id: "1234",
      amount: "₴100",
      numbers: ["7", "11", "23", "42", "48"],
      status: "Active"
    },
    {
        id: "1234",
        amount: "₴100",
        numbers: ["7", "11", "23", "42", "48"],
        status: "Active"
      },
      {
        id: "1234",
        amount: "₴100",
        numbers: ["7", "11", "23", "42", "48"],
        status: "Active"
      },    {
        id: "1234",
        amount: "₴100",
        numbers: ["7", "11", "23", "42", "48"],
        status: "Active"
      }
    // Додайте більше квитків за потреби
  ];

  return (
    <div className={styles.container}>
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
} 