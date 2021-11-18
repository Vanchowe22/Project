const ContactForm = () => {
    return (
        <div className="page-section">
            <div className="container">
                <div className="text-center">
                    <h2 className="title-section mb-3">Stay in touch</h2>
                    <p>Just say hello or drop us a line. You can manualy send us email on <a href="mailto:xBlog_firm@gmail.com">xBlog_firm@gmail.com</a></p>
                </div>
                <div className="row justify-content-center mt-5" style={{marginBottom:'50px'}}>
                    <div className="col-lg-8">
                        <form style={{padding:"40px"}} className="form-contact">
                            <div className="row">
                                <div className="col-sm-6 py-2">
                                    <input type="text" className="form-control" id="name" placeholder="Enter name.." />
                                </div>
                                <div className="col-sm-6 py-2">
                                    <input type="text" className="form-control" id="email" placeholder="Email address.." />
                                </div>
                                <div className="col-12 py-2">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject.." />
                                </div>
                                <div className="col-12 py-2">
                                    <textarea id="message" rows="8" className="form-control" placeholder="Enter message.."></textarea>
                                </div>
                                <div className="col-12 mt-3">
                                    <button type="submit" className="btn btn-primary px-5">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;