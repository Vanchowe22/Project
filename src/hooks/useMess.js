import { useEffect, useState } from "react";
import { getMess } from "../service/messenger-service";

const useMess = (conv) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        getMess(conv?._id)
            .then(data => {
                setState(data);
            });
    }, [conv])

    const addMess = (mess) => {
        setState(state => {
            return [...state, mess];
        });
    };

    return [state, addMess];
};

export default useMess;