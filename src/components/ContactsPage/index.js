import './styles.css';
import Header from '../Header';
import Contact from '../Contact';
import contacts from '../../mocks';

const ContactsPage = () => {
    return (
        <div>
            <Header />
            <div className="contact-list">
                <div>First</div>
                <div>Sdcond</div>
                <div>Third</div>

                {
                    [
                        <div>First</div>,
                        <div>Sdcond</div>,
                        <div>Third</div>,
                    ]
                }

                {
                    contacts.map((contact, index) => {
                        return (
                            <Contact
                                key={index}
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
