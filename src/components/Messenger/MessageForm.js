import { sendMess } from '../../service/messenger-service';

const MessageForm = ({
    currentChat,
    auth,
    socket,
}) => {

    const submitTextHandler = (e) => {
        e.preventDefault();
        let form = e.target;
        let text = Object.fromEntries(new FormData(form));

        let message = {
            sender: auth._id,
            conversationId: currentChat._id,
            ...text,
            readMessage: false,
        }

        socket.emit('send-message', message, currentChat._id);

        sendMess(message)
            .then(() => {
                form.reset();
            })
    };

    return (
        <div className="chatBoxBottom">
            <form onSubmit={submitTextHandler}>
                <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    name='text'
                ></textarea>
                <button className="chatSubmitButton">
                    Send
                </button>
            </form>
        </div>
    );
};

export default MessageForm;