import { post } from "../helpers/requester";

const baseUrl = 'http://localhost:5000/auth'

export const register = (data) => post(`${baseUrl}/register`, data);

export const login = (data) => post(`${baseUrl}/login`, data);

