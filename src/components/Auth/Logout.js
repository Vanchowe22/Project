import { useContext } from "react";
import { Redirect } from "react-router";
import AuthContext from "../../contexts/AuthContext";
import { types } from "../../contexts/NotificationContext";
import { useNotification } from "../../hooks/useNotification";

const Logout = () => {
    let { onLogout } = useContext(AuthContext);
    onLogout();
    const { updateNotification } = useNotification();
    updateNotification('You\'ve logged out', types.error)

    return <Redirect to='/' />;
};

export default Logout;