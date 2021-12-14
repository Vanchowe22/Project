import { useEffect, useState } from "react";
import { getProfile } from '../service/auth-service'

const useFetchProfile = (token) => {
    const [state, setState] = useState([]);
    console.log(token);
    useEffect(() => {
        getProfile(token)
            .then(data => {
                setState(data);
            });
    }, [token]);

    return state
};

export default useFetchProfile;