export default ({article}) => {
    return (
        <article className="col-12 col-md-6 tm-post">
            <hr className="tm-hr-primary" />
            <a href="post.html" className="effect-lily tm-post-link tm-pt-60">
                <div className="tm-post-link-inner">
                    <img src={article.img} alt="Image" className="img-fluid" />
                </div>
                <h2 className="tm-pt-30 tm-color-primary tm-post-title">{article.title}</h2>
            </a>
            <p className="tm-pt-30">
                {article.description}
            </p>
            <div className="d-flex justify-content-between tm-pt-45">
                <span className="tm-color-primary">Travel . Events</span>
                <span className="tm-color-primary">June 24, 2020</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <span>36 comments</span>
                <span>by Admin Nat</span>
            </div>
        </article>
    )
};