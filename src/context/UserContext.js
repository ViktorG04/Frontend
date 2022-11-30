import { createContext } from "react";

const UserContext = createContext({
    userLogin: '',
    setUserLogin: null,
});

export default UserContext;