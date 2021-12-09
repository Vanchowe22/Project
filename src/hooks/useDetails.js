import { useEffect } from "react"
import { getOne } from "../service/acticles-service";

const useDetails = (setArticle, id) => {
    useEffect(() => {
        getOne(id)
            .then(data => {
                setArticle(data);
            })
    });
}

export default useDetails;