import { sendEmail } from '../../service/contact-service'
import { useNotification } from '../../hooks/useNotification';
import { types } from '../../contexts/NotificationContext';

const ContactForm = () => {
    const { updateNotification } = useNotification();

    const submitHandler = (e) => {
        e.preventDefault();
        let form = e.currentTarget;
        let formData = Object.fromEntries(new FormData(form));

        sendEmail(formData)
            .then(() => {
                form.reset();
                updateNotification('Successfully sent', types.info);
            })
            .catch(err => {
                updateNotification(err, types.error);
            })
    };

    return (
        <form onSubmit={submitHandler} style={{ padding: "40px" }} className="form-contact">
            <div className="row">
                <div className="col-sm-6 py-2">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Enter name.." />
                </div>
                <div className="col-sm-6 py-2">
                    <input type="text" name="email" className="form-control" id="email" placeholder="Email address.." />
                </div>
                <div className="col-12 py-2">
                    <input type="text" name="subject" className="form-control" id="subject" placeholder="Subject.." />
                </div>
                <div className="col-12 py-2">
                    <textarea id="message" name="message" rows="8" className="form-control" placeholder="Enter message.."></textarea>
                </div>
                <div className="col-12 mt-3">
                    <button type="submit" className="btn btn-primary px-5">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;