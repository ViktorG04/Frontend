import "./css/navbar.css";

const ProfileImage = ({ userName }) => {
  return (
    <div className="profile">
      <img
        src="https://thumbs.dreamstime.com/z/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg"
        alt="profile_picture"
      />
      <h3>{userName}</h3>
    </div>
  );
};

export default ProfileImage;
