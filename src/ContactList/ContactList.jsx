import Contact from './Contact.jsx';
import './Contact.css'

const ContactList = ( { contacts } ) => {
    return (
        <ul className='contact-item-list'>
            {contacts.map(contact =>
                <li className='contact-item' key={contacts.id}>
                    <Contact
                        name={contact.name}
                        number={contact.number}
                    />
                </li>
            )
            }
      </ul>
    )
  
};
export default ContactList
