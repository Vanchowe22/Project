import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext();

const initState = {
    _id: '',
    email: '',
    token: '',
};

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('userInfo', initState)

    const onLogin = (user) => {
        setAuth(user)
    }

    const onLogout = () => {
        setAuth(initState);
    }

    return (
        <AuthContext.Provider value={{ auth, onLogin, onLogout }} >
            {children}
        </AuthContext.Provider >
    );
}

export default AuthContext;