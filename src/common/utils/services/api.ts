import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/matheusteixeira7/fakeapi',
    headers: {
        'Content-Type': 'application/json',
    },
})
