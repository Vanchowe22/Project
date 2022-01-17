import { useCallback, useState } from "react";
const initState = {};

const useLocalStorage = (name) => {
    const [state, setState] = useState(() => {
        let data = localStorage.getItem(name);

        return data ? JSON.parse(data) : initState;
    });

    const setItem = useCallback((userInfo) => {
        localStorage.setItem(name, JSON.stringify(userInfo));
        return setState(userInfo);
    }, [name])
    return [state, setItem];
}

export default useLocalStorage;