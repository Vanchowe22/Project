import { useArticle } from "../../hooks/useArticle";
import useFetchRelated from "../../hooks/useFetchRelated";
import RelatedPost from "./RelatedPost";

const RelatedPosts = () => {
    const { article } = useArticle();
    const relatedPosts = useFetchRelated(article.type, article._id);

    return (
        <aside className="col-lg-4 tm-aside-col">
            <div className="tm-post-sidebar">
                <h2 className="tm-mb-40 tm-post-title tm-color-primary">Related Posts</h2>
                {relatedPosts.map(x => < RelatedPost key={x._id} post={x} />)}
            </div>
        </aside>
    );

};

export default RelatedPosts;