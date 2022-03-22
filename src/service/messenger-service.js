import { get, post, put } from "../helpers/requester";

const baseUrl = 'http://localhost:5000/messenger'

export const getConv = (id) => get(`${baseUrl}/conversation/${id}`);

export const getMess = (id) => get(`${baseUrl}/message/${id}`);

export const sendMess = (data) => post(`${baseUrl}/message`, data);

export const createConv = (sender, receiver) => post(`${baseUrl}/conversation`, { sender, receiver });

export const seeConv = (id) => put(`${baseUrl}/conversation`, { id });

export const checkIfCreated = (userId, friendId) => {
    return getConv(userId)
        .then(data => {
            if (!data.some(x => (x.users[0]._id == friendId && x.users[1]._id == userId) || (x.users[1]._id == friendId && x.users[0]._id == userId))) {
                return true;
            } else {
                return false;
            }
        });
};