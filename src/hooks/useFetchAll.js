import { useEffect, useState } from 'react';

const useFetchAll= (service, allBlogs) => {
    const [state, setState] = useState([]);
    useEffect(() => {
        service()
            .then(data => {
                    setState(data)
            });
    }, [service, allBlogs])

    const setArticles = (data) => {
        setState(data)
    }

    return [state, setArticles];
}

export default useFetchAll;