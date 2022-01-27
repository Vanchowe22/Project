import './Messenger.css';

import Conversation from "./Conversation";
import Message from "./Message";
import { useAuth } from '../../hooks/useAuth';
import useConv from '../../hooks/useConv';
import { useEffect, useRef, useState } from 'react';
import useMess from '../../hooks/useMess';
import { sendMess } from '../../service/messenger-service';
import { io } from 'socket.io-client';

const Messenger = () => {
    const socket = io('http://localhost:4000')
    const { auth } = useAuth();
    const [conv, addConv] = useConv(auth._id);
    const [currentChat, setCurrentChat] = useState(null);
    const [mess, addMess] = useMess(currentChat);
    const [arrMess, setArrMess] = useState(null)
    const scrollRef = useRef();

    socket.on('receive-message', (message) => {
        setArrMess({
            ...message,
            createdAt: Date.now(),
        });
    });

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [mess]);

    useEffect(() => {
        if (currentChat != null) {
            socket.emit('join', currentChat);
        }
    }, [currentChat])

    useEffect(() => {
        addMess(arrMess);
    }, [arrMess]);

    const submitHandler = (e) => {
        e.preventDefault();
        let form = e.target;
        let text = Object.fromEntries(new FormData(form));

        let message = {
            sender: auth._id,
            conversationId: currentChat._id,
            ...text
        }

        socket.emit('send-message', message, currentChat._id);

        sendMess(message)
            .then(() => {
                form.reset();
            })
    };

    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    {
                        conv.map(x =>
                            <div onClick={() => setCurrentChat(x)}>
                                <Conversation key={x._id} conversation={x} userId={auth._id} />
                            </div>)
                    }
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">

                        {currentChat
                            ? mess.map(x => (
                                <div ref={scrollRef}>
                                    <Message key={x._id} message={x} own={auth._id == x.sender} />
                                </div>
                            ))
                            : ''
                        }
                    </div>
                    <div className="chatBoxBottom">
                        <form onSubmit={submitHandler}>
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
                    {/* <span className="noConversationText">
                        Open a conversation to start a chat.
                    </span> */}
                </div>
            </div>
            {/* <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline
                        onlineUsers={onlineUsers}
                        currentId={user._id}
                        setCurrentChat={setCurrentChat}
                    />
                </div>
            </div> */}
        </div>
    );
};

export default Messenger;
