import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/store';
import { useDispatch } from 'react-redux';

export const ContactList = ({filtered}) => {
  const dispatch = useDispatch()
  return (
    <ul>
      {filtered.map(({id, name, number}) => (
        <li key={id}  className={css.item}>
          {name}: {number}
          <button
            className={css.deleteBtn}
            type="button"
            onClick={()=>dispatch(deleteContact(id))}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filtered: PropTypes.arrayOf(
    PropTypes.PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};
