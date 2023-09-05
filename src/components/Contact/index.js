import './styles.css';
import AvatarImage from '../../images/avatar.jpeg';

const Contact = () => {
    return (
        <div className="contact">
            <img src={AvatarImage} alt="avatar" />
            <div className="info">
                <span>Aka Abdulfatai</span>
                <span>090124532124</span>
            </div>
            <div className="buttons">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default Contact;
