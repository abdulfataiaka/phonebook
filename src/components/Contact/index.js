import { useNavigate } from 'react-router-dom';
import './styles.css';
import contacts from '../../mocks';

const Contact = (props) => {
    const navigate = useNavigate();

    const handleDelete = () => {
        const index = Number(props.id) - 1;
        contacts.splice(index, 1);
    }

    return (
        <div className="contact">
            <img src={props.image} alt="avatar" />
            <div className="info">
                <span>{props.name}</span>
                <span>{props.phone}</span>
            </div>
            <div className="buttons">
                <button onClick={(event) => { navigate(`/upsert/${props.id}`) }}>
                    Edit
                </button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default Contact;
