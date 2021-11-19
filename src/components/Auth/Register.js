import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { register } from "../../service/auth-service";


const Register = () => {
    let history = useHistory();
    
    const submit = (e) => {
        e.preventDefault();
        
        
        let formData = new FormData(e.currentTarget);

        let data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('pass'),
            rePassword: formData.get('rePass'),
        };

        register(data)
            .then((data) => {
                sessionStorage.setItem('USER', data);
                history.push('/')
            });

    }

    return (
        <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Sign up</h2>
                        <form onSubmit={submit} class="register-form" id="register-form">
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name" />
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" />
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="rePass" id="rePass" placeholder="Repeat your password" />
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="Register" />
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src="images/signup-image.jpg" alt="sing up image" /></figure>
                        <Link to="/login" class="signup-image-link">I am already member</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;