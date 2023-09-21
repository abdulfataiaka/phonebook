import Header from '../Header';
import PlaceholderImage from '../../images/placeholder.svg';

const UpsertContactPage = () => {
    const handleSave = () => {
        console.log('Save button has been clciked');
    }

    return (
        <div>
            <Header />
            <div>
                <img src={PlaceholderImage} alt="preview" />
                <input type="file" />
                <input type='text' placeholder='Enter your full name' />
                <input type='text' placeholder='Enter your phone number' />
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}

export default UpsertContactPage;
