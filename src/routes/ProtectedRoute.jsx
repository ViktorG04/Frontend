import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const ProtectedRoute = () => {
  const { isLogged } = useSelector((state) => state.auth);

  if (!isLogged) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
