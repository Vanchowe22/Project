import { Toast } from 'react-bootstrap'
import { useNotification } from '../../hooks/useNotification';
import './Notification.css'

const Notification = () => {
    const { notification, hideNotification } = useNotification();

    if (!notification.show) {
        return null;
    }

    return (
        <Toast className="d-inline-block m-1 .not-show-prop" bg={notification.type} onClose={hideNotification}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            </Toast.Header>
            <Toast.Body>
                {notification.message}
            </Toast.Body>
        </Toast>
    );
};

export default Notification;