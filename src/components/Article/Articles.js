import { getAll } from "../../service/acticles-service";
import Article from "./Article";
import Search from "../Search";
import PageNavigator from "../PageNavigator";
import useFetchAll from "../../hooks/useFetchAll";


const Articles = ({
}) => {
    const articles = useFetchAll(getAll)


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