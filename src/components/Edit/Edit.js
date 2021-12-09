import SecureRoutes from "../../hoc/SecureRoutes";
import EditForm from "./EditForm";

const Edit = ({
    match
}) => {
    return (
        <section className="contact section-padding" >
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 mx-auto col-md-7 col-12 py-5 mt-5 text-center" data-aos="fade-up">
                        <h1>Edit Article</h1>
                    </div>

                    <div className="col-lg-8 mx-auto col-md-10 col-12">
                        <EditForm match={match} />
                    </div>

                </div>
            </div>
        </section >
    );
};

export default SecureRoutes(Edit);