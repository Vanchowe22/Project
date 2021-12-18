import { useEffect, useState } from "react";
import { getRelated } from '../service/acticles-service';

const useFetchRelated = (genre, id) => {
    const [state, setState] = useState([]);
    useEffect(() => {
        console.log(id);
        getRelated(genre, id)
            .then(data => {
                setState(data);
            })
    }, [genre, id])

    return state;
};

export default useFetchRelated;