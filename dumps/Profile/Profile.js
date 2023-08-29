import './Profile.css';

const Profile = (props) => {
    return (
        <div className="profile-box">
            <img alt="avatar-image" src={props.image} />
            <div>{props.name}</div>
        </div>
    )
}

export default Profile;