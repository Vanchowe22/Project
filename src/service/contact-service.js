import { post } from "../helpers/requester"

const baseUrl = 'http://localhost:5000/contact/email'

export const sendEmail = (data) => post(`${baseUrl}`, data)