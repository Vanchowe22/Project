import './Articles.css'
import { getAll } from "../../service/acticles-service";
import Article from "./Article";
import Search from "../Search";
import useFetchAll from "../../hooks/useFetchAll";

const Articles = ({
    allBlogs
}) => {
    const [articles, setArticles] = useFetchAll(getAll, allBlogs);

    return (
        <>
            {allBlogs
                ? <Search onSearch={setArticles} />
                : <h1 className="center-blue-mid">Welcome to Xtra Blog</h1>
            }
            <div className="row tm-row">
                {articles.map(x => <Article key={x._id} article={x} />)}
            </div>
        </>
    )
};

export default Articles;