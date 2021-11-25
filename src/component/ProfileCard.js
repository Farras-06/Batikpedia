import "./ProfileCard.css";

const ProfileCard = props => {
  const profile = props.profile;
  return (
    <div className="card-container">
      <div className="card-top-container">
        <img className="profile-picture" src={profile.pict} alt="" />
        <div className="profile-id">
          <p className="name">{profile.name}</p>
          <p>{profile.university}</p>
          <p>{profile.locations}</p>
        </div>
      </div>
      <div className="divider" />
      <div className="card-bottom-container">
        <a href={"https://instagram.com/" + profile.instagram}>
          <div className="social-network" style={{backgroundColor: '#fff'}}>
            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt="" />
            <p>Instagram</p>
          </div>
        </a>
        <a href={"https://github.com/" + profile.github}>
          <div className="social-network" style={{backgroundColor: '#1a1a1c', color: '#fff'}}>
            <img src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png" alt="" />
            <p>Github</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;