import Contact from './Contact.jsx';
import './Contact.css'

const ContactList = ( { contacts, deleteContacts } ) => {
    return (
        <ul className='contact-item-list'>
            {contacts.map(contact =>
                <li className='contact-item' key={contact.id}>
                    <Contact
                        id={contact.id}
                        name={contact.name}
                        number={contact.number}
                        deleteContacts={deleteContacts}
                    />
                </li>
            )
            }
      </ul>
    )
};
export default ContactList
