import { Redirect } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const SecureRoutes = (Component) => {
    const WrapperComponent = (props) => {
        let user = useAuth();
        console.log(user.email ? 'yes' : 'no');
        return user.email
            ? <Component {...props} auth={user} />
            : <Redirect to='login' />
    };

    return WrapperComponent
};

export default SecureRoutes;