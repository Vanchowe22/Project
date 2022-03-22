import { useEffect, useState } from "react";
import { getProfile } from '../service/auth-service'

const useFetchProfile = (id) => {
    const [state, setState] = useState({});
    useEffect(() => {
        getProfile(id)
            .then(data => {
                setState(data);
            });
    }, [id]);

    return state
};

export default useFetchProfile;