const ContactForm = () => {
    return (
        <div class="col-lg-7 tm-contact-left">
            <form class="mb-5 ml-auto mr-0 tm-contact-form">
                <div class="form-group row mb-4">
                    <label htmlFor="name" class="col-sm-3 col-form-label text-right tm-color-primary">Name</label>
                    <div class="col-sm-9">
                        <input class="form-control mr-0 ml-auto" name="name" id="name" type="text" required />
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label htmlFor="email" class="col-sm-3 col-form-label text-right tm-color-primary">Email</label>
                    <div class="col-sm-9">
                        <input class="form-control mr-0 ml-auto" name="email" id="email" type="email" required />
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label htmlFor="subject" class="col-sm-3 col-form-label text-right tm-color-primary">Subject</label>
                    <div class="col-sm-9">
                        <input class="form-control mr-0 ml-auto" name="subject" id="subject" type="text" required />
                    </div>
                </div>
                <div class="form-group row mb-5">
                    <label htmlFor="message" class="col-sm-3 col-form-label text-right tm-color-primary">Message</label>
                    <div class="col-sm-9">
                        <textarea class="form-control mr-0 ml-auto" name="message" id="message" rows="8" required></textarea>
                    </div>
                </div>
                <div class="form-group row text-right">
                    <div class="col-12">
                        <button class="tm-btn tm-btn-primary tm-btn-small">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;