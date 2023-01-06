import NavLinkConfig from "./NavLinkConfig";

const links = [
  {
    id: 1,
    to: "/dashboard",
    iconName: "fas fa-home",
    linkName: "Home",
  },
  {
    id: 2,
    to: "profile",
    iconName: "fas fa-user",
    linkName: "Profile",
  },
  {
    id: 3,
    to: "accounts",
    iconName: "fas fa-address-card",
    linkName: "Accounts",
  },
  {
    id: 4,
    to: "transfers",
    iconName: "fas fa-american-sign-language-interpreting",
    linkName: "Transfers",
  },
  {
    id: 5,
    to: "expenses-income",
    iconName: "fas fa-balance-scale",
    linkName: "expense-income",
  },
  {
    id: 6,
    to: "history",
    iconName: "fas fa-chart-line",
    linkName: "Reports",
  },
  {
    id: 7,
    to: "/",
    iconName: "fas fa-sign-out-alt",
    linkName: "Sing out",
  },
];

function Navbar() {
  return (
    <>
      {links.map((link, index) => (
        <NavLinkConfig key={`link-${index}`} link={link} />
      ))}
    </>
  );
}

export default Navbar;
