import { Link, useHistory } from "react-router-dom";
import { login } from "../../service/auth-service";
import { useAuth } from "../../hooks/useAuth"
import { useNotification } from "../../hooks/useNotification";
import { types } from '../../contexts/NotificationContext'
import { isLogged } from "../../hoc/SecureRoutes";

const Login = () => {
    let history = useHistory();
    let { onLogin } = useAuth();
    let { updateNotification } = useNotification();

    const submitHandler = (e) => {
        e.preventDefault();
        let formData = Object.fromEntries(new FormData(e.currentTarget));

        login(formData)
            .then((data) => {
                onLogin(data);
                updateNotification(`Successfully logged in!`, types.success)
                history.push('/');
            })
            .catch(err => {
                updateNotification(err, types.error)
            });
    };

    return (
        <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src="images/signin-image.jpg" alt="sing up image" /></figure>
                        <Link to="/register" className="signup-image-link">Create an account</Link>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                        <form onSubmit={submitHandler} className="register-form" id="login-form">
                            <div className={`form-group`} >
                                <label html="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" placeholder="Password" />
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default isLogged(Login);