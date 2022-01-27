import './Messenger.css';

const Conversation = ({
    userId,
    conversation
}) => {
    let friend = conversation.users.filter(x => x._id !== userId)[0];
    return (
        <div className="conversation">
            <img
                className="conversationImg"
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.S171c9HYsokHyCPs9brbPwHaGP%26pid%3DApif=1'
                alt="image of the user"
            />
            <span className="conversationName">{friend.name}</span>
        </div>
    );
};

export default Conversation;