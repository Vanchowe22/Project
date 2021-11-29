import { useEffect, useState } from 'react';

const useFetchOne = (service, id, isCom) => {
    const [state, setState] = useState([])
    useEffect(() => {
        service(id)
            .then(data => {
                isCom ? setState(data.comments) : setState({ ...data, ...data.owner });
            })
    }, [service, id])

    if (isCom) {
        return [state, setState];
    }
    return state;
}

export default useFetchOne;