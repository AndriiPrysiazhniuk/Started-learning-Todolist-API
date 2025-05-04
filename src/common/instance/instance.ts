import axios from "axios";

const token = 'XXX'
const apiKey = 'XXX'
export const instance = axios.create({
    headers: {
        Authorization: `Bearer ${token}`,
        'API-KEY': apiKey,
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.1'
})