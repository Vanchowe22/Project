import './Articles.css'
import { getAll, search } from "../../service/acticles-service";
import Article from "./Article";
import Search from "../Search";
import useFetchAll from "../../hooks/useFetchAll";

const Articles = () => {
    const [articles, setArticles] = useFetchAll(getAll);

    return (
        <>
            <Search search={search} onSearch={setArticles} />
            <div className="row tm-row">
                {articles.map(x => <Article key={x._id} article={x} />)}
            </div>
        </>
    )
};

export default Articles;