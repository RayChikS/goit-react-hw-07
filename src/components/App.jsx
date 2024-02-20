import ContactForm from './ContactForm.jsx';
import ContactList from './ContactList.jsx';
import SearchBox from './SearchBox.jsx';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
