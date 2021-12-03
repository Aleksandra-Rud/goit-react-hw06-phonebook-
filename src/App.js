import ContactForm from "./Components/ContactForm/Form";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import s from "./App.css";

function App() {
  return (
    <div className="App">
      <div className={s.contForm}>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
      </div>

      <div>
        <ContactList title="Contacts"></ContactList>
      </div>
    </div>
  );
}

export default App;
