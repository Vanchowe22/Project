import Main from "./Main";
import CommentSection from "./CommentSection";

import { useEffect, useState } from "react";
import { getOne } from "../../service/acticles-service";
const Details = ({
    id
}) => {

    const [article, setArticle] = useState({});
    useEffect(() => {
        getOne(id)
            .then((data) => {
                setArticle({ ...data, ...data.owner });
            })
    }, [])

    return (
        <>
            <div className="row tm-row">
                <div className="col-12">
                    <hr className="tm-hr-primary tm-mb-55" />
                    <video width="954" height="535" controls className="tm-mb-40">
                        <source src="video/wheat-field.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="row tm-row">
                <div className="col-lg-8 tm-post-col">
                    <div className="tm-post-full">
                        <Main article={article} />
                        <CommentSection />
                    </div>
                </div>
                <aside className="col-lg-4 tm-aside-col">
                    <div className="tm-post-sidebar">
                        <hr className="mb-3 tm-hr-primary" />
                        <h2 className="mb-4 tm-post-title tm-color-primary">Categories</h2>
                        <ul className="tm-mb-75 pl-5 tm-category-list">
                            <li><a href="#" className="tm-color-primary">Visual Designs</a></li>
                            <li><a href="#" className="tm-color-primary">Travel Events</a></li>
                            <li><a href="#" className="tm-color-primary">Web Development</a></li>
                            <li><a href="#" className="tm-color-primary">Video and Audio</a></li>
                            <li><a href="#" className="tm-color-primary">Etiam auctor ac arcu</a></li>
                            <li><a href="#" className="tm-color-primary">Sed im justo diam</a></li>
                        </ul>
                        <hr className="mb-3 tm-hr-primary" />
                        <h2 className="tm-mb-40 tm-post-title tm-color-primary">Related Posts</h2>
                        <a href="#" className="d-block tm-mb-40">
                            <figure>
                                <img src="img/img-02.jpg" alt="Image" className="mb-3 img-fluid" />
                                <figcaption className="tm-color-primary">Duis mollis diam nec ex viverra scelerisque a sit</figcaption>
                            </figure>
                        </a>
                        <a href="#" className="d-block tm-mb-40">
                            <figure>
                                <img src="img/img-05.jpg" alt="Image" className="mb-3 img-fluid" />
                                <figcaption className="tm-color-primary">Integer quis lectus eget justo ullamcorper ullamcorper</figcaption>
                            </figure>
                        </a>
                        <a href="#" className="d-block tm-mb-40">
                            <figure>
                                <img src="img/img-06.jpg" alt="Image" className="mb-3 img-fluid" />
                                <figcaption className="tm-color-primary">Nam lobortis nunc sed faucibus commodo</figcaption>
                            </figure>
                        </a>
                    </div>
                </aside>
            </div>
        </>
    );
};

export default Details;