const CommentSection = () => {
    //Todo fetch the comments from the db and extract comment template to single component
    return (
        <div>
            <h2 className="tm-color-primary tm-post-title">Comments</h2>
            <hr className="tm-hr-primary tm-mb-45" />
            <div className="tm-comment tm-mb-45">
                <figure className="tm-comment-figure">
                    <img src="/img/comment-1.jpg" alt="Image" className="mb-2 rounded-circle img-thumbnail" />
                    <figcaption className="tm-color-primary text-center">Mark Sonny</figcaption>
                </figure>
                <div>
                    <p>
                        Praesent aliquam ex vel lectus ornare tritique.Nunc et eros
                        quis enim feugiat tincidunt et vitae dui.Nullam consectetur
                        justo ac ex laoreet rhoncus.Nunc id leo pretium, faucibus
                        sapien vel, euismod turpis.
                    </p>
                    <div className="d-flex justify-content-between">
                        <a href="#" className="tm-color-primary">REPLY</a>
                        <span className="tm-color-primary">June 23, 2020</span>
                    </div>
                </div>
            </div>
            <div className="tm-comment-reply tm-mb-45">
                <hr />
                <div className="tm-comment">
                    <figure className="tm-comment-figure">
                        <img src="/img/comment-2.jpg" alt="Image" className="mb-2 rounded-circle img-thumbnail" />
                        <figcaption className="tm-color-primary text-center">Jewel Soft</figcaption>
                    </figure>
                    <p>
                        Nunc et eros quis enim feugiat tincidunt et vitae dui.
                        Nullam consectetur justo ac ex laoreet rhoncus.Nunc
                        id leo pretium, faucibus sapien vel, euismod turpis.
                    </p>
                </div>
                <span className="d-block text-right tm-color-primary">June 21, 2020</span>
            </div>
            <form action="" className="mb-5 tm-comment-form">
                <h2 className="tm-color-primary tm-post-title mb-4">Your comment</h2>
                <div className="mb-4">
                    <input className="form-control" name="name" type="text" />
                </div>
                <div className="mb-4">
                    <input className="form-control" name="email" type="text" />
                </div>
                <div className="mb-4">
                    <textarea className="form-control" name="message" rows="6"></textarea>
                </div>
                <div className="text-right">
                    <button className="tm-btn tm-btn-primary tm-btn-small">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CommentSection