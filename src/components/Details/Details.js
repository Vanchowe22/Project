import Main from "./Main";
import CommentSection from "./CommentSection";
import { useArticle } from '../../hooks/useArticle';
import useDetails from "../../hooks/useDetails";

const Details = ({
    match
}) => {
    const [article, updateArticle] = useDetails(match.params.id);

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
                        <Main article={article} updateArticle={updateArticle} />
                        <CommentSection id={match.params.id} />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Details;