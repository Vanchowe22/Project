import { useHistory, Redirect } from 'react-router-dom';

import { create } from "../../service/acticles-service";
import { useAuth } from "../../hooks/useAuth";
import { useNotification } from '../../hooks/useNotification';
import { types } from '../../contexts/NotificationContext';
import { useState } from 'react';

const CreateForm = () => {
    const [image, setImage] = useState([]);
    let history = useHistory();
    let { auth } = useAuth();
    const { updateNotification } = useNotification();

    const onUpload = (e) => {
        const file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
            setImage(e.target.result);
        }
    }

    const submit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let post = {
            title: formData.get('name'),
            type: formData.get('genre'),
            imageUrl: image,
            description: formData.get('message'),
            owner: auth._id,
        };

        create(post, auth._id)
            .then(data => {
                history.push('/all-blogs');
                updateNotification(`You've created new post!`, types.info);
            })
            .catch(err => {
                updateNotification(err, types.error);
            });
    }

    return (
        <form onSubmit={submit} className="contact-form" data-aos="fade-up" data-aos-delay="300" role="form">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <input type="text" className="form-control" name="name" placeholder="Title" />
                </div>

                <div className="col-lg-6 col-12">
                    <input type="text" className="form-control" name="genre" placeholder="Genre" />
                </div>

                <div className="col-12" style={{ size: '200px' }}>
                    <input type="file" style={{ size: '200px' }} onChange={onUpload} name="imageUrl" placeholder="Image Url" />
                </div>

                <div className="col-lg-12 col-12">
                    <textarea className="form-control" rows="6" name="message" placeholder="Message"></textarea>
                </div>

                <div className="col-lg-5 mx-auto col-7">
                    <button type="submit" className="form-control" id="submit-button" name="submit">Create Post</button>
                </div>
            </div>

        </form>
    );
};

export default CreateForm;