import { editOne } from "../../service/acticles-service";
import { useHistory } from 'react-router-dom'
import { useAuth } from "../../hooks/useAuth";
import { useArticle } from "../../hooks/useArticle";
import { isOwner } from "../../hoc/SecureRoutes";
import { useNotification } from '../../hooks/useNotification'
import { types } from "../../contexts/NotificationContext";

const EditForm = ({
    match
}) => {
    let history = useHistory();
    let { auth } = useAuth();
    const { article } = useArticle();
    const { updateNotification } = useNotification();

    const submitHandler = (e) => {
        e.preventDefault();

        let form = e.currentTarget;
        let formData = Object.fromEntries(new FormData(form));

        editOne(match.params.id, formData, auth.token)
            .then(() => {
                form.reset();
                updateNotification('Successfully updated!', types.info);
                history.push(`/details/${match.params.id}`);
            })
            .catch(err => {
                updateNotification(err, types.error)
            });
    };



    return (
        <form onSubmit={submitHandler} className="contact-form" data-aos="fade-up" data-aos-delay="300" role="form">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <input type="text" className="form-control" name="title" placeholder="Title" defaultValue={article.title} />
                </div>

                <div className="col-lg-6 col-12">
                    <input type="text" className="form-control" name="type" placeholder="Genre" defaultValue={article.type} />
                </div>

                <div className="col-12" style={{ size: '200px' }}>
                    <input type="text" className="form-control" style={{ size: '200px' }} name="imageUrl" placeholder="Image Url" defaultValue={article.imageUrl} />
                </div>

                <div className="col-lg-12 col-12">
                    <textarea className="form-control" rows="6" name="description" placeholder="Message" defaultValue={article.description} ></textarea>
                </div>

                <div className="col-lg-5 mx-auto col-7">
                    <button type="submit" className="form-control" id="submit-button" name="submit">Edit Post</button>
                </div>
            </div>

        </form>
    );
};

export default isOwner(EditForm);