import { useEffect } from "react"
import { getOne } from "../service/acticles-service";
import { useArticle } from "./useArticle";

const useDetails = (id) => {
    const { article, updateArticle } = useArticle();
    useEffect(() => {
        getOne(id)
            .then(data => {
                updateArticle(data);
            })
    }, [id, updateArticle]);

    return [article, updateArticle];
}

export default useDetails;