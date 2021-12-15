import { Link, useHistory } from 'react-router-dom'
import { types } from '../../contexts/NotificationContext';
import { useAuth } from '../../hooks/useAuth';
import { useNotification } from '../../hooks/useNotification';
import { deleteOne, like, unlike } from '../../service/acticles-service';

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

    return (
        <div className="mb-4">
            {
                auth._id
                    ? article.owner && (article.owner._id == auth._id)
                        ?
                        <>
                            <Link to={`/edit/${article._id}`} ><button style={{ 'position': 'absolute', 'right': '360px', 'top': '18px' }} className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></button></Link>
                            <button onClick={onDelete} style={{ 'position': 'absolute', 'right': '320px', 'top': '18px' }} className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                        </>
                        :
                        liked
                            ? <button onClick={onUnlike} type="button" style={{ 'position': 'absolute', 'right': '255px', 'top': '15px' }} className="btn btn-dark">Unlike</button>
                            : <button onClick={onLike} type="button" style={{ 'position': 'absolute', 'right': '255px', 'top': '15px' }} className="btn btn-primary">Like</button>
                    : ''
            }

            <span style={{ 'position': 'absolute', 'right': '210px', 'top': '21px' }} >{article.likes ? article.likes.length : ''} likes</span>
            <h2 className="pt-2 tm-color-primary tm-post-title">{article.title}</h2>
            <p className="tm-mb-40">{article.date} posted by {article.owner ? article.owner.name : ''} </p>
            <p>
                {article.description}
            </p>
            <span className="d-block text-right tm-color-primary">{article.type}</span>

        </div >)
};

export default Main;