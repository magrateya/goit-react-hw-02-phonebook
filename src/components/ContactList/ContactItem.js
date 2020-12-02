import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactItem({ id, name, number, onDeleteContact }) {
  // console.log(typeof onDeleteContact);
  // console.log(id);

  return (
    <li className={s.contactItem}>
      <span>{name}</span>
      <span>{number}</span>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
