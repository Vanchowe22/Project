import { useArticle } from '../../hooks/useArticle';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentSection = ({
    id
}) => {
    const { article, updateArticle } = useArticle();
    return (    
        <div>
            <h2 className="tm-color-primary tm-post-title">Comments</h2>
            <hr className="tm-hr-primary tm-mb-45" />
            {
                article.comments?.length > 0
                    ? article.comments?.map(comment => {
                        return <Comment key={comment.keyId} comment={comment} />
                    })
                    : ''
            }
            <CommentForm id={id} setComments={updateArticle} />
        </div>
    );
};

export default CommentSection;