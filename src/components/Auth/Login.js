import { Link, useHistory } from "react-router-dom";
import { login } from "../../service/auth-service";
import { saveuserInfo } from "../../service/token-handler";

const Login = () => {
    let history = useHistory();
    
    const submit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let user = {
            email:formData.get('email'),
            password:formData.get('pass'),
        }

        login(user)
            .then((data)=> {
                saveuserInfo(data)
                history.push('/');
            });
    }

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
                        <form onSubmit={submit} className="register-form" id="login-form">
                            <div className="form-group">
                                <label html="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password" />
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

export default Login;