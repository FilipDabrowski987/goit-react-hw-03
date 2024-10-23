// import { useState } from 'react'
// import { Formik } from 'formik';
// import * as Yup from "yup";
import ContactForm from './ContactForm/ContactForm.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import ContactList from './ContactList/ContackList.jsx';
import './App.css'

function App() {

  return (
  <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
  </div>
  )
}

export default App
