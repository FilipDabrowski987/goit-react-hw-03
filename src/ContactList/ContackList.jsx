import Contact from './Contact.jsx';
import contacts from './contacts.json';
import './Contact.css'

const ContactList = () => {
    return (
        <ul className='contact-item-list'>
            {contacts.map(contacts =>
                <li className='contact-item' key={contacts.id}>
                    <Contact
                        name={contacts.name}
                        number={contacts.number}
                    />
                </li>
            )
            }
      </ul>
    )
  
};
export default ContactList