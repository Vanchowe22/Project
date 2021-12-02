import { Link } from 'react-router-dom'

const Main = ({
    article
}) => {
    return (
        <div className="mb-4">
            <Link to={`/edit/${article._id}`} ><button style={{ 'position': 'absolute', 'right': '360px', 'top': '18px' }} className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></button></Link>
            <Link to={`/delete/${article._id}`} ><button style={{ 'position': 'absolute', 'right': '320px', 'top': '18px' }} className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button></Link>
            <h2 className="pt-2 tm-color-primary tm-post-title">{article.title}</h2>
            <p className="tm-mb-40">{article.date} posted by {article.name} </p>
            <p>
                {article.description}
            </p>
            <span className="d-block text-right tm-color-primary">{article.type}</span>

        </div>)
};

export default Main;