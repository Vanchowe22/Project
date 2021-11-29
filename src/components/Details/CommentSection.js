import useFetchOne from '../../hooks/useFetchOne';

import { getOne } from '../../service/acticles-service'
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentSection = ({
    id
}) => {
    let [comments, setComments] = useFetchOne(getOne, id, true);

    return (
        <div>
            <h2 className="tm-color-primary tm-post-title">Comments</h2>
            <hr className="tm-hr-primary tm-mb-45" />
            {
                comments.length > 0
                    ?comments.map(comment =>{
                        return <Comment key={comment.keyId} comment={comment} />
                    })
                    : ''
            }
            <CommentForm id={id} setComments={setComments} />
        </div>
    );
};

export default CommentSection;