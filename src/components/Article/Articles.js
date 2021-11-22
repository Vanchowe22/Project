import { useEffect, useState } from "react";
import { getAll } from "../../service/acticles-service";
import Article from "./Article";
import Search from "../Search";
import PageNavigator from "../PageNavigator";


const Articles = ({
}) => {
    const [articles, setArticles] = useState([]);
    useEffect(() => getAll()
        .then(data => {
            setArticles(Object.values(data))
        }), [])


    return (
        <>
            <Search />
            <div className="row tm-row">
                {articles.map(x => <Article key={x._id} article={x} />)}
            </div>
            <PageNavigator />
        </>
    )
};

export default Articles;