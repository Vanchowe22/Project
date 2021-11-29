import { sendEmail } from '../../service/contact-service'

const ContactForm = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        let form = e.currentTarget;
        let formData = new FormData(form);

        let message = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        sendEmail(message)
            .then(() => {
                form.reset();
                alert('Email was sent');
            })
            .catch(err => {
                alert(err);
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