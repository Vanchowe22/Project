import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
    let { auth } = useAuth();
    let user = (
        <>
            <li className="tm-nav-item"><NavLink to="/create" className="tm-nav-link active">
                <i className="fas fa-plus-circle"></i>
                Create
            </NavLink></li>
            <li className="tm-nav-item"><NavLink to="/my-profile" className="tm-nav-link active">
                <i className="fas fa-user"></i>
                My Profile
            </NavLink></li>
            <li className="tm-nav-item"><NavLink to="/logout" className="tm-nav-link active">
                <i className="fas fa-sign-out-alt"></i>
                Logout
            </NavLink></li>
        </>
    );

    let guest = (
        <>
            <li className="tm-nav-item"><NavLink to="/login" className="tm-nav-link active">
                <i className="fas fa-sign-in-alt"></i>
                Login
            </NavLink></li>
            <li className="tm-nav-item"><NavLink to="/register" className="tm-nav-link active">
                <i className="fas fa-pen"></i>
                Register
            </NavLink></li>
        </>
    );
    return (
        <header className="tm-header" id="tm-header">
            <div className="tm-header-wrapper">
                <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="tm-site-header">
                    <div className="mb-3 mx-auto tm-site-logo"><i className="fas fa-times fa-2x"></i></div>
                    <h1 className="text-center">Xtra Blog</h1>
                </div>
                <nav className="tm-nav" id="tm-nav">
                    <ul>
                        <li className="tm-nav-item"><NavLink to="/" className="tm-nav-link active">
                            <i className="fas fa-home"></i>
                            Blog Home
                        </NavLink></li>
                        <li className="tm-nav-item"><NavLink to="/all-blogs" className="tm-nav-link active">
                            <i className="fas fa-bars"></i>
                            All Blogs
                        </NavLink></li>
                        {
                            auth.name
                                ? user
                                : guest
                        }
                        <li className="tm-nav-item"><NavLink to="/contact" className="tm-nav-link active">
                            <i className="far fa-comments"></i>
                            Contact Us
                        </NavLink></li>
                    </ul>
                </nav>
                <div className="tm-mb-65">
                    <a rel="nofollow" href="https://fb.com/templatemo" className="tm-social-link">
                        <i className="fab fa-facebook tm-social-icon"></i>
                    </a>
                    <a href="https://twitter.com" className="tm-social-link">
                        <i className="fab fa-twitter tm-social-icon"></i>
                    </a>
                    <a href="https://instagram.com" className="tm-social-link">
                        <i className="fab fa-instagram tm-social-icon"></i>
                    </a>
                    <a href="https://linkedin.com" className="tm-social-link">
                        <i className="fab fa-linkedin tm-social-icon"></i>
                    </a>
                </div>
            </div>
        </header>
    )
};

export default Header;