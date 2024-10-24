import { useState } from 'react'
import ContactForm from './ContactForm/ContactForm.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import ContactList from './ContactList/ContactList.jsx';
import './App.css'

function App() {

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  
  const addContact = (newContact) => {
        setContacts((prevContacts) => [...prevContacts, newContact]);
    };


  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
  <div>
  <h1>Phonebook</h1>
  <ContactForm onAddContact={addContact}/>
  <SearchBox filter={filter} onFilterChange={setFilter}/>
  <ContactList contacts={filteredContacts}/>
  </div>
  )
}

export default App