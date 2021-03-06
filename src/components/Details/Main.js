import { Link, useHistory } from 'react-router-dom'
import { types } from '../../contexts/NotificationContext';
import { useAuth } from '../../hooks/useAuth';
import { useNotification } from '../../hooks/useNotification';
import { deleteOne, like, unlike } from '../../service/acticles-service';
import './Details.css'

const Main = ({
    article,
    updateArticle,
}) => {
    let liked = true;
    let history = useHistory();
    let { auth } = useAuth();
    let { updateNotification } = useNotification();

    if (article.likes) {
        liked = article.likes.some(x => x == auth._id);
    }

    const onDelete = (e) => {
        deleteOne(article._id, auth.token)
            .then(data => {
                history.push('/');
                updateNotification('Successfully deleted!', types.info);
            })
            .catch(err => {
                updateNotification(err, types.error);
            });
    };

    const onLike = (e) => {
        like(auth._id, article._id)
            .then(data => {
                updateArticle(data);
            })
            .catch(err => {
                updateNotification(err, types.error);
            });
    };

    const onUnlike = (e) => {
        unlike(auth._id, article._id)
            .then(data => {
                updateArticle(data);
            })
            .catch(err => {
                updateNotification(err, types.error);
            });
    };
    console.log(article);

    return (
        <div className="mb-4">
            {
                auth._id
                    ? article.owner && (article.owner._id == auth._id)
                        ?
                        <>
                            <Link to={`/edit/${article._id}`} ><button className="btn btn-success btn-sm rounded-0 btn-edit" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></button></Link>
                            <button onClick={onDelete} className="btn btn-danger btn-sm rounded-0 btn-delete" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                        </>
                        :
                        liked
                            ? <button onClick={onUnlike} type="button" className="btn btn-dark btn-unlike">Unlike</button>
                            : <button onClick={onLike} type="button" className="btn btn-primary btn-like">Like</button>
                    : ''
            }

            <span className='span-likes'>{article.likes ? article.likes.length : ''} likes</span>
            <h2 className="pt-2 tm-color-primary tm-post-title">{article.title}</h2>
            <p className="tm-mb-40">{article.date} posted by {article.owner ? article.owner.name : ''} </p>
            <p>
                {article.description}
            </p>
            <span className="d-block text-right tm-color-primary">{article.type}</span>

        </div >)
};

export default Main;