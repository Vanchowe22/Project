import { createContext, useCallback, useState } from 'react';

const NotificationContext = createContext();

export const types = {
    error: 'danger',
    warn: 'warning',
    info: 'info',
    success: 'success',
};
const initState = {
    show: false,
    message: '',
    type: types.error
};

export const NotificationProvider = ({
    children,
}) => {
    const [notification, setNotification] = useState(initState);

    const updateNotification = useCallback((message, type = types.error) => {
        setNotification({ show: true, message, type })

        setTimeout(() => {
            setNotification(initState)
        }, 4000)
    }, [setNotification]);

    const hideNotification = useCallback(() => setNotification(initState), [])

    return (
        <NotificationContext.Provider value={{ notification, updateNotification, hideNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationContext;