import { useState } from "react";

const useLocalStorage = (name, initState) => {
    const [state, setState] = useState(() => {
        let data = localStorage.getItem(name);

        return data ? JSON.parse(data) : initState;
    });

    const setItem = (userInfo) => {
        localStorage.setItem(name, JSON.stringify(userInfo));
        return setState(userInfo);
    }

    return [state, setItem];
}

export default useLocalStorage;