import Contact from './Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectfilteredContacts } from '../redux/selectors';

export default function ContactList() {
  const contacts = useSelector(selectfilteredContacts);

  return (
    <div>
      <h2>Contact List</h2>
      <ul className={css.list}>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
