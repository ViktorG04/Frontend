import { useSelector } from "react-redux";
import LinkConfig from "./LinkConfig";
import "./css/navbar.css";
const links = [
  {
    id: 1,
    to: "/dashboard",
    linkName: "Dashboard",
  },
  {
    id: 2,
    to: "/profile",
    linkName: "Profile",
  },
  {
    id: 3,
    to: "/transfers",
    linkName: "Transfers",
  },
  {
    id: 4,
    to: "/history",
    linkName: "Reports",
  },
  {
    id: 5,
    to: "/",
    linkName: "Sing out",
  },
];

const Navbar = () => {
  const {
    user: { name },
  } = useSelector((state) => state.auth);

  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkBtn">
        <i className="fas fa-bars"></i>
      </label>

      <p>{name}</p>
      <ul>
        {links.map((link) => (
          <LinkConfig key={`link-${link.id}`} link={link} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
