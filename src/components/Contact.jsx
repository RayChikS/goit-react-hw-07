import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';

export default function Contact({ contact }) {
  const { id, text, phone } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li key={id} className={css.contactItem}>
      <div>
        <div className={css.item}>
          <FaUser />
          <p>{text}</p>
        </div>
        <div className={css.item}>
          <BsFillTelephoneFill />
          <p>{phone}</p>
        </div>
      </div>

      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
