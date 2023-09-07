import './styles.css';

const Contact = (props) => {
    return (
        <div className="contact">
            <img src={props.image} alt="avatar" />
            <div className="info">
                <span>{props.name}</span>
                <span>{props.phone}</span>
            </div>
            <div className="buttons">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default Contact;
