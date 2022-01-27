import { get, post } from "../helpers/requester";

const baseUrl = 'http://localhost:5000/messenger'

export const getConv = (id) => get(`${baseUrl}/conversation/${id}`);

export const getMess = (id) => get(`${baseUrl}/message/${id}`);

export const sendMess = (data) => post(`${baseUrl}/message`, data);