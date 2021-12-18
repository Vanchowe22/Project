import { useEffect, useState } from 'react';

const useFetchAll= (service, allBlogs) => {
    const [state, setState] = useState([]);
    useEffect(() => {
        service()
            .then(data => {
                if(!allBlogs){
                    data = data.slice(0, 4)
                    setState(data);
                }else{
                    setState(data)
                }
            });
    }, [service, allBlogs])

    const setArticles = (data) => {
        console.log(data);
        setState(data)
    }

    return [state, setArticles];
}

export default useFetchAll;