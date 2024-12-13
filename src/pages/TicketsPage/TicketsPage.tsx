import { Ticket } from '@/components/Ticket/Ticket';

export function TicketsPage() {
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

  return (
    <div>
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