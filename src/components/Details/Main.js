import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';
import { deleteOne, like, unlike } from '../../service/acticles-service';

const Main = ({
    article,
    updateArticle,
}) => {
    let liked = true;
    console.log(updateArticle);
    let history = useHistory();
    let { auth } = useAuth();
    
    if (article.likes) {
        liked = article.likes.some(x => x == auth._id );
    }

    const onDelete = () => {
        deleteOne(article._id)
            .then(data => {
                history.push('/')
            });
    };

    const onLike = (e) => {
        like(auth._id, article._id)
            .then(data => {
                updateArticle(data);
            });
    };

    const onUnlike = (e) => {
        unlike(auth._id, article._id)
            .then(data => {
                updateArticle(data);
            });
    };

    return (
        <div className="mb-4">
            <Link to={`/edit/${article._id}`} ><button style={{ 'position': 'absolute', 'right': '360px', 'top': '18px' }} className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></button></Link>
            <button onClick={onDelete} style={{ 'position': 'absolute', 'right': '320px', 'top': '18px' }} className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
            {liked
                ? <button onClick={onUnlike} type="button" style={{ 'position': 'absolute', 'right': '255px', 'top': '15px' }} class="btn btn-dark">Unlike</button>
                : <button onClick={onLike} type="button" style={{ 'position': 'absolute', 'right': '255px', 'top': '15px' }} class="btn btn-primary">Like</button>
            }
            <span style={{ 'position': 'absolute', 'right': '230px', 'top': '21px' }} >{article.likes ? article.likes.length : ''}</span>
            <h2 className="pt-2 tm-color-primary tm-post-title">{article.title}</h2>
            <p className="tm-mb-40">{article.date} posted by {article.onwer ? article.owner.name : ''} </p>
            <p>
                {article.description}
            </p>
            <span className="d-block text-right tm-color-primary">{article.type}</span>

        </div>)
};

export default Main;