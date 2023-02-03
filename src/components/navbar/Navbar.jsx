import useNavbar from "../../hooks/useNavbar";
import LinkConfig from "./LinkConfig";
import "./css/navbar.css";

const Navbar = () => {
  const { name, links } = useNavbar();
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
