import { Link } from 'react-router-dom';
import { getInvoices } from '../../fetch/invoices';

export default function Invoice() {
  let invoices = getInvoices();
  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        {invoices.map((invoice) => (
          <Link style={{ display: 'block', margin: '1rem 0' }} to={`/invoice/${invoice.number}`} key={invoice.number}>
            {invoice.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
