import { useEffect, useState } from "react";
import { getAll } from "../../service/acticles-service";
import Article from "./Article";

const Articles = ({
    navigationHandler
}) => {
    const [articles, setArticles] = useState([]);
    useEffect(() => getAll()
        .then(data => {
            console.log(data);
            setArticles(Object.values(data))
        }), [])


    return (
        <div className="row tm-row">
            {articles.map(x => <Article key={x._id} navigationHandler={navigationHandler} article={x} />)}
        </div>
    )
};

export default Articles;