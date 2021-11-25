import { useState, useEffect } from 'react';
import uniqid from 'uniqid'

import { getOne } from '../../service/acticles-service'
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentSection = ({
    id
}) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        getOne(id)
            .then(data => {
                setComments(old => {
                    return data.comments;
                });
            });
    }, []);


    return (
        <div>
            <h2 className="tm-color-primary tm-post-title">Comments</h2>
            <hr className="tm-hr-primary tm-mb-45" />
            {
                comments.length > 0
                    ?comments.map(comment =>{
                        return <Comment key={uniqid()} comment={comment} />
                    })
                    : ''
            }
            <CommentForm id={id} />
        </div>
    );
};

export default CommentSection