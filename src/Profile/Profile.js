import './Profile.css';
import AvatarImage from './avatar.jpeg';

const Profile = () => {
    return (
        <div className="profile-box">
            <img alt="avatar-image" src={AvatarImage} />
            <div>Aka Abdulfatai</div>
        </div>
    )
}

export default Profile;