import { Link } from "react-router-dom";

const Article = ({
    article,
}) => {

    return (
        <article className="col-12 col-md-6 tm-post">
            <hr className="tm-hr-primary" />
            <Link to={`details/${article._id}`} className="effect-lily tm-post-link tm-pt-60">
                <div className="tm-post-link-inner">
                    <img src={article.imageUrl} alt="Image" className="img-fluid" />
                </div>
                <h2 className="tm-pt-30 tm-color-primary tm-post-title">{article.title}</h2>
            </Link>
            <p className="tm-pt-30">
                {article.description}
            </p>
            <div className="d-flex justify-content-between tm-pt-45">
                <span className="tm-color-primary">{article.type}</span>
                <span className="tm-color-primary">{article.date}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <span>by {article.owner.name}</span>
            </div>
        </article>
    )
};

export default Article;