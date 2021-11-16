const Main = ({
    article
}) => {
    return (
    <div className="mb-4">
        <h2 className="pt-2 tm-color-primary tm-post-title">{article.title}</h2>
        <p className="tm-mb-40">{article.date} posted by {article.name} </p>
        <p>
            {article.description}
        </p>
        <span className="d-block text-right tm-color-primary">{article.type}</span>
    </div>)
};

export default Main;