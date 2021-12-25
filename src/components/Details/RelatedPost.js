import { Link } from "react-router-dom";

const RelatedPost = ({
    post
}) => {
    return (
        <Link to={`/details/${post._id}`} >
            <figure>
                <img src={post.imageUrl} alt="Image" className="mb-3 img-fluid" />
                <figcaption className="tm-color-primary">{post.title}</figcaption>
            </figure>
        </Link>
    );
};

export default RelatedPost;