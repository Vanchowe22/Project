const ListItem = () => {
    return (
        <>
            <li className="tm-nav-item active"><a href="/" className="tm-nav-link">
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
            <li className="tm-nav-item"><a href="/contact" className="tm-nav-link">
                <i className="far fa-comments"></i>
                Login
            </a></li>
            <li className="tm-nav-item"><a href="/contact" className="tm-nav-link">
                <i className="far fa-comments"></i>
                Register
            </a></li>
            <li className="tm-nav-item"><a href="/contact" className="tm-nav-link">
                <i className="far fa-comments"></i>
                Logout
            </a></li>
        </>
    )
};

export default ListItem;