import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm/ContactForm.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import './App.css'

function App() {

  const [contacts, setContacts] = useState(() => {
    const savedContact = JSON.parse(window.localStorage.getItem('saved-contact'));
    return savedContact ||
      [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  });
  
  const addContact = (newContact) => {
        setContacts((prevContacts) => [...prevContacts, newContact]);
    };


  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContacts = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox filter={filter} onFilterChange={setFilter} />
      <ContactList contacts={filteredContacts} deleteContacts={deleteContacts} />
    </div>
  );
}

export default App;