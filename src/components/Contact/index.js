import { useNavigate } from 'react-router-dom';
import './styles.css';

const Contact = (props) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('/upsert');
    }

    const handleDelete = () => {
        console.log('Delete button has been clicked');
    }

    return (
        <div className="contact">
            <img src={props.image} alt="avatar" />
            <div className="info">
                <span>{props.name}</span>
                <span>{props.phone}</span>
            </div>
            <div className="buttons">
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default Contact;
