import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import './styles.css'
import Header from '../Header';
import contacts from '../../mocks';
import PlaceholderImage from '../../images/placeholder.svg';

const UpsertContactPage = () => {
    const params = useParams();

    const contactById = contacts.find((item) => {
        return item.id == params.id;
    });

    const navigate = useNavigate();
    const [fullName, setFullName] = useState(contactById ? contactById.name : '');
    const [phoneNumber, setPhoneNumber] = useState(contactById ? contactById.phone : '');

    const handleSave = (event) => {
        const contact = {
            id: contactById ? contactById.id : contacts.length + 1,
            name: fullName,
            phone: phoneNumber,
            image: contactById ? contactById.image : PlaceholderImage,
        }

        if (params.id === undefined) {
            // Save into the contacts list store
            contacts.push(contact);
        } else {
            // Logic for editing an existing contact
            contacts[Number(params.id) - 1] = contact;
        }

        // Redirect to the contact list page
        navigate('/');
    }

    const handleFullNameChange = (event) => {
        const newValue = event.target.value;
        setFullName(newValue);
    }

    const handlePhoneNumberChange = (event) => {
        const newValue = event.target.value;
        setPhoneNumber(newValue);
    }

    return (
        <div>
            <Header />
            <div className="upsert-form-container">
                <div className="title">
                    {params.id === undefined ? 'Add' : 'Edit'} Contact
                </div>
                <img src={contactById ? contactById.image : PlaceholderImage} alt="preview" />
                <input type="file" />
                <input
                    onChange={handleFullNameChange}
                    value={fullName}
                    type='text'
                    placeholder='Enter your full name'
                />
                <input
                    onChange={handlePhoneNumberChange}
                    value={phoneNumber}
                    type='text'
                    placeholder='Enter your phone number'
                />
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}

export default UpsertContactPage;
