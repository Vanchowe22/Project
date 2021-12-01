import { useState } from "react";

const useLocalStorage = (name, initState) => {
    const [state, setState] = useState(() => {
        let userInfo = localStorage.getItem(name);

        return userInfo ? JSON.parse(userInfo) : initState;
    });

    const setItem = (userInfo) => {
        localStorage.setItem(name, JSON.stringify(userInfo));
        return setState(userInfo);
    }

    return [state, setItem];
}

export default useLocalStorage;