import axios from "axios"

export const api = axios.create({
    baseURL: 'https://dummyjson.com/'
})

export const getUsers = async () => {
    const response = await api.get('/users')
    return response.data.users
}

export const getUser = async (id) => {
    const response = await api.get('/users')
    return response.data.users.filter(user => user.id === parseInt(id))[0]
}