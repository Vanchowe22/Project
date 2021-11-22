import { create } from "../../service/acticles-service";

import { useHistory } from 'react-router-dom';
import { getUserInfo } from "../../service/token-handler";
const CreateForm = () => {

    let history = useHistory();

    const submit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        console.log(getUserInfo())
        
        let post = {
            title: formData.get('name'),
            type: formData.get('genre'),
            imageUrl: formData.get('imageUrl'),
            description: formData.get('message'),
            date: Date.now(),
            owner:getUserInfo()._id,
        };

        create(post)
            .then(data => {
                history.push('/')             
            })
    }

    return (
        <form onSubmit={submit} class="contact-form" data-aos="fade-up" data-aos-delay="300" role="form">
            <div class="row">
                <div class="col-lg-6 col-12">
                    <input type="text" class="form-control" name="name" placeholder="Title" />
                </div>

                <div class="col-lg-6 col-12">
                    <input type="text" class="form-control" name="genre" placeholder="Genre" />
                </div>

                <div class="col-12" style={{ size: '200px' }}>
                    <input type="text" class="form-control" style={{ size: '200px' }} name="imageUrl" placeholder="Image Url" />
                </div>

                <div class="col-lg-12 col-12">
                    <textarea class="form-control" rows="6" name="message" placeholder="Message"></textarea>
                </div>

                <div class="col-lg-5 mx-auto col-7">
                    <button type="submit" class="form-control" id="submit-button" name="submit">Create Post</button>
                </div>
            </div>

        </form>
    );
};

export default CreateForm;