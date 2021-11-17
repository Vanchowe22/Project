const ContactForm = () => {
    return (
        <div class="row justify-content-center mt-5">
            <div class="col-lg-8">
                <form action="#" class="form-contact">
                    <div class="row">
                        <div class="col-sm-6 py-2">
                            <input type="text" class="form-control" id="name" placeholder="Enter name.." />
                        </div>
                        <div class="col-sm-6 py-2">
                            <input type="text" class="form-control" id="email" placeholder="Email address.." />
                        </div>
                        <div class="col-12 py-2">
                            <input type="text" class="form-control" id="subject" placeholder="Subject.." />
                        </div>
                        <div class="col-12 py-2">
                            <textarea id="message" rows="8" class="form-control" placeholder="Enter message.."></textarea>
                        </div>
                        <div class="col-12 mt-3">
                            <button type="submit" class="btn btn-primary px-5">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;