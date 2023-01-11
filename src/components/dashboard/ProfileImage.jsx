import { useSelector } from "react-redux";
import { PROFILE_IMAGE } from "../../config/config";
import "./css/navbar.css";

const ProfileImage = () => {
  const {
    user: { name },
  } = useSelector((state) => state.auth);

  return (
    <div className="profile">
      <img src={PROFILE_IMAGE} alt="profile_picture" />
      <h3>{name}</h3>
    </div>
  );
};

export default ProfileImage;
