import { Redirect } from "react-router-dom";
import { useArticle } from "../hooks/useArticle";
import { useAuth } from "../hooks/useAuth";

export const SecureRoutes = (Component) => {
    const WrapperComponent = (props) => {
        let { auth } = useAuth();

        return auth.name
            ? <Component {...props} auth={auth} />
            : <Redirect to='login' />
    };

    return WrapperComponent
};

export const isOwner = (Component) => {
    const WrapperComponent = (props) => {
        let { article } = useArticle();
        let { auth } = useAuth();

        return article.owner._id == auth._id
            ? <Component {...props} />
            : <Redirect to='/' />

    };
    return WrapperComponent;
};

export const isLogged = (Component) => {
    const WrapperComponent = (props) => {
        let { auth } = useAuth();

        return auth.name
            ? <Redirect to='/' />
            : <Component {...props} auth={auth} />
    }

    return WrapperComponent;
};