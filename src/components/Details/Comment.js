const Comment = ({
    comment
}) => {
    return (
        <div className="tm-comment tm-mb-45">
            <figure className="tm-comment-figure">
                <figcaption className="tm-color-primary text-center">{comment.name}</figcaption>
            </figure>
            <div>
                <p>
                    {comment.text}
                </p>
                <div className="d-flex justify-content-between">
                    <a href="#" className="tm-color-primary">REPLY  </a>
                    <span className="tm-color-primary">{comment.date}</span>
                </div>
            </div>
        </div>
    );
};

export default Comment;