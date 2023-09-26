import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './styles.css'
import Header from '../Header';
import contacts from '../../mocks';
import PlaceholderImage from '../../images/placeholder.svg';

const UpsertContactPage = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSave = (event) => {
        const contact = {
            name: fullName,
            phone: phoneNumber,
            image: PlaceholderImage,
        }

        // Save into the contacts list store
        contacts.push(contact);

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
                <img src={PlaceholderImage} alt="preview" />
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
