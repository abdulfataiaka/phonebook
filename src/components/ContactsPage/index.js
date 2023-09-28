import './styles.css';
import Header from '../Header';
import Contact from '../Contact';
import contacts from '../../mocks';

const ContactsPage = () => {
    return (
        <div>
            <Header />
            <div className="contact-list">
                {
                    contacts.map((contact, index) => {
                        return (
                            <Contact
                                key={index}
                                id={contact.id}
                                image={contact.image}
                                name={contact.name}
                                phone={contact.phone}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ContactsPage;
