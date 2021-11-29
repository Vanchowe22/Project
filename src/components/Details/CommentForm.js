import uniqid from 'uniqid'

import { commentOne } from '../../service/acticles-service';
import { getUserInfo } from '../../service/token-handler'

const CommentForm = ({
    id,
    setComments,
}) => {


    const submitHandler = (e) => {
        e.preventDefault();
        let form = e.currentTarget;
        let formData = new FormData(form);

        let comment = {
            name: formData.get('name'),
            _id: getUserInfo()._id,
            keyId: uniqid(),
            text: formData.get('message'),
        };

        commentOne(comment, id)
            .then(data => {
                form.reset();
                setComments(data.comments)
            })
    }

    return (
        <form onSubmit={submitHandler} className="mb-5 tm-comment-form">
            <h2 className="tm-color-primary tm-post-title mb-4">Your comment</h2>
            <div className="mb-4">
                <input className="form-control" name="name" type="text" placeholder="Name..." />
            </div>
            <div className="mb-4">
                <input className="form-control" name="email" type="text" placeholder="Email..." />
            </div>
            <div className="mb-4">
                <textarea className="form-control" name="message" rows="6" placeholder="Text..."></textarea>
            </div>
            <div className="text-right">
                <button className="tm-btn tm-btn-primary tm-btn-small">Submit</button>
            </div>
        </form>
    );
};

export default CommentForm;