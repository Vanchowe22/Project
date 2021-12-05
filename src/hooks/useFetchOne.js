import { useEffect, useState } from 'react';

const useFetchOne = (service, id, isCom) => {
    const [state, setState] = useState([])
    useEffect(() => {
        service(id)
            .then(data => {
                isCom ? setState(data.comments) : setState(data);
            })
    }, [service, id, isCom])

    return [state, setState];
}

export default useFetchOne;