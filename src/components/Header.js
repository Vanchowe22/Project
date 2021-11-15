
const Header = ({ navigationHandler }) => {
    const onNav = (e) => {
        e.preventDefault();

        if (e.target.tagName == 'A') {
            let url = new URL(e.target.href);
            navigationHandler(url.pathname);
        }
    }

    return (
        <header onClick={onNav} className="tm-header" id="tm-header">
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
                        <li className="tm-nav-item active"><a href="/home" className="tm-nav-link">
                            <i className="fas fa-home"></i>
                            Blog Home
                        </a></li>
                        <li className="tm-nav-item"><a href="/post" className="tm-nav-link">
                            <i className="fas fa-pen"></i>
                            Single Post
                        </a></li>
                        <li className="tm-nav-item"><a href="/about" className="tm-nav-link">
                            <i className="fas fa-users"></i>
                            About Xtra
                        </a></li>
                        <li className="tm-nav-item"><a href="/contact" className="tm-nav-link">
                            <i className="far fa-comments"></i>
                            Contact Us
                        </a></li>
                        <li className="tm-nav-item"><a href="/login" className="tm-nav-link">
                            <i className="far fa-comments"></i>
                            Login
                        </a></li>
                        <li className="tm-nav-item"><a href="/register" className="tm-nav-link">
                            <i className="far fa-comments"></i>
                            Register
                        </a></li>
                        <li className="tm-nav-item"><a href="/contact" className="tm-nav-link">
                            <i className="far fa-comments"></i>
                            Logout
                        </a></li>
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
                <p className="tm-mb-80 pr-5 text-white">
                    Xtra Blog is a multi-purpose HTML template from TemplateMo website. Left side is a sticky menu bar. Right side content will scroll up and down.
                </p>
            </div>
        </header>
    )
};

export default Header;