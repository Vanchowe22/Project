import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <>
            <div className="page-section">
                <div className="container">
                    <div className="text-center">
                        <h2 className="title-section mb-3">Stay in touch</h2>
                        <p>Just say hello or drop us a line. You can manualy send us email on <a href="mailto:xBlog_firm@gmail.com">i.b.kodjabashev@gmail.com</a></p>
                    </div>
                    <div className="row justify-content-center mt-5" style={{ marginBottom: '50px' }}>
                        <div className="col-lg-8"></div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact;