import { post, get } from "../helpers/requester";

const baseUrl = 'http://localhost:5000'

export const register = (data) => post(`${baseUrl}/auth/register`, data);

export const login = (data) => post(`${baseUrl}/auth/login`, data);

export const getProfile = (token) => get(`${baseUrl}/user`, null, token)