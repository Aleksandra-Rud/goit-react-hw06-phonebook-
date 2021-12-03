import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions";
import { onFilteredContacts } from "../../redux/selectors";

function ContactList() {
  // const contacts = useSelector();
  const contacts = useSelector(onFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.contactLists}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={s.contactItem}>
          <p className={s.contactName}>
            {name}: <span className={s.contactNumber}>{number}</span>
          </p>
          <button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            className={s.btnDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
