import { useState } from "react";
import s from "./Form.module.css";
import { v4 as uuidv4 } from "uuid";
import { addContact } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.map((contact) => contact.name).includes(name)) {
      alert(`${name} is already in contacs.`);
      return;
    }

    const _uuidv4 = uuidv4();
    const addNewContact = {
      id: _uuidv4,
      name: name,
      number: number,
    };

    dispatch(addContact(addNewContact));

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const nameId = uuidv4();
  const numberId = uuidv4();

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor={nameId} className={s.formLbl}>
        {" "}
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          className={s.inputLbl}
        />
      </label>
      <br />
      <label htmlFor={numberId} className={s.formLbl}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          className={s.inputLbl}
        />
      </label>
      <br />
      <button type="submit" value="Отправить" className={s.btnInput}>
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
