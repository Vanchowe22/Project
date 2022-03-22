import { post, get, del } from "../helpers/requester";

const baseUrl = 'http://localhost:5000'

export const register = (data) => post(`${baseUrl}/auth/register`, data);

export const login = (data) => post(`${baseUrl}/auth/login`, data);

export const getProfile = (id) => get(`${baseUrl}/user/${id}`);

export const searchProfile = (query) => post(`${baseUrl}/user/search`, { query });

export const addFriend = (id, token) => post(`${baseUrl}/user/friend`, { id }, token)

export const removeFriend = (id, token) => del(`${baseUrl}/user/friend`, { id }, token);