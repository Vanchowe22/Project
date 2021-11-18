import CreateForm from "./CreateForm";

const Create = () => {
    return (
        <section class="contact section-padding" >
            <div class="container">
                <div class="row">

                    <div class="col-lg-6 mx-auto col-md-7 col-12 py-5 mt-5 text-center" data-aos="fade-up">

                        <h1 class="mb-4">Hey there, Let's <strong>create</strong> some <strong>meaningful</strong> posts</h1>

                    </div>

                    <div class="col-lg-8 mx-auto col-md-10 col-12">
                        <CreateForm />
                    </div>

                </div>
            </div>
        </section >
    );
};

export default Create;