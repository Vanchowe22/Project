import Main from "./Main";
import CommentSection from "./CommentSection";

import { useEffect, useState } from "react";
import { getOne } from "../../service/acticles-service";
import useFetchOne from "../../hooks/useFetchOne";
const Details = ({
    match
}) => {
    const article = useFetchOne(getOne, match.params.id, false);

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
                        <CommentSection id={match.params.id} />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Details;