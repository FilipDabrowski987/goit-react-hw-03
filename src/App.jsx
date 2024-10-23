import { useState } from 'react'
// import * as Yup from "yup";
import ContactForm from './ContactForm/ContactForm.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import ContactList from './ContactList/ContactList.jsx';
import contacts from './ContactList/contacts.json';
import './App.css'

function App() {

  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
  <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox filter={filter} onFilterChange={setFilter}/>
  <ContactList contacts={filteredContacts}/>
  </div>
  )
}

export default App
