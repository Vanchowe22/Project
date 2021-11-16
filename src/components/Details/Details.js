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
                    <img src={article.imageUrl} alt="pic of the blog" />
                </div>
            </div>
            <div className="row tm-row">
                <div className="col-lg-8 tm-post-col">
                    <div className="tm-post-full">
                        <Main article={article} />
                        <CommentSection />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Details;