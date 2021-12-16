import Main from "./Main";
import CommentSection from "./CommentSection";
import useDetails from "../../hooks/useDetails";
import { useAuth } from "../../hooks/useAuth";

const Details = ({
    match
}) => {
    const [article, updateArticle] = useDetails(match.params.id);
    const { auth } = useAuth();
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
                        {
                            auth._id
                                ? <CommentSection article={article} updateArticle={updateArticle} />
                                : ''
                        }
                    </div>
                </div>

            </div>
        </>
    );
};

export default Details;