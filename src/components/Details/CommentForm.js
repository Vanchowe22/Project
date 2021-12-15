import uniqid from 'uniqid'
import { types } from '../../contexts/NotificationContext';
import { useAuth } from '../../hooks/useAuth';
import { useNotification } from '../../hooks/useNotification';
import { commentOne } from '../../service/acticles-service';

const CommentForm = ({
    id,
    setComments,
}) => {
    let { auth } = useAuth();
    let { updateNotification } = useNotification();

    const submitHandler = (e) => {
        e.preventDefault();
        let form = e.currentTarget;
        let formData = new FormData(form);

        let comment = {
            name: formData.get('name'),
            _id: auth._id,
            keyId: uniqid(),
            text: formData.get('message'),
        };

        commentOne(comment, id)
            .then(data => {
                form.reset();
                setComments(data);
            })
            .catch(err => {
                updateNotification(err, types.error);
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