import { useContext } from "react";
import { Redirect } from "react-router";
import AuthContext from "../../contexts/AuthContext";

const Logout = () => {
    let { onLogout } = useContext(AuthContext);
    onLogout();

    return <Redirect to='/' />;
};

export default Logout;