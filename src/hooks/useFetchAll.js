import { useEffect, useState } from 'react';

const useFetchAll= (service) => {
    const [state, setState] = useState([]);
    useEffect(() => {
        service()
            .then(data => {
                setState(Object.values(data))
            });
    }, [service])

    return state;
}

export default useFetchAll;