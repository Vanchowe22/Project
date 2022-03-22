import { io } from 'socket.io-client';
import './Messenger.css';

import Conversation from "./Conversation";
import Message from "./Message";
import { useAuth } from '../../hooks/useAuth';
import useConv from '../../hooks/useConv';
import { useEffect, useRef, useState } from 'react';
import useMess from '../../hooks/useMess';
import SearchConv from './SearchConv';
import MessageForm from './MessageForm';
import { seeConv } from '../../service/messenger-service';

const Messenger = () => {
    const socket = io('http://localhost:4000')
    const { auth } = useAuth();
    const [conv, addConv] = useConv(auth._id);
    const [currentChat, setCurrentChat] = useState(null);
    const [mess, addMess] = useMess(currentChat);
    const [arrMess, setArrMess] = useState(null);
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

    const selectChat = async (x) => {
        if (x.messages[x.messages.length - 1]?.sender !== auth._id || x.messages.length == 0) {
            let data = await seeConv(x._id);
            await setCurrentChat(data);
        } else {
            await setCurrentChat(x);
        }
    };

    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <SearchConv addConv={addConv} />
                    {
                        conv.map(x =>
                            <div onClick={() => selectChat(x)}>
                                <Conversation key={x._id} current={currentChat} conversation={x} userId={auth._id} />
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
                    {
                        currentChat
                            ? < MessageForm
                                socket={socket}
                                currentChat={currentChat}
                                auth={auth} />
                            : ''
                    }

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
