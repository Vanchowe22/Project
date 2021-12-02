import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import AuthContext from '../../contexts/AuthContext';
import { register } from "../../service/auth-service";


const Register = () => {
    let history = useHistory();
    let { onLogin } = useContext(AuthContext)
    const submit = (e) => {
        e.preventDefault();
        
        
        let formData = new FormData(e.currentTarget);

        let user = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('pass'),
            rePassword: formData.get('rePass'),
        };

        register(user)
            .then((data) => {
                onLogin(data)
                history.push('/')
            });

    }

    return (
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form onSubmit={submit} className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="rePass" id="rePass" placeholder="Repeat your password" />
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src="images/signup-image.jpg" alt="sing up image" /></figure>
                        <Link to="/login" className="signup-image-link">I am already member</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;