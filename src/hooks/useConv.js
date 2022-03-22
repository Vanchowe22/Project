import { useEffect, useState } from "react";
import { getConv } from "../service/messenger-service";

const useConv = (id) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        getConv(id)
            .then(data => {
                setState(data);
            })
    }, [id]);

    const addConv = (conv) => {
        setState(conv);
    };

    return [state, addConv];
};

export default useConv;