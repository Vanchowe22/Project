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

        if (article.owner._id == auth._id) {
            return <Component {...props} />
        } else {
            return <Redirect to='/' />
        }
    };
    return WrapperComponent;
};