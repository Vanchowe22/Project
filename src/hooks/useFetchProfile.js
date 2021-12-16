import { useEffect, useState } from "react";
import { getProfile } from '../service/auth-service'

const useFetchProfile = (token) => {
    const [state, setState] = useState([]);
    useEffect(() => {
        getProfile(token)
            .then(data => {
                setState(data);
            });
    }, [token]);

    return state
};

export default useFetchProfile;