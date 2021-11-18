const createForm = () => {
    return (
        <form action="#" method="post" class="contact-form" data-aos="fade-up" data-aos-delay="300" role="form">
            <div class="row">
                <div class="col-lg-6 col-12">
                    <input type="text" class="form-control" name="name" placeholder="Title" />
                </div>

                <div class="col-lg-6 col-12">
                    <input type="email" class="form-control" name="email" placeholder="Genre" />
                </div>

                <div class="col-12" style={{ size: '200px' }}>
                    <input type="email" class="form-control" style={{ size: '200px' }} name="imageUrl" placeholder="Genre" />
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

export default createForm;