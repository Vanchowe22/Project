import CreateForm from "./CreateForm";

const Create = () => {
    return (
        <section className="contact section-padding" >
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 mx-auto col-md-7 col-12 py-5 mt-5 text-center" data-aos="fade-up">

                        <h1 className="mb-4">Hey there, Let's <strong>create</strong> some <strong>meaningful</strong> posts</h1>

                    </div>

                    <div className="col-lg-8 mx-auto col-md-10 col-12">
                        <CreateForm />
                    </div>

                </div>
            </div>
        </section >
    );
};

export default Create;