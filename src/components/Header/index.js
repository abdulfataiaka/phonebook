import { useNavigate, useLocation } from "react-router-dom";
import './styles.css';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleAdd = () => {
        navigate('/upsert');
    }

    const handleCancel = () => {
        navigate('/');
    }

    return (
        <div className="header">
            <span>Phonebook</span>
            {
                location.pathname === '/'
                    ? <button onClick={handleAdd}>Add</button>
                    : <button onClick={handleCancel}>Cancel</button>
            }
        </div>
    )
}

export default Header;
