import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const PATHS = [
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
    linkName: "Sign out",
  },
];

const useNavbar = () => {
  const {
    user: { name },
  } = useSelector((state) => state.auth);

  const { accounts } = useSelector((state) => state.accounts);
  const [links, setLinks] = useState([]);
  const LINK_TRANSFER = 3;

  useEffect(() => {
    if (!accounts.length) {
      const filter = PATHS.filter((path) => path.id !== LINK_TRANSFER);
      setLinks(filter);
    } else {
      setLinks(PATHS);
    }
  }, [accounts]);

  return { name, links };
};

export default useNavbar;
